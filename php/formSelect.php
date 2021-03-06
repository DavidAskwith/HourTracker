<?php
//this page is used to select the data from the db and sends back yto be processed and
//displayed on index.html
    
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Hours_Tracker";

//creates the conection to db
$conn = new mysqli($servername, $username, $password, $dbname);

//an associative array that holds the hours 
$hoursArray;

//section for querying for the weeks hours
$hrsWeek= "SELECT SUM(hours_worked) AS weeksHours
           FROM Hours_Tracker.hours
           WHERE WEEK(days_date,5) = WEEK(CURDATE(),5);";

$resultWeek= $conn->query($hrsWeek);

$rowWeek = $resultWeek->fetch_assoc();

$hoursArray["weeksHours"] = $rowWeek["weeksHours"];


//section for query for the months hrs
$hrsMonth = "SELECT SUM(hours_worked) AS monthsHours
             FROM Hours_Tracker.hours
             WHERE MONTH(days_date) = MONTH(CURDATE());";

$resultMonth = $conn->query($hrsMonth);

$rowMonth = $resultMonth->fetch_assoc();

$hoursArray["monthsHours"] = $rowMonth["monthsHours"];


//section for the querying the years hours
$hrsYear = "SELECT SUM(hours_worked) AS yearsHours
            FROM Hours_Tracker.hours
            WHERE YEAR(days_date) = YEAR(CURDATE());";

$resultYear = $conn->query($hrsYear);

$rowYear = $resultYear->fetch_assoc();

$hoursArray["yearsHours"] = $rowYear["yearsHours"];


$conn->close();


//returns the array as json 
echo json_encode($hoursArray);

?>

