import React from "react";

function EmbedFbPage() {
  return (
    <div
      className="fb-page"
      data-href="https://www.facebook.com/LienMinhHuyenThoai"
    //   data-tabs="messages"
      data-width=""
      data-height="10rem"
      data-small-header="false"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
      data-lazy="true"
    >
      <blockquote
        cite="https://www.facebook.com/LienMinhHuyenThoai"
        className="fb-xfbml-parse-ignore"
      >
        <a href="https://www.facebook.com/LienMinhHuyenThoai">
          Liên Minh Huyền Thoại
        </a>
      </blockquote>
    </div>
  );
}

EmbedFbPage.propTypes = {};

export default EmbedFbPage;
