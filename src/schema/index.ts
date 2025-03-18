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

export const ProductSchema = z.object({
  name: z.string().trim().min(1, { message: "El nombre es requerido" }),
  price: z
    .string() // Convertir el string a un número
    .trim() // Eliminar espacios en blanco al principio y final
    .transform((value) => parseFloat(value)) // Convertir el string a un número
    .refine((value) => value > 0, { message: "El precio es requerido" }),

  categoryId: z.string()
  .trim()
  .transform((value) => parseInt(value)) // Convertir el string a un número
  .refine((value) => value > 0, { message: "La categoría es requerida" }), // Validar que el valor sea mayor que 0
})
