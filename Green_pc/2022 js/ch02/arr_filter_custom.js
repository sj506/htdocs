var arr = {
    0: 2,
    1: 6,
    2: 10,
    3: 11,
    4: 22,
    5: 1,
    6: 7,
    length: 7,
    forEach: function (cb) {
        for (var i = 0; i < this.length; i++) {
            cb(this[i], i);
        }
    },
    filter: function (cb) {
        var newArr = [];
        for (var i = 0; i < this.length; i++) {
            if (cb(this[i])) {
                newArr.push(this[i]);
            }
        }
        console.log(cb(this[i]));
        return newArr;
    },
};

// if(cb = 
// "function (item, idx) {
//     if (item <= 8) {
//         return true;
//     }
// } )"
// item = this[i]가 되어서 트루면 push(this[i]) 해서 넣어줌

var resultArr = arr.filter(function (item, idx) {
    if (item <= 8) {
        return true;
    }
});
console.log(resultArr);

// 콜백 함수에 대한 이해, 비동기에 대한 이해, 콜백 지옥, promise, async/await
