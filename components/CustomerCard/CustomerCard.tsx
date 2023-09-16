import { BsFillPatchCheckFill } from 'react-icons/bs';

const CustomerCard = () => {
  return (
    <div className='flex flex-col justify-start items-start px-6 pt-6 w-full mt-4 border border-white rounded-xl'>
      <div className="w-full flex justify-start items-start gap-3.5">
        <div className="flex justify-start items-start">
          <img src='/images/kent-img.png' alt="customer-image" className="top-0 right-0 bottom-0 left-0" />
        </div>
        <div className='flex flex-col justify-start items-start gap-4'>
          <div className="h-3 w-20">
            <img src='/images/Stars.png' alt="5-star" className="top-0 right-0 bottom-0 left-0" />
          </div>
          <div className='flex justify-start items-center gap-2'>
            <p className="text-xs font-bold text-[#333]">
              Ken T.
            </p>

            <BsFillPatchCheckFill className="text-xs text-sec-blue"/>

            <p className='text-xs text-sec-blue'>
              Verified Customer
            </p>
          </div>
        </div>

      </div>
      <div>
        <p className='text-base text-pry-gray'>
          “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful.”
        </p>

      </div>
    </div>
  )
}

export default CustomerCard