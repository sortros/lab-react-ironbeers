import React, { Component } from 'react'
import Header from '../components/Header'
import axios from 'axios';
import SingleBeerDetails from '../components/SingleBeerDetails';


export class RandomBeerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beerDetails: {},
            status: 'loading'
        }
    }

    getRamdomBeer = (beerList) => {
        return Math.floor(Math.random() * ((beerList.length - 1) - 0 + 1) + 0);
    }


    componentDidMount = () => {
        axios
            .get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                const randomBeer = this.getRamdomBeer(response.data);

                this.setState({
                    beerDetails: response.data[randomBeer],
                    status: 'loaded'
                })
            })
            .catch((e) => console.log(e))
    }

    render() {
        const { beerDetails, status } = this.state;

        return (
            <>
             <Header />
             <main>
                { status === 'loading' && <p>Data is loading...</p>}
                { status === 'loaded' && <SingleBeerDetails beerDetails={beerDetails} key={beerDetails._id} />} 
             </main>
            </>
        )
    }
}

export default RandomBeerPage