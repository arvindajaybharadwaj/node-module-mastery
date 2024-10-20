// responsible for handling input on command line

import * as readline from "readline"; // importing readline module

export function getUserInput(query: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin, // tells Node.js to read input from the standard input stream
        output: process.stdout, // tells Node.js to that outputs must printed on the terminal
    });

    return new Promise((resolve) => {
        rl.question(query, (answer: string) => {
            rl.close();
            resolve(answer);
        });
    });
}