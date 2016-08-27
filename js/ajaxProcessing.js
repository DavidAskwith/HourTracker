// this from is used to perform all ajax actions
//
//this section is usefd to send the data to the formProcesssing php file

//this function loads when the html doc loads same as document.ready
$(function() {

    //runs func when calcBtn is clicked
    $("#calcBtn").click(function() {
        
        //alert("works");
        //vars below hold the data from the form
        var date = $("input#daysDate").val();
        var startTime = $("input#startTime").val();
        var endTime = $("input#endTime").val();

        var formData = "date=" + date + "&startTime=" + startTime
            + "&endTime= " + endTime;
        
        //alert(formData);

        $.ajax({
            type: "POST",
            url: "php/dbProcessing.php",
            data: formData,
            success: function() {

               alert("Yours hours have been submitted");

            },
            error: function(){
                alert("faccckkk");
            }

        });
        return false;
    });

});
