import {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import { v4 as uuid4 } from 'uuid';

import './App.css'
import Product from './components/Product'
import Dashboard from './components/Dashboard'
import ProductContext from './context/ProductContext'
import AddProduct from './components/AddProduct';

class App extends Component {

  state = {
    productsList: [
      {
          "id": uuid4(),
          "MobileName": "iPhone 13 Pro Max",
          "Cost": "$1099",
          "Model": "A2643",
          "InStock": true,
          "Manufacturer": "Apple",
          "ReleaseYear": 2021
      },
      {
          "id": uuid4(),
          "MobileName": "Samsung Galaxy S21",
          "Cost": "$799",
          "Model": "SM-G991U",
          "InStock": true,
          "Manufacturer": "Samsung",
          "ReleaseYear": 2021
      },
      {
          "id": uuid4(),
          "MobileName": "Google Pixel 6 Pro",
          "Cost": "$899",
          "Model": "GD1YQ",
          "InStock": true,
          "Manufacturer": "Google",
          "ReleaseYear": 2021
      },
      {
          "id": uuid4(),
          "MobileName": "OnePlus 9 Pro",
          "Cost": "$969",
          "Model": "LE2110",
          "InStock": false,
          "Manufacturer": "OnePlus",
          "ReleaseYear": 2021
      },
      {
          "id": uuid4(),
          "MobileName": "Xiaomi Mi 11 Ultra",
          "Cost": "$999",
          "Model": "M2102K1G",
          "InStock": true,
          "Manufacturer": "Xiaomi",
          "ReleaseYear": 2021
      },
      {
          "id": uuid4(),
          "MobileName": "Huawei P50 Pro",
          "Cost": "$1199",
          "Model": "PREM-AN00",
          "InStock": false,
          "Manufacturer": "Huawei",
          "ReleaseYear": 2021
      },
      {
          "id": uuid4(),
          "MobileName": "Sony Xperia 1 III",
          "Cost": "$1299",
          "Model": "XQ-BC72",
          "InStock": true,
          "Manufacturer": "Sony",
          "ReleaseYear": 2021
      },
      {
          "id": uuid4(),
          "Mobile Name": "LG Velvet 2 Pro",
          "Cost": "$899",
          "Model": "LM-V710EMW",
          "InStock": true,
          "Manufacturer": "LG",
          "ReleaseYear": 2021
      },
      {
          "id": uuid4(),
          "MobileName": "Motorola Edge 20 Pro",
          "Cost": "$699",
          "Model": "XT2153-1",
          "InStock": true,
          "Manufacturer": "Motorola",
          "ReleaseYear": 2021
      },
      {
          "id": uuid4(),
          "MobileName": "ASUS ROG Phone 5",
          "Cost": "$999",
          "Model": "ZS673KS",
          "InStock": false,
          "Manufacturer": "ASUS",
          "ReleaseYear": 2021
      }
  ],
  }

  addNewProduct = (mobileName,price,description,stackCount,model,manufacturedBy,releaseYear,image) => {
    console.log('here')
    const newProduct = {
          "id": uuid4(),
          "MobileName": mobileName,
          "Cost": price,
          "Model": model,
          "InStock": stackCount,
          "Manufacturer": manufacturedBy,
          "ReleaseYear": releaseYear,
          "description": description}
   this.setState(prevState => ({productsList: [...prevState.productsList, newProduct]}))
  }

  render() {
    const productsList = this.state
    console.log(productsList)
    return (
      <ProductContext.Provider
      value={{
        productsList,
        addNewProduct: this.addNewProduct
      }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/products" element={<Product />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </ProductContext.Provider>
    )
  }
}

export default App