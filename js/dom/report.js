import env from "../../env.js";
import accessToken from "../api/auth.js";
import getNews from "../api/news.js";

$(document).ready(async function () {
  const language = window.location.pathname.split("/").pop().split("_").shift();
  const { access_token } = await accessToken(
    env.ACCESS_EMAIL,
    env.ACCESS_PASSWORD,
  );
  sessionStorage.setItem("token", access_token);

  const newsList = await getNews(access_token);

  newsList.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    const span = document.createElement("span");
    const time = document.createElement("time");

    a.href = item.NEWS_URL;
    a.target = "_blank";

    if (language === "en") {
      if (!item.NEWS_TITLE_ENG) return;
      span.textContent = item.NEWS_TITLE_ENG;
    } else {
      if (!item.NEWS_TITLE) return;
      span.textContent = item.NEWS_TITLE;
    }
    time.textContent = item.CREATE_DATE;

    a.appendChild(span);
    a.appendChild(time);
    li.appendChild(a);

    if (item.NEWS_TYPE === "10") {
      document.querySelector("#business10").appendChild(li);
      return;
    }

    if (item.NEWS_TYPE === "11") {
      document.querySelector("#museum11").appendChild(li);
      return;
    }

    if (item.NEWS_TYPE === "12") {
      document.querySelector("#artist12").appendChild(li);
      return;
    }

    if (item.NEWS_TYPE === "13") {
      document.querySelector("#overseas13").appendChild(li);
      return;
    }

    if (item.NEWS_TYPE === "14") {
      document.querySelector("#video14").appendChild(li);
      return;
    }
  });
});
