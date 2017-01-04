# tech-test

This is a technical test for a job postition.

## Prerequisites

* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

```bash
npm install
```

## Running / Development

```bash
ember serve
```

### Running Tests

```bash
ember test
```
or
```bash
ember test --server
```

# Notes

### configuration loading

Generally speaking test & build parameters should be specified using environment
variables, where as end user / development should use config files. For this
reason I have add to the `config/environment.js` such that:

 - Production: `APP.dist.js`, as the project is open source not every user will
 have knowledge, or be willing to, set environment variables. Otherwise, eg with
 in-house services/servlets, environment variables would be used due to build
 steps when pushing to prod.
 - Development: `APP.dist.js`, using a git hidden config file for development
 makes it much easier to change machines and for portability of a sprints code.
 - Test: `process.ENV`, as it has a build step and none of the other cases above
 apply.
