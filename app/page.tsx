import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1 className='text-pry-red'>Home 53</h1>
      <Image src='/images/clarifion_logo_1.png' alt='logo' width={100} height={100} />
    </main>
  )
}
