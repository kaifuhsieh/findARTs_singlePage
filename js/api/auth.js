import env from "../../env.js";

export default async function accessToken(email, password) {
  const url = `${env.FINDARTS_DOMAIN}/auth/login`;

  try {
    const res = await $.ajax({
      type: "POST",
      url,
      data: JSON.stringify({
        email,
        password,
      }),
      contentType: "application/json",
      dataType: "json",
    });
    return res.data;
  } catch (error) {
    console.error("Failed to get access token or news:", error);
  }
}
