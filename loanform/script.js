function SendMail(){
    var params = {
        fullname:document.getElementById("fullname").value,
        loansubject:document.getElementById("loansubject").value,
        city:document.getElementById("city").value,
        mobile:document.getElementById("mobile").value,
        addressed:document.getElementById("addressed").value,
        loan:document.getElementById("loan").value,
        sal:document.getElementById("sal").value,
        // message:document.gatElementById("message").value
    }
    emailjs.send('service_bp1hdnq',"template_d0s532w",params)
    .then (function (res)
   
      {
        alert('Successfull '+ res.status);
      }
    )
}