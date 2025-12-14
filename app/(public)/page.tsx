import DealOfWeek from "@/components/pages/home/dealOfWeek";
import PopularCategory from "@/components/pages/home/popularCategory";
import PopularItemSlider from "@/components/pages/home/popularItemSlider";
import Service from "@/components/pages/home/service";
import Slider from "@/components/pages/home/slider";
import OfferCart from "@/components/share/offerCart";

export default function Home() {

  return (
    <>
      <Slider />
      <Service />
      <DealOfWeek />
      <div className="grid lg:grid-cols-3 gap-4 my-container">
        <OfferCart />
        <OfferCart />
        <OfferCart />
      </div>
      <PopularCategory />
    </>
  )
}
