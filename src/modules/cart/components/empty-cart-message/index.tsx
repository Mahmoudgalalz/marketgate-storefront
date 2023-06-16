import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">حقيبة التسوق فارغة</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        لا تحتوي حقيبتك علي اي منتج, تصفح البعض من خلال الرابط في الاسفل
      </p>
      <div>
        <UnderlineLink href="/store">استكشف المنتجات</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
