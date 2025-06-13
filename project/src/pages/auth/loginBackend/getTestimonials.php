<?php
// Enable CORS headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
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

// Prepare SQL query to fetch all testimonials
$sql = "SELECT * FROM testimonials";
$result = $conn->query($sql);

// Check if testimonials exist
if ($result->num_rows > 0) {
    $testimonials = [];
    while ($row = $result->fetch_assoc()) {
        $testimonials[] = [
            'id' => $row['id'],
            'name' => $row['name'],
            'role' => $row['role'],
            'image' => $row['image'],
            'content' => $row['content'],
            'rating' => $row['rating']
        ];
    }
    echo json_encode(['success' => true, 'data' => $testimonials]);
} else {
    echo json_encode(['success' => false, 'message' => 'No testimonials found.']);
}

// Close the database connection
$conn->close();
?>
