# Configuration Options

This page explains all available configuration options for `tempo.yaml`, which is generated when you run `tempo init`.

Each section below corresponds to a top-level key in the config file:

- `app` → defines your Go module, package, and asset folders
- `processor` → controls how `tempo sync` runs
- `templates` → defines template extensions, guard markers, function providers, and user data

You can customize these values to fit your project's structure and development workflow.

## 📁 Project Structure

| Key          | Default        | Description                                                 |
| :----------- | :------------- | :---------------------------------------------------------- |
| `tempo_root` | `.tempo-files` | Root folder where `tempo` stores its templates and actions. |

## ⚙️ Application Settings

| Key              | Default      | Description                                               |
| :--------------- | :----------- | :-------------------------------------------------------- |
| `app.go_module`  | *(from go.mod)* | Name of the Go module being worked on.                   |
| `app.go_package` | `components` | Go package name where components will be generated.       |
| `app.assets_dir` | `assets`     | Directory where asset files (CSS, JS) will be generated.  |
| `app.with_js`    | `false`      | Whether JavaScript is required for the component.         |
| `app.css_layer`  | `components` | CSS layer name to associate with component styles.        |

## ⚡ Processor Settings

| Key                        | Default | Description                                        |
| :------------------------- | :------ | :------------------------------------------------- |
| `processor.workers`        | `4`     | Number of concurrent workers.                      |
| `processor.summary_format` | `compact` | Format for CLI summary output: `long`, `compact`, `json`, or `none`. |

## 🧩 Templates Settings

| Key                            | Default                     | Description                                                                                             |
| :----------------------------- | :-------------------------- | :-------------------------------------------------------------------------------------------------------- |
| `templates.extensions`         | `.gotxt`, `.gotmpl`, `.tpl` | File extensions used for template files.                                                                 |
| `templates.guard_marker`       | `tempo`                     | Label used inside `.templ` guard comments for injection. [See guard marker config](./guard-markers.md)   |
| `templates.user_data`          | `nil`                       | Custom variables passed into templates. [See user data config](./user-data.md)                           |
| `templates.function_providers` | `[]`                        | External template function providers. [See function providers config](./function-providers.md)           |
