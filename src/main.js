const click = document.querySelector("#click");

function calculateAge(){
    const dob = new Date(document.getElementById("dob").value);
    const ageinMS = Date.now()-dob;
    const ageDate = new Date(ageinMS);

    const age = Math.abs(ageDate.getUTCFullYear()-1970);
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() -1;
    
    document.getElementById("year").innerHTML = age;
    document.getElementById("month").innerHTML = months;
    document.getElementById("day").innerHTML = days;

    click.play();

    // Using minutes second hour

    const currenTime = new Date();
    const ageInMilisecond = currenTime - dob;
    const AgeInSecond = ageInMilisecond / 1000;
    const AgeInMinutes = AgeInSecond / 60;
    const AgeInHours = AgeInMinutes / 60;

    document.getElementById("Mili-S").innerHTML = ageInMilisecond +" Mili Second";
    document.getElementById("Second").innerHTML = Math.floor(AgeInSecond) + " Seconds";
    document.getElementById("Minutes").innerHTML = Math.floor(AgeInMinutes) + " Minutes";
    document.getElementById("Hours").innerHTML = Math.floor(AgeInHours) + " Hours";
   
}


// username check

    



