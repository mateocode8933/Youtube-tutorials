const actionBtn = document.querySelector(".action-btn");

const modal = (body = {}) => {
  return `<div tabindex="10" class="modal">
    <p class='modal-title ${body.type || ""}'>
      <i class="modal-title-icon" data-feather="${
        body.modal_icon || "info"
      }"></i>
      ${body.title || "Czy jesteś pewny?"}
    </p>
    <p class="modal-description">
      ${body.description || "Potwierdź swój wybór"}
    </p>
    <div class="modal-buttons">
      <button class="modal-accept modal-action-btn">${
        body.accept_btn || "Tak"
      }</button>
      <button class="modal-decline modal-action-btn">${
        body.decline_btn || "Nie"
      }</button>
    </div>
    <button class="modal-close-icon"><i data-feather="x"></i></button>
  </div>`;
};

const createModal = (value) => {
  const modalContainer = document.createElement("div");
  modalContainer.className = "modal-container";
  modalContainer.innerHTML = modal(value);
  document.body.appendChild(modalContainer);

  const closeIcon = document.querySelector(".modal-close-icon");

  closeIcon.addEventListener("click", () => {
    const modal = document.querySelector(".modal-container");
    modal.remove();
    document.body.style.overflow = "hidden";
  });

  const closeButtons = document.querySelectorAll(".modal-action-btn");
  closeButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
      const modal = document.querySelector(".modal-container");
      modal.remove();
      document.body.style.overflow = "auto";
    })
  );

  const modalActive = document.querySelector(".modal");
  modalActive.focus();
  modalActive.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.querySelector(".modal-container");
      modal.remove();
      document.body.style.overflow = "auto";
    }
  });

  const modalActiveContainer = document.querySelector(".modal-container");

  modalActiveContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-container")) {
      e.target.remove();
    }
  });

  feather.replace();
  document.body.style.overflow = "hidden";
};

const addToBasket = () => {
  console.log("dodano do koszyka");

  createModal({
    type: "warning",
    modal_icon: "alert-triangle",
    title: "Lorem ipsum dolor title",
    description: "lorem ipusm description bla bla bla cos tam jeszcze chcialem",
    accept_btn: "Zaakceptuj",
    decline_btn: "Anuluj",
  });
};

actionBtn.addEventListener("click", addToBasket);

const actionTwoBtn = document
  .querySelector(".action-two-btn")
  .addEventListener("click", () => {
    createModal({
      type: "danger",
      modal_icon: "alert-octagon",
      title: "Drugi tekst modala",
      description:
        "lorem ipusm description bla bla bla cos tam jeszcze chcialem lorem ipusm description bla bla bla cos tam jeszcze chcialem",
      accept_btn: "Ok",
      decline_btn: "Nie",
    });
  });

const actionThreeBtn = document
  .querySelector(".action-three-btn")
  .addEventListener("click", () => {
    createModal();
  });
