import Image from "next/image"

const Guaranty = () => {
  return (
    <div className="flex justify-start items-start gap-4 w-full">
      <div className="w-64 h-24 flex justify-start items-start">
        <img src='/images/satisfaction-logo.png' alt="logo" className="top-0 bottom-0 right-0 left-0"/>
      </div>
  
        <p className="text-xs">
          If you are not completely thrilled with your Clarifion - We have a <span className="font-bold">30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
        </p>

      
    </div>
  )
}

export default Guaranty