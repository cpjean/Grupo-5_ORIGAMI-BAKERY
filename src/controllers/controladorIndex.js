
const observer = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    })
})
const hiddenElements = documen.querySelectorAll('.section')
hiddenElements.forEach((el) => observer.observe(el))