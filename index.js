document.addEventListener("DOMContentLoaded", function () {
    const enter = document.querySelector(".login");
    const modal = document.querySelector(".modal");
    const no = document.querySelector(".no");
    const noResult = document.querySelector(".middle");
    const loader = document.querySelector(".loader");
    enter.onclick = modalShow;
    no.onclick = modalClose;

    function modalShow() {
        modal.classList.add("modalShow");
    }

    function modalClose() {
        modal.classList.remove("modalShow");1
        noResult.classList.add("noResult");

    }

    function myFunction() {
        loader.classList.add("loaded")
    }

    window.addEventListener("load", myFunction);

});
