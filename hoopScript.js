function showHome() {
  fetch('http://localhost:8000/homePage.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('mainContent').innerHTML = html;
    })
    .catch(error => console.error('Error fetching homePage.html:', error));
}

function showContactInfo() {
  fetch('http://localhost:8000/contactPage.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('mainContent').innerHTML = html;
    })
    .catch(error => console.error('Error fetching contactPage.html:', error));
}

function showAboutUs() {
  fetch('http://localhost:8000/aboutUsPage.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('mainContent').innerHTML = html;
    })
    .catch(error => console.error('Error fetching aboutUsPage.html:', error));
}

showHome();