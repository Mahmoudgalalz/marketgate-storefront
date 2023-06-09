import { Customer } from "@medusajs/medusa"
import React from "react"
import Detail from "../detail-container"
import EditEmailModal from "./edit-email-modal"
import EditPasswordModal from "./edit-password-modal"

type LoginDetailsProps = {
  customer: Omit<Customer, "password_hash">
}

const LoginDetails: React.FC<LoginDetailsProps> = ({ customer }) => {
  return (
    <Detail title="Login">
      <div className="flex flex-col gap-y-4">
        <Detail.SubDetail title="البريد الالكتروني">
          <span>{customer.email}</span>
          <EditEmailModal customer={customer} />
        </Detail.SubDetail>
        <Detail.SubDetail title="كلمة السر">
          <span>•••••••••••</span>
          <EditPasswordModal customer={customer} />
        </Detail.SubDetail>
      </div>
    </Detail>
  )
}

export default LoginDetails
