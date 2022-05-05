let elNavbar = document.getElementById('navbar')
elNavbar.innerHTML = `
  <div class="container">
    <div class="row">

      <div class="d-flex mx-auto text-lg-center">
        <button class="navbar-toggler navbar-brand py-0 py-sm-2 mx-auto" type="button" style="user-select:none" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Menu" data-autoshow="500">
          <img class="logo-light" src="https://gigloft.com/assets/img/apple-touch-icon.png" alt="gigloft logo">
          <img class="logo-dark" src="https://gigloft.com/assets/img/apple-touch-icon.png" alt="gigloft logo">
        </button>
      </div>

      <div class="">
        <section id="nav-tray" class="navbar-mobile">
          <nav class="nav nav-navbar">
            <!--<div class="">
              <a href="/"><h5 class="navbar-heading text-blue">Learn about GigLoft</h5></a>
              <a href="/mentor"><h5 class="navbar-heading text-purple">Become a mentor</h5></a>
              <a href="/hire"><h5 class="navbar-heading text-red">Hire our graduates</h5></a>
              <a href="/refer"><h5 class="navbar-heading text-pink">Refer students! Get $$$</h5></a>
            </div>-->
            <div class="mt-4 pt-4">
              <a href="/learn.html"><h5 class="navbar-heading text-green">Start learning free!</h5></a>
              <a class="nav-link" href="/teaches/fundamentals-of-freelance">🏁 Starting From Scratch</a>
              <a class="nav-link" href="/teaches/entrepreneurial-mindset">🙇‍♀️ Entrepreneurial Mindset</a>
              <a class="nav-link" href="/teaches/getting-clients">🎯 Getting Clients</a>
              <a class="nav-link" href="/teaches/personal-branding">❄️ Personal Branding</a>
              <a class="nav-link text-disabled" href="#">🤹‍♀️ Operating Efficiently</a>
              <a class="nav-link text-disabled" href="#">🎆 Marketing Yourself</a>
              <a class="nav-link text-disabled" href="#">🚀 Building a Team</a>
            </div>

            <div class="spacer pb-5"></div>
          </nav>
        </section>

      </div>

      <!--<div class="col-7 col-lg-5 text-right nav nav-navbar">
        <a class="nav-link" href="#request">Syllabus</a>
      </div>-->

    </div>
  </div>
`;

let elFooter = document.getElementById('footer')
elFooter.innerHTML = `
<p class="text-center font-weight-700 text-uppercase more-letter-spacing">Freelance Guides</p>

<div class="d-flex flex-wrap justify-content-center py-5 maxw-1200 mx-auto">
  <div class="flex-md-fill pb-5 mx-2">
    <a href="/teaches/fundamentals-of-freelance"><img class="content-card teachings shadow-sm corners-5px h-auto" src="../assets/img/OG-image-freelance-fundamentals.png" /></a>
  </div>
  <div class="flex-md-fill pb-5 mx-2">
    <a href="/teaches/entrepreneurial-mindset"><img class="content-card teachings shadow-sm corners-5px h-auto" src="../assets/img/OG-image-mindset.png" /></a>
  </div>
  <div class="flex-md-fill pb-5 mx-2">
    <a href="/teaches/getting-clients"><img class="content-card teachings shadow-sm corners-5px h-auto" src="../assets/img/OG-image-getting-clients.png" /></a>
  </div>
  <div class="flex-md-fill pb-5 mx-2">
    <a href="/teaches/personal-branding"><img class="content-card teachings shadow-sm corners-5px h-auto" src="../assets/img/OG-image-personal-branding.png" /></a>
  </div>
</div>
<div class="text-center d-flex flex-column justify-content-center">

  <!--<div class="d-none d-lg-inline">
    <a href="/blog" target="_blank" class="font-weight-700 text-uppercase more-letter-spacing">Blog: The GigLoft Experience</a>
  </div>

  <div class="d-none d-lg-inline py-4">
    <a href="/partner" class="font-weight-700 text-uppercase more-letter-spacing">Hire better freelancers</a>
  </div>

  <div class="d-none d-lg-inline">
    <a href="/mentor" class="font-weight-700 text-uppercase more-letter-spacing">Become a mentor</a>
  </div>
</div>

  <div class="d-block d-lg-none text-center pt-6">
    <a href="/partner" class=" font-weight-700 text-uppercase more-letter-spacing text-lightgray">Hire better freelancers</a>
    <br/>
    <br/>
    <a href="/mentor" class=" font-weight-700 text-uppercase more-letter-spacing text-lightgray">Become a mentor</a>
    <br/>
    <br/>
    <a href="/blog" target="_blank" class=" font-weight-700 text-uppercase more-letter-spacing text-lightgray">Blog: The GigLoft Experience</a>
  </div>-->
  <a href="https://inspiringcareers.notion.site/Testimonials-for-GigLoft-c5019209c15e4781951e9d32125b82de" target="_blank" class=" font-weight-700 text-uppercase more-letter-spacing text-lightgray">Testimonials for GigLoft</a>
</div>

<div class="container">
  <div class="text-center d-flex justify-content-center">
    <div class="col-12 col-lg-6 text-white">
      <div class="social col-12 col-lg-8 mx-auto d-flex justify-content-between justify-content-md-around py-7">
        <a class="social-twitter" href="https://facebook.com/joingigloft" rel="nofollow" target="_blank"><i style="font-size:1.5rem" class="fab fa-facebook text-white"></i></a>
        <a class="social-twitter" href="https://twitter.com/joingigloft" rel="nofollow" target="_blank"><i style="font-size:1.5rem" class="fab fa-twitter text-white"></i></a>
        <a class="social-twitter" href="https://instagram.com/joingigloft" rel="nofollow" target="_blank"><i style="font-size:1.5rem" class="fab fa-instagram text-white"></i></a>
        <a class="social-pinterest" href="https://pinterest.com/joingigloft" rel="nofollow" target="_blank"><i style="font-size:1.5rem" class="fab fa-pinterest text-white"></i></a>
        <a class="social-youtube" href="https://www.youtube.com/channel/UC42rJzJVt6kNbcYk4VS7jeQ" rel="nofollow" target="_blank"><i style="font-size:1.5rem" class="fab fa-youtube text-white"></i></a>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center text-center w-100 pt-6">
    <small>&copy; 2018-2022 &nbsp;<img height="15" width="15" src="../assets/img/favicon.png" alt="gigloft logo"> &nbsp;GigLoft Inc.</small>
  </div>

</div>
`;
