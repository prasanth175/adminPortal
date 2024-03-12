import React, { Component } from 'react'
import './index.css'
import ProductContext from '../../context/ProductContext'
import { Link } from 'react-router-dom'
import SideNavbar from '../SideNavbar'

class AddProduct extends Component  {
    state = {
        mobileName: '',
        price: '',
        description: '',
        stackCount: '',
        model: '',
        manufacturedBy: '',
        releaseYear: '',
        image: null,
      }

    onMobileName = event => this.setState({title: event.target.value})
    
    onPrice = event => this.setState({title: event.target.value})

    onStackCount = event => this.setState({title: event.target.value})

    onDescription = event => this.setState({title: event.target.value})

    onManufacturer = event => this.setState({title: event.target.value})

    onModel = event => this.setState({title: event.target.value})

    onReleaseYear = event => this.setState({title: event.target.value})

    onFile = event => {
        const image = event.target.files[0]
        const reader = new FileReader()
        reader.onload = () => {
          this.setState({image: reader.result})
        }
        reader.readAsDataURL(image)
      }


    render(){
        return (
            <ProductContext.Consumer>
                {value => {
                    const {addNewProduct} = value
                    const {mobileName,price,description,stackCount,model,manufacturedBy,releaseYear,image} = this.state 

                    const submitSellForm = (e) => {
                        e.preventDefault()
                        console.log(image)
                        addNewProduct(mobileName,price,description,stackCount,model,manufacturedBy,releaseYear,image)
                      }

                return (
                    <div className='common-container'>
                        <SideNavbar />
                        <div className='add-product-container'>
            <div className='add-product-top-container'>
            <h1 className="add-book-heading">Add New Product</h1>
            <Link to='/products'><button className='back-button'>Back</button></Link>
            </div>
            <form className="sell-book-form" onSubmit={submitSellForm}>
              <label htmlFor="titleInput" className="sell-label">
                Mobile Name: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="authorInput"
                className="sell-input"
                onChange={this.onMobileName}
              />
              <label htmlFor="titleInput" className="sell-label">
                Price: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="authorInput"
                className="sell-input"
                onChange={this.onPrice}
              />
              <label htmlFor="descInput" className="sell-label">
                Count in Stock: <span className="sell-star-txt">*</span>
              </label>
              <textarea
                type="text"
                id="descInput"
                className="sell-input"
                onChange={this.onStackCount}
              />
              <label
                htmlFor="publicationInput"
                className="sell-label"
                cols="100"
              >
                Description: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="publicationInput"
                className="sell-input"
                onChange={this.onDescription}
              />
              <label htmlFor="isbnInput" className="sell-label">
              Manufactured By: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="isbnInput"
                className="sell-input"
                onChange={this.onManufacturer}
              />
              <label htmlFor="printedInput" className="sell-label">
                Model: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="printedInput"
                className="sell-input"
                onChange={this.onModel}
              />
              <label htmlFor="sellingInput" className="sell-label">
                Release Year: <span className="sell-star-txt">*</span>
              </label>
              <input
                type="text"
                id="sellingInput"
                className="sell-input"
                onChange={this.onReleaseYear}
              />

              <label htmlFor="fileInput" className="sell-label">
                Product Image
              </label>
              <input id="fileInput" type="file" onChange={this.onFile} />
              <div className="sell-btn-container">
                <button type="submit" className="sell-submit-btn">
                  Submit
                </button>
                <button type="button" className="sell-clear-btn">
                  Clear
                </button>
              </div>
              {/* {fieldsErrorStatus && (
                <p className="sell-error-txt">{fieldsErrorTxt}</p>
              )} */}
              {/* {showMsgStatus && (
                <div className={isSuccess ? 'success-txt' : 'failure-txt'}>
                  <p className="msg-txt">{showMsgTxt}</p>
                </div>
              )} */}
            </form>
            </div>
                    </div>
                    )
                }}
            </ProductContext.Consumer>
        ) 
    }
}

export default AddProduct