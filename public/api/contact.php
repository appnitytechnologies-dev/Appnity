<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

$data    = json_decode(file_get_contents('php://input'), true);
$name    = htmlspecialchars(strip_tags(trim($data['name']    ?? '')));
$email   = filter_var(trim($data['email']   ?? ''), FILTER_SANITIZE_EMAIL);
$company = htmlspecialchars(strip_tags(trim($data['company'] ?? 'Not provided')));
$message = htmlspecialchars(strip_tags(trim($data['message'] ?? '')));

// Validate
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Required fields are missing.']);
    exit();
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit();
}

$to      = 'support@appnitytechnologies.com';
$subject = "New Project Inquiry from {$name}";

$body  = "You have a new project inquiry from your website.\n\n";
$body .= "-----------------------------------\n";
$body .= "Name:    {$name}\n";
$body .= "Email:   {$email}\n";
$body .= "Company: {$company}\n";
$body .= "-----------------------------------\n\n";
$body .= "Message:\n{$message}\n";

$headers  = "From: no-reply@appnitytechnologies.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Mail server error. Please email us directly.']);
}
?>
