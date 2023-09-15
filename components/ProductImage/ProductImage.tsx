import Image from "next/image"

const ProductImage = () => {
  return (
    <div className="w-full px-2.5 justify-center items-center rounded-md border-0 h-[20.5rem]">
      <Image src='/images/product-image-1.png' alt="product-image" width={100} height={100} />
    </div>
  )
}

export default ProductImage