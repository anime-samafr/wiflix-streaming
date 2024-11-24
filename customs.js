var button = document.createElement("p");

button.innerText = "Voir le Site Wiflix >>";

button.className = "btn";

button.addEventListener("click", function() {
  
  window.open("https://vf.wiflix-streaming.xyz/", "_blank");
});
document.getElementById("btncnt").appendChild(button);
