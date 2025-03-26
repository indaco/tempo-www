# variant

The `variant` command lets you:

- Define reusable variant templates for components (`tempo variant define`)
- Generate variant instances from those templates (`tempo variant new`)

## Define Variant Template

```bash
tempo variant define
```

Creates a scaffold for defining a **variant** of an existing component (e.g., an **outline** button variant), including template files and an action JSON file.

These definitions are later used by `tempo variant new` to generate real component variants.

<details>
<summary><strong>Flags</strong></summary>

<dl>
  <dt><code>--force</code></dt>
  <dd>Force overwriting if the variant definition already exists (<em>default: false</em>)</dd>
  <dt><code>--dry-run</code></dt>
  <dd>Preview actions without making changes (<em>default: false</em>)</dd>
</dl>

</details>

## Generate Variant Instance

```bash
tempo variant new --name outline --component button
```

Uses the templates and actions created with `tempo variant define` to generate a real instance of a variant inside the corresponding component folder.

Example: Running `tempo variant new --name outline --component` button will generate:

- `components/button/variant/outline.templ`
- `assets/button/css/variant/outline.css`

<details>
<summary><strong>Flags</strong></summary>

<dl>
  <dt><code>--package</code> (<code>-p</code>) <em>value</em></dt>
  <dd>The Go package name where components will be generated (<em>default: components</em>)</dd>

  <dt><code>--assets</code> (<code>-a</code>) <em>value</em></dt>
  <dd>The directory where asset files (e.g., CSS, JS) will be generated (<em>default: assets</em>)</dd>

  <dt><code>--name</code> (<code>-n</code>) <em>value</em> <strong>(required)</strong></dt>
  <dd>The name of the variant being generated</dd>

  <dt><code>--component</code> (<code>-c</code>) <em>value</em> <strong>(required)</strong></dt>
  <dd>Name of the component or entity to which this variant belongs</dd>

  <dt><code>--force</code></dt>
  <dd>Force overwriting if the variant already exists (<em>default: false</em>)</dd>

  <dt><code>--dry-run</code></dt>
  <dd>Preview actions without making changes (<em>default: false</em>)</dd>
</dl>

</details>
