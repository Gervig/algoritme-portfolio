import Queue from "./queue.js";
import Stack from "./stack.js";

export function shuntingYard(expr) {
  const outputQueue = new Queue();
  const operatorStack = new Stack();

  // map of operators, values are for order of operations
  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    // "%": 2,
    // "!": 3,
  };

  // Checks if a key (operator) exists in precedence map, true/false
  const isOperator = (c) => precedence.hasOwnProperty(c);

  // Tokenize: numbers or single symbols
  // REGEX
  // \d+ -> matches one or two digits
  // |\S -> | (means or) means any non-whitespace character, so operators
  // const tokens = expr.match(/\d+|\S/g);

  // calls helper function to get numbers and operators as tokens
  const tokens = tokenize(expr);

  for (let token of tokens) {
    if (!isNaN(token)) {
      // number → move to output queue
      outputQueue.enqueue(token);
    } else if (isOperator(token)) {
      // operator → pop higher/equal precedence operators
      while (
        !operatorStack.isEmpty() &&
        isOperator(operatorStack.peek()) &&
        precedence[operatorStack.peek()] >= precedence[token]
      ) {
        outputQueue.enqueue(operatorStack.pop());
      }
      operatorStack.push(token);
    } else if (token === "(") {
      operatorStack.push(token);
    } else if (token === ")") {
      // pop until "("
      while (!operatorStack.isEmpty() && operatorStack.peek() !== "(") {
        outputQueue.enqueue(operatorStack.pop());
      }
      operatorStack.pop(); // discard "("
    }
  }

  // Move remaining operators
  while (!operatorStack.isEmpty()) {
    outputQueue.enqueue(operatorStack.pop());
  }

  return outputQueue.toArray();

  // Helper function to get tokens, whole numbers and single operators (no regex)
  function tokenize(expr) {
    const tokens = [];
    let numberBuffer = "";

    for (let i = 0; i < expr.length; i++) {
      const ch = expr[i];

      // Ignore spaces
      if (ch === " ") continue;

      // Is it a digit?
      if (ch >= "0" && ch <= "9") {
        numberBuffer += ch; // build multi-digit number
        continue;
      }

      // If we reach here and have a number in the buffer, flush it
      if (numberBuffer.length > 0) {
        tokens.push(numberBuffer);
        numberBuffer = "";
      }

      // Operators or parentheses
      if (
        ch === "+" ||
        ch === "-" ||
        ch === "*" ||
        ch === "/" ||
        ch === "(" ||
        ch === ")"
      ) {
        tokens.push(ch);
        continue;
      }

      throw new Error("Unexpected character: " + ch);
    }

    // Flush last number at end (example: "123")
    if (numberBuffer.length > 0) {
      tokens.push(numberBuffer);
    }

    return tokens;
  }
}
