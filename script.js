const formScreen = document.getElementById("formScreen")

window.addEventListener('scroll' , () => {
    if(window.scrollY >= 60){
        document.getElementById("navbar").style.backdropFilter = "blur(12px)"
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.267)"
    }else{
        document.getElementById("navbar").style.backdropFilter = "blur(0px)"
        document.getElementById("navbar").style.backgroundColor = "transparent"
    }
})

const displayFormScreen = () => {
    formScreen.style.display = "flex"
}
const hideFormScreen = () => {
    formScreen.style.display = "none"
}