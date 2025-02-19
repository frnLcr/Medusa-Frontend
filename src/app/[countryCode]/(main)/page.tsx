import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
//import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import ProductCarousel from "@modules/home/components/product-carousel/page"
import BrandCarousel from "@modules/home/components/brands-carousel/page"

export const metadata: Metadata = {
  title: "Importadora Latinoamericana",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home(props: Readonly<{
  params: Promise<{ countryCode: string }>
}>) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <ProductCarousel />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
      <BrandCarousel />
    </>
  )
}
