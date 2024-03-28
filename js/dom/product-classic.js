import accessToken from "../api/auth.js";
import getProduct from "../api/product.js";
import env from "../../env.js";

$(document).ready(async function () {
  const language = window.location.pathname.split("/").pop().split("_").shift();

  const { access_token } = await accessToken(
    env.ACCESS_EMAIL,
    env.ACCESS_PASSWORD,
  );

  // 數位典藏經典
  const condition = {
    PRODUCT_TYPE: { _eq: "10" },
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
  IS_LAUNCHED,
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

  const handleLink = () => {
    sessionStorage.setItem("productId", id);
    window.location.href = `gallery/${DETAIL_FILE_NAME}.html`;
  };

  const url = `${env.FINDARTS_DOMAIN}/assets/${COVER_IMAGE}.jpg`;

  // 簡介按鈕判斷
  const summaryBtn = !!SUMMARY_NAME
    ? `<button id="summaryBtn" class="btn">
      ${SUMMARY_NAME}
    </button>`
    : "";

  // 螢幕尺寸判斷
  const screenSize = !!SCREEN_SIZE
    ? `<p class="size">${SCREEN_SIZE}吋方形</p>`
    : "";

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
      <h3>${PRODUCT_TITLE}</h3>
      <p>${PRODUCT_TITLE_ENG}</p>
      ${screenSize}
      <div class="btn-group">
        ${summaryBtn}
        <a href="cht_contact.html" class="btn">${CONTACT_NAME}</a>
      </div>
    </div>
  `);

  divElement.find("#summaryBtn").on("click", handleLink);

  // 未上架
  if (!IS_LAUNCHED) {
    $("#coming_soon").append(divElement);
    return;
  }
  $("#launch").append(divElement);
};
