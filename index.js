const closeEmoji = document.querySelector('.close')  // Get DOM from HTML
const openEmoji = document.querySelector('.open')  // dot for classes and # for id's


// add event listener
// arrow function 
closeEmoji.addEventListener('click', () =>{
// now conditions 
// upon click checks if class if open class is present then calls active class  
if(openEmoji.classList.contains('open')){
    openEmoji.classList.add('active');
    closeEmoji.classList.remove('active');
}
});



openEmoji.addEventListener('click', ()=>{
if(closeEmoji.classList.contains('close')){
    closeEmoji.classList.add('active');
    openEmoji.classList.remove('active');
}
})