
document.addEventListener("DOMContentLoaded", function() {
   var restoggler = document.querySelector(".toggle-cat-respon")
   var repon = document.querySelector(".cat-respon-phone")
   var closeres = document.querySelector(".close-cat-res")
     if(repon){
   restoggler.addEventListener("click", function(){
      repon.style.display = "block"
   })

   closeres.addEventListener("click",function(){
    repon.style.display = "none"
   })

     }

      const openButton = document.querySelectorAll('.openSidebar');
      const closeButton = document.getElementById('closeSidebar');
      const sidebar = document.getElementById('sidebar');
   if(closeButton){
      openButton.forEach(element => {
        element.addEventListener('click', function () {
          sidebar.style.display = 'block';
          sidebar.style.right = "0";
      }); 
      }); 
      closeButton.addEventListener('click', function () {
          sidebar.style.display = "none"
      });

   }
   
      const openConnex = document.querySelectorAll('.open-connex')
      const closeConnex = document.querySelector('.close-connex')
      const connexion = document.querySelector('.connexion')

 if(openConnex){
      openConnex.forEach(element =>{
         element.addEventListener('click', function () {
         connexion.style.display = 'block';
      })
     });
 
     closeConnex.addEventListener('click', function () {
         connexion.style.display = "none"
     });  

 }

})


