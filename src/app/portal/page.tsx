"use client"

import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function PortalRoot() {
  const { data: session } = useSession()
  const router = useRouter()
  const role = session?.user?.role as string | undefined

  useEffect(() => {
    if (role === "ADMIN") router.replace("/portal/management")
    else if (role === "TEACHER") router.replace("/portal/teacher")
    else if (role === "PARENT") router.replace("/portal/parent")
    else router.replace("/portal/student")
  }, [role, router])

  return null
}
