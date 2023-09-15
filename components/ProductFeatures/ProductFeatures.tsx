import { BsCheckLg } from 'react-icons/bs'

const ProductFeatures = () => {
  return (
    <div className='flex flex-col justify-start items-start gap-4 w-full'>
      <div className='flex justify-start items-center gap-3'>
        <BsCheckLg className="text-base text-pry-blue"/>
        <p className='text-xs text-[#4D5254]'>
          Negative Ion Technology may <span className='font-bold'>help with allergens</span>
        </p>
      </div>
      <div className='flex justify-start items-center gap-3'>
        <BsCheckLg className="text-base text-pry-blue"/>
        <p className='text-xs text-[#4D5254]'>
          Designed for <span className='font-bold'>air rejuvenation</span>
        </p>
      </div>
      <div className='flex justify-start items-center gap-3'>
        <BsCheckLg className="text-base text-pry-blue"/>
        <p className='text-xs text-[#4D5254]'>
          <span className='font-bold'>Perfect for every room</span> in all types of places.
        </p>
      </div>
    </div>
  )
}

export default ProductFeatures