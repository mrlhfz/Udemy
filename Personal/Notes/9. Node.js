An asynchronous event-driven JS runtime, Node.js is designed to build scalable network applications.

* asynchronous - not necessarily runs from top to bottom, ie. order items from amazon and still able to window shop, not wait for parcel to come before continue shopping.
* allow us to build an application

Why Node.js?

* allow us to use js throughout the project
* allow easy scaling of applications
* fast and non-blocking
* huge ecosystem, a lot of resources

Node REPL (read eval print loop)

* a computer environment where user inputs are read and evaluated, and then the results are returned to the user.
* to start - type node in the terminal

Running JS Files

* to start - type node index.js in the terminal

Native Node Modules

* native modules - starting toolkits
** file access - reading and writing into local file system/server computer
** networking - reach across the internet and carry out functionality thats important for the backend of a webapp

Node Package Manager(NPM)

* place that collects modules that ppl have built for node
* initialize with npm init
* npm i name/ name anothername to install

ECMAScript Modules

* import * as fs from "node:fs" instead of const fs = require("fs");
* add type: "module" under main in package.json to enable import
* import what from "where"

LEARN TO READ DOCUMENTATIONS