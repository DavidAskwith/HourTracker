<?php
//this page is used to select the data from the db and sends back yto be processed and
//displayed on index.html
    
$servername = "192.168.0.200";
$username = "root";
$password = "Kingsford1";
$dbname = "hours_tracker";

//creates the conection to db
$conn = new mysqli($servername, $username, $password, $dbname);


//section for querying for the weeks hours
$hrsWeek= "SELECT SUM(hours_worked) AS weeksHours
           FROM hours_tracker.hours
           WHERE WEEK(days_date,5) = WEEK(CURDATE(),5);";

$resultWeek= $conn->query($hrsWeek);

$rowWeek = $resultWeek->fetch_assoc();

echo "Week Hours: " . $rowWeek["weeksHours"] . "\n";


//section for query for the months hrs
$hrsMonth = "SELECT SUM(hours_worked) AS monthsHours
             FROM hours_tracker.hours
             WHERE MONTH(days_date) = MONTH(CURDATE());";

$resultMonth = $conn->query($hrsMonth);

$rowMonth = $resultMonth->fetch_assoc();

echo "Months Hours: " . $rowMonth["monthsHours"] . "\n";


//section for the querying the years hours
$hrsYear = "SELECT SUM(hours_worked) AS yearsHours
            FROM hours_tracker.hours
            WHERE YEAR(days_date) = YEAR(CURDATE());";

$resultYear = $conn->query($hrsYear);

$rowYear = $resultYear->fetch_assoc();

echo "Years Hours: " . $rowYear["yearsHours"] . "\n";


$conn->close();

?>

