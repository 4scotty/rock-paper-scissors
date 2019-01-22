# Rock-Paper-Scissors

## Pre-requisites

* Node.js: v10.15.0+
* Yarn: v1.3.0+

## Compatibility

Default target browsers are defined via `browserlist`:
* > 1%
* last 2 versions

Full list of supported browsers here: [https://browserl.ist/?q=%3E+1%25%2C+last+2+versions]

## Development

Development mode supports pre-linting and auto-compilation with live-reload.

1) to start dev-server just enter:
```shell
yarn start
```

2) open in browser `http://0.0.0.0:9000`

3) enjoy!

## QA

QA stage commands:

```shell
yarn lint # check linting manually
yarn test # run test suites
```

**NOTE!** test suites are not implemented yet

## Production

To start building the project type:

```shell
yarn build # prepare dist in `./dist` folder
```

## Known issues

* global rerender after store changes
* only global store support
* leak of event handlers

# TODO

* [ ] test suites
* [ ] styles
