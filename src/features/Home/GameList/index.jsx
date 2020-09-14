import GameListIcon from "components/GameListIcon";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./style.scss";
import LolIcon from "assets/images/lol-icon.png";
import CfIcon from "assets/images/cf-icon.png";
import LqIcon from "assets/images/lq-icon.png";
import FfIcon from "assets/images/ff-icon.png";
import PubgIcon from "assets/images/pubg-icon.png";
import GameListBg from "assets/images/gamelist-bg.png";
const GameList = () => {
  return (
    <section
      className="gamelist"
      style={{
        backgroundImage: `url(${GameListBg})`,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div className="gamelist__wrap">
        <div className="gamelist__title">
          <h3>Danh sách game</h3>
        </div>
        <div className="gamelist__content">
          <div className="gamelist__content--wrap ">
            <Container
              fluid
              style={{
                padding: "0 5%",
              }}
            >
              <Row className="game__content--main">
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={LolIcon} />
                </Col>
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={CfIcon} />
                </Col>
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={LqIcon} />
                </Col>
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={FfIcon} />
                </Col>
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={PubgIcon} />
                </Col>
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={PubgIcon} />
                </Col>
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={PubgIcon} />
                </Col>
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={PubgIcon} />
                </Col>
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={PubgIcon} />
                </Col>
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={PubgIcon} />
                </Col>
              </Row>
              <div className="gamelist__subtitle">
                <h3>Trò chơi may mắn</h3>
              </div>
              <Row className="game__content--orther">
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={require('assets/images/hextech-icon.png')} />
                </Col>
                <Col className="gamelist__content--item">
                  <GameListIcon imgSrc={require('assets/images/hextech-icon.png')} />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
};

GameList.propTypes = {};

export default GameList;
