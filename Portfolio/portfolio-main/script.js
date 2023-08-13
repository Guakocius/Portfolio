function resumeLink(event){
    event.preventDefault();

    let userLanguage = navigator.language || navigator.languages[0];

    if(userLanguage.startsWith("de")){
        window.location.href = "resume/Lebenslauf.pdf";
    }else{
        window.location.href = "resume/Resume.pdf";
    }
}
document.getElementById("resume").addEventListener("click", resumeLink);

function openGym(){
    window.location.href = "../Fitness-center/index.html";

    let image = new Image();
    image.src = "../Fitness-center/images/fitness-center.jpg";
    document.body.appendChild(image);

    let logo = new Image();
    logo.src = "../Fitness-center/images/gym-icon.png";
    document.body.appendChild(logo);
}