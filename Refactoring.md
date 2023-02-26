# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
The first thing was to separate the responsibility from the function, defining a new function to create the hash and follow the `DRY` (Don't repeat yourself) principle. So I changed the execution order of the validations, so that the value of the input is validated in a specific way first, without having to go through the other validations, if not necessary. And if there is an input value, I validate if the property exists using `hasOwnProperty()`, to also accept the boolean value `false`, with the restructuring of this condition the code is cleaner and more concise. If the property does not exist, but there is a valid value in the input, a hash with the input value is generated and returned using the newly created function.
