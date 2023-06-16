import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 max-sm:mt-[5rem] flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi max-sm:text-xl-semi mb-4 drop-shadow-md shadow-black">
          كل ما تحتاجه يخص التدخين الالكتروني
        </h1>
        <p className="text-base-regular max-w-[32rem] drop-shadow-md shadow-black">
          كل منتجات الشيشة الالكترونيه, الانيقه التي تناسب احتياجك 
        </p>
        <UnderlineLink href="/store">المتجر</UnderlineLink>
      </div>
      <video autoPlay loop muted className="absolute inset-0 object-cover h-1/2 max-sm:h-4/6 xl:h-fit" src="/hero.mp4"/>
      
    </div>
  )
}

export default Hero
