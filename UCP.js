function updateDateTime() { 
    var currentDateElement = document.getElementById("currentDate"); 
    var currentTimeElement = document.getElementById("currentTime"); 

    var currentDate = new Date(); 
    var dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
    currentDateElement.innerText = currentDate.toLocaleDateString('en-US', dateOptions); 

    var currentTime = currentDate.toLocaleTimeString('en-US'); 
    currentTimeElement.innerText = currentTime; 
  } 

  setInterval(updateDateTime, 1000); 