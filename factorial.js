const addon = require('bindings')('factorial.node');

try {
  console.log(addon.factorial(10));
} catch (e) {
  console.log(e);
}
