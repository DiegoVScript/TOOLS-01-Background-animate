function createColumn() {
  const icons = [
    "github",
    "html5",
    "linux",
    "apple",
    "android",
    "amazon",
    "linkedin-square",
    "rebel",
    "telegram",
    "spotify",
    "twitter",
    "youtube-play",
    "instagram",
    "gitlab",
    "github-alt",
    "twitch",
    "windows",
    "firefox",
    "vimeo",
    "qq",
  ];

  const column = document.createElement("div");
  for (const icon of icons) {
    const i = document.createElement("i");
    i.className = `fa fa-${icon}`;
    i.setAttribute("aria-hidden", "true");
    column.appendChild(i);
  }

  return column;
}

// Crea las filas necesarias ૮ ⚆ﻌ⚆ა
const section = document.querySelector("section");
for (let i = 0; i < 18; i++) {
  const row = document.createElement("div");
  row.className = "row";
  row.appendChild(createColumn());
  row.appendChild(createColumn());
  section.appendChild(row);
}
