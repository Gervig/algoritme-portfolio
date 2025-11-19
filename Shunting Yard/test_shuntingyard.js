import { shuntingYard } from "./shuntingyard.js";

const expr = `4 + 5 * 3`;

console.log(`${expr}`);

const rpn = shuntingYard(expr);

console.log(`${rpn.toArray()}`);
