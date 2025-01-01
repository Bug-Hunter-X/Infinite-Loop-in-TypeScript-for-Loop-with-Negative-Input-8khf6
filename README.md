# Infinite Loop Bug in TypeScript

This repository demonstrates a common error in TypeScript where a `for` loop can enter an infinite loop when dealing with negative input values.  The issue arises from an incorrect loop condition. 

## Bug Description
The `printNumbers` function aims to print numbers from 1 to n. However, when a negative number is passed as `n`, the loop condition `i <= n` remains true indefinitely, resulting in an infinite loop.

## Reproduction
1. Clone this repository.
2. Compile and run `bug.ts`.
3. Observe the infinite loop when calling `printNumbers` with a negative argument.

## Solution
The solution involves correcting the loop condition to ensure the loop terminates correctly for all input values, including negative ones.

## How to fix
See `bugSolution.ts` for the corrected code.