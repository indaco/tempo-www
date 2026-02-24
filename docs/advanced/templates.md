# Templates

Templates define the **structure of components and variants**. They use **Go's `text/template`** engine along with custom template functions provided by Tempo.

## Default Template Functions

Tempo provides a set of built-in helper functions:

| Function           | Description                                                     |
| :----------------- | :-------------------------------------------------------------- |
| `goPackageName`    | Converts a string into a valid Go package name.                 |
| `goExportedName`   | Converts a string into a valid **exported** Go function name.   |
| `goUnexportedName` | Converts a string into a valid **unexported** Go function name. |
| `normalizePath`    | Normalizes a path string.                                       |
| `isEmpty`          | Checks if a string is empty.                                    |

## Built-in Template Variables

Tempo automatically provides a set of **predefined variables** that can be used inside templates. These variables come from the configuration and CLI context during execution.

| Variable        | Description                                                           |
| :-------------- | :-------------------------------------------------------------------- |
| `TemplatesDir`  | The root directory containing template files.                         |
| `ActionsDir`    | The root directory containing actions files.                          |
| `GoModule`      | The name of the Go module being worked on.                            |
| `GoPackage`     | The Go package name where components will be organized and generated. |
| `ComponentName` | The name of the component being generated.                            |
| `VariantName`   | The name of the variant being generated (if applicable).              |
| `AssetsDir`     | The directory where asset files (CSS, JS) will be generated.          |
| `WithJs`        | Whether JavaScript is required for the component (true/false).        |
| `CssLayer`      | The CSS layer name associated with component styles.                  |
| `GuardMarker`   | Placeholder used in _templ_ files to mark auto-generated sections.    |

## Extending Template Functions

Tempo supports external function providers, allowing you to integrate additional helper functions into your templates.

See the full guide in [Extending Tempo](./extending.html).

Templates are executed by actions. See [Actions](./actions.html) to understand how output paths and rendering are controlled.
