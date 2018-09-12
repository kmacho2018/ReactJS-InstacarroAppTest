import React, { Component } from 'react';
import logo from './assets/logo.png'
import phone from './assets/phone.png'
import user from './assets/user.png'
import caret from './assets/caret.png'

class Header extends Component {

    render() {
        return <div>
            <header id="navigation" className="p-navigation" style={{ backgroundColor: '#ffffff', fontFamily: '‘Open Sans’' }}>
                <div className="p-navigation__banner">
                    <div className="p-navigation__logo">
                        <a className="p-navigation__link" href="#">
                            <img className="p-navigation__image" src={logo} style={{ height: '100%', width: '70%' }}></img>
                        </a>
                    </div>
                    <a href="#navigation" className="p-navigation__toggle--open" title="menu">Menu</a>
                    <a href="#navigation-closed" className="p-navigation__toggle--close" title="close menu">Close menu</a>
                </div>
                <nav className="p-navigation__nav" role="menubar" style={{ height: '60px' }}>
                    <table>
                        <tbody>
                            <tr style={{ borderTop: 'none' }}>
                                <td style={{ width: '2%' }}></td>
                                <td rowSpan="2" style={{ width: '30%', borderLeft: '2px solid #e4e4e4' }}><img src={phone}></img> <span style={{ position: 'absolute', padding: '1%' }}>(11)3569-3465</span></td>
                                <td style={{ width: '80%' }}></td>
                                <td style={{ width: '10%', padding: '0', margin: '0' }}>
                                    <img src={user}></img>
                                    <br>
                                    </br>
                                    <span>User Test</span>
                                </td>

                                <td style={{ width: '10%' }}>
                                    <img src={caret} style={{ top: '4px', position: 'absolute' }}></img>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </nav>
            </header>
        </div >
    }
}

export default Header;
