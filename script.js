// script.js
const clockElement = document.getElementById('clock');
const currentDateElement = document.getElementById('currentDate');
const daysContainer = document.getElementById('days');
const monthYear = document.getElementById('monthYear');
let currentDate = new Date();

// Clock and Date Section
function updateClockAndDate() {
  const now = new Date();

  // Format time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  clockElement.textContent = `${hours}:${minutes}:${seconds}`; // Fixed template literal usage

  // Format date
  currentDateElement.textContent = now.toDateString();
}

// Calendar Section
function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Display month and year
  monthYear.innerText = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  // First and last days
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  daysContainer.innerHTML = '';

  // Empty cells for previous month's days
  for (let i = 0; i < firstDay; i++) {
    daysContainer.innerHTML += '<div></div>';
  }

  // Current month's days
  for (let i = 1; i <= lastDate; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.innerText = i;

    // Highlight today's date
    if (
      i === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      dayDiv.classList.add('today');
    }

    daysContainer.appendChild(dayDiv);
  }
}

// Change Month
function changeMonth(value) {
  currentDate.setMonth(currentDate.getMonth() + value);
  renderCalendar();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  updateClockAndDate();
  renderCalendar();
  setInterval(updateClockAndDate, 1000); // Update clock every second
});
