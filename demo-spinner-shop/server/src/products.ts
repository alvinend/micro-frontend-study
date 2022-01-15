export type Product = {
  id: number
  name: string
  price: number
  desc: string
  image: string
  longDesc: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Autumn Soup',
    price: 1.00,
    desc: 'Desc Autumn Soup',
    longDesc: 'Long Desc Autumn Soup',
    image: 'http://localhost:8080/autumn_soup.jpg'
  },
  {
    id: 2,
    name: 'Burger',
    price: 2.00,
    desc: 'Desc Burger',
    longDesc: 'Long Desc Burger',
    image: 'http://localhost:8080/burger.jpg'
  },
  {
    id: 3,
    name: 'Fish',
    price: 3.00,
    desc: 'Desc Fish',
    longDesc: 'Long Desc Fish',
    image: 'http://localhost:8080/fish.jpg'
  },
  {
    id: 4,
    name: 'Ice Cream',
    price: 4.00,
    desc: 'Desc Ice Cream',
    longDesc: 'Long Desc Ice Cream',
    image: 'http://localhost:8080/ice_cream.jpg'
  },
  {
    id: 5,
    name: 'Meatball',
    price: 5.00,
    desc: 'Desc Meatball',
    longDesc: 'Long Desc Meatball',
    image: 'http://localhost:8080/meatball.jpg'
  },
  {
    id: 6,
    name: 'Pizza',
    price: 6.00,
    desc: 'Desc Pizza',
    longDesc: 'Long Desc Pizza',
    image: 'http://localhost:8080/pizza.jpg'
  },
  {
    id: 7,
    name: 'Ramen',
    price: 7.00,
    desc: 'Desc Ramen',
    longDesc: 'Long Desc Ramen',
    image: 'http://localhost:8080/ramen.jpg'
  },
  {
    id: 8,
    name: 'Salad',
    price: 8.00,
    desc: 'Desc Salad',
    longDesc: 'Long Desc Salad',
    image: 'http://localhost:8080/salad.jpg'
  },
  {
    id: 9,
    name: 'Salmon',
    price: 9.00,
    desc: 'Desc Salmon',
    longDesc: 'Long Desc Salmon',
    image: 'http://localhost:8080/salmon.jpg'
  },
  {
    id: 10,
    name: 'Tacos',
    price: 10.00,
    desc: 'Desc Tacos',
    longDesc: 'Long Desc Tacos',
    image: 'http://localhost:8080/tacos.jpg'
  },
  {
    id: 11,
    name: 'Toast',
    price: 11.00,
    desc: 'Desc Toast',
    longDesc: 'Long Desc Toast',
    image: 'http://localhost:8080/toast.jpg'
  }
]
