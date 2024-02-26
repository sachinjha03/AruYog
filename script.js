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
    document.getElementById("psychologicalCourseDetail").style.top = "100%";
    document.getElementById("corporateCourseDetail").style.top = "100%";
}

function showDetail(e){
    e.target.parentNode.querySelector(".course-detail").style.top = "0%"
}
function hideDetail(e){
    e.target.parentNode.style.top = "100%"
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    jsonData['apiKey'] = 'jtvybVyUIs17bi9dHY3dS8V2ehyaSqJ68WAQCp0V';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonData)
    };

    fetch('https://z29aung0oc.execute-api.ap-south-1.amazonaws.com/stage_1/send_email', requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Email sent successfully');
            console.log("Email Sent Successfully");
            hideFormScreen()
        })
        .catch(error => {
            console.error('There was a problem sending the email:', error);
            alert('There was a problem sending the email');
        });
});
