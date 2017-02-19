<?php
//include("../../errors.php");
//testing
//echo "formInsert\n\n";
//this file is used to calculate the hours and send them to the db
$servername = "localhost";
$username = "root";
$password = "K1ngsford";

//creates the conection to db
$conn = new mysqli($servername, $username, $password);

//tests conection
if ($conn->connect_error) {
   die("Connection Failed: " . $conn->connect_error . "\n");
}

$formSecCount = $_POST["formSecCount"];

//TESTING
//echo "Form Section Count: $formSecCount\n";

//each varaiable is set to the value held in the section referenced by the
//formSecCount then they are input into the db
for($i = 0; $i <= $formSecCount; $i++){

   $daysDate = $_POST["daysDate$i"];
   $startTime = $_POST["startTime$i"];
   $endTime = $_POST["endTime$i"];

   //TESTING
   //echo "Start Time: $startTime\nEnd Time: $endTime\nDays Date: $daysDate\n";

   //used to add suport for hours ending in a new day
   if($endTime < $startTime) {

      $endTime += 24;
   }

//TODO: allows for calculation of minutes
   //calculates the hours worked
   $hoursWorked = $endTime - $startTime;

   //TESTING
   //echo "Hours Worked: $hoursWorked\n";

   $sql = "INSERT INTO Hours_Tracker.hours
      (days_date,hours_worked)
      VALUES('$daysDate',$hoursWorked)";

   if ($conn->query($sql) === TRUE) {

      include "formSelect.php";

   } else {

      echo "formInsert";
      echo "error: $sql $conn->error\n\n\n";

   }
}

$conn->close();


?>
