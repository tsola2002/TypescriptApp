var container = document.getElementById('container');
function Counter(el) {
    var _this = this;
    this.count = 0;
    el.innerHTML = this.count;
    // OLD WAY OF DOING ARROW FUNCTION
    // el.addEventListener('click',
    // function () {
    //     // when it executed as an event handler
    //     // it doesnt work because the this keyword refers to the global browser scope
    //     this.count += 1;
    //     el.innerHTML = this.count;
    // })
    // to solve this problem we save a refrence to the object   
    el.addEventListener('click', function (event) { return el.innerHTML = (_this.count += 1); });
}
new Counter(container);
var filtered = [1, 2, 3].filter(function (x) { return x > 0; });
