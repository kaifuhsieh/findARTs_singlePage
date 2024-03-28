import env from "../../env.js";

export default async function getFile(uuid) {
  const url = `${env.FINDARTS_DOMAIN}/files/${uuid}`;

  try {
    const res = await $.ajax({
      type: "GET",
      url,
      contentType: "application/json",
      dataType: "json",
    });
    return res.data;
  } catch (error) {
    console.error("Failed to get access token or news:", error);
  }
}
