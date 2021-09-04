// console.log(global);
console.log(process.platform);
console.log(process.version);
console.log(process.pid);
console.log(process.argv);
console.log(process.ppid);
console.log(process);

console.log(__dirname);
console.log(__filename);

process.on('beforeExit', (code) => {
  console.log('Процесс beforeExit с кодом: ', code);
});

process.on('exit', (code) => {
  console.log('Выход из процесса с кодом: ', code);
});

console.log('This message is displayed first.');
