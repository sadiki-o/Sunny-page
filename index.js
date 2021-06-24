document.querySelector("#cl").addEventListener("click", function(){
    if (document.querySelector(".drop-invisible").style.display === "none") {
        document.querySelector(".drop-invisible").style.display = "flex";
    } else {
        document.querySelector(".drop-invisible").style.display = "none";
    }
})
