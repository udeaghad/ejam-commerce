import Image from "next/image"

const Guaranty = () => {
  return (
    <div className="flex justify-start items-start gap-4 mx-2.5">
      <div className="w-12 h-12">
        <Image src='/images/satisfaction-logo.png' alt="logo" width={100} height={100} />
      </div>
      <div className="text-xs">
        <p>
          If you are not completely thrilled with your Clarifion - We have a <span className="font-bold">30 day satisfaction guarantee</span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
        </p>

      </div>
    </div>
  )
}

export default Guaranty