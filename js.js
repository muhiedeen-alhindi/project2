window.onload=function(){
 let signin_btn=document.getElementById("sign-in")
 let signup_btn=document.getElementById("sign-up")
 let title=document.getElementById("title")
 let div_name=document.getElementById("reg-form")
 let div_user=document.getElementById("username")
 let div_date=document.getElementById("date")
 let email=document.getElementById("email")
 let password=document.getElementById("password")
 let form=document.getElementById("id")
 console.log(form)
 
 

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
        // signup_btn.disabled = true;
        
        
        })

       
        password.addEventListener("blur", function(){
            if(password.value.length<8){
                alert("password should  minimum 8  character long")
            }else if (!/^[A-Z]/.test(password.value)) {
                alert("Password must start with an uppercase letter.");
              }
        
        })
        email.addEventListener("blur", function(){
            if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
                        alert("use like this form muhie@live.com ")
                     }
        
        })
       
    
         
            
          }
 

