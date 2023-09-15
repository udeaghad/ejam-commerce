import NavBar from "@/components/NavBar/NavBar"
import Logo from "@/components/Logo/Logo";
import Alert from "@/components/Alert/Alert";
import Stages from "@/components/Stages/Stages";
import Offer from "@/components/Offer/Offer";
import ProductImage from "@/components/ProductImage/ProductImage";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar />
      </div>

      <div>
        <Logo />
      </div>

      <div className="mt-8 flex flex-col justify-center items-center gap-6">
        <Alert />

        <Stages />

        <Offer />

        <ProductImage />
      </div>

      
      
    </main>
  )
}
