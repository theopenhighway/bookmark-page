// document.querySelectorAll(".question").forEach((button) => {
//    button.addEventListener('click', () => {
//       console.log(button.nextElementSibling)
//       button.nextElementSibling.classList.toggle("hidden")
//       // console.log(button.nextElementSibling.innerHTML)
//       // button.classList.remove('active')


      
//    })

// })

const faqQuestion = document.querySelectorAll('.question')

faqQuestion.forEach(question => {
   question.addEventListener('click', () => {
      faqQuestion.forEach(item => {
         if (item !== question) {
            item.classList.remove('active')
            item.nextElementSibling.style.maxHeight = null;
         }
      })

      question.classList.toggle('active')
      const answer = question.nextElementSibling

      if (answer.style.maxHeight) {
         answer.style.maxHeight = null
      } else {
         answer.style.maxHeight = answer.scrollHeight + 'px'
      }
   })
})