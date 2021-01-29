// Make changes when resizing page
window.onresize = function() {
    let womanImage = document.getElementById("womanImage");
    let backgroundPattern = document.getElementById("backgroundPattern");
    if(window.screen.width <= 375) {
        // Change Woman image
        womanImage.src = "./images/illustration-woman-online-mobile.svg";
        // Change background pattern
        backgroundPattern.src = './images/bg-pattern-mobile.svg'
    }else {
        // Change Woman image
        womanImage.src = "./images/illustration-woman-online-desktop.svg";
        // Change background pattern
        backgroundPattern.src = './images/bg-pattern-desktop.svg'
    }
};

function isContainingClass(element) {
    if(element.childNodes[1].classList.contains("showBold") || element.childNodes[3].classList.contains("showArrow") || element.childNodes[5].classList.contains("showDiv")){
        return true
    }
    return false
}

function addClass(element) {
    // childNodes[1] => <p> tag
    element.childNodes[1].classList.add("showBold");
    // childNodes[3] => iconArrow
    element.childNodes[3].classList.add("showArrow");
    // childNodes[5] => response
    element.childNodes[5].classList.add("showDiv");
}

function removeClass(element) {
    // childNodes[1] => <p> tag
    element.childNodes[1].classList.remove("showBold");
    // childNodes[3] => iconArrow
    element.childNodes[3].classList.remove("showArrow");
    // childNodes[5] => response
    element.childNodes[5].classList.remove("showDiv");
}

function removeAllClass(element) {
    for(let i = 0; i < element.length; i++){
        if(isContainingClass(question[i])){
            // childNodes[1] => <p> tag
            element[i].childNodes[1].classList.remove("showBold");
            // childNodes[3] => iconArrow
            element[i].childNodes[3].classList.remove("showArrow");
            // childNodes[5] => response
            element[i].childNodes[5].classList.remove("showDiv");
        }
    }
}

function clickHandler(){ 
    if(isContainingClass(this)){
        removeClass(this)
    } else {
        removeAllClass(question)
        addClass(this)
    }
}

let question = document.getElementsByClassName('question');
for(let i = 0; i < question.length; i++){
    question[i].addEventListener('click', clickHandler);
}
