import EmbedFbPage from "components/EmbedFbPage";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./style.scss";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <Container>
          <Row>
            <Col xl={8}>
              <Row className="footer__logo-area mb-3">
                <Col xl={2} className="footer__logo">
                  <img
                    src="https://www.boostroyal.com/assets/images/new/logo-text.png"
                    alt="Logo"
                  />
                </Col>
              </Row>
              <div className="footer__term-line d-flex">
                <div className="footer__term-line--term">
                  <span>Điều khoản dịch vụ</span>
                </div>
                <div className="footer__term-line--policy">
                  <span>Chính sách bảo hành</span>
                </div>
                <div className="footer__term-line--shopinfor">
                  <span>Thông tin shop</span>
                </div>
              </div>
              <div className="footer__copyright mb-3">
                © 2014-2020 MEDICAL AND SPORTS BODYTECH EUROPE LTD
                (Address:Piraeus 30, Nicosia, Cyprus) All Rights Reserved
              </div>
              <div className="footer__note">
                BoostRoyal isn’t endorsed by Riot Games and doesn’t reflect the
                views or opinions of Riot Games or anyone officially involved in
                producing or managing League of Legends. League of Legends and
                Riot Games are trademarks or registered trademarks of Riot
                Games, Inc. League of Legends © Riot Games, Inc.
              </div>
            </Col>
            <Col xl={4}>
                <EmbedFbPage/>
            </Col>
          </Row>
          <hr />
          <div className="footer__sitemap d-flex">
            <span>Liên minh huyền thoại</span>
            <span>Đột kích</span>
            <span>Freefire</span>
            <span>Pubg</span>
            <span>Liên quân mobile</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
