import React from "react";
import "./style.scss";
function RankFilter(props) {
  const thachdauIcon =
    "https://www.boostroyal.com/assets/images/divisions/challenger.png";
  return (
    <div className="rank-filter py-3">
      <div className="rank-filter__title">
        <h5>Xếp hạng</h5>
        <span className="rank-filter__clear-filter">Xóa bộ lọc</span>
      </div>
      <div className="rank-filer__content d-flex flex-wrap">
        <div className="rank-filter__item">
          <span>Vàng</span>
          <img src={thachdauIcon} alt="" className="img-fluid" />
        </div>
        <div className="rank-filter__item">
          <span>Vàng</span>
          <img src={thachdauIcon} alt="" className="img-fluid" />
        </div>
        <div className="rank-filter__item">
          <span>Kim cương</span>
          <img src={thachdauIcon} alt="" className="img-fluid" />
        </div>
        <div className="rank-filter__item">
          <span>Thách đấu</span>
          <img src={thachdauIcon} alt="" className="img-fluid" />
        </div>
        <div className="rank-filter__item">
          <span>Thách đấu</span>
          <img src={thachdauIcon} alt="" className="img-fluid" />
        </div>
        <div className="rank-filter__item">
          <span>Thách đấu</span>
          <img src={thachdauIcon} alt="" className="img-fluid" />
        </div>
        <div className="rank-filter__item">
          <span>Thách đấu</span>
          <img src={thachdauIcon} alt="" className="img-fluid" />
        </div>

      </div>
    </div>
  );
}

RankFilter.propTypes = {};

export default RankFilter;
