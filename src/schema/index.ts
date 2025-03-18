import { z } from "zod"

export const OrderSchema = z.object({
  name: z.string().min(1, "Tu nombre es requerido"),
  total: z.number().min(1, "Error al crear el pedido"),
  order: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      subtotal: z.number(),
    })
  ),
})

export const SearSchema = z.object({
  search: z.string().trim().min(1, { message: "Debes introducir un nombre" }),
})
