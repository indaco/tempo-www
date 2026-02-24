# Templates & Actions

`tempo`'s scaffolding system is built on two complementary concepts:

- **Templates** define the content and structure of generated files. They use Go's `text/template` engine and have access to built-in variables and optional custom functions.
- **Actions** declare which templates to render, where to write the output, and whether to create files or copy folders.

When you run `tempo component define` or `tempo variant define`, both a template set and a corresponding action file are created. When you run `tempo component new` or `tempo variant new`, the action file is executed against the templates to produce your component files.

Explore each topic in detail:

- [Templates](./templates.html) - template variables, functions, and syntax
- [Actions](./actions.html) - defining and using action JSON
- [Extending Tempo](./extending.html) - user data & function providers
