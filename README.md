[![master](https://github.com/skonves/generator-von-neumann/workflows/build/badge.svg?branch=master&event=push)](https://github.com/skonves/generator-von-neumann/actions?query=workflow%3Abuild+branch%3Amaster+event%3Apush)

# "Von Neumann" Generator

Quickly generate new Yeoman generators using

- Typescript
- Prettier for formatting
- ESLint for linting
- Jest for unit testing

## Quick Start

1. Globally install Yeoman and this generator: `npm install -g yo generator-von-neumann`
1. From the root of your new project, run `yo von-neumann` and select "Set it up for me"

Note that the README in the newly-minted generator will provide instructions for building, testing, running, etc.

Without selecting advanced options you'll get:

- The latest stable version of Typescript
- ESLint as the linter
- Jest as the test library
- CI in the form of a GitHub workflow file

## Advanced options

Most options for [generator-ts-console](https://www.npmjs.com/package/generator-ts-console) will also be available when running the Von Neumann generator; however, note that ESLint and Jest are always selected.

When running the generated generator, all [generator-ts-console](https://www.npmjs.com/package/generator-ts-console) options may be used.

## How to:

### Build this project

1.  Build the code: `npm run build`

Note that the `lint` script is run prior to `build`. Auto-fixable linting or formatting errors may be fixed by running `lint:fix`.

### Create and run tests

1.  Add tests by creating files with the `.tests.ts` suffix
1.  Run the tests: `npm t`
1.  Test coverage can be viewed at `/coverage/lcov-report/index.html`

---

Generated with [generator-ts-console](https://www.npmjs.com/package/generator-ts-console)
