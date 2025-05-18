'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Title() {
  return (
    <section className="relative h-screen w-full text-white">
      <Image
        src="/spartanbg.jpeg"
        alt="Spartan Background"
        fill
        className="object-cover brightness-50"
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-start items-center text-center px-2 pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-5xl font-extrabold uppercase"
        >
          Spartan Community
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-4 max-w-2xl text-lg md:text-xl"
        >
          Diambil dari sebuah nama prajurit yang tak kenal lelah dan tak takut ajal. <br />
          <strong>SPARTAN</strong> adalah nama dari sebuah komunitas offroad di Banyuwangi yang berisi para prajurit dengan kuda besinya.
        </motion.p>

        {/* Tombol Scroll ke bawah */}
        <motion.a
          href="#konten"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 bg-red-700 hover:bg-red-600 transition px-6 py-3 rounded-full text-white font-semibold"
        >
          Lihat Selengkapnya
        </motion.a>
      </div>
    </section>
  )
}
