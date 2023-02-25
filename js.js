window.onload=function(){
 let signin_btn=document.getElementById("sign-in")
 let signup_btn=document.getElementById("sign-up")
 let title=document.getElementById("title")
 let div_name=document.getElementById("reg-form")
 let div_user=document.getElementById("username")
 let div_date=document.getElementById("date")
 let email=document.getElementById("email")
 let password=document.getElementById("password")
 console.log(password)
 

 signin_btn.addEventListener("click",function(){

    title.innerHTML="sign in"
    signin_btn.style.backgroundColor="blue"
    div_name.style.display = "none";
        signup_btn.style.display = "none";
        div_user.style.display="none";
        div_date.style.display="none"
        
    })
signup_btn.addEventListener("click",function(){
       signup_btn.style.backgroundColor="blue"
        title.innerHTML="sign up"
        })

 
}

