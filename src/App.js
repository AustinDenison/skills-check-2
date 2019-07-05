import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard'
import axios from 'axios'
import NewProduct from './Components/NewProduct'


class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateInventory = this.updateInventory.bind(this)
  }

  componentDidMount(){ 
    axios.get('api/inventory')
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  updateInventory(newProduct){
    console.log(newProduct)
    this.setState({
      inventory: {...this.state.inventory, newProduct}
    })
  }
  

  render(){
    return(
      <div>
        <Dashboard inventory={this.state.inventory}/>
        <NewProduct updateInventory={this.updateInventory} />
      </div>
    )
  }
}

export default App;
