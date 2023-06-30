const preElements = document.querySelectorAll("pre > code");

preElements.forEach((pre) => {
  // Create an i element for the icon
  const icon = document.createElement("i");
  icon.className = "fas fa-copy";

  // Add an event listener to the icon
  icon.addEventListener("click", () => {
    const code = pre.textContent;

    // Write the text content to the clipboard
    navigator.clipboard.writeText(code);
  });

  pre.appendChild(icon);
});
