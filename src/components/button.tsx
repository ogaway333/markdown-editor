import * as React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: dodgerblue;
  border: none;
  box-shadow: none;
  color: white;
  font-size: 1rem;
  height: 2rem;
  min-width: 5rem;
  padding: 0 1rem;

  &.cancel {
    background: white;
    border: 1px solid gray;
    color: gray;
  }
`

interface Props {
  cancel?: boolean //?はcancelというパラメーターを指定しなくても良いという意味
  children: string
  onClick: () => void
}

//引数propsはProps型
export const Button: React.FC<Props> = (props) => (
  <StyledButton onClick={props.onClick} className={props.cancel?'cancel':''}>
    {props.children}
  </StyledButton>
)