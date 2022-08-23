import React from 'react'
import { Container } from 'reactstrap'

const Footer = () => {
  return (
    <Container
    fluid
    tag="footer"
    className="text-center bg-dark text-secondary fixed-bottom p-2">
      ⓒ GitFire by dontDude
    </Container>
  )
}

export default Footer;