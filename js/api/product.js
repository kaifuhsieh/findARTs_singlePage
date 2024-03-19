import env from "../../env.js";

const getProduct = async (condition) => {
  const token = sessionStorage.getItem("token");
  const url = `${env.FINDARTS_DOMAIN}/items/Product${
    condition ? "?filter=" + JSON.stringify(condition) : ""
  }`;
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

export default getProduct;
