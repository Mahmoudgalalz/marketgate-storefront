import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">انشاء حساب في MarketGate</h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        انشاء حساب لتجربة افضل اثناء التسوق
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="الاسم الاول"
            {...register("first_name", { required: "الاسم الاول مطلوب" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="الاسم الاخير"
            {...register("last_name", { required: "مطلوب" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="البريد الالكتروني"
            {...register("email", { required: "ادخل الايميل" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="رقم الهاتف"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="كلمة السر"
            {...register("password", {
              required: "ادخل كلمة السر",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              هذه البيانات غير صحيحه
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          بأنشاء حساب لدي فا انت توافق MarketGate&apos;s{" "}
          <Link href="/content/privacy-policy">
            <a className="underline">الخصوصيات</a>
          </Link>{" "}
          and{" "}
          <Link href="/content/terms-of-use">
            <a className="underline">شروط الاستخدام</a>
          </Link>
          .
        </span>
        <Button className="mt-6">انضم</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
       لديك حساب؟{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          سجل الدخول
        </button>
        .
      </span>
    </div>
  )
}

export default Register
