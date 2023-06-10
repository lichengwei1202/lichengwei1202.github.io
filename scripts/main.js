let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mysrc = myImage.getAttribute('src');
    if (mysrc=="images/harry_puzzle.jpg") {
        myImage.setAttribute('src','images/Harry-Potter-Wallpaper-HD-2.jpeg');
    }else{
        myImage.setAttribute('src', 'images/harry_puzzle.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setMyname() {
    let myname = prompt("请输入你的名字");
    if (!myname) {
        setMyname()
    }else{
        localStorage.setItem('name',myname);
        myHeading.textContent="太酷了"+myname;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  
myButton.onclick=function() {
    setMyname();
}