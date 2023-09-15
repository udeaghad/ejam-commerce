import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { FiLock } from 'react-icons/fi'

const Payment = () => {
  return (
    <div className='flex flex-col justify-start items-center gap-3 mx-2.5'>
      <div className='border-pry-green rounded-full w-full px-16 py-4 flex justify-center items-center gap-4'>
        <p className='text-white font-bold text-sm'>Yes - Claim my discount</p>
        <FaArrowRight className="text-sm text-white"/>
      </div>

      <div className='border rounded-sm px-4 py-3 flex flex-col justify-start items-center'>
        <div className='text-pry-gray text-xs flex justify-between items-center pb-3 border-b'>
          <p>Free Shipping</p>
          <p>|</p>
          <div>
            <FiLock />
            <p>Secure 256-bit SSL encryption</p>
          </div> 
        </div>

        <div className='pt-3 border-t flex justify-center items-center'>
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

    </div>
  )
}

export default Payment
