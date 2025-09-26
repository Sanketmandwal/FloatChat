import React, { useState, useEffect, useRef, useMemo } from 'react';
import Header from './Header'; // Assuming Header is in the same directory
import { Search, MapPin, Thermometer, Droplets, Battery, ChevronsRight, Hash, Calendar, Layers, RotateCw } from 'lucide-react';

const MapArgo = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [selectedFloat, setSelectedFloat] = useState(null);
  const [filters, setFilters] = useState({
    status: 'all',
    dataType: 'all',
    region: 'all'
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  // *** FIXED: Use a ref for marker instances instead of state ***
  const floatMarkersRef = useRef([]);

  const argoFloats = [
    // Your ARGO float data remains here...
    { id: 'WMO2901234', lat: 10.5, lon: 72.3, status: 'active', lastProfile: '2024-09-25T06:30:00Z', temperature: 28.5, salinity: 35.2, depth: 1850, batteryLevel: 87, cycleNumber: 142, dataType: 'core', region: 'Indian Ocean', deploymentDate: '2021-03-15', profileCount: 142 },
    { id: 'WMO2901567', lat: 8.2, lon: 77.8, status: 'active', lastProfile: '2024-09-25T04:15:00Z', temperature: 29.1, salinity: 35.0, depth: 1920, batteryLevel: 92, cycleNumber: 98, dataType: 'bgc', region: 'Indian Ocean', deploymentDate: '2022-01-10', profileCount: 98 },
    { id: 'WMO2901890', lat: 15.6, lon: 68.9, status: 'active', lastProfile: '2024-09-25T02:45:00Z', temperature: 27.8, salinity: 35.3, depth: 1780, batteryLevel: 76, cycleNumber: 203, dataType: 'core', region: 'Arabian Sea', deploymentDate: '2020-08-22', profileCount: 203 },
    { id: 'WMO2901123', lat: 5.4, lon: 80.2, status: 'inactive', lastProfile: '2024-09-20T10:20:00Z', temperature: 30.2, salinity: 34.8, depth: 0, batteryLevel: 12, cycleNumber: 87, dataType: 'core', region: 'Indian Ocean', deploymentDate: '2022-06-05', profileCount: 87 },
    { id: 'WMO2901456', lat: 12.1, lon: 75.4, status: 'active', lastProfile: '2024-09-25T01:10:00Z', temperature: 28.9, salinity: 35.1, depth: 1650, batteryLevel: 81, cycleNumber: 156, dataType: 'bgc', region: 'Indian Ocean', deploymentDate: '2021-11-30', profileCount: 156 },
    { id: 'WMO2901789', lat: 20.3, lon: 65.7, status: 'active', lastProfile: '2024-09-25T03:30:00Z', temperature: 26.4, salinity: 35.8, depth: 2000, batteryLevel: 95, cycleNumber: 67, dataType: 'core', region: 'Arabian Sea', deploymentDate: '2023-02-14', profileCount: 67 },
    { id: 'WMO2902001', lat: 35.2, lon: -15.8, status: 'active', lastProfile: '2024-09-25T05:45:00Z', temperature: 22.1, salinity: 36.2, depth: 1900, batteryLevel: 88, cycleNumber: 134, dataType: 'bgc', region: 'Atlantic Ocean', deploymentDate: '2021-07-20', profileCount: 134 },
    { id: 'WMO2902145', lat: 45.6, lon: 2.3, status: 'active', lastProfile: '2024-09-25T07:20:00Z', temperature: 18.9, salinity: 36.5, depth: 1750, batteryLevel: 72, cycleNumber: 189, dataType: 'core', region: 'Mediterranean', deploymentDate: '2020-04-10', profileCount: 189 }
  ];

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) return;

    const newMap = window.L.map(mapRef.current, {
      center: [20, 40],
      zoom: 3,
      zoomControl: false,
    });

    window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    }).addTo(newMap);
    
    window.L.control.zoom({ position: 'topright' }).addTo(newMap);

    setMap(newMap);
    setIsLoading(false);

    return () => {
      newMap.remove();
    };
  }, []);

  const filteredFloats = useMemo(() => {
    return argoFloats.filter(float => {
      return (filters.status === 'all' || float.status === filters.status) &&
             (filters.dataType === 'all' || float.dataType === filters.dataType) &&
             (filters.region === 'all' || float.region === filters.region) &&
             (searchTerm === '' ||
              float.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
              float.region.toLowerCase().includes(searchTerm.toLowerCase()));
    });
  }, [filters, searchTerm, argoFloats]);

  // *** FIXED: This effect now uses the ref, breaking the infinite loop ***
  useEffect(() => {
    if (map && window.L) {
      // 1. Clear existing markers from the map using the ref
      floatMarkersRef.current.forEach(marker => marker.remove());
      // 2. Clear the ref's array
      floatMarkersRef.current = [];

      // 3. Create new markers and add them to the map and the ref
      filteredFloats.forEach(float => {
        const isActive = float.status === 'active';
        const isBGC = float.dataType === 'bgc';
        
        const iconColor = isActive ? (isBGC ? '#22c55e' : '#38bdf8') : '#ef4444';
        const iconHtml = `
          <div style="background:${iconColor};width:18px;height:18px;border-radius:50%;border:2px solid rgba(255,255,255,0.8);box-shadow:0 2px 10px rgba(0,0,0,0.5);"></div>
        `;

        const customIcon = window.L.divIcon({
          html: iconHtml,
          className: '',
          iconSize: [22, 22],
          iconAnchor: [11, 11]
        });

        const marker = window.L.marker([float.lat, float.lon], { icon: customIcon }).addTo(map);
        
        marker.on('click', () => setSelectedFloat(float));

        const popupContent = `
          <div style="color:#111;font-family:sans-serif;text-align:center;">
            <strong style="font-size:1.1em;">${float.id}</strong><br>
            Status: <span style="font-weight:bold;color:${isActive ? '#16a34a' : '#dc2626'}">${float.status}</span><br>
            Temp: ${float.temperature}°C
          </div>
        `;
        marker.bindPopup(popupContent, { offset: [0, -5] });
        
        // Add the new marker instance to our ref array
        floatMarkersRef.current.push(marker);
      });
    }
  }, [map, filteredFloats]); // Dependencies are now stable and correct
 
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const resetFilters = () => {
    setFilters({ status: 'all', dataType: 'all', region: 'all' });
    setSearchTerm('');
    if (map) map.setView([20, 40], 3);
  };

  const zoomToFloat = (float) => {
    if (map) {
      map.setView([float.lat, float.lon], 8);
      setSelectedFloat(float);
    }
  };

  const regions = [...new Set(argoFloats.map(f => f.region))];
 
  const InfoRow = ({ icon, label, value, valueColor }) => (
    <div className="flex justify-between items-center text-sm">
      <div className="flex items-center text-slate-400">
        {icon}
        <span className="ml-2">{label}</span>
      </div>
      <span className={`font-medium text-slate-200 ${valueColor}`}>{value}</span>
    </div>
  );

  // The JSX for your component remains unchanged...
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans">
      <Header />
      <main className="pt-16" style={{ height: '100vh' }}>
        <div className="flex h-full">
          {/* Sidebar */}
          <aside className="w-96 bg-slate-900/80 backdrop-blur-lg border-r border-sky-500/20 flex flex-col">
            {/* All sidebar JSX is the same */}
            <div className="p-4 border-b border-sky-500/20">
              <h2 className="text-xl font-bold text-white">Float Explorer</h2>
              <p className="text-sm text-slate-400">Search and filter ARGO floats</p>
            </div>
            
            <div className="p-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by ID or region..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-sky-500 focus:outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 gap-3">
                <select value={filters.status} onChange={(e) => handleFilterChange('status', e.target.value)} className="w-full p-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-sky-500 focus:outline-none transition">
                  <option value="all">All Statuses</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <select value={filters.dataType} onChange={(e) => handleFilterChange('dataType', e.target.value)} className="w-full p-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-sky-500 focus:outline-none transition">
                  <option value="all">All Data Types</option>
                  <option value="core">Core</option>
                  <option value="bgc">BGC</option>
                </select>
                <select value={filters.region} onChange={(e) => handleFilterChange('region', e.target.value)} className="w-full p-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-sky-500 focus:outline-none transition">
                  <option value="all">All Regions</option>
                  {regions.map(region => <option key={region} value={region}>{region}</option>)}
                </select>
              </div>
              <button onClick={resetFilters} className="w-full py-2 px-4 flex items-center justify-center bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg text-slate-300 hover:text-white transition">
                <RotateCw className="h-4 w-4 mr-2"/> Reset Filters
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-4 pb-4">
              <h3 className="text-slate-300 font-semibold mb-2">
                Showing {filteredFloats.length} of {argoFloats.length} Floats
              </h3>
              <div className="space-y-2">
                {filteredFloats.length > 0 ? filteredFloats.map(float => (
                  <div
                    key={float.id}
                    onClick={() => zoomToFloat(float)}
                    className={`p-3 rounded-lg border-l-4 cursor-pointer transition-all ${
                      selectedFloat?.id === float.id
                        ? 'bg-sky-500/20 border-sky-400'
                        : `bg-slate-800/50 border-${float.status === 'active' ? (float.dataType === 'bgc' ? 'green' : 'sky') : 'red'}-500/50 hover:bg-slate-700/50`
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-white text-sm">{float.id}</span>
                      <span className={`text-xs capitalize px-2 py-0.5 rounded-full ${float.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>{float.status}</span>
                    </div>
                    <p className="text-xs text-slate-400">{float.region} • {float.dataType.toUpperCase()}</p>
                  </div>
                )) : (
                  <div className="text-center py-10 text-slate-500">
                      <p>No floats match your criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 relative">
            {/* All map and details panel JSX is the same */}
            <div ref={mapRef} className="w-full h-full" style={{ background: '#0f172a' }} />

            {isLoading && (
              <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center z-[1000]">
                <div className="w-10 h-10 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md rounded-lg p-3 border border-sky-500/20 z-[500]">
              <h4 className="text-white font-semibold mb-2 text-sm">Legend</h4>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-sky-500 rounded-full border border-white/80"></div><span className="text-slate-300">Core (Active)</span></div>
                <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-green-500 rounded-full border border-white/80"></div><span className="text-slate-300">BGC (Active)</span></div>
                <div className="flex items-center space-x-2"><div className="w-3 h-3 bg-red-500 rounded-full border border-white/80"></div><span className="text-slate-300">Inactive</span></div>
              </div>
            </div>

            {selectedFloat && (
              <div 
                className={`absolute bottom-5 left-1/2 -translate-x-1/2 w-[95%] max-w-4xl bg-slate-900/80 backdrop-blur-lg rounded-xl border border-sky-500/20 p-5 z-[500] transition-all duration-300 ease-in-out transform ${
                  selectedFloat ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center">
                      {selectedFloat.id}
                      <span className={`ml-3 text-xs capitalize px-2 py-1 rounded-full ${selectedFloat.status === 'active' ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                        {selectedFloat.status}
                      </span>
                    </h3>
                    <p className="text-slate-400 text-sm">{selectedFloat.region}</p>
                  </div>
                  <button onClick={() => setSelectedFloat(null)} className="text-slate-400 hover:text-white transition-colors text-2xl leading-none font-bold">&times;</button>
                </div>

                <div className="grid md:grid-cols-3 gap-x-6 gap-y-4">
                  <div className="space-y-2">
                    <InfoRow icon={<MapPin size={14}/>} label="Latitude" value={`${selectedFloat.lat.toFixed(4)}°`} />
                    <InfoRow icon={<MapPin size={14}/>} label="Longitude" value={`${selectedFloat.lon.toFixed(4)}°`} />
                    <InfoRow icon={<ChevronsRight size={14}/>} label="Current Depth" value={`${selectedFloat.depth} m`} />
                  </div>
                  <div className="space-y-2">
                    <InfoRow icon={<Thermometer size={14}/>} label="Temperature" value={`${selectedFloat.temperature}°C`} />
                    <InfoRow icon={<Droplets size={14}/>} label="Salinity" value={`${selectedFloat.salinity} PSU`} />
                    <InfoRow 
                      icon={<Battery size={14}/>} 
                      label="Battery" 
                      value={`${selectedFloat.batteryLevel}%`}
                      valueColor={selectedFloat.batteryLevel > 50 ? 'text-green-400' : selectedFloat.batteryLevel > 20 ? 'text-yellow-400' : 'text-red-400'}
                    />
                  </div>
                  <div className="space-y-2">
                      <InfoRow icon={<Hash size={14}/>} label="Cycle Number" value={selectedFloat.cycleNumber} />
                      <InfoRow icon={<Layers size={14}/>} label="Total Profiles" value={selectedFloat.profileCount} />
                      <InfoRow icon={<Calendar size={14}/>} label="Last Profile" value={new Date(selectedFloat.lastProfile).toLocaleDateString()} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapArgo;