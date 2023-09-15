import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import {  BsFillCircleFill } from 'react-icons/bs';

const ProductDetails = () => {
  return (
    <div>
      <div className="flex justify-start items-center w-full gap-4 h-20">
        <div className="flex justify-center items-center w-20 h-20">
          <Image src='/images/product-image-2.png' alt="product-image" width={100} height={100} />
        </div>
        <div className="flex flex-col justify-start items-start gap-2.5 w-full">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-sm">Clarifion Air Ionizer</h2>
            <div className="flex justify-end items-center gap-2">
              <p className="text-[#969696] text-[0.625rem] font-semibold line-through">$180</p>
              <p className="text-pry-blue font-semibold text-sm">$84</p>
            </div>
          </div>
          <div className="h-3 w-16">
            <Image src='/images/Stars.png' alt="stars" width={100} height={100} />
          </div>
          <div className="flex justify-start items-center gap-4">            
            <GoDotFill className="text-sm rounded-full bg-gray-200 border-gray-200 text-pry-blue"/>
            <p className="text-pry-gray text-xs font-light">12 left in Stock</p>
          </div>
        </div>
      </div>
      <div className="mt-4 w-full">
        <p className="text-center text-xs">
          Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.
        </p>
      </div>
    </div>
  )
}

export default ProductDetails