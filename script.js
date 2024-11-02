var acc = document.getElementsByClassName("question");
var i;

document.querySelectorAll(".question").forEach(button => {
   button.addEventListener('click', () => {
      
      document.querySelectorAll(".question").forEach(item => {
         if (item !== button) {
            item.classList.remove('active')
            button.nextElementSibling.classList.toggle("hidden")
         }
      })

      button.classList.toggle('active')

      const answer = button.nextElementSibling;
      
   })
})
