const content = document.querySelectorAll('.content')

window.addEventListener('scroll', Update, true)

Update()

function Update(){
    const triggerBottom = window.innerHeight/5*4

    content.forEach(element => {
        const boxTop = element.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            element.classList.add('show')
        } else {
            element.classList.remove('show')
        }
    });
}