import NavBar from "@/components/NavBar/NavBar"
import Logo from "@/components/Logo/Logo";
import Alert from "@/components/Alert/Alert";
import Stages from "@/components/Stages/Stages";
import Offer from "@/components/Offer/Offer";
import ProductImage from "@/components/ProductImage/ProductImage";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ProductFeatures from "@/components/ProductFeatures/ProductFeatures";
import PromoAlert from "@/components/PromoAlert/PromoAlert";
import Payment from "@/components/Payment/payment";

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

        <ProductDetails />

        <ProductFeatures />

        <PromoAlert />

        <Payment />
      </div>

      
      
    </main>
  )
}
