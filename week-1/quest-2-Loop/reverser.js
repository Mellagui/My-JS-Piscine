const reverse = (arr) => {
    let res = [];
    let n = arr.length-1;
    while (n >= 0) res.push(arr[n]), --n;
    return typeof arr === "string"? res.join(''): res;
}
// const arr = [ 3, -3, 2, -2, 0 ];

console.log(reverse([1, 2, 3]), ['-----3', 2, 1])
console.log(reverse([1, "eq", 3, "ctx"]), ["---ctx", 3, "eq", 1])
console.log(reverse('pouet'), '------teuop')
console.log(reverse("salut c'est cool"), "----looc tse'c tulas")
// console.log(reverse(arr))