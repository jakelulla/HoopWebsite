
var pageName = 'homePage';
function showPage(pageName) {
    // Fetch the content of the HTML file based on the provided pageName
    fetch(`${pageName}.html`)
      .then(response => response.text())
      .then(html => {
        // Replace the content of the body with the fetched HTML
        document.body.innerHTML = html;
      })
      .catch(error => console.error('Error fetching page:', error));
  }
  
  // Initial page load (home page)
  showPage(pageName);
  
  function showHome(){
    pageName = 'homePage';
  }

  function showAboutUs(){
    pageName = 'aboutUs';
  }

  function showContactInfo(){
    pageName = 'contactInfo';
  }