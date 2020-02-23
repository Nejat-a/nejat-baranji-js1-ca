window.onload = setTimeout(() => {
  const heading = document.querySelector("h1");
  const newHeadingContent = heading.innerText.replace(/The /g, "Replaced ");
  heading.innerText = newHeadingContent;

  const replaceAboutDiv = document.querySelector(".about");
  const newAboutDiv = replaceAboutDiv.innerHTML
    .replace(/The /g, "Replaced ")
    .replace(/the /g, "replaced ");
  replaceAboutDiv.innerHTML = newAboutDiv;
}, 4000);
