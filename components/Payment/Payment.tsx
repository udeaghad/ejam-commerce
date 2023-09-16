import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi'

const Payment = () => {
  return (
    <div className='flex flex-col justify-start items-center gap-3 w-full'>
      <div className='border-pry-green bg-pry-green rounded-full w-full py-4 flex justify-center items-center gap-4'>
        <p className='text-white font-bold text-sm uppercase md:text-xl'>Yes - Claim my discount</p>
        <FaArrowRight className="text-sm text-white"/>
      </div>

      <div className='border rounded-sm px-4 py-3 flex flex-col justify-start items-start w-full md:flex-row md:border md:justify-between md:items-center'>
        <div className='text-pry-gray text-xs flex justify-between items-center pb-3 border-b w-full md:border-b-0 md:pb-0  md:justify-around'>
          <p>Free Shipping</p>
          <p>|</p>
          <div className="flex justify-center items-center gap-2">
            <FiLock />
            <p>Secure 256-bit SSL encryption</p>
          </div> 
        </div>
        <p className='hidden md:block md:text-pry-gray md:text-xs'>|</p>

        <div className='pt-3 flex justify-center items-center w-full md:pt-0 md:w-auto'>
          <div className='w-6 h-3.5'>
            <Image src='/images/visa-logo.png' alt="visa-cards" width={100} height={100} />
          </div>
          <div className='w-6 h-3.5'>
            <Image src='/images/opay-logo.png' alt="opay-cards" width={100} height={100} />
          </div>
          <div className='w-6 h-3.5'>
            <Image src='/images/paypal-logo.png' alt="paypal-cards" width={100} height={100} />
          </div>
          <div className='w-6 h-3.5'>
            <Image src='/images/mastercard-logo.png' alt="master-cards" width={100} height={100} />
          </div>
          <div className='w-6 h-3.5'>
            <Image src='/images/gpay-logo.png' alt="gpay-cards" width={100} height={100} />
          </div>
          <div className='w-6 h-3.5'>
            <Image src='/images/applepay.png' alt="applepay-cards" width={100} height={100} />
          </div>
          
          <div className='w-6 h-3.5'>
            <Image src='/images/amex-logo.png' alt="amex-cards" width={100} height={100} />
          </div>

        </div>

      </div>

      <div className='flex justify-center items-center w-full'>
        <p className='text-xs text-pry-red uppercase md:text-lg'>
          No thanks, I don’t want this.
        </p>
      </div>
    </div>
  )
}

export default Payment
