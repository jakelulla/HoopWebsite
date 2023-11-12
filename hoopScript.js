function fetchPage(relativePath, pageName) {
  fetch(relativePath)
    .then(response => response.text())
    .then(html => {
      document.getElementById('mainContent').innerHTML = html;
    })
    .catch(error => console.error(`Error fetching ${pageName}:`, error));
}

function showHome() {
  fetchPage('homePage.html', 'homePage');
}

function showContactInfo() {
  fetchPage('contactInfo.html', 'contactInfo');
}

function showAboutUs() {
  fetchPage('aboutUs.html', 'aboutUs');
}

showHome();
