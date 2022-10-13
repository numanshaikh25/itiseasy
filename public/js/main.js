(function () {
  "use strict";

  /**
   * tab function
   */


  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function (e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function (e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function (e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
      $('#preloader').css('display', 'none')
    });
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function (direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function (e) {
        e.preventDefault();
        portfolioFilters.forEach(function (el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function () {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

function onRoute(type) {
  console.log("routing in main.js : ", type);
  var locationUrl = window.location.origin
   // Get all elements with class="tablinks" and remove the class "active"
  //  let tablinks = document.getElementsByClassName("nav-link scrollto");
  //  for (i = 0; i < tablinks.length; i++) {
  //    tablinks[i].className = tablinks[i].className.replace(" active", "");
  //  }
   // Show the current tab, and add an "active" class to the link that opened the tab
  //  document.getElementById(willType).style.display = "block";
  // console.log(document.getElementById(type));
  //  document.getElementById(type).classList.add('active')
  if (type == 'logout') {
    localStorage.clear()
  }
  else if (type == '') {
    localStorage.clear()
    window.location.href = locationUrl + '/will/main'
  }
  else if (type == 'login') {
    localStorage.clear()
    window.location.href = locationUrl + '/will/login'
  }
  else if (type == 'faq' || type == 'contribute' || type == 'about' || type == 'security' || type == 'lawyer' || type == 'career' || type == 'blog' || type == 'contact' || type == 'main'||type == 'forgotpwd'||type == 'self') {
    window.location.href = locationUrl + '/will/' + type
  }
  else if (localStorage.getItem('isLogin') == 'true' && type != 'main') {
    window.location.href = locationUrl + '/will/' + type
  }
  else {
    localStorage.clear()
    window.location.href = locationUrl + '/'
  }

  console.log(window.location.href);
}

function formValidations(inputtxt) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if (inputtxt.value.match(phoneno)) {
    return true;
  }
  else {
    alert("Not a valid Phone Number");
    return false;
  }
}

$("#m_age").on("input", function () {
  console.log($(this).val(), $(this).val() == '');
  if ($(this).val() < 18) {
    $('#error').css('display', 'block')
    $('#err-msg').text('Age should be greater than 18')
  }
  else if ($(this).val() > 90) {
    $('#error').css('display', 'block')
    $('#err-msg').text('Age should be less than 90')
  }
  else if ($(this).val() == '') {
    $('#error').css('display', 'none')
  }
  else {
    $('#error').css('display', 'none')
  }


});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  console.log("clickkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(document).ready(function(){
  var input = document.getElementById("datepick");
  var today = new Date();
  var day = today.getDate();

  // Set month to string to add leading 0
  var mon = new String(today.getMonth()+1); //January is 0!
  var yr = today.getFullYear();

    if(mon.length < 2) { mon = "0" + mon; }
    if(day.length < 2) { dayn = "0" + day; }

    var date = new String( yr + '-' + mon + '-' + day );

  input.disabled = false; 
  input.setAttribute('max', date);
})

function onSendMsg(id){
  var formData = jsonObjCreator(id)
  $.ajax({
    type: 'POST',
    url: '/contact',
    data: formData,
    success:
      function (res) {
        console.log('success', res);
        if (res.status) {
          console.log(res);
          if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
              $(this).remove();
            });
          }
        }
      }
  })
}

function openTab(evt, willType, data, form) {
  console.log(evt, willType, data, form, $('#will_type').val());
  console.log("form data : ", data, $('#j_marital_status').val());
  // var emptyArr = data.filter(e=>e.value == '')
  
  localStorage.setItem('will_type_Selected', willType)
  
  if (evt == 'family-tab') {
    willType = 'family'
  }

  var i, tabcontent, tablinks;

    if ($('#m_marital_status').val() != 'm') {
      $('#famspouse_col').css('display', 'none')
    }
    else if ($('#j_marital_status').val() != 'm') {
      $('#famspouse_col').css('display', 'none')
    }
    else {
      $('#famspouse_col').css('display', 'block')
    }

    // console.log(document.getElementsByName('assets').value);


    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("bhoechie-tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("list-group-item");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(willType).style.display = "block";
    document.getElementById(evt).classList.add('active')
    // evt.currentTarget.className += " active";
    let formData = jsonObjCreator(data)

    formData.will_type = formData.will_type == 'family' ? 'myself' : formData.will_type
    console.log(formData);
 
    let willObj = {}
    switch (form) {
      case 'self':
        localStorage.setItem('will_type', formData.will_type)
        url = '/will/add'
        willObj['self'] = formData
        datatoSend = formData
        formData.user_id = localStorage.getItem('user_id')
        break;
      case 'family':
        willObj['family'] = formData
        break;
      case 'joint':
        willObj['joint'] = formData
        break;
      case 'else':
        willObj['else'] = formData
        break;
      case 'beneficiary':
        willObj['beneficiary'] = formData
        break;
      case 'assets':
        willObj['assets'] = formData
        break;
      case 'assets1':
        willObj['assets1'] = formData
        break;
      case 'assets2':
        willObj['assets2'] = formData
        break;
      case 'executor':
        willObj['executor'] = formData
        break;
      case 'last-rites':
        willObj['last-rites'] = formData
        break;
      case 'print':
        url = '/will/add'
        willObj['print'] = formData
        console.log("will Obj ::: ", willObj);
        datatoSend={}
        let arr=['self','family','beneficiary','assets','assets1','assets2','executor','last-rites','print']
        arr.forEach(e=>{
          datatoSend[e] = JSON.parse(localStorage.getItem(e))
        })
        $.ajax({
          type: 'POST',
          url: url,
          data: datatoSend,
          success:
            function (res) {
              console.log('success', res);
              if (res.status) {
                console.log(res);
                if ($('#preloader').length) {
                  $('#preloader').delay(100).fadeOut('slow', function () {
                    $(this).remove();
                  });
                }
              }
              else {
                console.log("errorr");
                popupHandler(false, true, false, 'login')
                $('#login-err').html("Invalid Credentials")
              }
            }
        })
        break;

      default:
        break;
    }
    console.log("WILL OBJJJ ::: ", willObj);
    localStorage.setItem(form, JSON.stringify(willObj))


}

$("#mname").on("input", function () {
  this.value = this.value.replace(/[^\D]/g,'')
})

$('#checkboxes input:checked').each(function () {
  selected.push($(this).attr('name'));
});



function jsonObjCreator(data) {
  var obj = {}
  if (data) {
    data.forEach(e => {
      obj[e.name] = e.value
    })
  }
  console.log("generated obj : ", obj);

  if (obj.assets == 'equal') {
    $('#b1').val(33.33)
    $('#b2').val(33.33)
    $('#b3').val(33.33)
  }
  return obj;
}

// jbroyes,jbrono,ebroyes,ebrono,mbroyes,mbrono
// j_sonyes,j_sonno,msonyes,msonno,e_sonyes,e_sonno

function oncheckBroSon(id,col){
  if($('#'+id).val() == 'yes'){
    $('#'+col).css('display','block')
  }
  else{
    $('#'+col).css('display','none')
  }
}

function onRedeem() {
  // if ($('#Coupon').val().toLowerCase() == 'jaihind') {
    $.ajax({
      type: 'POST',
      url: '/will/update/' + JSON.parse(localStorage.getItem('will_data_ins'))._id,
      data: localStorage.getItem('willObj'),
      success:
        function (res) {
          console.log('success', res);
          if (res.status) {
            console.log(res);
            // document.getElementById("myModal").style.display = "none"
            if ($('#preloader').length) {
              $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
              });
            }
          }
        }
    })
  // }
  // else {
  //   console.log("payment gateway");
  // }
}

document.getElementsByName('assets[]').onclick = function () {
  var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
  for (var checkbox of markedCheckbox) {
    localStorage.setItem('assets-check', checkbox.value + ' ')
  }
}

