import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';


export class NewBeerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tagline: '',
            description: '',
            first_brewed: '',
            brewers_tips: '',
            attenuation_level : Number(''),
            contributed_by: '',
            newBeerAdded: false,
        }

    }

    handleInput = (event) => {
        const { value, name } = event.target;

        this.setState({
            [name] : value,
        })
    }

    handleAddBeer = (event) => {
        event.preventDefault();
        const newBeer = {...this.state};

        this.setState({
            newBeerAdded: 'on process',
        })
        
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(() => {
                console.log('new beer has been added', newBeer)
                this.setState({
                    newBeerAdded: true,
                })
            })
            .catch(error => console.log(error))
    }

    render() {
        const { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by, newBeerAdded } = this.state;
        return (
         <>
            <Header />
            <main>
                { newBeerAdded === 'on process' && <p>Your beer is being added to the list. Thanks for contribuiting <span role='img' aria-label="clinking beer mugs">🍻</span></p>}
                
                { newBeerAdded === true && 
                    <div>
                     <p>Your beer has been <strong>successfully added</strong><span role='img' aria-label="clinking beer mugs">🍻</span></p>
                     <button><Link to='/'>Go to Home Page</Link></button>
                     <button><Link to='/new-beer'>Add a New Beer</Link></button>
                    </div>
                }

                { newBeerAdded === false && 
                <form>
                    <label htmlFor="name">Name</label>
                    <br></br>
                    <input type="text" id="name" name="name" value={name} onChange={this.handleInput}/>
                    <br></br>

                    <label htmlFor="tagline">Tagline</label>
                    <br></br>
                    <input type="text" id="tagline" name="tagline" value={tagline} onChange={this.handleInput}/>
                    <br></br>

                    <label htmlFor="description">Description</label>
                    <br></br>
                    <textarea type="text" rows="10" cols="30"id="description" name="description" value={description} onChange={this.handleInput}/>
                    <br></br>

                    <label htmlFor="tagline">First Brewed</label>
                    <br></br>
                    <input type="text" id="first_brewed" name="first_brewed" value={first_brewed} onChange={this.handleInput}/>
                    <br></br>

                    <label htmlFor="brewers_tips">Brewers Tips</label>
                    <br></br>
                    <input type="text" id="brewers_tips" name="brewers_tips" value={brewers_tips} onChange={this.handleInput}/>
                    <br></br>

                    <label htmlFor="attenuation_level">Attenuation Level</label>
                    <br></br>
                    <input type="number" id="attenuation_level" name="attenuation_level" value={attenuation_level} onChange={this.handleInput}/>
                    <br></br>
                    
                    <label htmlFor="contributed_by">Contributed By</label>
                    <br></br>
                    <input type="text" id="contributed_by" name="contributed_by" value={contributed_by} onChange={this.handleInput}/>
                    <br></br>

                    <button type="submit" onClick={this.handleAddBeer}> Add new </button>
                    
                </form>
            }
            </main>
        </>
        )
    }
}

export default NewBeerPage