let timeLimit = process.argv



for (let i = 0; i < timeLimit.length; i++) {
  if (timeLimit.length === 0) {
    return
  } else if (timeLimit[i] < 0) {
    //skip
  } else if (timeLimit[i] === NaN) {
    return NaN
  }

  setTimeout(() => {
    process.stdout.write('\x07');
  }, timeLimit[i] * 1000);

}