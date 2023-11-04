"use strict";
const form = document.getElementById("form");
const input = document.getElementById("address");
const error = document.getElementById("error");
const errorCode = document.getElementById("error-code");

function isUrl(val = "") {
  if (
    /^http(s?):\/\//.test(val) ||
    (val.includes(".") && val.substr(0, 1) !== " ")
  )
    return true;
  return false;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    await registerSW();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    
  }
  let url = input.value.trim();
  if (!isUrl(url)) url = "https://www.google.com/search?q=" + url;
  else if (!(url.startsWith("https://") || url.startsWith("http://")))
    url = "http://" + url;

  window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
});


//skidded code from uh ELIXIR he let me.

function openURL(url) {
  window.navigator.serviceWorker
  .register("./uv.js", {
    scope: __uv$config.prefix,
  })
  .then(() => {
    if (!isUrl(url)) url = getSearchEngineURL() + url;
    else if (!(url.startsWith("https://") || url.startsWith("http://")))
      url = "http://" + url;

    if (getAboutBlank() === 'on') {
      openAboutBlank(window.location.href.slice(0, -1) + __uv$config.prefix + __uv$config.encodeUrl(url));
    } else {
      window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    }
  });
};