/*
  argv
  argv0
  execArgv
  execPath
*/

// bash> node --inspect 10_argv.js --test a=2 b=3
const { argv, argv0, execArgv, execPath } = process;

console.log(argv);
argv.forEach(item => {
  console.log(item);
});

console.log(argv0);

console.log(execArgv);

console.log(execPath);