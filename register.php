<?php
$conn = new mysqli("localhost", "root", "", "localconnect");
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$name     = $_POST['name'];
$email    = $_POST['email'];
$phone    = $_POST['phone'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$role     = $_POST['role'];
$sql = "INSERT INTO users (name, email, ph_no, password, role) 
        VALUES ('$name', '$email', '$phone', '$password', '$role')";
if ($conn->query($sql) === TRUE) {
    echo "Account created successfully!";
} else {
    echo "Error: " . $conn->error;
}
$conn->close();
?>
