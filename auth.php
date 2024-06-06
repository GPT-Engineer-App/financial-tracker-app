<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (isset($_POST['nomeCompleto'])) {
        // Register
        $nomeCompleto = $_POST['nomeCompleto'];
        $confirmPassword = $_POST['confirmPassword'];

        if ($password != $confirmPassword) {
            die("Passwords do not match!");
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $sql = "INSERT INTO usuario (nomeCompleto, email, senha) VALUES ('$nomeCompleto', '$email', '$hashedPassword')";

        if ($conn->query($sql) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    } else {
        // Login
        $sql = "SELECT * FROM usuario WHERE email='$email'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row['senha'])) {
                echo "Login successful";
                // Redirect to main.html
                header("Location: main.html");
            } else {
                echo "Invalid password";
            }
        } else {
            echo "No user found with this email";
        }
    }
}

$conn->close();
?>