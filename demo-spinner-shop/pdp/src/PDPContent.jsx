import React from 'react'

import { useParams } from "react-router-dom"
import { getProductById, currency } from 'home/products'

export const PDPContent = () => {
  const [product, setProduct] = React.useState(null)

  const { id } = useParams()

  React.useEffect(
    () => {
      if (id) {
        getProductById(id).then(setProduct)
      } else {
        setProduct(null)
      }
    },
    [id]
  )

  if (!product) return null

  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>

      <div>
        <div className="flex">
          <div className="font-bold text-3xl flex-grow">
            {product.name}
          </div>

          <div className="font-bold text-3xl flex-end">
            {currency.format(product.price)}
          </div>
        </div>

        <div className="mt-10">{product.desc}</div>
        <div className="mt-10">{product.longDesc}</div>
      </div>
    </div>
  )
}
