import React from 'react'
import Product from './Product'
import axios from 'axios'

const Dashboard = (props) => {

    const { toggle, setSelected } = props

    function deleteProduct(id) {
const { getInventory }= props
        axios.delete(`/api/product/${id}`)
            .then(() => {
            getInventory()
        })
    }



    const { inventory } = props
    const inventoryList = inventory.map((boot, i) => (
        <Product key={i} {...boot} deleteProduct={deleteProduct} toggle={toggle} setSelected={setSelected}/>
    ))
    return (
        <div>
           {inventoryList} 
        </div>
    )
}

export default Dashboard
