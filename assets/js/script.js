const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

function goBack(){
  history.back();
}
if(document.querySelector('.btn_pop_open')){
  document.querySelector('.btn_pop_open').addEventListener('click', function(){
    const $popup = document.querySelector('.popup');    
    const $dim = document.createElement('div');
    $dim.setAttribute('id', 'dim');
    if(!$popup.classList.contains('on')){
      !$popup.classList.add('on');
      document.body.appendChild($dim);
    }
    document.querySelector('.btn_confirm').addEventListener('click', () =>{ $dim.remove; });
  });
}
// function inputTxtCheck(){
//   const input = document.querySelectorAll('input')
//   console.log(input)
//   input.addEventListener('change', function(){
//     console.log(this)
//   });
// }

// input.addEventListener('change', (ele) => {
//   console.log(ele)
//   // input.forEach(ele => {      
//   //     if(!ele){
//   //       document.querySelector('.btn_basic').classList.remove('disabled');
//   //     }       
//   // });
// });


