import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { getStarshipDetails } from '../../services/sw-api';
import { Link } from 'react-router-dom'


const StarshipDetails = (props) => {

const [starshipDetails, setStarshipDetails]=useState({})
let location = useLocation()

useEffect(()=> {
  getStarshipDetails(location.state.starship.url)
  .then(starshipDetails=> setStarshipDetails(starshipDetails))
},[])

  return ( 
    <>
    {starshipDetails.length ?
    <>
    <h1>Starship detail </h1>
    <h2>{starshipDetails.name}</h2>
    <h2>{starshipDetails.model}</h2>
    <Link to="/">
    <button> Back </button>
    </Link>
    </>
    :
    <>
    <h2>Loading details...</h2>
    </>}
    </>
    )
}
 
export default StarshipDetails;