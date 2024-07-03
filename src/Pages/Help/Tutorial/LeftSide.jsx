import React from 'react'

const LeftSide = () => {
  return (
    <div className='mr-5'>
    <div className='text-lg font-medium mb-4'>Our Tutorials</div>
    <span className='text-sm text-[#6C7293]'>
    Discover step-by-step instructions for building a secure billing payment 
    application with comprehensive user management features.
      </span>

      <div className='mt-6 flex justify-center'>
      <iframe className='rounded-md'
       src="https://www.youtube.com/embed/KQ9W61rm5Fs" width="600" 
      height="400" title="A YouTube video" 
      allowFullScreen />
       </div>

       <div className='mt-3'>

        <span className='text-xl'>It is a long established fact that a reader will be distracted
          by the readable content of a page when looking at its layout.
        </span>

        <div className="flex items-center justify-start mt-4 text-sm font-medium text-[#6C7293]">
         <span>{Date().slice(0,15)}</span>
         <span className="mx-2">•</span>
         <span>{Date().slice(16,21)}</span>
          </div>

       </div>

  </div>
  )
}

export default LeftSide