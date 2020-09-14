import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./style.scss";
export const Banner = () => {
  const onViewListGame = () => {
    const element = document.getElementsByClassName("gamelist");
    element[0].scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section className="banner">
      <div
        className="banner__img"
        style={{
          backgroundImage: `url(${require("assets/images/banner-test2.jpg")})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__wrap">
          <Container>
            <Row>
              <Col xl={7}>
                <div className="banner__content">
                  <h1 className="mb-3">
                    Nhân dịp 2-9 giảm giá 30% đối với tất cả các tài khoản.
                  </h1>
                  <div className="banner__groupBtn">
                    <button
                      className="banner__groupBtn--listgame"
                      onClick={onViewListGame}
                    >
                      Xem danh sách game
                    </button>
                    <button className="banner__groupBtn--lol">
                      Xem tài khoản liên minh
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {};

export default Banner;
