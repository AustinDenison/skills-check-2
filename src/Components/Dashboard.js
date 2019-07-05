import React, {Component} from 'react'
import Product from './Product'

class Dashboard extends Component {
    render(){
        return(
            <div>
                {this.props.inventory.map(product => {
                    return(
                        <Product key={product.id} product={product} />
                    )
                })}
            </div>
        )
    }
}

export default Dashboard