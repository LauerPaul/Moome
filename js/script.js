$(document).ready(function(){
new WOW().init();
var all_steps = '';
var now_steps = '';

$('input').blur (function(){
  if($(this).val() !== ''){
    $(this).addClass('readonly');
  }else{
    $(this).removeClass('readonly');
  }
});

$('.my_progress').click(function(){$('.account_dialog').css({'display':'none','opacity':'0'})});
$('.MooMe_icon_level').mouseenter(function(){
  $('.account_dialog').css('display','block')
  $('.account_dialog').animate({opacity:'1'},300);
  $('.MooMe_icon_level').mouseleave(function(){
    $('.account_dialog').css({'display':'none','opacity':'0'})
  });
});
/* -- HIDE LOGIN/REG -- */
$('.popup_reg_login_wrapper').on('click', function(e) {
  if (!$(e.target).closest(".login_reg_block").length && !$(e.target).closest(".remember_pass").length) {
    $('.login_reg_block').hide();
    $(this).hide();
    $('body').css('overflow','auto');
    $('.remember_pass').hide();
    $('.remember_pass').css({opacity:'0'});
  }
  e.stopPropagation();
});
/* -- HIDE LOGIN/REG -- */

/* -- Requeired LOGIN/REG -- */
$('#pass_first').keyup(function label_pass_reg(){
if( $(this).val().length < 6 ){
    $(this).parent().addClass('error_ver')
    $(this).parent().removeClass('good_ver');
}else{
    $(this).parent().removeClass('error_ver');
    $(this).parent().addClass('good_ver');
}
});
$('#pass_first').keypress(function(){
  $(this).parent().removeClass('good_ver');
  $(this).parent().removeClass('error_ver');
})
$('#pass_sec').keyup(function label_pass_reg(){
if($(this).val() !== $('#pass_first').val()){
    $(this).parent().addClass('error_ver')
    $(this).parent().removeClass('good_ver');
}else{
    $(this).parent().removeClass('error_ver');
    $(this).parent().addClass('good_ver');
}
});
$('#pass_sec').keypress(function(){
  $(this).parent().removeClass('good_ver');
  $(this).parent().removeClass('error_ver');
});


$('#reg_site input').focus(function(){
   $(this).next('p.requireq_popup').remove();
    $(this).removeClass('requireq_color');
 });

/* -- /Requeired LOGIN/REG/ -- */


// Checkbox
if($('.save_login > .check').hasClass('active')){
  $('.save_login > .check').children('input').prop( "checked", true);
}
$('.check').click(function(){
	if( $(this).children('input').is(':checked') ) {
		$(this).removeClass('active');
		$(this).children('input').removeAttr('checked');
	} else {
		$(this).addClass('active');
		$(this).children('input').prop( "checked", true);
	}
});
// /*Checkbox*/


/* -- Tab LOGIN/REG -- */

$('.label_lr').click(function() {
  if($(this).hasClass('active')){}else {
    if($('.login_label').hasClass('active')){
      $('.label_lr').removeClass('active');
      $('.login_block').hide();
      $('.reg_block').show();
      $(this).addClass('active');
    }else{
      $('.label_lr').removeClass('active');
      $('.reg_block').hide();
      $('.login_block').show();
      $(this).addClass('active');
    }
  }
})

/* -- /Tab LOGIN/REG/ -- */


  $('.slider_group_wrapper .slider_group_control li').click(function(){
    $('.slider_group_wrapper .slider_group_control li').removeClass('active');
    $(this).addClass('active');
    var index = $(this).index();
    $('.slider_group_wrapper > .section_slider_group.active').animate({opacity:'0'},500);
    setTimeout(function(){
      $('.slider_group_wrapper > .section_slider_group.active').css('display','none');
      $($('.slider_group_wrapper > .section_slider_group')[parseInt(index)]).css('display','block');
      $($('.slider_group_wrapper > .section_slider_group')[parseInt(index)]).animate({opacity:'1'},500);
      $('.slider_group_wrapper > .section_slider_group.active').removeClass('active');
      $($('.slider_group_wrapper > .section_slider_group')[parseInt(index)]).addClass('active');
    },400);
  });

//Слайдинг раскрывающихся блоков (Тренажеры, Лексический словарь)
  $('.item_lang_s > .title').click(function(){
    if($(this).parent().hasClass('active')){}else{
    $('.wrapper_case .item_lang_s > .wrap_content_item_lang').animate({opacity:'0'},200);
    $('.wrapper_case .item_lang_s > .wrap_content_item_lang').hide();
    $('.wrapper_case .item_lang_s > .title').removeClass('animated flipInX');
    $('.wrapper_case .item_lang_s').removeClass('active');


    $(this).addClass('animated flipInX');
    $(this).next().show();
    $(this).next().animate({opacity:'1'},400);
    $(this).parent().addClass('active');

    $(this).next().children().jScrollPane();
    $('body').animate({scrollTop: $(this).parent().offset().top},1000);
  }
  });

  $('.wrapper_case > .item_list_lessons > .title').click(function(){

    if($(this).hasClass('active')){}else{
    $('.wrapper_case > .item_list_lessons > .title').removeClass('active animated pulse');
    $('.wrapper_case > .item_list_lessons > .wrapper_lessons').animate({opacity:'0'},200);
    $('.wrapper_case > .item_list_lessons > .wrapper_lessons').hide('slow');

    $('body').animate({scrollTop: $(this).offset().top},1000);

    $(this).addClass('active animated pulse');
    $(this).next().show('slow');
    $(this).next().animate({opacity:'1'},200);
    }
  });
//------------------------------------------------------------------------------

  $('.remove_notice').click(function() {
      $(this).parent('li').remove();
      $('.notice').addClass('open');
      $('.notice_list').addClass('open');
  });
  $('.lang_menu').on('click', function(e) {
    if (!$(e.target).closest(".lang_menu_second").length) {
      lang_menu();
    }
    e.stopPropagation();
  });
  $('.user_menu').on('click', function(e) {
    if (!$(e.target).closest(".user_menu_second").length) {
      user_menu();
    }
    e.stopPropagation();
  });
  $('.notice').on('click', function(e) {
    if (!$(e.target).closest(".notice_list").length && !$(e.target).closest(".remove_notice").length) {
      notice_list();
    }
    e.stopPropagation();
  });
});

/*-----------------------------------------------------------------------------------------------------------------------*/
function lang_menu(){
  if($('.lang_menu').hasClass('open')){
    $('.lang_menu').removeClass('open');
    $('.lang_menu_second').removeClass('open');
  }else{
    $('.lang_menu').addClass('open');
    $('.lang_menu_second').addClass('open');
    if($('.user_menu').hasClass('open')){
      $('.user_menu').removeClass('open');
      $('.user_menu_second').removeClass('open');
    }
    if($('.notice').hasClass('open')){
      $('.notice').removeClass('open');
      $('.notice_list').removeClass('open');
    }
  }
}

function user_menu(){
  if($('.user_menu').hasClass('open')){
    $('.user_menu').removeClass('open');
    $('.user_menu_second').removeClass('open');
  }else{
    $('.user_menu').addClass('open');
    $('.user_menu_second').addClass('open');
    if($('.lang_menu').hasClass('open')){
      $('.lang_menu').removeClass('open');
      $('.lang_menu_second').removeClass('open');
    }
    if($('.notice').hasClass('open')){
      $('.notice').removeClass('open');
      $('.notice_list').removeClass('open');
    }
  }
}

function notice_list() {
  if($('.notice').hasClass('open')){
    $('.notice').removeClass('open');
    $('.notice_list').removeClass('open');
  }else{
    $('.notice').addClass('open');
    $('.notice_list').addClass('open');
    if($('.lang_menu').hasClass('open')){
      $('.lang_menu').removeClass('open');
      $('.lang_menu_second').removeClass('open');
    }
    if($('.user_menu').hasClass('open')){
      $('.user_menu').removeClass('open');
      $('.user_menu_second').removeClass('open');
    }
  }
}

function slider_group_control(){
  var length = $('.slider_group_wrapper > .section_slider_group').length;
  var i = 0;
  if(length>0){
  for(i=0;i<length;i++){
    $('.slider_group_wrapper .slider_group_control').append('<li></li>');
  }
  $($('.slider_group_wrapper .slider_group_control li')[0]).addClass('active');
  }
}



/* Валидация регистрационной формы*/
function validate(reg_site,email,name_new,pass_first,pass_sec) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.forms[reg_site].elements[email].value;
   var name = document.forms[reg_site].elements[name_new].value;
   var rag_name = new RegExp("^.*[^А-яЁё].*$");
   var pass_first = document.forms[reg_site].elements[pass_first].value;
   var pass_sec = document.forms[reg_site].elements[pass_sec].value;

if(name == ''){
      $('#reg_site #name_new').addClass('requireq_color');
      $('#reg_site #name_new').after('<p class="requireq_popup">Заполните это поле</p>');
     return false;
   }else{
     if(rag_name.test(name) == true) {
       if(address == ''){
         $('#reg_site #email').addClass('requireq_color');
         $('#reg_site #email').after('<p class="requireq_popup">Заполните это поле</p>');
         return false;
       }else{
               if(reg.test(address) == false) {
                 $('#reg_site #email').addClass('requireq_color');
                 $('#reg_site #email').after('<p class="requireq_popup">Некорректный адрес электронной почты</p>');
                  return false;
               }else{
                 if(pass_first == ''){
                   $('#reg_site #pass_first').addClass('requireq_color');
                   $('#reg_site #pass_first').after('<p class="requireq_popup">Заполните это поле</p>');
                   return false;
                 }else if($('#reg_site #pass_first').val().length < 6){

                   $('#reg_site #pass_first').addClass('requireq_color');
                   $('#reg_site #pass_first').after('<p class="requireq_popup">Не меньше 6 символов</p>');
                   $('#reg_site #pass_first').parent().addClass('error_ver');
                   return false;
                 }else{
                     if(pass_first !== pass_sec){
                       $('#reg_site #pass_sec').addClass('requireq_color');
                       $('#reg_site #pass_sec').parent().addClass('error_ver');
                       $('#reg_site #pass_sec').after('<p class="requireq_popup">Пароли не совпадают</p>');
                       return false;
                     }
                   }
               }
         }
       }else{
         $('#reg_site #name_new').addClass('requireq_color');
         $('#reg_site #name_new').after('<p class="requireq_popup">Некорректный логин</p>');
             return false;
       }
     }
}
/*-- / Валидация регистрационной формы / --*/

/*-- ПОПАП РЕГИСТРАЦИИ/АВТОРИЗАЦИИ --*/
function reg_login_show(){
$('.popup_reg_login_wrapper,.login_reg_block').show();
$('.popup_reg_login_wrapper,.login_reg_block').animate({'opacity':'1'},300);
$('body').css('overflow','hidden');
}
/*-- / ПОПАП РЕГИСТРАЦИИ/АВТОРИЗАЦИИ / --*/


/*-- ВОССТАНОВЛЕНИЕ ПАРОЛЯ --*/
function remember_pass(){
  $('.login_reg_block').animate({opacity:'0'},300);
  setTimeout(function() {
      $('.login_reg_block').hide();
      $('.remember_pass').show();
      $('.remember_pass').animate({opacity:'1'},300);
  },300)
}
/*-- /ВОССТАНОВЛЕНИЕ ПАРОЛЯ/ --*/
