import ProductsSearchForm from "@/components/products/ProductsSearchForm"
import ProductTable from "@/components/products/ProductsTable"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"

async function searchProducts(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm, // Buscar el nombre que incluye el término de búsqueda
        mode: "insensitive", // La búsqueda es insensible a mayúsculas y minúsculas
      },
    },
    include: {
      category: true,
    },
  })
  return products
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { search: string }
}) {
  const products = await searchProducts(searchParams.search)
  return (
    <>
      <Heading>Resultados de la búsqueda de: {searchParams.search}</Heading>
      <div className="flex flex-col gap-5 lg:flex-row justify-end">
        <ProductsSearchForm />
      </div>

      {products.length ? (
        <ProductTable products={products} />
      ) : (
        <p className="text-center text-lg">No se encontraron resultados</p>
      )}
    </>
  )
}
