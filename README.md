# useReactRouter

[![version](https://img.shields.io/npm/v/use-react-router.svg)](https://www.npmjs.com/package/use-react-router)
[![downloads](https://img.shields.io/npm/dt/use-react-router.svg)](https://www.npmjs.com/package/use-react-router)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-react-router.svg)](https://www.npmjs.com/package/use-react-router)

`useReactRouter` is a React Hook that provides pub-sub behavior for `react-router`.
Unlike the `withRouter` Higher-Order Component, `useReactRouter` will re-render your component when the location changes!

`useReactRouter()` returns an object that contains the `history`, `location`, and `match` properties that would be passed as props by the HOC.

A tutorial covering the design and development of this package can be found on Medium: [How to Convert withRouter to a React Hook](https://medium.com/@Charles_Stover/how-to-convert-withrouter-to-a-react-hook-19bb02a29ed6).

## Why Pub-Sub?

Pub-sub behavior is a common request (that's commonly rejected) for the `react-router` package.

For users who adamently prefer pub-sub behavior over `react-router`'s suggested alternatives, this package offers a solution.

A non-pub-sub React Hook is anticipated to eventually be included in the `react-router` package itself.

## Install

**You must be using `react-router` and `react-router-dom` v5.0.0 or greater.**

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
