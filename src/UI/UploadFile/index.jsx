import React from 'react'
import './UploadFile.css'
import { MdOutlineCloudUpload } from 'react-icons/md'

const UploadFile = () => {
  return (

    <div className='mt-4'>
    <label class="custum-file-upload" for="file">

    <div class="icon">
    <MdOutlineCloudUpload size={50}/>
    <span className='pl-5 text-base medium text-[var(--blue)]'>Upload Screenshot</span>
    </div>

    <input type="file" id="file"/>
    </label>
    </div>
    
  )
}

export default UploadFile