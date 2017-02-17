//the script is used for adding another adding hours from whenthe plus is clicked

//this variable holds the number of section in the from for inputting hours
var formSecCount = 0;

//runs when the adddform button is pressed
function addForm() {

   //increases the count used for the ids of the new forms
   formSecCount++;

   //holds the html for the form
   var html ='<br><label for="daysDate' + formSecCount + '">The Days Date:</label><input type="date" class="form-control" id="daysDate' + formSecCount + '" required></div><div class="form-group row" style="margin-top:15px;"><div class="col-sm-6"><label for="startTime' + formSecCount + '">Start Time:</label><input type="time" class="form-control" id="startTime' + formSecCount + '" required></div><div class="col-sm-6"><label for="endTime' + formSecCount + '">End Time:</label><input type="time" class="form-control" id="endTime' + formSecCount + '" required></div>'

   //holds the reference to the hours container
   var elem = document.getElementById('hrsContainer');

   //inserts the html into the hrsContainer
   elem.insertAdjacentHTML('beforeend',html);

}
