const FridaInject = require('frida-inject')

var proc = process.argv[2];
var file = process.argv[3];

if (!proc || !file) {
  console.log('Usage:');
  console.log('  node injector.js {process-name} {script}');
  console.log();
  process.exit(1);
}

FridaInject({
  name: proc,
  scripts: [file],
  onAttach: session => console.log(`Injected ${file} into ${proc}`)
})
