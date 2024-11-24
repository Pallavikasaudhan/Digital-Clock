function updateClock() {
    const now = new Date();
  
    // Extract Date and Time
    const day = now.toLocaleDateString('en-US', { weekday: 'long' });
    const date = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert 24-hour format to 12-hour format
  
    // Update DOM Elements
    document.getElementById('date').textContent = `${day}, ${date}`;
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
  
    // Day/Night Background Update
    if (hours >= 6 && hours < 18) {
      document.body.style.background = "linear-gradient(135deg, #87CEEB, #1E90FF)"; // Day colors
    } else {
      document.body.style.background = "linear-gradient(135deg, #001f3f, #4B0082)"; // Night colors
    }
  
    // World Clocks
    const utcTime = new Date().toLocaleString("en-US", { timeZone: "UTC" });
    const istTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
    document.getElementById('world-clock').textContent = `UTC: ${utcTime} | IST: ${istTime}`;
  }
  
  // Theme Toggle
  document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
  });
  
  // Start Clock
  setInterval(updateClock, 1000);
  updateClock(); // Call immediately to avoid delay
  