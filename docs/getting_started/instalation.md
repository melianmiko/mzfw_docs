# Installation

This page describe how-to add `mzfw` to your ZeppOS application
project, or start a new one.

## Start new project using `zeusx`
WIP

## Connect `mzfw` to exiting ZeppOS (`zeus`) project

:::warning

`mzfw_zeus` supports only ZeppOS 1.0-targeting applications.

You can't use it inside projects with `runtime.apiVersion >= 2` for
now. If you're starting a new project with support of modern Amazfit
smartwatches, consider to use `zeusx` & `@zosx`.

:::

1. Install latest version `mzfw_zeus` into your project. Command bellow
   will alias this package to `mzfw` for better experience:

```bash
npm i --save-dev mzfw@npm:mzfw_zeus
```

2. Connect polyfill's. Add this line to your `app.js`:

```javascript
// highlight-start
import "mzfw/device_polyfill";
// highlight-end

App({
    // ...
});
```

3. Copy/symlink asset files from `mzfw` to your projects.
- Copy `node_modules/mzfw/assets` to `assets/<your_target_name>/mzfw`;
- Copy `node_modules/mzfw/assets_raw` to `assets/raw/mzfw`;

4. Now, you're ready to import & use features from `mzfw` in your app.
