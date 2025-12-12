<?php
// connection file include
include "db.php";

// form se data receive karo
$name   = $_POST['name'];
$email  = $_POST['email'];
$pass   = $_POST['password'];
$gender = $_POST['gender'];
$msg    = $_POST['msg'];

// query banao (insert)
$sql = "INSERT INTO users (name, email, pass, gender, msg)
        VALUES ('$name', '$email', '$password', '$gender', '$msg')";

// query run karo
if (mysqli_query($conn, $sql)) {
    echo "Data successfully saved!";
} else {
    echo "Error: " . mysqli_error($conn);
}

mysqli_close($conn);
?>


