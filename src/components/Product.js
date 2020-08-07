import React from 'react'

const Product = (props) => {
    const { name, imgurl, price, deleteProduct, id, toggle, setSelected } = props
    console.log('heyyoo',props)
    return (
        <div >
            <div className='product-container'>
            <div>  <img src={imgurl} alt={name} /> </div>
            <div>{name}</div>
                <div>{price}</div>
                <div className="product-button-container">
                    <button onClick={() => deleteProduct(id) }>Delete</button>
                    <button onClick={() => setSelected(id)}>Edit</button>
                    

                </div>
            </div>
            
        </div>
    )
}

export default Product
