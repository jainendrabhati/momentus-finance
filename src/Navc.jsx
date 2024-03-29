import React from 'react';
import {Navbar, Nav, Container, NavItem} from 'react-bootstrap';
const NavbarComp = () =>
        <Navbar>
            <Container>
                <Navbar.Brand href="/">Logo</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <NavItem>
                            <Link href='/home'>Who we are</Link>
                        </NavItem>
                        <NavItem>
                            <Link href='/parter'>Who we are</Link>
                        </NavItem>
                        <NavItem>
                            <Link href='/Emi_calculator'>Who we are</Link>
                        </NavItem>
                        <NavItem>
                            <Link href='/values'>Solution</Link>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

export default NavbarComp;