import React, { useState } from 'react'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    MenuFootIcon,
    MenuXIcon
 } from './Navbar.styled'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [logo, setLogo] = useState(true)

    const handleClick = () => setClick(!click)
    return (
        <>
           <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onMouseOver={() => setLogo(!logo)} onMouseOut={() => setLogo(true)}>
                        <h2>Art Dental</h2>
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <MenuXIcon /> : <MenuFootIcon />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/hallOfFame'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/createPlayer'>Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>   
           </Nav> 
        </>
    )
}

export default Navbar