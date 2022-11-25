// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  height: 100vh;
  background-size: cover;
`
export const Img = styled.img`
  height: 200px;
  width: 200px;
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  color: white;
  text-align: center;
`
export const Button = styled.button`
  background-color: #06b6d4;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
`
