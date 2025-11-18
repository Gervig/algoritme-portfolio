function shuntingYard(expr) {
  const outputQueue = new Queue();
  const operatorStack = new Stack();

  const precedence = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const isOperator = (c) => precedence.hasOwnProperty(c);

  // Tokenize: numbers or single symbols
  const tokens = expr.match(/\d+|\S/g);

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
}
