import Image from "next/image"

const Logo = () => {
  return (
    <div className="w-full p-5 flex items-center justify-between">
      <div className="w-28 h-5">
        <Image src="/images/clarifion_logo_1.png" alt="logo" width={100} height={100} />
      </div>
      <div className="h-5 flex justify-center items-center gap-1">
        <div className="h-full w-11">
          <Image src="/images/McAfee_Secure.png" alt="McAfee_logo" width={100} height={100} />
        </div>
        <div  className="h-full w-11">
          <Image src="/images/norton-antivirus-logo.png" alt="Norton_logo" width={100} height={100} />
        </div>
      </div>
      Logo
    </div>
  )
}

export default Logo