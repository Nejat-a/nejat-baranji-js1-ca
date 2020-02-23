window.onload = setTimeout(() => {
  const heading = document.querySelector("h1");
  const newHeadingContent = heading.innerText.replace(/The /g, "Replaced ");
  heading.innerText = newHeadingContent;

  const paragraphs = document.querySelectorAll("p");
  for (let i = 0; i < 2; i++) {
    const newParagraphs = paragraphs[i].innerHTML
      .replace(/The /g, "Replaced ")
      .replace(/the /g, "replaced ");
    paragraphs[i].innerHTML = newParagraphs;
    console.log(paragraphs[i].innerHTML);
  }
}, 4000);
