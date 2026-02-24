# Configuration

This page shows the default structure of the `tempo.yaml` file, which is generated when you run:

```bash
tempo init
```

You can customize this file to control how tempo manages:

- Folder layout for components and assets
- Template generation and injection behavior
- External functions and custom variables

## Default Configuration Example

```yaml
# The root folder for Tempo files
tempo_root: .tempo-files

app:
  # The name of the Go module being worked on.
  go_module: <FROM_GO.MOD>

  # The Go package name where components will be organized and generated.
  go_package: components

  # The directory where asset files (CSS, JS) will be generated.
  assets_dir: assets

  # Indicates whether JavaScript is required for the component.
  # with_js: false

  # The name of the CSS layer to associate with component styles.
  # css_layer: components

processor:
  # Number of concurrent workers (numCPUs * 2).
  workers: 4

  # Summary format: long, compact, json, none.
  summary_format: compact

templates:
  # A text placeholder or sentinel used in template files to mark auto-generated content.
  guard_marker: tempo

  # File extensions used for template files.
  extensions:
  - .gotxt
  - .gotmpl
  - .tpl
```

You can explore individual configuration options in detail on the [Options](../config/options.html) page.
