window.onload = pageLoad;

function pageLoad(){
    var xhr = new XMLHttpRequest();
  xhr.open("GET", "cloth.json");
  xhr.onload = function () {
    alert(xhr.responseText);
    var data = JSON.parse(xhr.responseText);
    showData(data);

  };
  xhr.onerror = function () {
    alert("Error");
  };
  xhr.send();
}

function showData(data){
    var container = document.getElementById("layer");
  container.innerHTML = "";

  for (var key in data) {
    var item = data[key];
    var div = document.createElement("div");

    var img = document.createElement("img");
    img.src = "pic/" + item.img;

    var name = document.createElement("h3");
    name.textContent = item.brand;

    var price = document.createElement("p");
    price.textContent = "Price: " + item.price + " THB";

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(price);

    container.appendChild(div);
  }
}