EventEmitter
============

There are two versions of EventEmitters here.
1 - One to one mapping - In this case only one function will be registered for "on" function and the new registration will override the old function.

2 - One to many mapping - In this case every duplicate registration of the same function will stack up all the functions and on emitting that function all the stacked up functions will be processed.

