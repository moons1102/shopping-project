import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import "./style.scss";
function Guide(props) {
  const [stepClassName, setStepClassName] = useState(true);
  return (
    <section
      className="guide"
      style={{
        backgroundImage: `url(${require("assets/images/huong-dan-dang-ky.png")})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="guide__wrap">
        <Container>
          <Row>
            <Col xl="7" className="guide__video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mtMLZCYIvlA"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Hướng dẫn đăng ký"
              ></iframe>
            </Col>
            <Col xl="5" className="guide__content">
              <div className="guide__content__wrap">
                <div className="guide__content__title">
                  <h2>Hướng dẫn mua tài khoản</h2>
                </div>
                <ol
                  className="guide__content__step"
                  onMouseEnter={() => {
                    setStepClassName(false);
                  }}
                  onMouseLeave={() => {
                    setStepClassName(true);
                  }}
                >
                  <li className={`guide__content__step--step-1 ${stepClassName ? "step-active" : ""}`}>
                    Đăng nhập hoặc đăng ký tài khoản mới
                  </li>
                  <li className="guide__content__step--step-2">
                    Chọn sản phẩm nhấn 'Thêm sản phẩm' sau đó vào giỏ hàng kiểm
                    tra sản phẩm
                  </li>
                  <li className="guide__content__step--step-3">
                    Chọn phương thức thanh toán và nhận thông tin tài khoản
                  </li>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

Guide.propTypes = {};

export default Guide;
