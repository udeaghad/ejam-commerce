import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import {  BsFillCircleFill } from 'react-icons/bs';

const ProductDetails = () => {
  return (
    <div>
      <div className="flex justify-start items-center w-full gap-4 h-20 md:h-[8.375rem] md:gap-6">
        <div className="flex justify-center items-center w-20 h-20 md:h-[8.375rem] md:w-[8.375rem]">
          <img src='/images/product-image-2.png' alt="product-image" className="top-0 right-0 bottom-0 left-0" />
        </div>
        <div className="flex flex-col justify-start items-start gap-2.5 w-full">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-sm md:text-xl">Clarifion Air Ionizer</h2>
            <div className="flex justify-end items-center gap-2">
              <p className="text-[#969696] text-[0.625rem] font-semibold line-through md:text-base">$180</p>
              <p className="text-pry-blue font-semibold text-sm md:text-[1.375rem]">$84</p>
            </div>
          </div>
          <div className="h-3 w-16 md:h-5 md:w-[5.625rem]">
            <img src='/images/Stars.png' alt="stars" className="top-0 right-0 bottom-0 left-0" />
          </div>
          <div className="flex justify-start items-center gap-4">            
            <GoDotFill className="text-sm rounded-full bg-gray-200 border-gray-200 text-pry-blue md:text-base"/>
            <p className="text-pry-gray text-xs font-light md:text-base">12 left in Stock</p>
          </div>
          <div className="mt-4 w-full hidden md:block">
            <p className="text-center text-xs md:text-base">
              Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full md:hidden">
        <p className="text-center text-xs">
          Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
        </p>
      </div>
    </div>
  )
}

export default ProductDetails