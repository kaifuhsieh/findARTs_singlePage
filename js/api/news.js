import env from "../../env.js";

const getNews = async (token) => {
  try {
    const res = await $.ajax({
      type: "GET",
      url: `${env.FINDARTS_DOMAIN}/items/News`,
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

export default getNews;
