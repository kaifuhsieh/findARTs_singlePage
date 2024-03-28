import accessToken from "../api/auth.js";
import getProductById from "../api/product-by-id.js";
import getPainting from "../api/painting.js";
import env from "../../env.js";

$(document).ready(async function () {
  const language = window.location.pathname.split("/").pop().split("_").shift();

  const { access_token } = await accessToken(
    env.ACCESS_EMAIL,
    env.ACCESS_PASSWORD,
  );

  const productId = sessionStorage.getItem("productId");
  const {
    PRODUCT_AUTHOR,
    PRODUCT_AUTHOR_ENG,
    PRODUCT_TITLE,
    PRODUCT_TITLE_ENG,
    CONTENT_TITLE,
    CONTENT_TITLE_ENG,
    CONTENT_DESC,
    CONTENT_DESC_ENG,
  } = await getProductById(access_token, productId);

  const introElement = $("#intro");
  introElement.html(`
    <h1 class="noto">${PRODUCT_AUTHOR}${PRODUCT_TITLE}
      <small>${PRODUCT_AUTHOR_ENG} “${PRODUCT_TITLE_ENG}”</small>
    </h1>
    
    ${
      !CONTENT_TITLE && !CONTENT_DESC
        ? ""
        : `<hr />
    <div class="gps_intro">
      <h2>${CONTENT_TITLE ? CONTENT_TITLE : ""}</h2>
      <p>${CONTENT_DESC ? CONTENT_DESC : ""}</p>
      <h2 lang="en">${CONTENT_TITLE_ENG ? CONTENT_TITLE_ENG : ""}</h2>
      <p>${CONTENT_DESC_ENG ? CONTENT_DESC_ENG : ""}</p>
    </div>`
    }
  `);

  // 數位典藏經典
  const condition = {
    PRODUCT_ID: { _eq: productId },
  };

  const paintingList = await getPainting(access_token, condition);

  paintingList.forEach((item) => {
    createItem(item);
  });
});

const createItem = ({
  PAINTING_TITLE,
  PAINTING_TITLE_ENG,
  PAINTING_IMAGE,
  PAINTING_DESC,
  PAINTING_DESC_ENG,
  PAINTING_AUTHOR,
  PAINTING_AUTHOR_ENG,
  PAINTING_ERA,
  PAINTING_MEDIA,
  PAINTING_MEDIA_ENG,
  PAINTING_WEIGHT,
  PAINTING_HEIGHT,
  DEFAULT_PAINTING,
}) => {
  // 創建新的 div 元素
  console.log(typeof PAINTING_WEIGHT);
  const divElement = $("<div>");
  const url = `${env.FINDARTS_DOMAIN}/assets/${PAINTING_IMAGE}.jpg`;

  // 設定 div 的內容
  divElement.html(`
    <hr />
    <div class="showroom">
      <div class="info">
        <h2>${PAINTING_TITLE}</h2>
        <h3>N${PAINTING_TITLE_ENG}</h3>
        <div class="m_show">
          <div class="img-container">
            <img
              src="${url}"
              alt=""
            />
          </div>
        </div>
        <div class="description">
          <p>${PAINTING_DESC}</p>
          <p class="indent">${PAINTING_DESC_ENG}</p>
        </div>
        <div class="author">
          <ul id="painting_info">
            <li>${PAINTING_AUTHOR ? PAINTING_AUTHOR : ""}</li>
            <li>${PAINTING_AUTHOR_ENG ? PAINTING_AUTHOR_ENG : ""}</li>
            <li>${PAINTING_ERA ? PAINTING_ERA.substr(0, 4) : ""}</li>
            <li>
              <span>${PAINTING_MEDIA ? PAINTING_MEDIA : ""}</span>
              <span>${PAINTING_MEDIA_ENG ? PAINTING_MEDIA_ENG : ""}</span>
            </li>
            <li>${
              PAINTING_WEIGHT && PAINTING_HEIGHT
                ? Number(PAINTING_WEIGHT) +
                  " x " +
                  Number(PAINTING_HEIGHT) +
                  " cm"
                : ""
            }</li>
          </ul>
        </div>
      </div>
      <div class="art_area">
        <div class="img-container">
          <img
            src="${url}"
            alt=""
          />
        </div>
      </div>
    </div>
    ${
      DEFAULT_PAINTING
        ? `<div class="showroom">
        <div class="info">
            <div class="description">
                <p>
                    ${DEFAULT_PAINTING}
                </p>
            </div>
        </div>
    </div>`
        : ""
    }
  `);

  // 將新的 div 添加到 DOM 中
  $("#intro").append(divElement);
};
