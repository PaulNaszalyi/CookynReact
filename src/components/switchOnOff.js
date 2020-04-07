import React from 'react'
import styled from 'styled-components'
import HorizontalAlignDiv from "./horizontalAlignDiv"

const CheckBoxLabel = styled.label`
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: ${props => (props.language) ? '#1c93be' : props.theme.textColor};
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 4px;
    background: ${props => props.theme.backgroundColor};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`

const CheckBox = styled.input`
  display: none;
  z-index: 1;
  border-radius: 15px;
  width: auto;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${props => (props.language) ? '#be485a' : props.theme.textColor};
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

const Span = styled.span`
  letter-spacing: 1px;
`

const SwitchOnOff = ({
                         id = "checkbox",
                         spanLeft = "",
                         spanRight = "",
                         defaultChecked = null,
                         onClick = null,
                         language = false
                     }) => {
    return (
        <HorizontalAlignDiv content={
            <>
                <Span>{spanLeft}</Span>
                <CheckBox id={id}
                          type="checkbox"
                          defaultChecked={defaultChecked}
                          onClick={onClick}
                          language={language}
                />
                <CheckBoxLabel htmlFor={id} language={language}/>
                <Span>{spanRight}</Span>
            </>
        }
        />

    )
}

export default SwitchOnOff
