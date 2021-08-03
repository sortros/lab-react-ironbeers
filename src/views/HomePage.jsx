import React from 'react'
import { Link } from 'react-router-dom';

import allBeersImage from './../assets/beers.png'
import randomBeerImage from './../assets/random-beer.png'
import addNewBeerImage from './../assets/new-beer.png'


function HomePage() {
    return (
        <>
        <main>
            <section>
                <Link to='/beers'>
                    <img src={allBeersImage} alt="All beers list" />
                    <div>
                      <h1>All Beers</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate, massa quis rutrum rhoncus, magna risus commodo urna, 
                       eget facilisis purus risus fermentum metus. Ut et leo mauris.</p>
                    </div>
                </Link>
            </section>
            <section>
                 <Link to='/random-beer'>
                    <img src={randomBeerImage} alt="Random beer selection"/>
                    <div>
                       <h1>Random Beer</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate, massa quis rutrum rhoncus, magna risus commodo urna, 
                        eget facilisis purus risus fermentum metus. Ut et leo mauris.</p>
                    </div>
                </Link>
            </section>
            <section>
                <Link to='/new-beer'>
                    <img src={addNewBeerImage} alt="Add a new beer to the list"/>
                    <div>
                        <h1>Add a New Beer</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vulputate, massa quis rutrum rhoncus, magna risus commodo urna, 
                        eget facilisis purus risus fermentum metus. Ut et leo mauris.</p>
                    </div>
                </Link>
            </section>
        </main>
        </>
    )
}

export default HomePage