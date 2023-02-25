 
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
        signup_btn.innerHTML = "sign in";
        div_user.style.display="none";
        div_date.style.display="none"
        signin_btn.style.display="none"
        
        
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
                signup_btn.disabled = true;
              }
        
        })
        email.addEventListener("blur", function(){
            
            if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(email.value)){
                        alert("use like this form muhie@live.com ")
                        // signup_btn.disabled = true;
                     }
        
        })  
                 
                      
        
        
    
        const myForm = document.getElementById('myform');

        myForm.addEventListener("submit", function(event) {
          event.preventDefault(); // prevent form submission
          
          // get form data
          let name = document.getElementById("name").value;
          let username = document.getElementById("username").value;
          let email = document.getElementById("email").value;
          let password = document.getElementById("password").value;
          let date = document.getElementById("date").value;
        
          // create JSON object
          let formData = {
            "name": name,
            "username": username,
            "email": email,
            "password": password,
            "date": date
          };
          
          console.log(formData); // display JSON object in console
        });
        
       
        
 
     
         
            
       
 

