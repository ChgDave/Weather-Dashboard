"strict mode";

const btn = document.querySelector("#fetchData");
const fetchedData = document.querySelector("#fetchedData");

let btnStatus;

function getData() {
  const url = "https://jsonplaceholder.typicode.com/users";

  fetchedData.innerHTML = "";
  if (!btnStatus) {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      // $.ajax({
      //   url: url,
      //   method: "GET",
      // })
      .then(function (data) {
        console.log(data);
        data.forEach(function (el, i) {
          // render to page:
          // name, phone, email, username. address, city and zipcode

          // create the html element
          const card = document.createElement("div");
          const name = document.createElement("p");
          const phone = document.createElement("p");
          const email = document.createElement("p");
          const username = document.createElement("p");
          const address = document.createElement("p");
          const city = document.createElement("p");
          const zipcode = document.createElement("p");

          // give value to the html elements created
          name.textContent = el.name;
          phone.textContent = el.phone;
          email.textContent = el.email;
          username.textContent = el.username;
          address.textContent = `${el.address.city} : ${el.address.zipcode}`;

          // append the html elements
          card.append(name, phone, email, username, address, city, zipcode);
          fetchedData.append(card);

          // define card styles
          card.style.border = "thick solid black";
          card.style.margin = "5px";
        });
      });

    btnStatus = true;
    btn.textContent = "Reset";
  } else {
    btnStatus = false;
    btn.textContent = "Click Me!";
  }
}

btn.addEventListener("click", getData);
