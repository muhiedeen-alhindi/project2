 
 let signin_btn=document.getElementById("sign-in")
 let signup_btn=document.getElementById("sign-up")
 let title=document.getElementById("title")
 let div_name=document.getElementById("reg-form")
 let div_user=document.getElementById("username")
 let div_date=document.getElementById("date")
 let email=document.getElementById("email")
 let password=document.getElementById("password")
 let form=document.getElementById("id")
 let input_palindrom=document.getElementById( "palindrom")
//  console.log(input_palindrom)
 
 

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
        
        function runMergeSort() {
            // Prompt the user to enter 10 numbers using prompt()
           let numbers = [];
            for (var i = 0; i < 10; i++) {
               prompt('Enter a number:'+ (i+1)+":");
               let number=(i+1);
               numbers.push(Number(number));
            }
      
           
            function mergeSort(array) {
              if (array.length <= 1) {
                return array;
              }
      
              
              var mid = Math.floor(array.length / 2);
              var left = array.slice(0, mid);
              var right = array.slice(mid);
       
              var sortedLeft = mergeSort(left);
              var sortedRight = mergeSort(right);
      
              
              var merged = [];
              var leftIndex = 0;
              var rightIndex = 0;
              while (leftIndex < sortedLeft.length && rightIndex < sortedRight.length) {
                if (sortedLeft[leftIndex] < sortedRight[rightIndex]) {
                  merged.push(sortedLeft[leftIndex]);
                  leftIndex++;
                } else {
                  merged.push(sortedRight[rightIndex]);
                  rightIndex++;
                }
              }
              return merged.concat(sortedLeft.slice(leftIndex)).concat(sortedRight.slice(rightIndex));
            }
      
            
            var sortedNumbers = mergeSort(numbers);
            console.log(sortedNumbers);
          }

           function checkPlaindrom(text){
            if(text.length<=1){
                return true;
            }
             i--;
             return checkPlaindrom(text)+text[i]

             }
             
var checkButton = document.getElementById("check-button");

 
checkButton.addEventListener("click", function() {
   
  let str = document.getElementById("palindrom").value;
 
  isPalindrome(str) 
  let output = document.getElementById("output");
  if (isPalindrome(str)) {
    return output.innerHTML =  str + '" is a palindrome.';
  } else {
    return output.innerHTML =  str + '" is not a palindrome.';
  }
});
function isPalindrome(s) {
    if (s.length <= 1) {
      return true;
    } else if (s.charAt(0) !== s.charAt(s.length - 1)) {
      return false;
    } else {
      return isPalindrome(s.substr(1, s.length - 2));
    }
  }

  let age_prime=document.getElementById("user_age")
  age_prime.addEventListener("blur",function(){
   
    let birth_year=document.getElementById("birth-year")
    let year =Number(age_prime.value);
    if(year%2===0){
         
        
        console.log(birth_year)
        birth_year.innerHTML="not prime"
    }
    else{
         
        birth_year.innerHTML="prime"
    }
  })
  class Course {
    constructor(course_name,instructor_name,course_code,course_time){
    this.course_name=course_name;
    this.course_code=course_code;
    this.course_time=course_time;
    this.instructor_name=instructor_name;}
}
    const course_name =document.getElementById("course_name")
    const  course_code=document.getElementById("course_code")
    const   course_time=document.getElementById("course_time")
    const instructor_name=document.getElementById("instructor_name")
    const btn_form2=document.getElementById("submit_form2")


    btn_form2.addEventListener("click",function(e){
        e.preventDefault();
        const course = new Course(
            course_name.value,
            course_time.value,
            instructor_name.value,
            course_code.value,
           
            )

            console.log(course)   
    }
    );

    let  normal_text=document.getElementById("reverse-word") 
    let reverse_text=document.getElementById("rev-word-output")
     function reverseWord(w){
        if(w.length ==0){
            return w+"ay"
        }
        if(w.length ==1){
            return   w;
        
        }
        return reverseWord(w.substr(1))+w[0]


     }


      normal_text.addEventListener("blur",function(){
       let x=normal_text.value
       z=reverseWord(x)
       reverse_text.innerHTML=z;
       
      });



    function addAyAndFirstLetter(s){
        return (s.substr(1,s.length)+s[0]+"ay")
       

    }
  
            
    let text_ay=document.getElementById("ay-word")
    let text_ay_output=document.getElementById("ay-word-output")
    text_ay.addEventListener("blur",function(){
   
        text_ay_output.innerHTML=addAyAndFirstLetter(text_ay.value);
    })
    
    let ball = document.getElementById('ball');

let x = 0;  
let y = 0;  
let dx = 2;  
let dy = 5;  

function moveingBall() {
  x += dx;
  y += dy;

  
  if (x + ball.clientWidth > window.innerWidth || x < 0) {
    dx = -dx; // reverse horizontal direction
    if (x + ball.clientWidth > window.innerWidth) {
      x = window.innerWidth - ball.clientWidth; // set x to the right edge of the window
    } else {
      x = 0; // set x to the left edge of the window
    }
  }
  
   
  if (y + ball.clientHeight > window.innerHeight || y < 0) {
    dy = -dy;  
  }

  ball.style.left = x + 'px';  
  ball.style.top = y + 'px';  

  requestAnimationFrame(moveingBall);
}

moveingBall();


async function getIPAddress() {
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = await response.json();
    return data.ip;
  }
  
  let btn_ip = document.getElementById("ip");
  let ip_address = document.getElementById("ip-adress");
  
  btn_ip.addEventListener("click", function() {
    getIPAddress().then(function(ip) {
      ip_address.innerHTML = ip;
       let total_even=0;
       let z=ip.split(".")
       for(let i=0;i<z.length;i++){
        let n= Number(z[i])
        if(n%2==0){
            total_even +=n

        }

        
       }
       
       
    })   
       
    
  });
  let goToPage1Button = document.getElementById("go-to-page1");

  goToPage1Button.addEventListener("click", function() {
    window.location.href = "index.html";
  });
  

   
 

