import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import theme from '../theme'
import { Action, Permissions } from './IconInfo'

const Info = ({ children, title, ...props }) => (
  <Main {...props}>
    {title && <Title>{title}</Title>}
    {children}
  </Main>
)
Info.propTypes = {
  background: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.node,
}
Info.defaultProps = {
  background: theme.infoBackground,
}

const Main = styled.section`
  background: ${({ background }) => background};
  padding: 15px;
  border-radius: 4px;
  word-wrap: break-word;
`

const Title = styled.h1`
  display: flex;
  margin-top: 0px; // needed to overwrite bootstrap.css
`

Info.Action = Action
Info.Permissions = Permissions

export default Info
