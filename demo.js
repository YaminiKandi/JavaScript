function mapForEach(arr, fn){
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    }
    return newArr;
}
var arr1 = [1,2,3]
document.write(arr1 + '<br>')
var arr2 = mapForEach(arr1, function(item){
    return item*2;
})
document.write(arr2 + '<br>');

var checkPastLimit = function(limiter, item){
    return item > limiter;
}
var arrN = mapForEach(arr1, checkPastLimit.bind(this, 1))
document.write(arrN + '<br>')

var checkPastLimitSimplified = function(limiter){
    return function(limiter, item) {
        return item > limiter
    }.bind(this, limiter)
};
var arr6 = mapForEach(arr1, checkPastLimitSimplified(2))
document.write(arr6 + '<br>')
