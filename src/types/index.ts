export interface Product {
    id:string,
    desc:string,
    categories:string,
    color:string,
    dimensions:string,
    images:string[],
    name:string,
    new:boolean,
    price:string,
    sizes:string,
    storage:string,
    tags:string,
    type:string,
    weight:string,
    added:boolean
}

export interface User{
    id:string,
    cart:Product[],
    email:string,
    orders:string[],
    password:string,
    uid:string,
    role:string,
    username:string,
    wishlist:Product[]
}

export interface CartProduct extends Product {
    quantity:number
}

export interface SingleProduct{
    product:Product
  }

  export type OrderProduct ={
    name:string,
    price:string,
    quantity:number
  }

  export type Orders = {
    id?:string,
    address:string,
    city:string,
    date:string,
    dateModified:string,
    email:string,
    firstname:string,
    lastname:string,
    notes?:string,
    orderNumber:number,
    paymentmethod:string,
    phone:number | string,
    postcode:string,
    products: Product[],
    region:string,
    shipping:string,
    status:string,
    subtotal:number,
    totalPrice:string
  }
  