import React from "react";
import "./style.scss";

function ProductItem(props) {
  const thachdauIcon =
    "https://www.boostroyal.com/assets/images/divisions/challenger.png";
  return (
    <div className="product-item position-relative mb-3">
      <div className="product-item__wrap">
        <div className="product-item__status">
          <span>HOT</span>
        </div>
        <div className="product-item__promo">
          <span>-15%</span>
        </div>
        <div className="product-item__bg">
          <img src={thachdauIcon} alt="" className="img-fluid" />
        </div>
        <div className="product-item__rank d-flex mb-3">
          <img src={thachdauIcon} alt="" className="img-fluid" />
          <span>Thách đấu</span>
        </div>
        <div className="product-item__main">
          <div className="season item-flex">
            <div className="season__key">Khung</div>
            <div className="season__value">
              <img
                src={thachdauIcon}
                alt=""
                className="img-fluid"
                style={{ height: "35px", marginRight: "5px" }}
              />
              <span>Kim cương I</span>
            </div>
          </div>
          <div className="season item-flex">
            <div className="season__key">Số lượng tướng</div>
            <div className="season__value">150</div>
          </div>
          <div className="season item-flex">
            <div className="season__key">Trang phục</div>
            <div className="season__value">1000</div>
          </div>
          <div className="season item-flex">
            <div className="season__key">Bảng ngọc</div>
            <div className="season__value">99</div>
          </div>
          <div className="season item-flex">
            <div className="season__key">Giá thẻ cào</div>
            <div className="season__value" style={{}}>
              1.300.000đ
            </div>
          </div>
          <div className="product-item__bottom item-flex align-items-center">
            <div className="product-item__price">
              <span>ATM: 1.000.000đ</span>
            </div>
            <div className="product-item__view-detail">
              <button>Chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductItem.propTypes = {};

export default ProductItem;
