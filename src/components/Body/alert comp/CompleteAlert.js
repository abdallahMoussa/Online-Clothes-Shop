const CompleteAlert= message=>{

    let overlay = document.getElementById('complete');
    overlay.firstChild.firstChild.textContent= message;
    overlay.style.top='0';
    let timeoutShow = setTimeout(()=>{
        clearTimeout(timeoutShow);
        overlay.style.top="-40vh";
    },2000)

}

export default CompleteAlert;