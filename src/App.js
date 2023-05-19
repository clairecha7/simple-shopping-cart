import React, { useState } from "react"
import { data } from "./data"
import "./App.css"
function App() {
  const [products, setData] = useState(data)
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState("")
  const handleClick = (id, email) => {
    // const filtered = names.filter(i => i.id != id)

    // setData(filtered)
  }
  const handleDelete = (id) => {
    const filtered = products.filter(item => item.id != id)

    let total = 0
    for (let i of filtered) {
      total = total + i.count * i.price
    }
    setTotal(total)
    setData(filtered)

  }
  const handleIncrement = (id) => {
    const newData = [...products]
    for (let i of newData) {
      if (i.id === id) {
        i.count++
      }
    }
    let total = 0
    for (let i of newData) {
      total = total + i.count * i.price
      console.log(total)
    }
    setTotal(total)
    setData(newData)

  }
  const handleDecrement = (id) => {
    const newData = [...products]
    for (let i of newData) {
      if (i.id === id && i.count > 0) {
        i.count--
      }
    }
    let total = 0
    for (let i of newData) {
      total = total - i.count * i.price
      console.log(total)
    }
    setTotal(total)
    setData(newData)
  }
  const handleSearch = (event) => {
    setSearch(event.target.value)
  }
  const afterSearch = products.filter(item => item.name.toLocaleLowerCase().includes(search))
  return (
    <div className="App">
      <div className="header">
        <h3>Shopping cart</h3>
      </div>
      <div className="search">
        <input type="text" placeholder="search..." onChange={handleSearch} />
      </div>
      {
        afterSearch.map(product => {
          return (
            <div className="product">
              <img src={product.image} alt={product.name} />
              <p>{product.name} <br /> <span className="price">{product.price}$</span>
                <br />
                <span className="price">{product.count}</span>
                <br />
                <button className="price" onClick={() => handleDelete(product.id)}>delete</button>
              </p>
              <div className="incrDecr">
                <button onClick={() => handleIncrement(product.id)}>+</button>
                <button onClick={() => handleDecrement(product.id)}>-</button>
              </div>
            </div>
          )
        })
      }
      <div>
        {products.length === 0 ? <h2>No items left</h2> : ""}
      </div>
      <div className="footer">
        <h3>Total: {total} $</h3>
      </div>
    </div>
  );
}

export default App;
