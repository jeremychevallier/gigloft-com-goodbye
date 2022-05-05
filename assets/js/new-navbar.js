let elNavbar = document.getElementById('new-navbar')
elNavbar.innerHTML = `
  <div class="container">

    <div class="navbar-left">
      <a class="navbar-brand" href="../">
        <img class="logo-dark mr-2" src="../assets/img/apple-touch-icon.png" height="auto" width="40px" alt="logo">
        <img class="logo-dark" src="../assets/img/logo-dark-notm.png" height="auto" width="100px" alt="logo">
      </a>
    </div>

    <button class="navbar-toggler" type="button">&#9776;</button>

    <section class="navbar-mobile white-text">
      <span class="d-mobile-none"></span>

      <nav id="navbar-links" class="nav nav-navbar ml-auto mr-5">
        <a class="nav-link d-block d-md-none" href="/">Home</a>

        <a class="nav-link" href="/new/theory">Our <span class="Tangerine h1 text-purple">theory</span></a>

        <a class="nav-link" href="/new/approach">Our <span class="Tangerine h1 text-green">approach</span></a>

        <a class="nav-link" href="/new/product">Our <span class="Tangerine h1 text-darkblue">product</span></a>

        <a class="nav-link" href="/new/outcomes">Your <span class="Tangerine h1 text-pink">outcomes</span></a>

        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Resources<i class="fas fa-caret-down"></i></a>
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" href="/marketing/inbound">Inbound marketing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/topic-clusters">Topic clusters</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/customers">Case studies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/blog" target="_blank">Our blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/team#careers">Careers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/writers">Write for PubLoft</a>
            </li>
          </ul>
        </li> -->
      </nav>

          <!-- <a class="btn btn-md bg-darkblue text-white" onclick="Calendly.showPopupWidget('https://calendly.com/publoft/intro');return false;">Get more info</a> -->
    </section>

  </div>
`;

let elFooter = document.getElementById('footer')
elFooter.innerHTML = `
  <div class="container">
    <div class="row gap-y py-5">

      <div class="col-xs-12 col-md-3 col-xl-2 Martel">
        <h5 class="mb-4 mt-1 footer-headings"><strong>Why</strong></h5>
        <div class="nav flex-column">
          <a class="footer-nav-link" href="/new/theory" target="_blank">Our <span class="Tangerine h1">theory</span></a>
          <a class="footer-nav-link" href="/new/outcomes/" target="_blank">Your <span class="Tangerine h1">outcomes</span></a>
          <a class="footer-nav-link" href="/testimonials">Kind <span class="Tangerine h1">words</span></a>
        </div>
      </div>

      <div class="col-xs-12 col-md-3 col-xl-2 Martel">
        <h5 class="mb-4 mt-1 footer-headings"><strong>How</strong></h5>
        <div class="nav flex-column">
          <a class="footer-nav-link" href="/new/approach">Our <span class="Tangerine h1">approach</span></a>
          <a class="footer-nav-link" href="https://publoft.com/guidelines" target="_blank">Quality <span class="Tangerine h1">guide</span></a>
          <a class="footer-nav-link" href="https://publoftportal.com/writers" target="_blank">Writer <span class="Tangerine h1">portal</span></a>
          <a class="footer-nav-link" href="/terms" target="_blank">Our <span class="Tangerine h1">terms</span></a>
        </div>
      </div>

      <div class="col-xs-12 col-md-3 col-xl-2 Martel">
        <h5 class="mb-4 mt-1 footer-headings"><strong>What</strong></h5>
        <div class="nav flex-column">
          <a class="footer-nav-link" href="/team">Our <span class="Tangerine h1">family</span></a>
          <a class="footer-nav-link" href="/new/product/" target="_blank">Our <span class="Tangerine h1">product</span></a>
          <a class="footer-nav-link" href="https://blog.publoft.com/" target="_blank">More <span class="Tangerine h1">resources</span></a>
        </div>
      </div>

      <div class="col-md-12 col-xl-4 offset-xl-2">
        <p><a href="/home"><img src="../assets/img/logo-light.png" height="auto" width="100vw" alt="logo"></a></p>
        <p class="lead">PubLoft partners wtih startups and small/mid-sized businesses to create educational marketing resources for attraction, conversion, and retention. <br/><a style="text-decoration:underline;"  href="#cta" >Work with us.</a></p>
        <div class="col-md-12 col-xl-4 text-center d-flex justify-content-evenly">
          <div class="social social-hover-primary d-flex justify-content-between">
            <a class="social-facebook" href="https://www.facebook.com/publofthq" rel="nofollow" target="_blank"><i class="fab fa-facebook"></i></a>
            <a class="social-instagram" href="https://www.instagram.com/publoft/" rel="nofollow" target="_blank"><i class="fab fa-instagram"></i></a>
            <a class="social-youtube" href="https://www.linkedin.com/company/publoft/" rel="nofollow" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a class="social-twitter" href="https://twitter.com/publoft" rel="nofollow" target="_blank"><i class="fab fa-twitter"></i></a>
          </div>
        </div>
        <small>&copy; 2017-2020 GigLoft Inc.</small>
      </div>

    </div>
  </div>
`;
