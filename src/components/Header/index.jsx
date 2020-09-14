import React from "react";
import {
  Col,
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import "./style.scss";

export const Header = (props) => {
  return (
    <header id="HEADER">
      <Navbar expand="md" className="fixed-top nav-wrap">
        <Container>
          <NavbarBrand>
            <img
              src="https://www.boostroyal.com/assets/images/new/logo-text.png"
              className="img-fluid"
              alt="Logo"
            />
          </NavbarBrand>
          <Collapse navbar>
            <Col xl={8} lg={8}>
              <Nav className="mr-auto" navbar>
                <UncontrolledDropdown nav inNavbar className="position-static">
                  <DropdownToggle nav caret>
                    DANH SÁCH GAME
                  </DropdownToggle>
                  <DropdownMenu left className="animate slideIn">
                    <DropdownItem>Liên Minh huyền thoại</DropdownItem>
                    <DropdownItem>Liên quân</DropdownItem>
                    <DropdownItem>FreeFire</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                  <NavLink>Thông tin shop</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Hướng dẫn</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Nạp tiền</NavLink>
                </NavItem>
                <hr />
              </Nav>
            </Col>
            <Col xl={4} lg={4}>
              <div className="d-flex justify-content-end">
                <div className="register mr-3">
                  <button>Đăng ký</button>
                </div>
                <div className="login">
                  <button>Đăng nhập</button>
                </div>
              </div>
            </Col>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
