//1 Write the code to access element which is having id as "text"

let element1 = document.getElementsByClassName("class1");
console.log(element1[0].innerText);

//2 Write the code to access element which is having tag as "h1"

let element2 = document.getElementsByTagName("h1");
console.log(element2[0]);

// 3 Write the code to access element which is having class as "box"

let element3 = document.getElementsByClassName("box");
console.log(element3[0]);

//4 "<h1>Hello </h1>

//Change the heading from ""Hello"" to ""Hello World"" using DOM functions"

element1[0].innerText = "Hello World";
console.log(element1[0].innerText);


//5 Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function changeDirection(){
    const elements = document.getElementsByClassName("item-container");
    elements[0].style.flexDirection = "column";
}

//6 "<h1>Hello </h1>

//Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"


const element4 = document.getElementById("heading");
element4.style.color = "red";
document.write(element4.innerText);
// element4.id = "heading";
// element4.innerText = "Hello";
// element4.setAttribute("style","color:red");
// document.write(element4.innerText);

// const element5 = document.getElementById("heading");
// element5.style.color = "red";
// document.write(element5.innerText);
// element4.style.color = "red";


// 7 Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function replaceText(){
const element5 = document.getElementsByClassName("que7");
element5[0].innerText = "Welcome To Elevation Academy";

}

//8 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime();

  //9

  var e = document.getElementById("year");
function show(){
  
  var strUser = e.options[e.selectedIndex].value;
  document.write(strUser);
}
e.onchange=show;
show();

//10

// const element7 = document.getElementById("myEmail");
// const v = element7.value.trim();
// if (v.endsWith('@prepbytes.com')) {
//     console.log("Valid")
// }


// let testEmails = document.getElementById("myEmail").value.trim();
// testEmails.forEach((address) => {
//     console.log(regex.test(address))
// });


function formDetails()
{
    var form = document.createElement("form")
    // form.setAttribute("method","get")
    // document.write("Name");
    var name = document.createElement("input");
    document.write("<br>");
    name.setAttribute("type","text");
    name.setAttribute("name","Fullname");
    name.setAttribute("placeholder","Fullname");
    document.write("<br>");
    document.write("<br>");
    var linebreak = '\n';

    var email = document.createElement("input");
    email.setAttribute("type","email");
    email.setAttribute("name","email");
    email.setAttribute("placeholder","email@prepbyte.com");
    document.write("<br>");
    document.write("<br>");

    var phoneNo = document.createElement("input");
    phoneNo.setAttribute("type","tel");
    phoneNo.setAttribute("name","phoneNo");
    phoneNo.setAttribute("value","+91 - ");
    phoneNo.setAttribute("maxlength","16");
    document.write("<br>");
    document.write("<br>");

    var year = document.createElement("input");
    year.setAttribute("type","date");
    year.setAttribute("name","year");
    year.setAttribute("min","1995-01-01");

    var submit = document.createElement("input")
    submit.setAttribute("type","submit")
    
    form.appendChild(name);
    document.write("<br>");

    form.appendChild(email);
    document.write("<br>");

    form.appendChild(phoneNo);
    document.write("<br>");

    form.appendChild(year);
    document.write("<br>");

    form.appendChild(submit);
    document.write("<br>");

    document.getElementsByClassName("form")[0].appendChild(form);
   
   
}
formDetails();