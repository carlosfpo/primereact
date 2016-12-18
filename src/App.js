    import React, {Component} from 'react';
    import {Link} from 'react-router';
    import './App.css';
    import 'font-awesome/css/font-awesome.css';

    class App extends Component {
            
        render() {
            return (
                <div className="layout-wrapper">
                    <div id="layout-sidebar">
                        <span className="layout-logo">
                            <a href="#" className="sidebar-logo">
                                <img alt="logo" src="showcase/resources/images/logo.png" />
                            </a>
                            <a href="#" id="menu-button-mobile">
                                <img alt="logo" src="showcase/resources/images/menuicon.svg"/>
                            </a>
                        </span>

                        <a>
                            <img alt="input" src="showcase/resources/images/mono/input.svg"></img>
                            <span>Input</span>
                        </a>
                        <div>
                            <Link to="/inputtext">&#9679; InputText</Link>
                        </div>

                         <a>
                            <img alt="button" src="showcase/resources/images/mono/button.svg"></img>
                            <span>Button</span>
                        </a>
                        <div>
                            <Link to="/button">&#9679; Button</Link>
                        </div>

                        <a>
                            <img alt="button" src="showcase/resources/images/mono/panel.svg"></img>
                            <span>Panel</span>
                        </a>
                        <div>
                            <Link to="/panel">&#9679; Panel</Link>
                            <Link to="/tabview">&#9679; TabView</Link>
                        </div>
                    </div>

                    <div id="layout-content">
                        <div id="topbar">
                            <a href="#" id="menu-button">
                                <img alt="logo" src="showcase/resources/images/menuicon.svg"/>
                            </a>

                            <a href="http://forum.primefaces.org/viewforum.php?f=35" className="topbar-link">
                                <img alt="mockosx" src="showcase/resources/images/community.svg" />
                                <span>Forum</span>
                            </a>

                            <span className="topbar-link" id="themeSwitcher">
                                <img alt="themeswitcher" src="showcase/resources/images/themeswitcher.svg" />
                                <span>Themes</span>
                                <div id="GlobalThemeSwitcher">
                                    <span>Premium Templates</span>
                                    <a href="http://www.primefaces.org/layouts/ultima-ng"><img src="showcase/resources/images/themeswitcher-ultima.png" alt="Ultima Template" /><span className="ui-text">Ultima</span></a>
                                    <a href="http://www.primefaces.org/layouts/omega-ng"><img src="showcase/resources/images/themeswitcher-omega.png" alt="Omega Template" /><span className="ui-text">Omega</span></a>
                                    <span>Free Themes</span>
                                    <a href="#" data-theme="omega" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-omega"></span><span className="ui-text">Omega</span></a>
                                    <a href="#" data-theme="bootstrap" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-bootstrap"></span><span className="ui-text">Bootstrap</span></a>
                                    <a href="#" data-theme="aristo" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-aristo"></span><span className="ui-text">Aristo</span></a>
                                    <a href="#" data-theme="cupertino" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-cupertino"></span><span className="ui-text">Cupertino</span></a>
                                    <a href="#" data-theme="cruze" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-cruze"></span><span className="ui-text">Cruze</span></a>
                                    <a href="#" data-theme="darkness" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-ui-darkness"></span><span className="ui-text">Darkness</span></a>
                                    <a href="#" data-theme="delta" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-delta"></span><span className="ui-text">Delta</span></a>
                                    <a href="#" data-theme="flick" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-flick"></span><span className="ui-text">Flick</span></a>
                                    <a href="#" data-theme="home" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-home"></span><span className="ui-text">Home</span></a>
                                    <a href="#" data-theme="lightness" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-ui-lightness"></span><span className="ui-text">Lightness</span></a>
                                    <a href="#" data-theme="pepper-grinder" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-pepper-grinder"></span><span className="ui-text">Pepper-Grinder</span></a>
                                    <a href="#" data-theme="redmond" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-redmond"></span><span className="ui-text">Redmond</span></a>
                                    <a href="#" data-theme="rocket" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-rocket"></span><span className="ui-text">Rocket</span></a>
                                    <a href="#" data-theme="south-street" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-south-street"></span><span className="ui-text">South-Street</span></a>
                                    <a href="#" data-theme="start" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-start"></span><span className="ui-text">Start</span></a>
                                    <a href="#" data-theme="trontastic" onclick="DemoApp.changeTheme(event, this)"><span className="ui-theme ui-theme-trontastic"></span><span className="ui-text">Trontastic</span></a>
                                </div>
                            </span>
                            
                            <a href="setup.html" className="topbar-link">
                                <img alt="mockosx" src="showcase/resources/images/setup.svg" />
                                <span>Setup</span>
                            </a>

                            <div className="mobile-logo">
                                <img alt="mobile-logo" src="showcase/resources/images/primeng-sidebar.svg" />
                            </div>
                        </div>

                        <div>
                            {this.props.children}
                        </div>

                        <div className="content-section footer clearfix">
                            <span><a href="http://www.primetek.com.tr">PrimeTek</a>, Copyright &copy; 2016</span>
                            <span>All rights reserved</span>
                        </div>
                    </div>

                </div>

            );
        }
            
    
    
    }

    export default App;
