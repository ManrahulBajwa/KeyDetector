document.addEventListener("keydown" , (e)=>{
    document.querySelector(".presedkey").innerHTML = e.code;

    console.log(e.keyCode)
})