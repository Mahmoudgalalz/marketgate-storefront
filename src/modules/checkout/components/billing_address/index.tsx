import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"

const BillingAddress = () => {
  return (
    <ConnectForm<CheckoutFormValues>>
      {({ register, formState: { errors, touchedFields } }) => (
        <div className="grid grid-cols-1 gap-y-2">
          <div className="grid grid-cols-2 gap-x-2">
            <Input
              label="الاسم الاول"
              {...register("billing_address.first_name", {
                required: "First name is required",
              })}
              autoComplete="given-name"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="الاسم الاخير"
              {...register("billing_address.last_name", {
                required: "Last name is required",
              })}
              autoComplete="family-name"
              errors={errors}
              touched={touchedFields}
            />
          </div>
          <Input
            label="الشركة"
            {...register("billing_address.company")}
            autoComplete="organization"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="العنوان"
            {...register("billing_address.address_1", {
              required: "Address is required",
            })}
            autoComplete="address-line1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="تفاصيل العنوان"
            {...register("billing_address.address_2")}
            autoComplete="address-line2"
            errors={errors}
            touched={touchedFields}
          />
          <div className="grid grid-cols-[144px_1fr] gap-x-2">
            <Input
              label="كود البريد"
              {...register("billing_address.postal_code", {
                required: "Postal code is required",
              })}
              autoComplete="postal-code"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="المدينة"
              {...register("billing_address.city", {
                required: "City is required",
              })}
              autoComplete="address-level2"
              errors={errors}
              touched={touchedFields}
            />
          </div>
          <CountrySelect
            {...register("billing_address.country_code", {
              required: "Country is required",
            })}
            autoComplete="country"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="المحافظة"
            {...register("billing_address.province")}
            autoComplete="address-level1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="رقم الهاتف"
            {...register("billing_address.phone")}
            autoComplete="tel"
            errors={errors}
            touched={touchedFields}
          />
        </div>
      )}
    </ConnectForm>
  )
}

export default BillingAddress
