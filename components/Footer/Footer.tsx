import { FiLock } from 'react-icons/fi'

const Footer = () => {
  return (
    <div className="bg-main-blue w-full p-5 flex flex-col justify-start items-center gap-4 md:flex-row md:justify-around md:items-center">
      <div className="p-2 flex justify-between items-center text-xs text-white w-full">
        <p>
          Copyright (c) 2023
        </p>

        <p>
          |
        </p>

        <p>
          clarifionsupport@clarifion.com
        </p>

      </div>

      <div className="flex justify-center items-center gap-4 text-white text-xs">

        <FiLock />
        <p className='capitalize'>
          Secure 256-bit SSL encryption.
        </p>
      </div>
      
    </div>
  )
}

export default Footer