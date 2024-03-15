export default async function accessToken(email, password) {
  try {
    const res = await $.ajax({
      type: "POST",
      url: "http://localhost:3000/auth/login",
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
