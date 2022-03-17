import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllStarships } from '../../services/sw-api'


const Starship = () => {
  const [starships, setStarships] = useState([

  ])

  useEffect(()=> {
    getAllStarships()
    .then(starshipData => setStarships(starshipData.results))
  }, [])


  return (
    <>
      <div className="container">
        {starships.length ?
          <>
            {starships.map((starship) =>
              <div  className="starship" key={starship.name}>
                <Link to="/starship-detail"
                      state={{starship}}
                >
                  {starship.name}
                </Link>
              </div>
            )}
          </>
          :
          <>
            <h2>Loading starships...</h2>
          </>}
      </div>
    </>
  );
}
 
export default Starship;