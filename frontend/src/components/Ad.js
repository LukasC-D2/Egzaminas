import React from 'react'
import { Link } from 'react-router-dom'

const Ad = ({ ad }) => {
    return (
      <Link to={`/ads/${ad.id}`} >
              <div>
                  <div>
                      <p>{ad.title}</p>
                  </div>
              </div>
              <div>
                  <p><i></i> {ad.description}</p>
                  <p><i></i> {ad.category}</p>   
              </div>
          </Link>
    )
  }

export default Ad