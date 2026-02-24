# CLI Reference

`tempo` provides five commands that map to three distinct responsibilities:

| Responsibility | Commands |
|---|---|
| Project setup | [`init`](./init.html) |
| Scaffolding | [`component`](./component.html), [`variant`](./variant.html) |
| Asset injection | [`sync`](./sync.html) |
| Extensibility | [`register`](./register.html) |

## Usage

```bash
tempo <command> [options] [arguments]
```

## Global Options

```
--help, -h     Show help
--version, -v  Print the version
```

<details>
<summary><strong>Full help output</strong></summary>

```bash
NAME:
   tempo - A lightweight CLI for managing assets and scaffolding components in templ-based projects.

USAGE:
   tempo <command> [options] [arguments]

DESCRIPTION:
   tempo simplifies asset management in templ-based projects, providing a seamless workflow for
   handling CSS and JS files. It automatically extracts and injects styles and scripts into .templ
   components while preserving the original source files, ensuring a smooth developer experience.
   Additionally, it offers a lightweight scaffolding system to quickly generate component and variant
   templates with predefined structures.

COMMANDS:
   init       Initialize a Tempo project
   component  Define component templates and generate instances from them
   variant    Define variant templates and generate instances from them
   register   Register is used to extend tempo
   sync       Process & sync asset files into templ components
   help       Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --help, -h     show help
   --version, -v  print the version
```

</details>
