'use client'

import { useState } from 'react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: '',
    emailOrPhone: '',
    password: '',
    address: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/loginbg.png')] bg-center bg-no-repeat bg-cover">
      <div className="bg-stone-800 bg-opacity-40 backdrop-blur-md p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">REGISTER</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <p className="text-sm mb-1 text-white">Username</p>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-white/20 placeholder-white text-white"
              required
            />
          </div>
          <div>
            <p className="text-sm mb-1 text-white">Email or Phone</p>
            <input
              type="text"
              name="emailOrPhone"
              placeholder="Email or Phone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-white/20 placeholder-white text-white"
              required
            />
          </div>
          <div>
            <p className="text-sm mb-1 text-white">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-white/20 placeholder-white text-white"
              required
            />
          </div>
          <div>
            <p className="text-sm mb-1 text-white">Address</p>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-full bg-white/20 placeholder-white text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black w-full py-2 rounded-full font-bold mt-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
