# plugin-boilerplate

> A boilerplate for Ampify plugin

### Install and Run

```shell script
$ git clone && yarn && yarn test
```

### Ampify Plugin

In order to develop an Ampify plugin,
you need to export to functions:

- `prepare`: preparing the dom for Ampfiy.
- `run`: run plugin's manipulation.

Inside the Plugin's code, you have access to the `DOM` as expected.

### Testing

Just run `yarn test`.

Easy to test it using `Jest`, or any other tool of convenience.

### 3rd Party Libraries

You can use any 3rd party libraries installed with `npm` or `yarn`.

### Caveats

Be aware that the plugin will run in another website,
So you don't have control of what this website changed to the `window` object or
`Prototype`.

It is best advice to use 3rd party utility library,
like `lodash`, and not depend of js native methods
as they could have been changed by the website.
