<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

include 'config.php'; // Database connection

if ($_SERVER["REQUEST_METHOD"] !== "GET") {
    echo json_encode([
        "success" => false,
        "message" => "Invalid request method"
    ]);
    exit();
}

if (!isset($_GET['email']) || empty(trim($_GET['email']))) {
    echo json_encode([
        "success" => false,
        "message" => "Email is required"
    ]);
    exit();
}

$email = trim($_GET['email']);

$query = $conn->prepare("SELECT name FROM user_data WHERE email = ?");
if (!$query) {
    echo json_encode([
        "success" => false,
        "message" => "Database error: " . $conn->error
    ]);
    exit();
}

$query->bind_param("s", $email);

if (!$query->execute()) {
    echo json_encode([
        "success" => false,
        "message" => "Query execution failed: " . $query->error
    ]);
    $query->close();
    $conn->close();
    exit();
}

$result = $query->get_result();
$user = $result->fetch_assoc();

if ($user) {
    echo json_encode([
        "success" => true,
        "user" => $user
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "User not found"
    ]);
}

$query->close();
$conn->close();
exit();
?>
