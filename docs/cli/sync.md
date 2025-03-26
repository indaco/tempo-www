# sync

The `sync` command automates the injection of CSS and JS into `.templ` components.

Use it to:

- Keep styles and scripts separated from your components
- Automatically inject updated content into guard-marked sections
- Preserve your original source files — no overwrites

## 🚀 Basic Usage

```bash
tempo sync
```

This command scans your **input directory** for asset files (CSS/JS) and injects them into `.templ` files in your **output directory**.

What it does:

- **Extracts** CSS and JS from source files
- **Injects** into `.templ` files at guard-marked locations
- **Keeps components up to date** without manual copying.

### 🔧 Common Workflow

Every time you update a `.css` or `.js` file in `assets/`, run:

```bash
tempo sync
```

It will update matching `.templ` files under `components/` — but leave your source files untouched.

<details>
<summary><strong>Flags</strong></summary>
<dl>
  <dt><code>--input</code> <em>value</em></dt>
  <dd>The directory containing asset files (e.g., CSS, JS) to be processed (<em>default: assets</em>)</dd>

  <dt><code>--output</code> <em>value</em></dt>
  <dd>The directory containing the `.templ` component files where assets will be injected (<em>default: components</em>)</dd>

  <dt><code>--exclude</code> <em>value</em></dt>
  <dd>Subfolder (relative to input directory) to exclude from the processing</dd>

  <dt><code>--workers</code> <em>value</em></dt>
  <dd>Number of concurrent workers processing asset files (<em>default: numCPUs * 2</em>)</dd>

  <dt><code>--prod</code></dt>
  <dd>Enable production mode, minifying the injected content (<em>default: false</em>)</dd>

  <dt><code>--force</code></dt>
  <dd>Force processing of all files, ignoring modification timestamps (<em>default: false</em>)</dd>

  <dt><code>--summary</code> (<code>-s</code>) <em>value</em></dt>
  <dd>Specify the summary format: <code>text</code>, <code>json</code>, or <code>none</code> (<em>default: "text"</em>)</dd>

  <dt><code>--verbose</code></dt>
  <dd>Show detailed information in the summary report (<em>default: false</em>)</dd>

  <dt><code>--report-file</code> (<code>--rf</code>) <em>value</em></dt>
  <dd>Export the summary to a JSON file</dd>
</dl>
</details>

> [!TIP]
> **Live Reload:** If you're using a live reload tool like [air](https://github.com/air-verse/air), [templier](https://github.com/romshark/templier), or [watchexec](https://github.com/watchexec/watchexec), pass `--summary none` to reduce noise in the terminal.

> [!NOTE]
> **Not using scaffolding?**
> 👉 [Standalone Sync Guide](../guide/standalone-sync.md).
