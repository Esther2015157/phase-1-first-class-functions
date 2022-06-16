function receivesAFunction(x) {
    x()
}function returnsANamedFunction() {
    return function test() {
        console.log('test')
    }
}
function returnsAnAnonymousFunction() {
    return (() => console.log('test'))
} 