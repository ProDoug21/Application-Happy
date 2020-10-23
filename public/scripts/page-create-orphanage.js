// create map
const map = L.map("mapid").setView([-27.2224718, -49.6493543], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
});

let marker;

// create and add marker //
map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon //
  marker && map.removeLayer(marker);

  // add icon player ///

  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// upload photos //

function addPhotoField() {
  // pegar o conteiner de fotos #images //
  const container = document.querySelector("#images");
  // pegar o conteiner pra duplicar .new-image //
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar clone da  última imagem adicionada //
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  // verificar se o campo está vazio,se sim, não adicionar ao container de imagens//
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  input.value = "";

  // limpar o campo antes de add ao container de imagens //
  newFieldContainer.children[0].value = "";

  // adicionar o clone ao conteiner de #images //
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-upload");
  if (fieldsContainer < 2) {
    // limpar o valor do campo//
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo//

  span.parentNode.remove();
}

// seleção sim ou não //
function toggleSelect(event) {
  // retirar a classe .active (dos botões)//
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  //colocar a class.active do botão clicado//
    const button = event.currentTarget
    button.classList.add("active");
  
  // atualizar o meu input hidden com o valor selecionado//

  const input = document.querySelector('[name="open_on_weekends"]')
  
  input.value = button.dataset.value
}