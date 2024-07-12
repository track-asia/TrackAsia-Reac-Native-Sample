# Getting Started

Congratulations, you successfully installed trackasia-react-native! 🎉
This quickstart guide provides a zero-to-map intro, and from there you can check out the
[examples](/example) folder if you want to jump in the deep end.

## Prerequisites

1. On Android we support API 23 and higher
2. You will need a vector tile source (such as Stadia Maps or MapTiler) for production use; a demonstration URL is used in the below example.

## Dependencies

- [node](https://nodejs.org)
- [npm](https://www.npmjs.com/)
- [React Native](https://facebook.github.io/react-native/) (0.60+)

## Installation

### Set up a React Native project

If you don't have an existing React Native project, create one:

```shell
npx react-native init MyApp
```

### Install Package

From your React Native project's root directory, add the package via
either `yarn` or `npm` (pick one).

```shell
# install with Yarn
yarn add @track-asia/trackasia-react-native

```

```shell
# install with NPM
npm install @track-asia/trackasia-react-native --save
```

### Review platform specific info

Check out the installation guide(s) for additional information about platform-specific setup, quirks,
and steps required before running.

- [Android](/android/install.md)
- [iOS](/ios/install.md)
- [Expo](/plugin/install.md)

## Adding a map

Here is an example minimal App.js

```js
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TrackAsiaGL from '@track-asia/trackasia-react-native';

// Will be null for most users (only TrackAsia authenticates this way).
// Required on Android. See Android installation notes.
TrackAsiaGL.setAccessToken(null);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        <TrackAsiaGL.MapView
          style={styles.map}
          logoEnabled={false}
          styleURL="https://maps.track-asia.com/styles/v1/streets.json?key=public_key"
        />
      </View>
    );
  }
}
```

## Run it!

### iOS

```shell
# Run with yarn
yarn run ios

# or Run with NPM
npm run ios
```

### Android

```shell
# Run with yarn
yarn run android

# or Run with NPM
npm run android
```