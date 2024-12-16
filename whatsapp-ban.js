<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ES Teams WhatsApp Ban</title>
  <style>
    /* General Body Styling */
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: linear-gradient(to bottom right, #222, #444);
      color: #fff;
      overflow-x: hidden;
    }

    /* Sidebar Styling */
    #sidebar {
      position: fixed;
      top: 0;
      left: -250px; /* Hidden by default */
      width: 250px;
      height: 100%;
      background: #222; /* Dark background */
      color: #fff;
      box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
      z-index: 1000;
      transition: left 0.3s ease-in-out; /* Smooth sliding */
      padding: 20px;
    }

    #sidebar ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    #sidebar ul li {
      margin: 20px 0;
      font-size: 18px;
      cursor: pointer;
      transition: color 0.2s;
    }

    #sidebar ul li:hover {
      color: #00ff00;
    }

    #sidebar.active {
      left: 0; /* Slide in */
    }

    /* Menu Icon Styling */
    .menu-icon {
      position: fixed;
      top: 20px;
      left: 20px;
      width: 30px;
      cursor: pointer;
      z-index: 1001;
    }

    .menu-icon div {
      width: 100%;
      height: 5px;
      background: #fff;
      margin: 5px 0;
      transition: transform 0.3s ease-in-out;
    }

    /* Main Content */
    .content {
      margin: 50px 20px;
      text-align: center;
    }

    .content h1 {
      font-size: 28px;
    }

    .content p {
      font-size: 16px;
    }

    /* Form Styling */
    .form-container {
      margin-top: 30px;
      text-align: center;
    }

    .form-container input, .form-container select {
      width: 80%;
      max-width: 400px;
      padding: 10px;
      margin: 10px 0;
      font-size: 16px;
      border: none;
      border-radius: 5px;
    }

    .form-container button {
      padding: 10px 20px;
      font-size: 18px;
      background: #00ff00;
      color: #222;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .form-container button:hover {
      background: #00cc00;
    }

    /* Error Shake Animation */
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      50% { transform: translateX(5px); }
      75% { transform: translateX(-5px); }
    }

    .shake {
      animation: shake 0.5s;
    }
  </style>
</head>
<body>
  <!-- Sidebar -->
  <div id="sidebar">
    <ul>
      <li>Home</li>
      <li>Premium Apps</li>
      <li>Bot</li>
    </ul>
  </div>

  <!-- Sidebar Toggle -->
  <div id="menu-toggle" class="menu-icon">
    <div></div>
    <div></div>
    <div></div>
  </div>

  <!-- Main Content -->
  <div class="content">
    <h1>ES TEAMS WHATSAPP BAN</h1>
    <p>Use this tool wisely to ban inappropriate numbers on WhatsApp.</p>

    <div class="form-container">
      <!-- Password Section -->
      <input id="password" type="password" placeholder="Enter Passcode">
      <button id="confirm-password">Enter</button>
      <p id="password-error" style="color: red; display: none;">Incorrect Password</p>

      <!-- Hidden Section (Shown after correct password) -->
      <div id="ban-tool" style="display: none;">
        <h2>Enter Victim's WhatsApp Number</h2>
        <select id="country-code">
          <option value="+1">+1 USA</option>
          <option value="+44">+44 UK</option>
          <option value="+91">+91 India</option>
          <option value="+81">+81 Japan</option>
          <option value="+234">+234 Nigeria</option>
          <!-- Add more countries here -->
        </select>
        <input id="phone-number" type="text" placeholder="Enter Phone Number">
        <button id="ban-button">BAN</button>
        <p id="ban-status" style="color: green; display: none;">Message Sent! Kindly wait 24-48 hours.</p>
      </div>
    </div>
  </div>

  <script>
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const confirmPassword = document.getElementById("confirm-password");
    const passwordInput = document.getElementById("password");
    const passwordError = document.getElementById("password-error");
    const banTool = document.getElementById("ban-tool");
    const banButton = document.getElementById("ban-button");
    const banStatus = document.getElementById("ban-status");

    // Sidebar Toggle
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });

    // Confirm Password
    confirmPassword.addEventListener("click", () => {
      const password = passwordInput.value;
      if (password === "ES TEAMS 001") {
        passwordError.style.display = "none";
        banTool.style.display = "block";
      } else {
        passwordError.style.display = "block";
        passwordInput.classList.add("shake");
        setTimeout(() => passwordInput.classList.remove("shake"), 2000);
      }
    });

    // Ban Button Functionality
    banButton.addEventListener("click", () => {
      const countryCode = document.getElementById("country-code").value;
      const phoneNumber = document.getElementById("phone-number").value;
      if (phoneNumber) {
        // Send email (simulated for this example)
        alert(`Email sent to smb@whatsapp.support.com to ban ${countryCode}${phoneNumber}`);
        banStatus.style.display = "block";
      } else {
        alert("Please enter the phone number!");
      }
    });
  </script>
</body>
</html>