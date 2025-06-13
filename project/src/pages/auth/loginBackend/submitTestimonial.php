<?php
// Enable CORS headers
header("Access-Control-Allow-Origin: *"); // Allow all origins (for development)
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

// Handle OPTIONS request (preflight request) from the browser
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Set content type to JSON
header("Content-Type: application/json");

// Include the database configuration file
include('config.php');

// Get POST data
$data = json_decode(file_get_contents("php://input"), true);

// Check if data is received correctly
if (!isset($data['name'], $data['role'], $data['image'], $data['content'], $data['rating'])) {
    echo json_encode(["success" => false, "message" => "Missing required fields."]);
    exit();
}

// Extract and sanitize the data
$name = $conn->real_escape_string($data['name']);
$role = $conn->real_escape_string($data['role']);
$image = $conn->real_escape_string($data['image']);
$content = $conn->real_escape_string($data['content']);
$rating = (int)$data['rating']; // Ensure rating is an integer

// Prepare SQL query to insert testimonial
$sql = "INSERT INTO testimonials (name, role, image, content, rating) 
        VALUES ('$name', '$role', '$image', '$content', $rating)";

// Log the SQL query for debugging (optional)
error_log("SQL Query: " . $sql);

// Execute query and check for success
if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Thank you for your feedback!"]);
} else {
    // Log the error for debugging
    error_log("Error: " . $conn->error);
    
    // Return the error message to the client
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

// Close the database connection
$conn->close();
?>
