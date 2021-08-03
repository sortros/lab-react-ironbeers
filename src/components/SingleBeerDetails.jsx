import React from 'react'

function SingleBeerDetails(props) {
    const { beerDetails } = props;

    const creatorNameCleaned = (creator) => {
        const symbol = creator.indexOf('<');
        const cleanedName = creator.slice(0, symbol)
        return cleanedName
    }

    return (
        <div>
            <div>
              <img src={beerDetails.image_url} alt={beerDetails.name} /> 
            </div> 
            <div>
                <div>
                 <h1>{beerDetails.name}</h1>
                 <p>{beerDetails.tagline}</p>
                </div>
                <div>
                 <p>{beerDetails.attenuation_level}</p>
                 <p>{beerDetails.first_brewed}</p>
                </div>
            </div>
            <p>{beerDetails.description}</p>
            <p>{creatorNameCleaned(beerDetails.contributed_by)}</p>
        </div>
    )
}

export default SingleBeerDetails