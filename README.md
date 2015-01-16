JavaScript algorithms
========

The answers files provided work as expected but the main implementation lie in
separate modules for each question.

All answers use the same `lineExecutor` module that provides the file line reading
and passing to the executing functions.

The answer files just connect the `lineExecutor` to the implementation of each
algorithm.

Testing
=======
There are tests located in `test` directory which can be run either with `npm test` or `mocha` after running
`npm install` in the application directory.

Possible improvements
====================
The majority of these improvements are context dependent.

- Currently using console.error for error output in each of the modules but it
may be better to expose the exceptions so the user can decide how to log/handle the error.

- Performance has been monitored loosely by ensuring the tests run in a
reasonable time - currently 10ms on my machine. But if the input is much larger
than expected then there may be problems.

- I have provided some bad data but if this were to be handling direct user input
or internally generated input then the types of bad data expected are different.
