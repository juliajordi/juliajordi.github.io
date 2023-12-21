const copiarCC = async () => {
  try {
    await navigator.clipboard.writeText(
      document
        .querySelector("#compte-corrent .text")
        ?.innerText?.replaceAll(" ", "")
    );

    const x = document.getElementById("notificacio");
    x.setAttribute("class", "visible");
    setTimeout(() => (x.removeAttribute("class")), 3000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};
