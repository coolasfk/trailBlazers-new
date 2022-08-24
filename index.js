const navX = document.querySelector('.navX')
const hamburger = document.getElementById('hamburger')
const navMain = document.querySelector('.active')
const current_rotation = 0;

const submit_btn = document.querySelector('.submit_btn')




const textarea = document.getElementById('growing_textfield');

      textarea.addEventListener("keyup", e => {

        textarea.style.height = "10px";

        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
      });


submit_btn.addEventListener('click', sendEmailFunction);

function sendEmailFunction() {
    var link = "mailto:whatevacreates@gmail.com"
    + "?cc=fk.przybyla@gmail.com"
    + "&subject=" + encodeURIComponent("hello .trailBlazers!")
    + "&body=" + encodeURIComponent(textarea.value)
;

console.log(link)

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
