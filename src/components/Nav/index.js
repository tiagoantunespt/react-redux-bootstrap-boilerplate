import React from 'react'
import { connect } from 'react-redux'
import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = props => {
  return (
    <div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>React Boilerplate</Link>            
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to='/' exact>
              <NavItem>Home</NavItem>
            </LinkContainer>
            <LinkContainer to='/async' exact>
              <NavItem>Async</NavItem>
            </LinkContainer>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">Link Right</NavItem>
            <NavItem eventKey={2} href="#">Link Right</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = state => ({
  path: state.routing.location.pathname
})

export default connect(
  mapStateToProps,
  null
)(Navigation)