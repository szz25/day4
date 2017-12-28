function fn(obj) {
    let str = '';
    for (let i = 0; i < obj.length; i++) {
        if (i >= 7 && i <= 15) {
            str += '<b>' + obj[i] + '</b>'
        } else if (i >= 15) {
            str += '*'
        } else {
            str += obj[i]
        }
    }
    return str
}
console.log(fn('120224199705061424'))