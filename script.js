function getMore(){
    let desc="For More Information Whatsapp Or Call Us On 9096004946/7020239094. We can help you 24x7";
    alert(desc);
}

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let mob = document.getElementById('mob');
let msg = document.getElementById('msg');
let status = document.getElementById('msgstatus');
let btn = document.getElementById('btn');

btn.addEventListener("click", function(event) {
    if (fname.value === "" || lname.value === "" || email.value === "" || mob.value === "" || msg.value === "") {
        status.innerHTML = "Fields cannot be empty. fill the all fields";
    }else{

    let name = fname.value + " " + lname.value;
    status.innerHTML = name + " Your message is successfully sent!";
    fname.value="";
    lname.value="";
    email.value="";
    mob.value="";
    msg.value="";
}
});
