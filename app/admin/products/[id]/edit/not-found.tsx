import Heading from "@/components/ui/Heading"
import Link from "next/link"
import React from "react"

export default function NotFound() {
  return (
    <div className="text-center items-center justify-center flex flex-col h-screen">
      <Heading>Producto no encontrado</Heading>
      <Link href="/admin/products" className="bg-amber-400 rounded-lg text-black px-10 py-3 text-xl text-center font-bold cursor-pointer w-full lg:w-auto">Ir a la lista de productos</Link>
    </div>
  )
}
