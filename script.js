let temp
let currencyStart
let currencyFinish
let button=document.querySelector('.btn-convert')
let input=document.querySelector('.window-start')
let finish=document.querySelector('.window-finish')
let menuStart=document.getElementById('menu-start')
let menuFinish=document.getElementById('menu-finish')
let list=document.querySelector('.list')

menuStart.addEventListener('change', (event) => {
  currencyStart=event.target.value
});
menuFinish.addEventListener('change', (event) => {
  currencyFinish=event.target.value
});



fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
.then(response=>response.json())
.then(data=>getDataFromAPI(data))
function getDataFromAPI(data) {
    dol=data.Valute.USD.Value.toFixed(1)
    eur=data.Valute.EUR.Value.toFixed(1)
    console.log(dol)
 }
  button.addEventListener('click',(e)=>{
    if(isNaN(input.value)) return
    if(input.value==='')return
    createElements(input.value)
    

})
function createElements(value){
  let number=value
  if(currencyStart==1 && currencyFinish==2){
  finish.value=(dol*input.value).toFixed(2)}
  if(currencyStart==1 && currencyFinish==3){
    finish.value=((dol*input.value)/eur).toFixed(2)}
  if(currencyStart==2 && currencyFinish==1){
  finish.value=(input.value/dol).toFixed(2)}
  if(currencyStart==2 && currencyFinish==3){
    finish.value=(input.value/eur).toFixed(2)}
  if(currencyStart==3 && currencyFinish==1){
    finish.value=((input.value/eur)*dol).toFixed(2)}
  if(currencyStart==3 && currencyFinish==2){
    finish.value=(input.value*eur).toFixed(2)}
  if(currencyStart==1 && currencyFinish==1){
    finish.value=input.value}
  if(currencyStart==2 && currencyFinish==2){
    finish.value=input.value}
  if(currencyStart==3 && currencyFinish==3){
    finish.value=input.value}

  input.addEventListener("click",()=>{
    input.value=''
    finish.value=''

  })
}

