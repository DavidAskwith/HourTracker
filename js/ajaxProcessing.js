// this file is used to perform all ajax actions
//
//this section is usefd to send the data to the formProcesssing php file

//this function loads when the html doc loads same as document.ready
$(function() {

    $("#calcBtn").click(function() {
        
        //alert(formSecCount+" fromSecCount");
        

        //holds the compiled for data plus the count for the number of formSections
        var formData = "formSecCount=" + formSecCount + "&";
        

        //runs through each section of the form sections for adding hours and compiles a
        //string n the variable above of the the data for posting to the php 
        //processing page
        for(i = 0; i <= formSecCount; i++){

            //alert(i+" i count");

            var date = $("input#daysDate" + i ).val();
            var startTime = $("input#startTime" + i ).val();
            var endTime = $("input#endTime" + i ).val();

            var partFormData="daysDate" + i + "=" + date + "&startTime" + i + "=" + startTime
                + "&endTime" + i + "=" + endTime;
            
            //adds a & if there is more than one set of hours being added
            (i != formSecCount)?  partFormData += "&" : partFormData += ""; 
            
            formData += partFormData;

            
            //alert(partFormData+" partFormData");

        }   

        alert("POST DATA:" + formData);

        $.ajax({
            type: "POST",
            url: "php/formInsert.php",
            data: formData,
            success: function(data){

               alert(data);
            },
            error: function(){
                alert("faccckkk");
            }

        });
        //this stops page reload
        return false;
        
    });

});
