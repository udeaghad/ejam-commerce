import NavBar from "@/components/NavBar/NavBar"
import Logo from "@/components/Logo/Logo";
import Alert from "@/components/Alert/Alert";
import Stages from "@/components/Stages/Stages";
import Offer from "@/components/Offer/Offer";
import ProductImage from "@/components/ProductImage/ProductImage";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ProductFeatures from "@/components/ProductFeatures/ProductFeatures";
import PromoAlert from "@/components/PromoAlert/PromoAlert";
import Payment from "@/components/Payment/Payment";
import Guaranty from "@/components/Guaranty/Guaranty";
import Footer from "@/components/Footer/Footer";
import CustomerCard from "@/components/CustomerCard/CustomerCard";

export default function Home() {
  return (
    <main>
      <div>
        <NavBar />
      </div>

      <div className="md:mx-24">
        <Logo />
      </div>

      <div className="mt-8 mx-5 flex flex-col justify-center items-center gap-6 md:mx-32">
        <Alert />

        <Stages />

        <div className="md:hidden">
          <Offer />
        </div>

        <div className="md:flex md:justify-start md:items-start gap-8 md:p-10 md:bg-gradient-to-t from-[#FAFAFA] to-[#FAFAFA]">

          <div className="mt-8 mx-5 flex flex-col  justify-center items-center gap-6 md:justify-start md:items-start">
            <ProductImage />

            <div className="hidden md:block">
              <CustomerCard />
            </div>

          </div>

          <div className="mt-8 mx-5 flex flex-col justify-center items-center gap-6 md:justify-start md:items-start md:gap-8 md:mt-0 md:mx-0">
            <div className="hidden md:block ">
              <Offer />
            </div>

            <ProductDetails />

            <ProductFeatures />

            <PromoAlert />

            <Payment />

            <Guaranty />

          </div>
        </div>




      </div>

      <div className="mt-8">
        <Footer />
      </div>



    </main>
  )
}
