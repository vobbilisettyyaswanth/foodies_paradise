<?php
// Connect to the database (replace 'username' and 'password' with your actual database credentials)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "food";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$recipe_name = $_POST['recipe_name'];
$ingredients = $_POST['ingredients'];
$process = $_POST['process'];

// Insert data into the database
$sql = "INSERT INTO recipes (recipe_name, ingredients, process) VALUES ('$recipe_name', '$ingredients', '$process')";

if ($conn->query($sql) === TRUE) {
    echo "Recipe added successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
