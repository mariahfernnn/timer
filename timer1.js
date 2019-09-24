// Assignment: Simple Timer
// Driver: @mariahfernnn
// Navigators: @Araxiah, @avijitchoudhury

// Task: Create a timer which will beep after a specified amount of time

let args = process.argv.slice(2);

let x = args.filter(time => time > 0 || typeof time === NaN);

let alarm = [];

for (let beepTime of x) {
  alarm.push(beepTime * 1000);
};

for (let beepTimeInMs of alarm) {
  setTimeout(() => {
    process.stdout.write('\x07')
  }, beepTimeInMs);
}

