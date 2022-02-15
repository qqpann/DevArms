# DevArms

All in one offline toolbox: swiss army knife-like utils give you extra arms
Written in Rust, React. Powered by Tauri.

## React Scripts

### Serve React

```terminal
yarn start
```

### Lint

```terminal
yarn lint
```

### Test

```terminal
yarn test
```

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Tauri Scripts

### Serve Tauri windowed app

```terminal
yarn tauri dev
```

### Build Tauri app

```terminal
yarn tauri build
```

### Upgrade Tauri dependencies

```terminal
yarn tauri deps update
```

Upgrade tauri and inside `src-tauri`.

## WASM Scripts

### Build WASM

```terminal
wasm-pack build --target web
```

### Test WASM

```terminal
wasm-pack test --firefox --headless
```
