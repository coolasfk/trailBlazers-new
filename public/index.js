const navX = document.querySelector('.navX')
const hamburger = document.getElementById('hamburger')
const navMain = document.querySelector('.active')
const current_rotation = 0;
const contactForm = document.querySelector('.contact-form');
let nameText = document.getElementById('name')
let emailText = document.getElementById('email')
const textarea = document.getElementById('growing_textfield');







contactForm.addEventListener('submit', (e) => {
  e.preventDefault();


  let formData = {
    nameText: nameText.value,
    emailText: emailText.value,
    message: textarea.value
  }
let xhr = new XMLHttpRequest();
xhr.open('POST', '/');
xhr.setRequestHeader('content-type', 'application/json');
xhr.onload = function() {
  console.log(xhr.responseText);
  if(xhr.responseText == 'success'){
    alert('Email sent');
    nameText.value = '';
    emailText.value = '';
    textarea.value = '';
  } else {
    alert('something went opps')
  }
}

xhr.send(JSON.stringify(formData))

  console.log(formData);
})




      textarea.addEventListener("keyup", e => {

        textarea.style.height = "10px";

        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
      });

      window.onbeforeunload = () => {
        for(const form of document.getElementsByTagName('form')) {
          form.reset();
        }
      }


hamburger.addEventListener('click', () => {
    navMain.style.visibility = "visible";	
})


navX.addEventListener('click', () => {
    navMain.style.visibility = "hidden";	
})

navX.addEventListener('mouseenter', () =>
navX.style.transform = 'rotate(365deg)'
)
navX.addEventListener('touchstart', () =>
navX.style.transform = 'rotate(365deg)'
)
navX.addEventListener('mouseleave', () =>
navX.style.transform = 'rotate(-5deg)'
)
