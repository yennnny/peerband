const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
// 뒤로가기 버튼
if (document.querySelector('.btn_back')) {
  document.querySelectorAll('.btn_back').forEach(ele => {
    ele.addEventListener('click', function () {      
      history.back();
    });
  })
}

// 팝업 오픈
if (document.querySelector('.btn_pop_open')) {
  document.querySelector('.btn_pop_open').addEventListener('click', function () {
    const $popup = document.querySelector('.popup');
    const $dim = document.createElement('div');
    $dim.setAttribute('id', 'dim');
    if (!$popup.classList.contains('on')) {
      !$popup.classList.add('on');
      document.body.appendChild($dim);
    }
    document.querySelector('.btn_confirm').addEventListener('click', () => {
      $dim.remove;
    });
  });
}
if (document.querySelector('.btn_confirm')) {
  document.querySelector('.btn_confirm').addEventListener('click', () => {
    document.querySelector('.popup').classList.remove('on');
    if (document.querySelector('#dim')) document.querySelector('#dim').remove()
  });
}

// input 체크후 버튼 활성화
const inputs = document.querySelectorAll('input[type="text"], input[type="password"], input[type="number"], input[type="tel"]');
inputs.forEach((input) => {
  input.addEventListener('keyup', inputCheck);
})
function inputCheck() {
  let inputValueBoolean = false;
  for (let i = 0; i < inputs.length; i += 1) {
    const inputValue = inputs[i].value;
    if (inputValue) inputValueBoolean = true;
    else inputValueBoolean = false;
  }
  if (inputValueBoolean) document.querySelector('.btn_tg').classList.remove('disabled');
  else document.querySelector('.btn_tg').classList.add('disabled');
}

// 좋아요, 박수 버튼
if(document.querySelector('.btn_board_util')){
  document.querySelectorAll('.btn_board_util').forEach(ele => {
    ele.addEventListener('click', function(e){
      let boardUtilNum = ele.childNodes[1].outerText;      
      if(!ele.parentNode.classList.contains('on')){
        ele.parentNode.classList.add('on');
        ++boardUtilNum;
        ele.childNodes[1].innerHTML = boardUtilNum;
      }
      else{
        ele.parentNode.classList.remove('on');
        --boardUtilNum;
        ele.childNodes[1].innerHTML = boardUtilNum;
      }
    });
  });
}

if(document.querySelector('.btn_more_txt')){
  document.querySelectorAll('.btn_more_txt').forEach(ele => {
    ele.addEventListener('click', function(e){
      ele.previousElementSibling.style.display = 'block'
      ele.remove();
    });
  })
}

