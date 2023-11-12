function showHome() {
  document.body.innerHTML = `
    <style>
      .header {
        background-color: rgb(22, 121, 207);
        margin: auto;
        width: 50%;
        border: 3px;
        padding: 10px;
        text-align: center; /* Center text within the .header div */
      }

      .header img {
        /* display: block; */
        margin: auto;
        width: 80%;
      }

      .header h1,
      .header p {
        margin: 10px 0; /* Add margin as needed for spacing */
      }

      .homeImages {
        display: flex;
        flex-wrap: wrap; /* Allow items to wrap to the next line */
        justify-content: center;
        align-items: center;
      }

      .homeImages img {
        margin: 10px;
        max-width: 70%; /* Ensure images don't exceed their container width */
      }

      .homeImages h1,
      .homeImages h2 {
        text-align: center; /* Center text within the .homeImages div */
      }

      .homeButtons {
        text-align: center; /* Center the buttons within the .homeButtons div */
      }

      .homeButtons button {
        margin: 10px;
      }
    </style>
    <main>
      <div class="header">
        <img src="logo.png" alt="logo" />
        <h1>Welcome to Zumba Hoop!</h1>
        <p>Spin into joy, tone with Bliss.</p>
      </div>

      <div class="homeImages">
        <img src="productOne.png" alt="prodOne" />
        <h1>Feature Product A</h1>
        <h2>$19.99</h2>

        <img src="hulahoop.jpg" alt="hulaHooper" />
        <h1>FEATURE PRODUCT B</h1>
        <h2>$27.99</h2>
      </div>

      <div class="homeButtons" src="hoopScript.js">
        <button onclick="showAboutUs()">About Us</button>
        <button onclick="showContactInfo()">Contact Info</button>
      </div>
    </main>
  `;
}

function showContactInfo() {
  document.body.innerHTML = `
  <main>
  <h1>Contact Us</h1>
  <h2>Phone: 201-666-8888</h2>
  <h2>Email: sampleemail@gmail.com</h2>
  <h2>Mailing address: 1234 Main St, Montvale, NJ, 07645</h2>
  <button src = "hoopScript.js" onclick="showHome()">Home</button>
</main>
  `;
}

function showAboutUs() {
  document.body.innerHTML = `
  <style>
  .aboutUs {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
  }
  .aboutUs img {
    display: block;
    margin: auto;
    width: 50%;
  }

  .aboutUs button {
    display: block;
    margin: auto;
  }
</style>
<main>
  <h1>About Us</h1>
  <div class="aboutUs">
    <p>
      "Our mission at [Your Business Name] is to revolutionize fitness and
      well-being by providing innovative and effective weighted hula hoops. We
      are committed to empowering individuals of all ages and fitness levels
      on their journey to a healthier, happier lifestyle. Through our
      meticulously designed and expertly crafted hula hoops, we aim to make
      exercise enjoyable, accessible, and results-driven. At the core of our
      mission is a dedication to quality and performance. We strive to
      redefine the fitness experience by delivering hula hoops that not only
      enhance core strength and cardiovascular health but also inspire
      confidence and joy in every workout. We believe that fitness should be a
      celebration of the body's capabilities, and our weighted hula hoops are
      designed to bring fun and effectiveness together seamlessly. We are
      passionate about promoting a holistic approach to well-being,
      encouraging our community to embrace an active lifestyle that goes
      beyond the confines of traditional exercise routines. With a focus on
      innovation, customer satisfaction, and a commitment to excellence, we
      are not just selling hula hoops; we are fostering a movement that
      transforms the way people perceive and engage with their fitness goals.
      Join us on this exciting journey towards a healthier, more vibrant life.
      Let's hula our way to wellness together!"
    </p>
    <img src="aboutUs.jpg" alt="aboutUsImg" />

    <button src = "hoopScript.js" onclick="showHome()">Home</button>
  </div>
</main>
`;
}



showHome();
