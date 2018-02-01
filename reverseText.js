function printReverse(){
    var first = document.getElementById('reverse').value
    console.log(first)
    var answer = first.split('').reverse().join('')
    
    console.log(answer)
}