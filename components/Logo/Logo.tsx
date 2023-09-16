import Image from "next/image"

const Logo = () => {
  return (
    <div className="w-full p-5 flex items-center justify-between">
      <div className="w-28 h-5 md:w-48 md:h-9">
        <Image src="/images/clarifion_logo.png" alt="logo" width={100} height={100} className="top-0 right-0 bottom-0 left-0"/>
      </div>
      <div className="h-5 flex justify-center items-center gap-4">
        <div className="h-full w-11 md:w-20 md:h-8">
          <Image src="/images/McAfee_Secure.png" alt="McAfee_logo" width={100} height={100} />
        </div>
        <div  className="h-full w-11 md:w-20 md:h-8">
          <Image src="/images/norton-antivirus-logo.png" alt="Norton_logo" width={100} height={100} />
        </div>
      </div>      
    </div>
  )
}

export default Logo