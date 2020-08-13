import React, { useState, useEffect } from 'react'
import { BASE_URL, API_KEY } from '../constants'
import axios from 'axios'
import styled, {keyframes} from 'styled-components'
import Button from './style/Button'

const kf = keyframes`
  0%{
    transform: scale(0.7);
  }
  50%{
    transform: scale(0.3);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const StyledDetails = styled.div`
  background-color: ${props => props.alert ? 'red' : 'lightblue'};
  transform: scale(0); 
  animation: ${kf} 1s ease-in-out forwards;
  /* button {
    font-size: ${props => props.bigButton ? '2em' : 'initial'};
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: black;
      color: white;
      transition: all 0.5s ease-in-out;
    }
  } */

  h2 {
    color: red;
  }

  p {
    color: green;ß

    &:hover{
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
    <StyledDetails alert={false} className='container'>
      <h2>Details:</h2>
      {
        details &&
        <>
          <p>{details.name} is {details.age}</p>
          <p>email is {details.email}</p>
          <p className='the-paragraph'>Hello There</p>
          {name} likes:
          <ul>
            {
              details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
            }
          </ul>
        </>
      }
      <Button bigButton onClick={close}>Close</Button>
    </StyledDetails>
  )
}
