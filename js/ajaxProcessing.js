// this file is used to perform all ajax actions
//
//this section is usefd to send the data to the formProcesssing php file

//this function loads when the html doc loads same as document.ready
$(function() {

    //loadds the data from the db on the pages load
    $.ajax({
        type: "POST",
        url: "php/formSelect.php",
        data: "",
        dataType: "json",
        success: function(data){

        //inserts the returned data from the db to the index.html page
        document.getElementById("week").innerHTML = data["weeksHours"];
        document.getElementById("month").innerHTML = data["monthsHours"];
        document.getElementById("year").innerHTML = data["yearsHours"];

        }

    });

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

        //alert("POST DATA:" + formData);

        $.ajax({
            type: "POST",
            url: "php/formInsert.php",
            data: formData,
            dataType: 'JSON',
            success: function(data){

               //inserts the returned data from the db to the index.html page
               alert("Json weeks hours: " + data["weeksHours"]);
               document.getElementById("week").innerHTML = data["weeksHours"];
               document.getElementById("month").innerHTML = data["monthsHours"];
               document.getElementById("year").innerHTML = data["yearsHours"];

            },error: function(jqXHR, textStatus, errorThrown) {
                alert('An error occurred... Look at the console (F12 or Ctrl+Shift+I, Console tab) for more information!');

                $('#result').html('<p>status code: '+jqXHR.status+'</p><p>errorThrown: ' + errorThrown + '</p><p>jqXHR.responseText:</p><div>'+jqXHR.responseText + '</div>');
                console.log('jqXHR:');
                console.log(jqXHR);
                console.log('textStatus:');
                console.log(textStatus);
                console.log('errorThrown:');
                console.log(errorThrown);

            }


        });
        //this stops page reload
        return false;

    });

});
