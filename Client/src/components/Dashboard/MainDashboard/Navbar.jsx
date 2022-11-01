import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
  import DarkModeOutLineIcon from "@mui/icons-material/DarkModeOutlined";
  import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
  import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
  // import chatBubbleOutlinedIcon from "@mui/icons-material/chatBubbleOutlined";
  import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
 


export default class NavbarNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">DRINKS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <input type="text" placeholder="Search..." />
              <Nav className="items" navbar>
                <Nav className="item" navbar>
                  <LanguageOutlinedIcon className="icon"/>
                  English
                </Nav>
                <Nav className="item" navbar>
                  <DarkModeOutLineIcon className="icon"/>
                </Nav>
                <Nav className="item" navbar>
                  <FullscreenExitOutlinedIcon className="icon"/>
                </Nav>
                <Nav className="item" navbar>
                  <NotificationsNoneOutlinedIcon className="icon"/>
                </Nav>
                <Nav className="item" navbar>
                  <ListOutlinedIcon className="icon"/>
                </Nav>
              </Nav>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Usuario
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Mi Perfil
                  </DropdownItem>
                  <DropdownItem>
                    Configuraciones
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}