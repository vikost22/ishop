export function resetStorage() {
  if (!localStorage.getItem("addedItems")) {
    localStorage.setItem("addedItems", "[]");
  }
  if (!localStorage.getItem("favoriteItems")) {
    localStorage.setItem("favoriteItems", "[]");
  }
}

export function bodyNotScrolling() {
  document.querySelector("body").classList.toggle("open-modal");
}
