import styled from 'styled-components'

const Button = styled.button`
  font-size: ${pr => pr.bigButton ? '2em' : 'initial'};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: black;
    color: white;
    transition: all 0.2s ease-in-out;
  }
`

export default Button
