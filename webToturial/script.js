var title = document.getElementById("title");
var content = document.getElementById("content");
var btn = document.getElementById("button");
var article = document.getElementById("article");
var delbtn =document.getElementById("delbtn");
var count = 0;
var test = document.getElementById("test");
var ooxbtn = document.getElementById("oox");
var boolean = true;
var alltext =document.getElementById("alltext")

title.addEventListener("input",function(){
    test.textContent=title.value;
})

btn.addEventListener("click",function(){
    if(title.value == "" || content.value == ""){
        alert("請輸入內容");
    }else{
        count++;
        article.innerHTML=article.innerHTML+`
    <div class = article${count}>
        <h2>${title.value}</h2>
        <p>${content.value}</p>
    </div>
    `
    }
    title.value = "";
    content.value = "";
})

delbtn.addEventListener("click",function(){
    // article.innerHTML ="";
    targetDiv = "article"+count;
    console.log(targetDiv);
    reDiv = document.querySelector(`.${targetDiv}`);
    reDiv.parentNode.removeChild(reDiv)
    count--;
})

ooxbtn.addEventListener("click",function(){
    if(boolean){
        alltext.style.display="none";
        ooxbtn.innerText="開啟文章"
    }else{
        alltext.style.display="block";
        ooxbtn.innerText="關閉文章"
    }
    boolean=!boolean;
})