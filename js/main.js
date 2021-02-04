const itemList = document.querySelector("#itemList");

const form = document.querySelector("form");
//fetching data from an api
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let input = document.querySelector("#input");
});
const requestUrl = "https://www.reddit.com/search.json?q=";

//the form is listening for the click and returns the json response from the api
//the json is parsed only returning 3 needed portions of the entire response
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
      //console.log("Oops, think we have an error.", error);
    });
});
let li = document.createElement("li");
//adds the items to the page
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
//this function will remove the json items sequentially from the page
const clearAddItem = (event) => {
  while (event.target.firstChild) {
    event.target.removeChild(event.target.lastChild);
  }
};
//removes items when click is enabled
document.querySelector("ul").addEventListener("click", (e) => {
  clearAddItem(e);
  if(e.target.children.length === 0){
    e.target.remove
  }
});
