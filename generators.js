function* foo() {
    console.log('In foo');
    var c = yield* bar(1.618);
    console.log(c);
}

function* bar(param) {
    console.log('In bar');
    yield 'test';
    yield param;
    return 42;
}

var f = foo();
console.log(f.next());
console.log(f.next());
console.log(f.next());
/**
  // In foo
  // In bar
  // 42
*/
