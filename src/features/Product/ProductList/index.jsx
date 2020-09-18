import React, { useState } from "react";
import "react-input-range/lib/css/index.css";
import {
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import ProductItem from "./components/ProductItem";
import RankFilter from "./components/RankFilter";
import RangeFilter from "./components/RangeFilter";
import "./style.scss";

function ProductList(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    <section className="product-list">
      <div className="product-list__wrap">
        <Container fluid>
          <Row>
            <Col className="filter">
              <div
                className="filter__wrap"
                style={{
                  minHeight: "500px",
                }}
              >
                <RankFilter />
                <RangeFilter />
                <RangeFilter />
                <RangeFilter />
              </div>
            </Col>
            <Col className="product-list__content">
              <Row className="mb-3 justify-content-end">
                <Col xl={2}>
                  <div className="product-list__sort position-relative">
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
                      <DropdownToggle
                        tag="span"
                        data-toggle="dropdown"
                        aria-expanded={dropdownOpen}
                        caret
                      >
                        Sắp xếp
                      </DropdownToggle>
                      <DropdownMenu className="p-3">
                        <DropdownItem onClick={() => {}}>
                          Sắp xếp tên từ A -> Z
                        </DropdownItem>
                        <DropdownItem onClick={() => {}}>
                          Sắp xếp tên từ Z -> A
                        </DropdownItem>
                        <DropdownItem onClick={() => {}}>
                          Sắp xếp giá tăng dần
                        </DropdownItem>
                        <DropdownItem onClick={() => {}}>
                          Sắp xếp giá giảm dần
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
                <Col xl={3} className="mb-3">
                  <ProductItem />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

ProductList.propTypes = {};

export default ProductList;
