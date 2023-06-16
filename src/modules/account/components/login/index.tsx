import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import { useRouter } from "next/router"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (_e: Error) => {
    setAuthError("Invalid email or password")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm w-full flex flex-col items-center">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">اهلا بك</h1>
      <p className="text-center text-base-regular text-gray-700 mb-8">
        سجل الدخول لتحسين تجربت تسوقكك
      </p>
      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="البريد الالكتروني"
            {...register("email", { required: "Email is required" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="كلمة السر"
            {...register("password", { required: "Password is required" })}
            type="password"
            autoComplete="current-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
              هناك خطئ اثناء التسجيل
            </span>
          </div>
        )}
        <Button className="mt-6">سجل الدخول</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        لا تمتلك حساب?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="underline"
        >
          انشاء واحد الان
        </button>
        .
      </span>
    </div>
  )
}

export default Login
