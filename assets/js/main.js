
document.addEventListener("DOMContentLoaded", function() {
   var restoggler = document.querySelector(".toggle-cat-respon")
   var repon = document.querySelector(".cat-respon-phone")
   var closeres = document.querySelector(".close-cat-res")
   
   restoggler.addEventListener("click", function(){
      repon.style.display = "block"
   })

   closeres.addEventListener("click",function(){
    repon.style.display = "none"
   })
})