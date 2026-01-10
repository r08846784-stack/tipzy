import React from 'react'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import connectDb from '@/db/connectDb'
import User from '@/models/User'

const Username = async ({ params }) => {

  const { username } = await params; // ✅ FIX HERE

  const checkUser = async () => {
    await connectDb()
    let u = await User.findOne({ username }) // ✅ FIX
    if (!u) {
      notFound()
    }
  }

  await checkUser()

  return (
    <>
      <PaymentPage username={username} /> {/* ✅ FIX */}
    </>
  )
}

export default Username
