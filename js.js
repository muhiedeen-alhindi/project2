window.onload=function(){
 let signin_btn=document.getElementById("sign-in")
 let signup_btn=document.getElementById("sign-up")
 let title=document.getElementById("title")
 

 signin_btn.addEventListener("click",function(){

    title.innerHTML="sign in"
    
    })
signup_btn.addEventListener("click",function(){

        title.innerHTML="sign up"
        })


}
