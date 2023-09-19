var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
var sidemeu= document.getElementById("sidemenu");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(tabname).classList.add("active-tab");
}

function openmenu(){
    sidemeu.style.right= "0";
}
function closemenu(){
    sidemeu.style.right= "-200px";
} 

const scriptURL = 'https://script.google.com/macros/library/d/1WBlkFzZ-okAbRRbTMncY3_SFa2W50C1XtK2fWhT2gdTCvM235gkfRrsP/1'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = "Message sent successfully" 
      setTimeout(function(){
        msg.innerHTML = ""
        },5000) 
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })