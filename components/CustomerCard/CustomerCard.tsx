import { BsPatchCheck } from 'react-icons/bs';

const CustomerCard = () => {
  return (
    <div className='flex flex-col justify-start items-start px-6 w-full'>
      <div className="h-12 w-full flex justify-start items-center gap-3.5">
        <div className="h-24 w-24 flex justify-center items-center">
          <img src='/images/kent-img.png' alt="customer-image" className="top-0 right-0 bottom-0 left-0" />
        </div>
        <div className='flex flex-col justify-start items-start'>
          <div className="h-3 w-20">
            <img src='/images/Star2.png' alt="5-star" className="top-0 right-0 bottom-0 left-0" />
          </div>
          <div className='flex justify-start items-center gap-2'>
            <p className="text-xs font-bold text-[#333]">
              Ken T.
            </p>

            <BsPatchCheck className="text-xs text-sec-blue"/>

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