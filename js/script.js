	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

    // Contact Message
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxUxhAe_diGbAL6MhwmUIh7gB8Av0gthH5Nk87HAojYM23Z4bntAki1-wMkJO92ZWML/exec'
        const form = document.forms['submit-to-google-sheet']

        const msg = document.getElementById("message")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully!"
                setTimeout(function(){
                    msg.innerHTML = ""
                }, 6000)
                form.reset()
            })
            .catch(error => {
                msg.innerHTML = "Message sent failed!"
                msg.style.color = "red"
                setTimeout(function(){
                    msg.innerHTML = ""
                }, 6000)
                form.reset()
            })
        })