function validateForm() {
    let x = document.forms["myForm"]["fselect"].value;
    let y = document.forms["myForm"]["ftime"].value;
    let z = document.forms["myForm"]["fdate"].value;
    let a = document.forms["myForm"]["fname"].value;
    let b = document.forms["myForm"]["fphone"].value;
    let c = document.forms["myForm"]["femail"].value;
    if (x == "" || y=="" || z=="" || a=="" || b=="" || c=="") {
      alert("All enteries must be filled out");
      
      return false;
    }
    else if(b.length!=10){
        alert("Phone no. must contain 10 digits");
        return false;
    }
  
    else{
        confirm("Do you want to CONFIRM your booking ?");
        return true;
    }
}
