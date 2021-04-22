// let popup = document.getElementById('overlay1'),
//     popupToggle = document.getElementById('knopka1')
//     popupTogglee = document.getElementById('knopka2')
//     popupClose = document.querySelector('.modal__close')

//     popupToggle.onclick = function() {
//         popup.style.display="block";

//     };
//     popupTogglee.onclick = function() {
//         popup.style.display="block";

//     };

//     popupClose.onclick = function() {
//         popup.style.display="none"
//     }
//     window.onlick = function (e) {
//         if(e.target == popup) {
//             popup.style.display="none"
//         }
//     }



//modal two 

$(document).ready(function(){
        $('#consultation-form').validate({ 
            rules : {
                name: "required",
                phone: "required",
                email: {
                   required: true,
                   email: true
                }
            }, 
            messages: {
                name: "Пожалуйста введите свое имя",
                phone: "Введите свой номер телефона",
                email: {
                  required: "Пожалуйста введите свою почту",
                  email: "Неправильно введен адресс почты"
                }
              }
          });
          $('#nameform').validate({ 
            rules : {
                name: "required",
                phone: "required",
                email: {
                   required: true,
                   email: true
                }
            }, 
            messages: {
                name: "Пожалуйста введите свое имя",
                phone: "Введите свой номер телефона",
                email: {
                  required: "Пожалуйста введите свою почту",
                  email: "Неправильно введен адресс почты"
                }
              }
          });
      });
      
      
// function valideForms(form) {
//     $(form).validate({
//         rules : {
//             name: "required",
//             phone: "required",
//             email: {
//                required: true,
//                email: true
//             }
//         }, 
//         messages: {
//             name: "Пожалуйста введите свое имя",
//             phone: "Введите свой номер телефона",
//             email: {
//               required: "Пожалуйста введите свою почту",
//               email: "Неправильно введен адресс почты"
//             }
//           }
//       });
//   };
//   valideForms('#consultation-form');
$('.button-discount').click(function(e) {
    e.preventDefault();
    $('.overlay').fadeIn(800);
});

$('#knopka2').click(function(e) {
    e.preventDefault();
    $('.overlay').fadeIn(800);
});
$('#knopka3').click(function(e) {
    $('#consultation').fadeOut(200);
    e.preventDefault();
    $('#thanks').fadeIn(800);
});

$('.modal__close').click(function() {
    $('.overlay').fadeOut(800);
});
$('.button_delivery').click(function(e){
    e.preventDefault();
});
$(document).ready(function(){

    $("#feed-form").validate({
    });
});
