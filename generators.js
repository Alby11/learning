function* foo() {
  console.log('In foo');
  var c = yield* bar(1.618);
  console.log(c);
}

function* bar(param) {
  console.log('In bar');
  yield param;
  return 42;
}

var f = foo();
f.next();
f.next();
/**
  // In foo
  // In bar
  // 42
*/
