import { BsCheckCircleFill } from 'react-icons/bs'
const Stages = () => {
  return (
    <div className='mx-2.5 w-full flex justify-between items-center'>
      <div className='flex justify-center items-center flex-col gap-2 md:flex-row'>
        <BsCheckCircleFill className="text-pry-green text-xl md:text-[2.5rem]"/>
        <p className='text-xs md:text-xl'><span className='hidden md:block'>Step 1:</span>Cart Review</p>
      </div>
      <div className='flex justify-center items-center flex-col gap-2 md:flex-row'>
        <BsCheckCircleFill className="text-pry-green text-xl md:text-[2.5rem]"/>
        <p className='text-xs md:text-xl'><span className='hidden md:block'>Step 2:</span>Checkout</p>
      </div>
      <div className='flex justify-center items-center flex-col gap-2 md:flex-row'>
        <div className='w-5 h-5 rounded-full bg-pry-blue flex justify-center items-center md:w-10 md:h-10'>
          <p className='text-sm text-white md:text-xl'>3</p>
        </div>
        <p className='text-xs font-bold md:text-xl'><span className='hidden md:block'>Step 3:</span>Special Offer</p>
      </div>
      <div className='flex justify-center items-center flex-col gap-2 md:flex-row'>
        <div className='w-5 h-5 rounded-full border border-pry-blue flex justify-center items-center md:w-10 md:h-10'>
          <p className='text-sm text-pry-blue md:text-xl'>4</p>
        </div>
        <p className='text-xs md:text-xl'><span className='hidden md:block'>Step 4:</span>Confirmation</p>
      </div>
    </div>
  )
}

export default Stages