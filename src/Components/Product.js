import React, {Component} from 'react'
import axios from 'axios'

class Product extends Component {

    handleDelete(id){
        axios.delete(`/api/inventory/${id}`)
        .then(res => {
            this.props.deleteProduct(res.data)
        })
    }

    render(){
        console.log(this.props.product)
        const {image_url, name, price, products_id} = this.props.product
        return(
            <div>
                <img src={image_url} alt='product' />
                <p>{name}</p>
                <p>{price}</p>
                <button onClick={() => this.handleDelete(products_id )}>DELETE</button>
            </div>
        )
    }
}

export default Product