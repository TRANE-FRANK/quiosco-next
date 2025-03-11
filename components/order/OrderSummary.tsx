"use client"
import { useStore } from "@/src/store"
import OrderDetails from "./OrderDetails"
import { formatCurrency } from "@/src/utils"
import { useMemo } from "react"
import { createOrder } from "@/actions/create-order-action"
import { OrderSchema } from "@/src/schema"
import { toast } from "react-toastify"

export default function OrderSummary() {
  const order = useStore((state) => state.order)
  const clearOrder = useStore((state) => state.clearOrder)

  const total = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  )

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get("name"),
      total,
      order,
    }

    const result = OrderSchema.safeParse(data)
    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message)
      })
      return
    }

    const response = await createOrder(data)
    if (response?.errors) {
      response.errors.forEach((issue) => {
        toast.error(issue.message)
      })
    }
    toast.success("Pedido creado exitosamente")
    clearOrder()
  }

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5 ">
      <h1 className="text-4xl font-black text-center">Mi Pedido</h1>
      {order.length === 0 ? (
        <p className="text-center my-10">Carrito Vacio</p>
      ) : (
        <div className="mt-5">
          {order.map((item) => (
            <OrderDetails key={item.id} item={item} />
          ))}
          <p className="text-2xl mt-10 text-center">
            Total a pagar: {""}
            <span className="font-bold">{formatCurrency(total)}</span>{" "}
          </p>
          <form className="w-full mt-10 space-y-5" action={handleCreateOrder}>
            <input
              type="text"
              placeholder="Tu nombre"
              className="bg-white border border-gray-100 p-2 w-full"
              name="name"
            ></input>
            <input
              type="submit"
              className="py-2 rounded uppercase bg-black w-full text-center text-white font-bold cursor-pointer"
              value="Confirmar Pedido"
            />
          </form>
        </div>
      )}
    </aside>
  )
}
