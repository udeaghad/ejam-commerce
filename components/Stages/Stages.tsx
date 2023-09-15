import { BsCheckCircleFill } from 'react-icons/bs'
const Stages = () => {
  return (
    <div className='px-2.5 w-full flex justify-between items-center'>
      <div className='flex justify-center items-center flex-col gap-2'>
        <BsCheckCircleFill className="text-pry-green text-xl"/>
        <p className='text-xs'>Cart Review</p>
      </div>
      <div className='flex justify-center items-center flex-col gap-2'>
        <BsCheckCircleFill className="text-pry-green text-xl"/>
        <p className='text-xs'>Checkout</p>
      </div>
      <div className='flex justify-center items-center flex-col gap-2'>
        <div className='w-5 h-5 rounded-full bg-pry-blue flex justify-center items-center'>
          <p className='text-sm text-white'>3</p>
        </div>
        <p className='text-xs font-bold'>Special Offer</p>
      </div>
      <div className='flex justify-center items-center flex-col gap-2'>
        <div className='w-5 h-5 rounded-full border border-pry-blue flex justify-center items-center'>
          <p className='text-sm text-pry-blue'>4</p>
        </div>
        <p className='text-xs'>Confirmation</p>
      </div>
    </div>
  )
}

export default Stages