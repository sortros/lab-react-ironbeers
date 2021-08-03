import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import SingleBeerDetails from '../components/SingleBeerDetails';

export class SingleBeerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beerDetails: {},
            status: 'loading'
        }
    }

    componentDidMount = () => {
        const { beerId } = this.props.match.params;
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => {
                console.log(response.data)
                this.setState({
                    beerDetails: response.data,
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
                { status === "loading" && <p>Data is loading...</p>}
                { status === "loaded" && < SingleBeerDetails beerDetails={beerDetails} key={beerDetails._id}/>}                
              </main>
            </>
        )
    }
}

export default SingleBeerPage