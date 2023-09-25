const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
let input = [];

rl.question("이름을 입력하세요:", (ans) => {
    input.push(ans);
    rl.question("학번을 입력하세요:", (ans) => {
        input.push(ans);
        rl.question("학과를 입력하세요:", (ans) => {
            input.push(ans);
            rl.close();
        });
    });
});

rl.on("close", (line) => {
    console.log("\n<출력>\n");
    input.map((line) => console.log(line));
    process.exit();
});