import env from "../../env.js";
import accessToken from "../api/auth.js";
import getProduct from "../api/product.js";
import createItem from "./product-add.js";

let selectedArtist = "";
let selectedSize = "";

const queryProduct = async () => {
  console.log(selectedArtist);
  console.log(selectedSize);
  const { access_token } = await accessToken(
    env.ACCESS_EMAIL,
    env.ACCESS_PASSWORD,
  );

  // 新增精緻畫冊
  const condition = {
    PRODUCT_TYPE: { _eq: "11" },
  };

  if (selectedArtist) {
    condition.PRODUCT_AUTHOR = { _eq: selectedArtist };
  }

  if (selectedSize) {
    condition.SCREEN_SIZE = { _eq: selectedSize };
  }

  const productList = await getProduct(access_token, condition);
  $(".products_card_msg").remove();

  if (!productList.length) {
    $(".products_card").empty();
    const $divElement = $("<div>").addClass("products_card_msg");
    const $spanElement = $("<span>").text("無符合的畫冊");

    $divElement.append($spanElement);
    $("#product").append($divElement);

    return;
  }

  $(".products_card").empty();
  productList.forEach((item) => {
    createItem(item);
  });
};

// 當畫家選擇器的值改變時
$("#arts").on("change", async function () {
  // 獲取選擇的畫家
  selectedArtist = $(this).val();
  queryProduct();
});

// 當尺寸選擇器的值改變時
$("#art-size").on("change", function () {
  // 獲取選擇的尺寸
  selectedSize = $(this).val();
  queryProduct();
});
