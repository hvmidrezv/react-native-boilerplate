
# React Native Boilerplate

This is a React Native boilerplate for starting mobile app development. It's designed with a clear separation of UI and business logic, and it comes with thorough documentation for easy use.

## Tech Stack

ReactNative - TypeScript - React Native Paper - Emotion 




## Installation

`npx react-native init <ProjectName> --title "<ProjectTitle>" --template https://github.com/HamidrezaLashgari/react-native-boilerplate.git`



# Getting Started

> **Note 1**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

> **Note 2**: You need to run the command `yarn install` or simply `yarn` to install the required dependencies.
## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
## Roadmap

- Convert to monorepo
- PWA
- Support REST and GraphQL

