import React, {Component} from 'react'

class Product extends Component {
    render(){
        const {image_url, name, price} = this.props.product
        return(
            <div>
                <img src={image_url} alt='product' />
                <p>{name}</p>
                <p>{price}</p>
            </div>
        )
    }
}

export default Product