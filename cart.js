const container = document.querySelector(".container");

let userArray = JSON.parse(localStorage.getItem("user-arr"));

displayData(userArray);

function displayData(userArray) {
  userArray.forEach((ele, i) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("div");
    const email = document.createElement("div");
    const btn = document.createElement("button");

    name.textContent = ele.name;
    email.textContent = ele.email;
    btn.textContent = "Remove from Cart";

    card.append(name, email, btn);

    container.append(card);
    btn.addEventListener("click", () => {
      container.innerHTML = "";
      userArray.splice(i, 1);
      localStorage.setItem("user-arr", JSON.stringify(userArray));
      displayData(userArray);
    });
  });
}
