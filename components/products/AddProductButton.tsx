"use client"
import { Product } from "@prisma/client"
import { useStore } from "@/src/store"

type AddProductButtonProps = {
  product: Product
}

export default function AddProductButton({ product }: AddProductButtonProps) {
  const addToOrder = useStore((state) => state.addToOrder)
  return (
    <button
      className="bg-orange-500 hover:bg-orange-600 w-full rounded-lg p-3 cursor-pointer font-bold text-white"
      onClick={() => addToOrder(product)}
    >
      Agregar
    </button>
  )
}
