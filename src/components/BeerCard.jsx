import React from 'react'
import { Link } from 'react-router-dom';



function BeerCard(props) {
    const creatorNameCleaned = (creator) => {
        const symbol = creator.indexOf('<');
        const cleanedName = creator.slice(0, symbol)
        return cleanedName
    }

    const { image_url, name, tagline, contributed_by, _id } = props.beerDetails;

    return (
        <Link to={`/beers/${_id}`}>
            <section>
                    <div>
                        <img src={image_url} alt={name} />
                    </div>
                    <div>
                        <h1>{name}</h1>
                        <p>{tagline}</p>
                        <p><strong>Created by:</strong> {creatorNameCleaned(contributed_by)}</p>
                    </div>
            </section>
        </Link>
    )
}

export default BeerCard