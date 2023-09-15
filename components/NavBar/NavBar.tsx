import { MdOutlineArrowBackIos } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';
import { BsPatchCheck } from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import { BsHeart } from 'react-icons/bs';

const NavBar = () => {
  return (
    <div className="px-5 py-2.5 w-full bg-main-blue">
      <div className="h-5 w-full flex justify-between items-center">
        <MdOutlineArrowBackIos className="text-[#ffffff] text-xl md:hidden"/>
        <div className='flex justify-center items-center gap-2'>
          <BsPatchCheck className="text-[#ffffff] text-xl"/>
          <h2 className="text-xs font-medium text-[#ffffff]">30-DAY SATISFACTION GUARANTEE</h2>
        </div>
        <MdArrowForwardIos className="text-[#ffffff] text-xl md:hidden"/>

        <div className='hidden md:flex md:justify-center md:items-center md:gap-2'>
          <TbTruckDelivery className="text-[#ffffff] text-xl"/>
          <h2 className="text-xs font-medium text-[#ffffff] uppercase">Free delivery on orders over $40.00</h2>
        </div>
        <div className='hidden md:flex md:justify-center md:items-center md:gap-2'>
          <BsHeart className="text-[#ffffff] text-xl"/>
          <h2 className="text-xs font-medium text-[#ffffff] uppercase">F50.000+ HAPPY CUSTOMERS</h2>
        </div>
      </div>
    </div>
  )
}

export default NavBar