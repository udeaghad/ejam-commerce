import { BsCheckLg } from 'react-icons/bs'

const ProductFeatures = () => {
  return (
    <div className='flex flex-col justify-start items-start gap-4 w-full'>
      <div className='flex justify-start items-center gap-3'>
        <BsCheckLg className="text-base text-pry-blue md:text-[1.375rem]" />
        <p className='text-xs text-pry-gray md:text-base'>
          Negative Ion Technology may <span className='font-bold'>help with allergens</span>
        </p>
      </div>
      <div className='flex justify-start items-center gap-3'>
        <BsCheckLg className="text-base text-pry-blue md:text-[1.375rem]" />
        <p className='text-xs text-pry-gray md:text-base'>
          Designed for <span className='font-bold'>air rejuvenation</span>
        </p>
      </div>
      <div className='flex justify-start items-center gap-3'>
        <BsCheckLg className="text-base text-pry-blue md:text-[1.375rem]" />
        <p className='text-xs text-pry-gray md:text-base'>
          <span className='font-bold'>Perfect for every room</span> in all types of places.
        </p>
      </div>
    </div>
  )
}

export default ProductFeatures