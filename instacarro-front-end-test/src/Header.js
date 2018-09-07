import React, { Component } from 'react';
import logo from './assets/logo.png'

class Header extends Component {

    render() {
        return <div>
            <header id="navigation" class="p-navigation" style={{ 'background-color': '#ffffff', 'font-family': '‘Open Sans’' }}>
                <div class="p-navigation__banner">
                    <div class="p-navigation__logo">
                        <a class="p-navigation__link" href="#">
                            <img class="p-navigation__image" src={logo} alt="" width="95"></img>
                        </a>
                    </div>
                    <a href="#navigation" class="p-navigation__toggle--open" title="menu">Menu</a>
                    <a href="#navigation-closed" class="p-navigation__toggle--close" title="close menu">Close menu</a>
                </div>
                <nav class="p-navigation__nav" role="menubar">
                    <form class="p-search-box" action="/search">
                        <input type="search" class="p-search-box__input" name="q" placeholder="Search" required="" />
                        <button type="reset" class="p-search-box__reset" alt="reset"><i class="p-icon--close"></i></button>
                        <button type="submit" class="p-search-box__button" alt="search"><i class="p-icon--search"></i></button>

                    </form>
                    <span class="u-off-screen">
                        <a href="#main-content">Jump to main content</a>
                    </span>
                    <ul class="p-navigation__links" role="menu">
                        <li class="p-navigation__link is-selected" role="menuitem">
                            <a href="#">Link1</a>
                        </li>
                        <li class="p-navigation__link" role="menuitem">
                            <a href="#">Link2</a>
                        </li>
                        <li class="p-navigation__link" role="menuitem">
                            <a href="#">Link3</a>
                        </li>
                    </ul>
                </nav>
            </header></div>
    }

}

export default Header;
