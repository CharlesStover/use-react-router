# use-react-router [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=useReactRouter%20is%20a%20React%20Hook%20that%20provides%20pub-sub%20behavior%20for%20react-router!&url=https://www.npmjs.com/package/use-react-router&via=CharlesStover&hashtags=react,reactjs,javascript,typescript,webdev,webdevelopment)

`useReactRouter` is a React Hook that provides pub-sub behavior for `react-router`.
Unlike the `withRouter` Higher-Order Component, `useReactRouter` will re-render your component when the location changes!

`useReactRouter()` returns the an object that contains the `history`, `location`, and `match` properties that would be passed as props by the HOC.

[![package](https://img.shields.io/npm/v/use-react-router.svg)](https://www.npmjs.com/package/use-react-router)
[![build](https://api.travis-ci.com/CharlesStover/use-react-router.svg)](https://travis-ci.com/CharlesStover/use-react-router/)
[![minified size](https://img.shields.io/bundlephobia/min/use-react-router.svg)](https://www.npmjs.com/package/use-react-router)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-react-router.svg)](https://www.npmjs.com/package/use-react-router)

## Why Pub-Sub?

Pub-sub behavior is a common request (that's commonly rejected) for the `react-router` package.

For users who adamently prefer pub-sub behavior over `react-router`'s suggested alternatives, this package offers a solution.

A non-pub-sub React Hook is anticipated to eventually be included in the `react-router` package itself.

## Install

**You must be using `react-router` v4.4.0 or greater.** At time of publication, you must install `react-router@next` in order to grab the 4.4.0 package.

* `npm install use-react-router` or
* `yarn add use-react-router`

## Use

Import `useReactRouter` and use it as a React Hook.

```JavaScript
import useReactRouter from 'use-react-router';

const MyPath = () => {
  const { history, location, match } = useReactRouter();
  return (
    <div>
      My location is {location.pathname}!
    </div>
  );
};

```
