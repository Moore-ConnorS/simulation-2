import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'

class Wizard extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleName(e) {
        this.setState({
            name: e.target.value
        })
    }

    handleAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    handleCity(e) {
        this.setState({
            city: e.target.value
        })
    }

    handleState(e) {
        this.setState({
            state: e.target.value
        })
    }

    handleZip(e) {
        this.setState({
            zip: e.target.value
        })
    }

    addHouse() {
        const { name, address, city, state, zip } = this.state
        const house = {
            name: name,
            address: address,
            city: city,
            state: state,
            zip: zip
        }
        axios.post('/api/houser', house).then(res => {
            this.setState({
                inventory: res.data
            })
        })

    }

    render() {
        return (
            <div>
                <h1>Add New Listing</h1>
                <Link to='/'>
                    <button>Cancel</button>
                </Link>
                <div>
                    Property Name: <input onChange={(e) => this.handleName(e)} />
                </div>
                <div>
                    Address: <input onChange={(e) => this.handleAddress(e)} />
                </div>
                <div>
                    City: <input onChange={(e) => this.handleCity(e)} />
                    State: <input onChange={(e) => this.handleState(e)} />
                    Zip: <input onChange={(e) => this.handleZip(e)} />
                </div>
                <Link to='/'>
                    <button onClick={() => this.addHouse()}>Complete Listing</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        inventory: state.inventory
    }
}

export default connect(mapStateToProps)(Wizard)