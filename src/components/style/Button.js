import styled from 'styled-components'

const Button = styled.button` // styled.button tells us that it is a button
    font-size: ${props => props.bigButton ? '2em' : 'initial'};
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: black;
      color: white;
      transition: all 0.5s ease-in-out;
    }
`

export default Button