const itemList = document.querySelector("#itemList");

const form = document.querySelector("form");

//fetching data from an api, this function executes when submit is pressed
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let input = document.querySelector("#input");
});
const requestUrl = "https://www.reddit.com/search.json?q=";

//the form is listening for the click and returns the fallback, thumbnail & title from
//the reddit api
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(requestUrl + input.value)
    .then((responseData) => {
      return responseData.json();
    })
    .then((jsonData) => {
      let items = jsonData.data.children;
      addItem(items[0]);
    })
    .catch((error) => {
      //console.error("Oops, think we have an error.", error);
    });
});
let li = document.createElement("li");

//adding the title, fallback & thumbnail to the page
const addItem = (item) => {
  const html = ` <ul>
            <li>TITLE: ${item.data.title}</li>
            <li>FALLBACK URL: ${item.data.secure_media.reddit_video.fallback_url}</li>
            <li>THUMBNAIL: <img src=" ${item.data.thumbnail}"></li>
                </ul>
                `;
  li.innerHTML = html;
  itemList.appendChild(li);
};
//this function will remove the elements displayed sequentially from the page
const clearAddItem = (event) => {
  while (event.target.firstChild) {
    event.target.removeChild(event.target.lastChild);
  }
};
//any item from the search when clicked can be removed
document.querySelector("ul").addEventListener("click", (e) => {
  clearAddItem(e);
  if(e.target.children.length === 0){
    e.target.remove
  }
});
