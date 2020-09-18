import CfIcon from "assets/images/cf-icon.png";
import FfIcon from "assets/images/ff-icon.png";
import LolIcon from "assets/images/lol-icon.png";
import LqIcon from "assets/images/lq-icon.png";
import PubgIcon from "assets/images/pubg-icon.png";
import GameListIcon from "components/GameListIcon";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./style.scss";
function Banner(props) {
  return (
    <section className="product-banner position-relative">
      <div
        className="product-banner__img"
        style={{
          backgroundImage:
            "url('https://www.boostroyal.com/assets/images/new/account-market-top-bg.png')",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="product-banner__wrap">
          <Container fluid>
            <Row>
              <Col
                className="mb-3"
                style={{
                  maxWidth: "12.5%",
                }}
              >
                <GameListIcon imgSrc={LolIcon} styleStatus={1} />
              </Col>
              <Col
                className="mb-3"
                style={{
                  maxWidth: "12.5%",
                }}
              >
                <GameListIcon
                  imgSrc={CfIcon}
                  styleStatus={1}
                  activeStatus={1}
                />
              </Col>
              <Col
                className="mb-3"
                style={{
                  maxWidth: "12.5%",
                }}
              >
                <GameListIcon imgSrc={LqIcon} styleStatus={1} />
              </Col>
              <Col
                className="mb-3"
                style={{
                  maxWidth: "12.5%",
                }}
              >
                <GameListIcon imgSrc={FfIcon} styleStatus={1} />
              </Col>
              <Col
                className="mb-3"
                style={{
                  maxWidth: "12.5%",
                }}
              >
                <GameListIcon imgSrc={PubgIcon} styleStatus={1} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
}

Banner.propTypes = {};

export default Banner;
