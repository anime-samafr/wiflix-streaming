var button = document.createElement("p");

button.innerText = "Voir le Site Anime Sama >>";

button.className = "btn";

button.addEventListener("click", function() {
  
  window.open("https://v5.animesama.biz/", "_blank");
});
document.getElementById("btncnt").appendChild(button);
