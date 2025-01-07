# TypeScript Type Error: String added to Number

This repository demonstrates a common type error in TypeScript where attempting to add a number and a string results in a type error. The provided solution offers a few approaches to handle this issue, ensuring type safety and correct functionality.

## Bug Description

The `add` function is designed to accept two numbers and return their sum. However, the code attempts to call the function with a number and a string, leading to a type error. TypeScript's type system accurately identifies this potential issue and prevents the compilation.