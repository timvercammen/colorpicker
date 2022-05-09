import "./style.css";
import store from "./data";
import { chooseColor, addColor } from "./data/color.js";

function render() {
  document.querySelector("#ul").innerHTML = store
    .getState()
    .colorState.map(
      (color) => `<li>
    <div class=colortile style="background-color: ${color.code}"></div>
    <div class="change">
    <p contentEditable class="name" style="color: ${color.code}">${color.name}</p>
    <input type="color" class="newColor" value="${color.code}" data-id="${color.id}"/>
    </li></div>`
    )
    .join("");
}

render();

document.getElementById("ul").addEventListener("change", (e) => {
  if (e.target.classList.contains("newColor")) {
    store.dispatch(
      chooseColor({ id: e.target.dataset.id, code: e.target.value })
    );
  }
});

const form = document.querySelector("form");
form.onsubmit = function (e) {
  e.preventDefault();
  store.dispatch(
    addColor({
      code: form.elements["code"].value,
      name: form.elements["name"].value,
    })
  );
  form.reset();
};

store.subscribe(render);
