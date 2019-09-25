// Assignment: Simple Timer
// Driver: @avijitchoudhury
// Navigators: @Araxiah, @mariahfernnn

// Got help from mentor Mike Roelens on including the setRawMode & setEncoding

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key >= '\u0031' && key <= '\u0039') {
      let beepTimeInMs = key * 1000;
      process.stdout.write('setting timer for ' + key + ' seconds...');
      setTimeout(() => {
        process.stdout.write('\x07');
      }, beepTimeInMs);
    }
});

stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
});

stdin.on('data', (key) => {
  if (key === '\u0062'){
    process.stdout.write('\x07');
  }
});
