//the script is used for adding another adding hours from whenthe plus is clicked

//this variblae holds a string of html that is apended to the end of the the add hours
//form
var html ='<br><label for="daysDate">The Days Date:</label><input type="date" name="daysDate" class="form-control"id="daysDate" required></div><div class="form-group row" style="margin-top:15px;"><div class="col-sm-6"><label for="startTime">Start Time:</label><input type="time" name="startTime" class="form-control"id="startTime" required></div><div class="col-sm-6"><label for="endTime">End Time:</label><input type="time" name="endTime" class="form-control" id="endTime" required></div>'

function addForm() {
    
    var elem = document.getElementById('hrsContainer');

    elem.insertAdjacentHTML('beforeend',html);
}
