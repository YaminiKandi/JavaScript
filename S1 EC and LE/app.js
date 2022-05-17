// long running functions
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('Finished function!')
}
function clickHandler() {
    console.log('click event!')
}
// listen for the click event 
document.addEventListener('click', clickHandler);
waitThreeSeconds();
console.log('Finished Execution');