const itemList = document.querySelector("#itemList");

const form = document.querySelector("form");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let input = document.querySelector("#input");
});
const requestUrl = "https://www.reddit.com/search.json?q=";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(requestUrl + input.value)
    .then((responseData) => {
      return responseData.json();
    })
    .then((jsonData) => {
      let items = jsonData.data.children;
      console.log(jsonData);
      addItem(items[0]);
    })
    .catch((error) => {
      console.log("Oops, think we have an error.", error);
    });
});
let li = document.createElement("li");

const addItem = (item) => {
  const html = ` <ul>
            <li>title: ${item.data.title}</li>
            <li>fallback_url: ${item.data.secure_media.reddit_video.fallback_url}</li>
            <li>thumbnail: <img src=" ${item.data.thumbnail}"></li>
                </ul>
                `;
  li.innerHTML = html;
  itemList.appendChild(li);
};
const clearAddItem = (event) => {
    console.log(event)
             event.target.innerHTML =  "";
  itemList.appendChild(li);
};
document.querySelector("ul").addEventListener("click", clearAddItem);
clearAddItem(itemList);
