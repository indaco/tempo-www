# register

The `register` command extends `tempo` by allowing you to:

- Load external template function providers
- Use helpers from a Git repo or local Go module inside your templates

## Register a function provider

This command enhances `tempo`’s templates by loading custom functions from a:

- 🌐 Remote Git repository
- 🗂️ Local Go module

Registered functions become available in .`gotxt` and `.templ` templates during generation.

<details>
<summary><strong>Flags</strong> (<code>tempo register functions</code>)</summary>
<dl>
  <dt><code>--name</code> (<code>-n</code>) <em>value</em></dt>
  <dd>Name for the function provider</dd>

  <dt><code>--url</code> (<code>-u</code>) <em>value</em></dt>
  <dd>Repository URL</dd>

  <dt><code>--path</code> (<code>-p</code>) <em>value</em></dt>
  <dd>Path to a local go module provider</dd>
</dl>
</details>

### 🌐 Register from a Git repository

```bash
tempo register functions --name sprig --url https://github.com/indaco/tempo-provider-sprig.git
```

### 🗂️ Register from a local Go module

```bash
tempo register functions --name myprovider --path ./my-template-funcs-go-module
```
