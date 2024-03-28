import env from "../../env.js";

const getProductById = async (token, productId) => {
  const url = `${env.FINDARTS_DOMAIN}/items/Product/${productId}`;

  try {
    const res = await $.ajax({
      type: "GET",
      url,
      contentType: "application/json",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      dataType: "json",
    });
    return res.data;
  } catch (error) {
    console.error("Failed to get news:", error);
  }
};

export default getProductById;
