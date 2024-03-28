import accessToken from "../api/auth.js";
import getProduct from "../api/product.js";
import env from "../../env.js";

$("#art-size").change(async () => {
  const { access_token } = await accessToken(
    env.ACCESS_EMAIL,
    env.ACCESS_PASSWORD,
  );

  // 新增精緻畫冊
  const condition = {
    PRODUCT_TYPE: { _eq: "11" },
    SCREEN_SIZE: { _eq: "32" },
  };
  const productList = await getProduct(access_token, condition);
});

$(document).ready(async function () {
  const language = window.location.pathname.split("/").pop().split("_").shift();

  const { access_token } = await accessToken(
    env.ACCESS_EMAIL,
    env.ACCESS_PASSWORD,
  );

  // 新增精緻畫冊
  const condition = {
    PRODUCT_TYPE: { _eq: "11" },
  };
  const productList = await getProduct(access_token, condition);

  if (!productList.length) {
    const $divElement = $("<div>").addClass("products_card_msg");
    const $spanElement = $("<span>").text("無符合的畫冊");

    $divElement.append($spanElement);
    $("#product").append($divElement);

    return;
  }

  productList.forEach((item) => {
    createItem(item);
  });
});

const createItem = ({
  id,
  PRODUCT_AUTHOR,
  PRODUCT_AUTHOR_ENG,
  PRODUCT_TITLE,
  PRODUCT_TITLE_ENG,
  SUMMARY_NAME,
  CONTACT_NAME,
  COVER_IMAGE,
  SCREEN_SIZE,
  DETAIL_FILE_NAME,
}) => {
  // 創建新的 div 元素
  const divElement = $("<div>");

  // 設定 div 的 class 和 data 屬性
  divElement.addClass("item");
  divElement.attr("data-wow-duration", ".75s");
  divElement.attr("data-wow-delay", ".75s");

  const url = `${env.FINDARTS_DOMAIN}/assets/${COVER_IMAGE}.jpg`;

  const handleLink = () => {
    sessionStorage.setItem("productId", id);
    window.location.href = `gallery/${DETAIL_FILE_NAME}.html`;
  };

  // 簡介按鈕判斷
  const summaryBtn = !!SUMMARY_NAME
    ? `<button id="summaryBtn" class="btn">
      ${SUMMARY_NAME}
    </button>`
    : "";

  // 螢幕尺寸判斷
  const size = SCREEN_SIZE.slice(0, 2);
  const uint =
    SCREEN_SIZE.slice(2, 3) === "s"
      ? "吋方形"
      : SCREEN_SIZE.slice(2, 3) === "v"
      ? "吋直幅"
      : "吋橫幅";
  const screenSize = !!SCREEN_SIZE ? `<p class="size">${size}${uint}</p>` : "";

  // 設定 div 的內容
  divElement.html(`
    <div class="card">
      <div class="img-container">
        <img
          class="lazyload"
          data-src="${url}"
          alt="${PRODUCT_TITLE}"
          width="360"
          height="640"
        />
      </div>
      <h3>
      ${PRODUCT_AUTHOR ? `<div>${PRODUCT_AUTHOR}</div>` : ""}
      <div>${PRODUCT_TITLE}</div>
      </h3>
      ${PRODUCT_TITLE_ENG ? `<p>${PRODUCT_TITLE_ENG}</p>` : ""}
      ${screenSize}
      <div class="btn-group">
        ${summaryBtn}
        <a href="cht_contact.html" class="btn">${CONTACT_NAME}</a>
      </div>
    </div>
  `);

  divElement.find("#summaryBtn").on("click", handleLink);

  $(".products_card").append(divElement);
};

export default createItem;
