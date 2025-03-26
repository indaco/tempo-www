# Why Tempo?

Tempo was created to improve developer experience when working with [templ](https://templ.guide) by:

- Keeping CSS/JS cleanly separated while auto-injecting them at build time
- Making scaffolding frictionless (no Node or Plop.js)
- Preserving existing tooling support (syntax highlighting, linters, etc.)

Start fast, stay productive.

## The Problem

While building a UI component library in Golang with `templ`, I deliberately chose to use plain CSS and vanilla JavaScript. This decision introduced two key challenges:

1. **Managing CSS & JS assets** – While `templ` excels at Go/HTML templating, it lacks a structured approach for handling standalone styles and scripts. Although you can write CSS and JS directly within `.templ` files, this comes at the cost of losing native tooling benefits such as syntax highlighting, formatting, and autocompletion. As a result, maintaining styles and scripts efficiently while keeping them separate from `.templ` files required a better workflow.
2. **Scaffolding new components** – Every component followed the same folder structure, but manually copying files and folders was inefficient. I initially used [Plop.js](https://plopjs.com/), but it required setting up a full Node.js project.

## The Solution

`tempo` solves both problems natively in Go, eliminating the need for Node.js while providing a **structured, opinionated workflow** for component and asset management.

### ✨ Preserving the Developer Experience

With `tempo`, CSS and JS files remain untouched during development, allowing developers to continue using their preferred tools:

- **Linters & formatters** (e.g., Prettier, ESLint, Stylelint)
- **IDE features** like syntax highlighting, error detection, and inline code suggestions (e.g., in _VSCode_).
- **Existing workflows** remain intact—ensuring a familiar, efficient experience.

When you run `tempo`, **CSS and JS files are injected into `.templ` components automatically**, but the original source files remain unchanged. This approach **preserves developer productivity** while enabling seamless integration into templ-based projects.

> 🖼️ **Visual overview**
>
> A quick look at how `tempo` syncs assets and scaffolds components:

![tempo in action](/statics/demo.gif)