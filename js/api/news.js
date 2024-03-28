import env from "../../env.js";

const getNews = async (token) => {
  const url = `${env.FINDARTS_DOMAIN}/items/News`;

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

export default getNews;
