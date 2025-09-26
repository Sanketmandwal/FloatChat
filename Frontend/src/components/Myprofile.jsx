import React, { useState, useContext } from 'react'
import { 
  User, 
  Mail, 
  Briefcase, 
  Calendar, 
  Edit3, 
  Save, 
  X, 
  Camera,
  Waves,
  Sparkles
} from 'lucide-react'
import { Button } from './ui/button'
import { AppContext } from '@/context/AppContext'
import Header from './Header'
import Footer from './Footer'

const Myprofile = () => {
  const { userData, setUserData } = useContext(AppContext)
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState(userData || {})

  const getInitials = (name) => {
    return name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || 'U'
  }

  const getGradientColor = (name) => {
    const colors = [
      'from-blue-400 via-cyan-500 to-teal-500',
      'from-indigo-400 via-blue-500 to-cyan-500', 
      'from-cyan-400 via-teal-500 to-blue-600',
      'from-teal-400 via-cyan-500 to-indigo-500',
      'from-blue-500 via-indigo-500 to-purple-600',
      'from-cyan-500 via-blue-500 to-indigo-600'
    ]
    const index = name?.charCodeAt(0) % colors.length || 0
    return colors[index]
  }

  const handleSave = () => {
    setUserData(editedData)
    setIsEditing(false)
    // Here you would typically make an API call to update the user data
  }

  const handleCancel = () => {
    setEditedData(userData)
    setIsEditing(false)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-20">
      {/* Subtle Ocean Background */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Card */}
        <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Header with Ocean Gradient */}
          <div className="h-32 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <Waves className="absolute top-4 right-4 h-8 w-8 text-white/30 animate-pulse" />
            
            {/* Edit Button */}
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 border-white/30 text-white"
                size="sm"
              >
                <Edit3 className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="absolute top-4 left-4 flex space-x-2">
                <Button
                  onClick={handleSave}
                  className="bg-green-500/80 hover:bg-green-600/80 text-white border-0"
                  size="sm"
                >
                  <Save className="h-4 w-4 mr-1" />
                  Save
                </Button>
                <Button
                  onClick={handleCancel}
                  className="bg-red-500/80 hover:bg-red-600/80 text-white border-0"
                  size="sm"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          <div className="px-8 pb-8">
            {/* Profile Avatar & Basic Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end -mt-16 mb-8">
              <div className="relative mb-4 sm:mb-0 sm:mr-8">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${getGradientColor(userData?.name)} flex items-center justify-center text-white font-bold text-4xl shadow-2xl ring-4 ring-white/20 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
                  {getInitials(userData?.name)}
                  <div className="absolute bottom-2 right-2 bg-slate-700/80 backdrop-blur-sm rounded-full p-1.5 hover:bg-slate-600/80 transition-colors cursor-pointer">
                    <Camera className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-800 animate-pulse"></div>
              </div>
              
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start mb-2">
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.name || ''}
                      onChange={(e) => setEditedData({...editedData, name: e.target.value})}
                      className="text-3xl font-bold bg-transparent border-b-2 border-cyan-400 text-white focus:outline-none focus:border-cyan-300 transition-colors text-center sm:text-left"
                    />
                  ) : (
                    <h1 className="text-3xl font-bold text-white flex items-center">
                      {userData?.name}
                      <Sparkles className="h-6 w-6 text-yellow-400 ml-2 animate-pulse" />
                    </h1>
                  )}
                </div>
                <div className="flex items-center justify-center sm:justify-start text-cyan-400 mb-2">
                  <Briefcase className="h-5 w-5 mr-2" />
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.profession || ''}
                      onChange={(e) => setEditedData({...editedData, profession: e.target.value})}
                      className="bg-transparent border-b border-cyan-400 text-cyan-400 focus:outline-none focus:border-cyan-300 text-center sm:text-left"
                    />
                  ) : (
                    <span>{userData?.profession}</span>
                  )}
                </div>
                <div className="flex items-center justify-center sm:justify-start text-gray-400 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Member since {formatDate(userData?.createdAt)}</span>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <User className="h-5 w-5 mr-2 text-cyan-400" />
                  Personal Information
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={editedData.email || ''}
                      onChange={(e) => setEditedData({...editedData, email: e.target.value})}
                      className="w-full bg-slate-700/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                  ) : (
                    <div className="bg-slate-700/30 rounded-xl px-4 py-3 text-white border border-white/10 hover:border-cyan-400/30 transition-colors">
                      {userData?.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    Profession
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={editedData.profession || ''}
                      onChange={(e) => setEditedData({...editedData, profession: e.target.value})}
                      className="w-full bg-slate-700/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    />
                  ) : (
                    <div className="bg-slate-700/30 rounded-xl px-4 py-3 text-white border border-white/10 hover:border-cyan-400/30 transition-colors">
                      {userData?.profession}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-cyan-400" />
                  Account Details
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Account Created
                  </label>
                  <div className="bg-slate-700/30 rounded-xl px-4 py-3 text-white border border-white/10">
                    {formatDate(userData?.createdAt)}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Last Updated
                  </label>
                  <div className="bg-slate-700/30 rounded-xl px-4 py-3 text-white border border-white/10">
                    {formatDate(userData?.updatedAt)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </div>
    </>
  )
}

export default Myprofile