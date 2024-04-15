const fs = require('fs');

function processCommands(input) {
    const lines = input.split('\n');
    const n = parseInt(lines[0], 10);
    const commands = lines.slice(1, n + 1);
    const stack = [];
    const output = [];

    commands.forEach(command => {
        if (command.startsWith('push')) {
            const [, value] = command.split(' ');
            stack.push(parseInt(value, 10));
        } else if (command === 'pop') {
            if (stack.length === 0) {
                output.push(-1);
            } else {
                output.push(stack.pop());
            }
        } else if (command === 'size') {
            output.push(stack.length);
        } else if (command === 'empty') {
            output.push(stack.length === 0 ? 1 : 0);
        } else if (command === 'top') {
            if (stack.length === 0) {
                output.push(-1);
            } else {
                output.push(stack[stack.length - 1]);
            }
        }
    });

    return output.join('\n');
}

const input = fs.readFileSync('/dev/stdin', 'utf8');
const result = processCommands(input);
console.log(result);