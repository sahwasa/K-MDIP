$(function () {
  $('dialog:has(.p_header)').draggable({ handle: ".p_header", cursor: "move" ,containment: "#wrap",scroll: true, scrollSensitivity: 100, scrollSpeed: 100});
  $.datetimepicker.setLocale('kr');
  $('#datetimepicker').datetimepicker();

  $('#date_timepicker_start0').datetimepicker({
    format: 'Y-m-d',
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#date_timepicker_end0').val() ? $('#date_timepicker_end0').val() : false
      })
    },
    timepicker: false
  });
  $('#date_timepicker_start').datetimepicker({
    format: 'Y-m-d',
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#date_timepicker_end').val() ? $('#date_timepicker_end').val() : false
      })
    },
    timepicker: false
  });
  $('#date_timepicker_start2').datetimepicker({
    format: 'Y-m-d',
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#date_timepicker_end2').val() ? $('#date_timepicker_end2').val() : false
      })
    },
    timepicker: false
  });
  $('#date_timepicker_start3').datetimepicker({
    format: 'Y-m-d',
    onShow: function (ct) {
      this.setOptions({
        maxDate: $('#date_timepicker_end3').val() ? $('#date_timepicker_end3').val() : false
      })
    },
    timepicker: false
  });

  $('#date_timepicker_end0').datetimepicker({
    format: 'Y-m-d',
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#date_timepicker_start0').val() ? $('#date_timepicker_start0').val() : false
      })
    },
    timepicker: false
  });
  $('#date_timepicker_end').datetimepicker({
    format: 'Y-m-d',
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#date_timepicker_start').val() ? $('#date_timepicker_start').val() : false
      })
    },
    timepicker: false
  });
  $('#date_timepicker_end2').datetimepicker({
    format: 'Y-m-d',
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#date_timepicker_start2').val() ? $('#date_timepicker_start2').val() : false
      })
    },
    timepicker: false
  });
  $('#date_timepicker_end3').datetimepicker({
    format: 'Y-m-d',
    onShow: function (ct) {
      this.setOptions({
        minDate: $('#date_timepicker_start3').val() ? $('#date_timepicker_start3').val() : false
      })
    },
    timepicker: false
  });

  // tab
  var tab_conts = $('.tab_conts'),
      tab_list = $('.tab_list'),
      tab_btn = $('.tab_list li');

  tab_conts.find('.tab_cont').hide();
  tab_conts.find('.tab_cont:first').show();
  tab_list.find('li:first').find('a').addClass('on');
  tab_btn.on('click', 'a', function (e) {
    e.preventDefault();
    var getId = $(this).prop('href').split('#')[1];
    $(this).parents('.tab').next('.tab_conts').find('.tab_cont').hide();
    $(this).parents('.tab_list').find('a').removeClass('on');
    $(this).addClass('on');
    $('#' + getId).show();
  });

  // pop
  var popBtn = $('[openpop]');
  popBtn.on('click', function () {
    var target = $(this).attr('openpop');
    $('#' + target).show();
  })
  $('dialog').on('click','.btn_cross',function(){
    var target = $(this).parents('dialog').attr('id');
    document.getElementById(target).close();
  })
  var closePop = $('.btn_pop_close');
  closePop.on('click', function () {
    $(this).parents('.pop_overlay').hide();
  })
  $('.btn_cancel').on('click', function () {
    $(this).parents('.pop_overlay').fadeOut();
  })
  $('.con_list .more').on('click', function () {
    $(this).toggleClass('on');
    $(this).parent('p').nextAll('ul').slideToggle('fast');
  })

  // tree
  $('.tree li:has(ul)').addClass('arrow')
  $('.tree').on('click', 'li > button', function () {
    var children = $(this).parent('li.arrow').find(' > ul > li')
    if (children.is(':visible')) {
      children.hide(0)
      $(this).parent('li').addClass('close')
    } else {
      children.show(0)
      $(this).parent('li').removeClass('close')
    }
    return false
  })
  $('.tree_ctrl').on('change','input',function(){
    var cur = $(this).prop('checked');
    var treelst = $('.tree').find('ul > li');
    var txt = $(this);
    if (cur) {
      treelst.hide(0)
      treelst.addClass('close')
      txt = '전체펼치기';
    } else {
      // tree.show();
      treelst.show(0)
      treelst.removeClass('close')
      txt = '전체접기';
    }
    $(this).next('label').text(txt);
  })

  // main : slide & drag
  // $('.btn_slide').on('click', function () {
  //   $('.con_l').toggleClass('close');
  // })
  $('.btn_subclose').on('click', function () {
    $('.panel_sub').hide();
  })
  // $('.con_sub > .btn_slide').on('click', function () {
  //   $('.btn_subclose').toggleClass('on');
  // })
})


$("#draggable").draggable();

// main : weather
$('.btn_weather').on('click', function () {
  $(this).toggleClass('on');
  $('.con_weather').fadeToggle();
})
$('.btn_weather_close').on('click', function () {
  $('.btn_weather').toggleClass('on');
  $('.con_weather').fadeToggle();
})

// alert
$('.alert').on('click', function () {
  $('.p_alert').parents('.pop_overlay').show();
})

// toggle button
$('.btn_toggle').on('click', function (e) {
  e.preventDefault();
  var cur = $(this).attr('datavalue');
  if ($(this).attr('disabled') == 'disabled') return false;
  if (cur == 'on') {
    $(this).attr('datavalue', 'off');
  } else {
    $(this).attr('datavalue', 'on');
  }
})
$('.slide_tit i').on('click', function () {
  $(this).children('.how_to_use').toggleClass('on');
})
$('.axi-close').on('click', function () {
  $(this).parent('li').remove();
})

$('.btn_reset').on('click', function () {
  $('.selectlocate_wrap').remove();
})

// 선택지역
$('.selectlocate_wrap').on('click', function () {
  var parentUl = $(this).find('.selectlocate_box').children().length;
  if (parentUl < 1) {
    $(this).find('.selectlocate_box').remove();
  }
})
$('.selectlocate_wrap').on('click', function () {
  var parentUlAll = $(this).find('.selectlocate_box_wrap').children().length;
  console.log(parentUlAll);
  if (parentUlAll == 1) {
    $(this).remove();
  }
})

//case eqtabs
$('ul.eqtabs li, .eq_map_list li').on('click', function () {
  var tab_id = $(this).attr('data_tab');
  $('ul.eqtabs li, .eqtab_content, .eq_map_list li').removeClass('current');
  $(this).addClass('current');
  $()
  $("." + tab_id).addClass('current');
  return false;
});

//slide
var slideIndex = 0;

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

const createDot = (index) => {
  var dotBtn = document.createElement('button');
  dotBtn.innerHTML = index + 1;
  dotBtn.setAttribute('class', 'slide_dots');
  dotBtn.setAttribute('type', 'button');
  dotBtn.addEventListener('click', () => currentSlide(index + 1));
  return dotBtn;
}

function showSlides() {
  var slides = document.querySelectorAll('.slide_item');
  var dots = document.querySelectorAll('.slide_dots');

  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  dots.forEach(dot => {
    dot.classList.remove('active');
  });

  slides[slideIndex].style.display = 'block';
  dots[slideIndex].classList.add('active');
}

function initSlideshow() {
  var slides = document.querySelectorAll('.slide_item');
  var slideRemote = document.querySelector('.slideRemote');
  var dotContainer = document.querySelector('.dots_container');
  if (slides.length === 0) return;
  if (slides.length <= 1) {
    slideRemote.style.display = 'none';
    dotContainer.style.display = 'none';
  }else{
    slideRemote.style.display = 'block';
    dotContainer.style.display = 'block';
  }
  
  for (var i = 0; i < slides.length; i++) {
    dotContainer.appendChild(createDot(i));
  }
  
  showSlides(); // Initial display of the first slide
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}


 