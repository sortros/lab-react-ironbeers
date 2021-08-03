import React, { Component } from 'react'
import Header from '../components/Header'
import axios from 'axios';
import BeerCard from '../components/BeerCard';


export class BeersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beersList: [],
            status: 'loading'
        }
    }

    componentDidMount = () => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                this.setState({
                    beersList: response.data,
                    status: 'loaded'
                })
            })
            .catch((e) => console.log(e))
    }


    render() {
        const { beersList, status } = this.state;

        return (
            <>
             <Header />
             <main>
                { status === 'loading' && <p>Data is loading...</p>}
                { status === 'loaded' && beersList.map((beer, index) => {
                    return (
                        < BeerCard  beerDetails={beer} key={index}/>
                    )
                })}
             </main>
            </>
        )
    }
}

export default BeersPage