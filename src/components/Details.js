import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import styled from 'styled-components'
import axios from 'axios'

const red = 'crimson'

// OUTSIDE OF THE COMPONENT!!!!!!!!!!!!!!!!!!!!!!
const StyledDetails = styled.div`
  /* this applies to the div */
  background-color: ${pr => pr.alert ? 'red' : 'lightblue'};

  button {
    font-size: ${pr => pr.bigButton ? '2em' : 'initial'};
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: black;
      color: white;
      transition: all 0.2s ease-in-out;
    }
  }

  h2 {
    color: ${red};
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

  .the-paragraph {
    color: purple;
  }

  ul {
    li {
      color: yellow;

      &:hover {
        color: pink;
      }
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
    <StyledDetails alert={props.alert} id='detailsView' className='container'>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.age}</p>
          <p>email is {details.email}</p>
          <p className="the-paragraph">hello there</p>
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
