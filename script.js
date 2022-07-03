let imgObj = {
  imgDiv1: document.querySelector(".img1"),
  imgDiv2: document.querySelector(".img2"),
  imgDiv3: document.querySelector(".img3"),
  imgDiv4: document.querySelector(".img4"),
  imgDiv5: document.querySelector(".img5"),
};
let nameObj = {
  pTag1: document.querySelector(".pTag1"),
  pTag2: document.querySelector(".pTag2"),
  pTag3: document.querySelector(".pTag3"),
  pTag4: document.querySelector(".pTag4"),
  pTag5: document.querySelector(".pTag5"),
};

async function getUserAsync(link) {
  let response = await fetch(link);
  let data = await response.json();
  return data;
}

getUserAsync("https://randomuser.me/api/?page=1").then(
  (data) => (
    (imgObj.imgDiv1.src = data.results[0].picture.large),
    (nameObj.pTag1.innerHTML = data.results[0].name.first)
  )
);
getUserAsync("https://randomuser.me/api/?page=1").then(
  (data) => (
    (imgObj.imgDiv2.src = data.results[0].picture.large),
    (nameObj.pTag2.innerHTML = data.results[0].name.first)
  )
);

getUserAsync("https://randomuser.me/api/?page=1").then(
  (data) => (
    (imgObj.imgDiv3.src = data.results[0].picture.large),
    (nameObj.pTag3.innerHTML = data.results[0].name.first)
  )
);

getUserAsync("https://randomuser.me/api/?page=1").then(
  (data) => (
    (imgObj.imgDiv4.src = data.results[0].picture.large),
    (nameObj.pTag4.innerHTML = data.results[0].name.first)
  )
);

getUserAsync("https://randomuser.me/api/?page=1").then(
  (data) => (
    (imgObj.imgDiv5.src = data.results[0].picture.large),
    (nameObj.pTag5.innerHTML = data.results[0].name.first)
  )
);

let BookObj = {
  Book1: document.querySelector(".clothesImgClass1"),
  Book2: document.querySelector(".clothesImgClass2"),
  Book3: document.querySelector(".clothesImgClass3"),
  Book4: document.querySelector(".clothesImgClass4"),
};

let bookTitleObj = {
  Title1: document.querySelector(".bookP1"),
  Title2: document.querySelector(".bookP2"),
  Title3: document.querySelector(".bookP3"),
  Title4: document.querySelector(".bookP4"),
};

async function getBookAsync(link) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bf4291de88msh1ba37180e2e8a18p13e411jsn34e228ba6a84",
      "X-RapidAPI-Host": "amazon-kindle-scraper.p.rapidapi.com",
    },
  };
  let response = await fetch(link, options);
  let data = await response.json();
  return data;
}
const link =
  "https://amazon-kindle-scraper.p.rapidapi.com/search/love?api_key=bc09e263d60d1bbdfc2455c657c5e9bd";

getBookAsync(link).then(
  (data) => (
    (BookObj.Book1.src = data.results[0].image),
    (bookTitleObj.Title1.innerHTML = data.results[0].name)
  )
);
getBookAsync(link).then(
  (data) => (
    (BookObj.Book2.src = data.results[1].image),
    (bookTitleObj.Title2.innerHTML = data.results[1].name)
  )
);

getBookAsync(link).then(
  (data) => (
    (BookObj.Book3.src = data.results[2].image),
    (bookTitleObj.Title3.innerHTML = data.results[2].name)
  )
);
getBookAsync(link)
  .then(
    (data) => (
      (BookObj.Book4.src = data.results[3].image),
      (bookTitleObj.Title4.innerHTML = data.results[3].name)
    )
  )
  .catch((err) => console.log(err));
