import React, { Component } from 'react'

import './index.css'
import ProductItem from '../ProductItem';
import ProductContext from '../../context/ProductContext';
import { Link } from 'react-router-dom';
import SideNavbar from '../SideNavbar';

class Product extends Component {

//     productsData = [
//     {
//         "id": uuid4(),
//         "MobileName": "iPhone 13 Pro Max",
//         "Cost": "$1099",
//         "Model": "A2643",
//         "InStock": true,
//         "Manufacturer": "Apple",
//         "ReleaseYear": 2021
//     },
//     {
//         "id": uuid4(),
//         "MobileName": "Samsung Galaxy S21",
//         "Cost": "$799",
//         "Model": "SM-G991U",
//         "InStock": true,
//         "Manufacturer": "Samsung",
//         "ReleaseYear": 2021
//     },
//     {
//         "id": uuid4(),
//         "MobileName": "Google Pixel 6 Pro",
//         "Cost": "$899",
//         "Model": "GD1YQ",
//         "InStock": true,
//         "Manufacturer": "Google",
//         "ReleaseYear": 2021
//     },
//     {
//         "id": uuid4(),
//         "MobileName": "OnePlus 9 Pro",
//         "Cost": "$969",
//         "Model": "LE2110",
//         "InStock": false,
//         "Manufacturer": "OnePlus",
//         "ReleaseYear": 2021
//     },
//     {
//         "id": uuid4(),
//         "MobileName": "Xiaomi Mi 11 Ultra",
//         "Cost": "$999",
//         "Model": "M2102K1G",
//         "InStock": true,
//         "Manufacturer": "Xiaomi",
//         "ReleaseYear": 2021
//     },
//     {
//         "id": uuid4(),
//         "MobileName": "Huawei P50 Pro",
//         "Cost": "$1199",
//         "Model": "PREM-AN00",
//         "InStock": false,
//         "Manufacturer": "Huawei",
//         "ReleaseYear": 2021
//     },
//     {
//         "id": uuid4(),
//         "MobileName": "Sony Xperia 1 III",
//         "Cost": "$1299",
//         "Model": "XQ-BC72",
//         "InStock": true,
//         "Manufacturer": "Sony",
//         "ReleaseYear": 2021
//     },
//     {
//         "id": uuid4(),
//         "Mobile Name": "LG Velvet 2 Pro",
//         "Cost": "$899",
//         "Model": "LM-V710EMW",
//         "InStock": true,
//         "Manufacturer": "LG",
//         "ReleaseYear": 2021
//     },
//     {
//         "id": uuid4(),
//         "MobileName": "Motorola Edge 20 Pro",
//         "Cost": "$699",
//         "Model": "XT2153-1",
//         "InStock": true,
//         "Manufacturer": "Motorola",
//         "ReleaseYear": 2021
//     },
//     {
//         "id": uuid4(),
//         "MobileName": "ASUS ROG Phone 5",
//         "Cost": "$999",
//         "Model": "ZS673KS",
//         "InStock": false,
//         "Manufacturer": "ASUS",
//         "ReleaseYear": 2021
//     }
// ];

    

    render(){
        return (
            <ProductContext.Consumer>
      {value => {
        const {productsList} = value
        console.log(productsList.productsList)
        return (
            <div className='common-container'>
            <SideNavbar />
            <div className='products-container'>
                <div className='products-top-container'>
                    <h1 className='products-heading'>Products</h1>
                    <Link to='/addproduct' className="Link"><button className='create-product-btn'>Create new</button></Link>
                </div>

                <div className='filter-container'>
                    <input className='search-filter' type='search' placeholder='Search...' />

                    <div className='filter-right-container'>
                    <select>
                        <option>All Category</option>
                    </select>
                    
                    <select>
                        <option>Latest Added</option>
                    </select>
                    </div>
                </div>
        
                <ul className='products-bottom-container'>
                {productsList.productsList.map(each => (
                    <ProductItem item={each} key={each.id} />
                ))}
                </ul>
            </div>
            </div>
        )

      }}
    </ProductContext.Consumer>
          )
    }
}

export default Product
