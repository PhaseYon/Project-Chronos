import { useState } from 'react'
import { FiUpload, FiBook, FiLayers, FiHelpCircle, FiUser } from 'react-icons/fi' // Import icons
import { motion } from 'framer-motion' // For smooth animations

function App() {
  // State to track if a file is being dragged over the drop zone
  const [isDragging, setIsDragging] = useState(false)
  // State to store the uploaded file
  const [uploadedFile, setUploadedFile] = useState(null)

  // Handle drag events
  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files[0]
    if (file?.type === 'application/pdf') {
      setUploadedFile(file)
    }
  }

  return (
    // Main container with a gradient background
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100">
      {/* Header section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo and site name */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-indigo-600">Project Chronos</span>
          </div>
          {/* User profile section */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-indigo-200 flex items-center justify-center">
              <FiUser className="text-indigo-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Upload section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          {/* File drop zone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              border-2 border-dashed rounded-lg p-12
              flex flex-col items-center justify-center
              transition-colors duration-200
              ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 bg-white'}
            `}
          >
            <FiUpload className="w-16 h-16 text-indigo-500 mb-4" />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Drop your PDF here
            </h2>
            <p className="text-sm text-gray-500">
              or click to browse your files
            </p>
          </div>
        </motion.div>

        {/* Action buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Generate Summary button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-center space-x-2 px-6 py-4 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors"
          >
            <FiBook className="w-5 h-5" />
            <span>Generate Summary</span>
          </motion.button>

          {/* Generate Flashcards button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-center space-x-2 px-6 py-4 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            <FiLayers className="w-5 h-5" />
            <span>Generate Flashcards</span>
          </motion.button>

          {/* Generate Quiz button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-center space-x-2 px-6 py-4 bg-violet-600 text-white rounded-lg shadow-lg hover:bg-violet-700 transition-colors"
          >
            <FiHelpCircle className="w-5 h-5" />
            <span>Generate Quiz</span>
          </motion.button>
        </div>
      </main>
    </div>
  )
}

export default App