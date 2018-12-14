import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

import House from '../house/House'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            houses: []
        }
        this.getHouses = this.getHouses.bind(this)

    }

    componentDidMount() {
        this.getHouses()
    }

    getHouses() {
        axios.get('/api/houser').then(res => {
            this.setState({
                houses: res.data
            })
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/houser/${id}`).then(res => {
            this.setState({
                houses: res.data
            })
            this.getHouses()
        })
    }


    render() {
        const { houses } = this.state
        const houseDisplay = houses.map(house => {
            return (
                <House
                    deleteHouse={(id) => this.deleteHouse(id)}
                    id={house.id}
                    name={house.name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zip={house.zip}
                />
            )
        })
        return (
            <div>
                <Link to='/wizard'>
                    <button>Add To Property List</button>
                </Link>
                {houseDisplay}
            </div>
        )
    }
}