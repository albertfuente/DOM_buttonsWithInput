const sendBtn=document.querySelector("#sendBtn");
const messageIn=document.querySelector("#messageIn");
const messageOut=document.querySelector("#messageOut");

function sendMsg(){
  let content=messageIn.value;
  console.log(content);
  if(content===""){
    alert("please enter a valid value");
  }else{
    messageOut.innerHTML=content;
    messageIn.value="";
  }
}

sendBtn.addEventListener("click",sendMsg);
