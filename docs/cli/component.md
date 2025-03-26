# component

The `component` command lets you:

- Define reusable component templates (`tempo component define`)
- Generate real components from those templates (`tempo component new`)

## Define Component Template

```bash
tempo component define
```

Creates a scaffold for defining a UI component, including template files and an action JSON file.

These definitions are later used by `tempo component new` to generate real components.

<details>
<summary><strong>Flags</strong></summary>
<dl>
  <dt><code>--force</code></dt>
  <dd>Force overwriting if already exists (<em>default: false</em>)</dd>

  <dt><code>--dry-run</code></dt>
  <dd>Preview actions without making changes (<em>default: false</em>)</dd>

  <dt><code>--js</code></dt>
  <dd>Whether or not JS is needed for the component (<em>default: false</em>)</dd>
</dl>
</details>

## Generate Component Instance

```bash
tempo component new --name button
```

Uses the templates and actions created with `tempo component define` to generate a real component inside _assets/_ and _components/_.

Example: Running `tempo component new --name dropdown` will generate:

- `assets/dropdown/` _(CSS & JS files)_
- `components/dropdown/` _(with .templ and .go files)_

<details>
<summary><strong>Flags</strong></summary>

<dl>
  <dt><code>--package</code> (<code>-p</code>) <em>value</em></dt>
  <dd>The Go package name where components will be generated (<em>default: components</em>)</dd>

  <dt><code>--assets</code> (<code>-a</code>) <em>value</em></dt>
  <dd>The directory where asset files (e.g., CSS, JS) will be generated (<em>default: assets</em>)</dd>

  <dt><code>--name</code> (<code>-n</code>) <em>value</em></dt>
  <dd>Name of the component</dd>

  <dt><code>--js</code></dt>
  <dd>Whether or not JS is needed for the component (<em>default: false</em>)</dd>

  <dt><code>--force</code></dt>
  <dd>Force overwriting if the component already exists (<em>default: false</em>)</dd>

  <dt><code>--dry-run</code></dt>
  <dd>Preview actions without making changes (<em>default: false</em>)</dd>
</dl>
</details>
