const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :", (answer) => {
  console.log(`My nickname is: ${answer}`);
  rl.question("What do you listen to while doing that?", (answer) => {
    console.log(`I listen to: ${answer}`);
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
      console.log(`My favourite meal is: ${answer}`);
      rl.question("What's your favourite thing to eat for that meal?", (answer) => {
        console.log(`My favourite thing to eat for that meal is: ${answer}`);
        rl.question("Which sport is your absolute favourite?", (answer) => {
          console.log(`My absolute favourite sport is : ${answer}`);
          rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              console.log(`If I have a superpower is would be: ${answer}`);
              rl.close();
            });
          });
        });
      });
    });
  });