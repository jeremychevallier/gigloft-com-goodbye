let elNavbar = document.getElementById('navbar')
elNavbar.innerHTML = `
  <div class="container nav nav-navbar d-flex flex-row justify-content-center maxw-400">

      <div class="d-flex mx-auto text-lg-center">
        <button class="navbar-brand py-0 py-sm-2 mx-auto no-select" type="button">
          <img class="logo-light" src="https://gigloft.com/assets/img/apple-touch-icon.png" alt="gigloft logo">
          <img class="logo-dark" src="https://gigloft.com/assets/img/apple-touch-icon.png" alt="gigloft logo">
        </button>
      </div>

    </div>


  </div>
`;

let elFooter = document.getElementById('footer')
elFooter.innerHTML = `
  <div class="container">
    <div class="text-center row d-flex justify-content-center">
      <div class="col-6 text-white">
        <div class="social col-12 col-lg-8 mx-auto d-flex justify-content-around py-lg-7">
          <a class="px-1 social-facebook" href="https://facebook.com/groups/gigloft.community" rel="nofollow" target="_blank"><i style="font-size:1.5rem" class="fab fa-facebook text-white"></i></a>
          <a class="px-1 social-twitter" href="https://twitter.com/joingigloft" rel="nofollow" target="_blank"><i style="font-size:1.5rem" class="fab fa-twitter text-white"></i></a>
          <a class="px-1 social-instagram" href="https://instagram.com/joingigloft" rel="nofollow" target="_blank"><i style="font-size:1.5rem" class="fab fa-instagram text-white"></i></a>
          <a class="px-1 social-slack" href="https://gigloft.slack.com" rel="nofollow" target="_blank"><i style="font-size:1.5rem" class="fab fa-slack text-white"></i></a>
          <a class="px-1 social-youtube" href="https://www.youtube.com/channel/UC42rJzJVt6kNbcYk4VS7jeQ" rel="nofollow" target="_blank"><i style="font-size:1.5rem" class="fab fa-youtube text-white"></i></a>
        </div>
      </div>
    </div>

      <div class="d-flex justify-content-center text-center w-100 pt-6">
        <small>&copy; 2018-2020 &nbsp;<img height="15" width="15" src="../assets/img/favicon.png" alt="gigloft logo"> &nbsp;GigLoft Inc. • <a class="" href="/policies/privacy">Privacy</a></small>
      </div>

    </div>
  </div>
`;
