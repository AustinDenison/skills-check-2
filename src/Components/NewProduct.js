import React, {Component} from 'react'
import axios from 'axios';

class NewProduct extends Component{
    constructor(){
        super()

        this.state = {
                imageUrl: '',
                productName: '',
                productPrice: 0       
        }
        this.handleChange1 = this.handleChange1.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleChange3 = this.handleChange3.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleChange1(value){
        this.setState({
            imageUrl: value
        })
    }

    handleChange2(value){
        this.setState({
            productName: value
        })
    }

    handleChange3(value){
        this.setState({
            productPrice: value
        })
    }

    handleClick(imageUrl, productName, productPrice){
        axios.post('/api/inventory', {imageUrl, productName, productPrice})
        .then(res => {
            this.props.updateInventory(res.data)
        })
    }

    handleCancel(){
        this.setState({
            imageUrl: '',
            productName: '',
            productPrice: 0
        })
    }

    render(){
        return(
            <div>
                <input className='imgInput' onChange={e => this.handleChange1(e.target.value)}/>
                <input className='nameInput' onChange={e => this.handleChange2(e.target.value)}/>
                <input className='priceInput' onChange={e => this.handleChange3(e.target.value)}/>
                <button onClick={() => this.handleCancel(this.state.imageUrl, this.state.productName, this.state.productPrice)}>Cancel</button>
                <button onClick={() => this.handleClick(this.state.imageUrl, this.state.productName, this.state.productPrice) }>Add to Inventory</button>
            </div>
        )
    }
}

export default NewProduct