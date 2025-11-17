import React from 'react'
import Products from './components/Products'
import phone from './assets/iphone.png'
import laptop from './assets/laptop.png'
import tab from './assets/tab.png'
import ComA from './components/ComA'
import ComB from './components/ComB'
import ComC from './components/ComC'
import ComD from './components/ComD'
import ArrayMethods from './components/ArrayMethods'
import FilterReduce from './components/FilterReduce'

const App = () => {

  let a= 10;
  let arr = [1,2,3,4,5];
  let obj = {name: "John", age: 30};
  let arrObj = [
    {name:"iphone" , price: "$899", img: phone},
    {name:"laptop" , price: "$1299", img: laptop},
    {name:"tab" , price: "$499", img: tab},
    {name:"iphone" , price: "$899", img: phone},
    {name:"laptop" , price: "$1299", img: laptop},
  ];

  let shopping =[
    {id:1, product:"iphone", price:999, category:"electronics"},
    {id:2, product:"jeans", price:49, category:"clothing"},
    {id:3, product:"blender", price:79, category:"home appliances"},
    {id:4, product:"t-shirt", price:19, category:"clothing"},
    {id:5, product:"laptop", price:1299, category:"electronics"},
    {id:6, product:"microwave", price:99, category:"home appliances"},
  ]

  return (
    <>
      {/* <Products name="iphone" price="$899" img={phone} />
      <Products name="laptop" price="$1299" img={laptop} />
      <Products name="tab" price="$499" img={tab} />

      <ComA a={a}/>

      <ComB obj={obj}/>

      <ComC arr={arr} />

      <ComD arrObj={arrObj} /> */}

      {/* <ArrayMethods /> */}

      <FilterReduce shopping={shopping} />
      
    </>
  )
}

export default App
