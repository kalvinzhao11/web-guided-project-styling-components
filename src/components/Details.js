import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import styled from 'styled-components'
import axios from 'axios'

// OUTSIDE OF THE COMPONENT!!!!!!!!!!!!!!!!!!!!!!
const StyledDetails = styled.div`
  /* this applies to the div */
  background-color: lightblue;

  h2 {
    color: red;
  }

  p {
    color: green;

    &:hover {
      color: pink;
    }

    &:nth-of-type(2) {
      color: blue;
    }
  }
`

export default function Details(props) {
  const { friendId, close } = props
  const [details, setDetails] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}/friends/${friendId}?api_key=${API_KEY}`)
      .then(res => { setDetails(res.data) })
      .catch(err => { debugger }) // eslint-disable-line
  }, [friendId])

  return (
    <StyledDetails id='detailsView' className='container'>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.age}</p>
          <p>email is {details.email}</p>
          {name} likes:
          <ul>
            {
              details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </>
      }
      <button big onClick={close}>Close</button>
    </StyledDetails>
  )
}
