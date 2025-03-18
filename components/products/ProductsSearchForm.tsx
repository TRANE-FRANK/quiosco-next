"use client"

import { SearSchema } from "@/src/schema"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"

export default function ProductsSearchForm() {
  const router = useRouter()
  const handleSearchForm = (formData: FormData) => {
    const data = {
      search: formData.get("search"), // Obtener el valor del campo "search"
    }

    const result = SearSchema.safeParse(data)

    if (!result.success) {
      result.error.issues.forEach((issue) => {
        toast.error(issue.message)
      })
      return
    }
    router.push(`/admin/products/search?search=${result.data.search}`)

  }

  return (
    <form
      action={handleSearchForm}
      className="flex items-center justify-between"
    >
      <input
        type="text"
        placeholder="Buscar Producto"
        className="p-2 placeholder-gray-400 w-full"
        name="search"
      ></input>

      <input
        type="submit"
        value="Buscar"
        className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer"
      ></input>
    </form>
  )
}
