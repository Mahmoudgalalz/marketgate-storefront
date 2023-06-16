import Link from "next/link"
import React from "react"

const Help = () => {
  return (
    <div>
      <h2 className="text-base-semi">تحتاج مساعدة؟</h2>
      <div className="text-base-regular my-2">
        <ul className="gap-y-2 flex flex-col">
          <li>
            <Link href="/contact">
              <a>تواصل معنا</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>لخدمات الاسترجاع</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Help
