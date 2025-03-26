# Templates & Actions Overview

`tempo` uses Go’s standard `text/template` engine, enhanced with user-defined data and optional custom functions. It lets you scaffold components and variants by combining:

- **Templates** – which define the structure of your files.
- **Actions** – which specify how and where those templates are rendered.

This system is used in:

- `tempo component define` → for component templates and actions
- `tempo variant define` → for variant-specific scaffolding

> The goal is to **generate clean, consistent file structures** based on your project layout and config.

To learn more, explore:

- [Templates](./templates.md) – template variables, functions, and syntax
- [Actions](./actions.md) – defining and using action JSON
- [Extending Tempo](./extending.md) – user data & function providers
