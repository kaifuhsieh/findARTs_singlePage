import env from "../../env.js";

const getPainting = async (token, condition) => {
  const conditionStr = condition ? "?filter=" + JSON.stringify(condition) : "";
  const url = `${env.FINDARTS_DOMAIN}/items/Gallery_List/${conditionStr}`;

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

export default getPainting;
