# Usage

This page walks you through the typical `tempo` workflow — from initialization to asset syncing.

## 1. Initialize a Project

```bash
tempo init
```

Creates a tempo.yaml config file.
You can customize paths, template behavior, and more.

📌 See [Configuration](../config/) for available options.

## 2. Define a Template

```bash
tempo component define
tempo variant define
```

Generates reusable templates for components or variants.

- Stored in `.tempo-files/templates/`
- Linked to an action file in `.tempo-files/actions/`

📌 See [Templates & Actions](../advanced/) to learn more.

## 3. Create a Component

```bash
tempo component new --name button
```

Generates a real component based on your template:

- `assets/button/` → CSS and JS.
- `components/button/` → _.templ_ and _.go_

## 4. Sync Assets with .templ Files

```bash
tempo sync
```

Injects CSS & JS into _.templ_ components using **guard markers**.

🔹 Example mapping:

```bash
assets/button/css/button.css          → components/button/css/button.templ
assets/button/css/variant/outline.css → components/button/css/variant/outline.templ
```

📌 Not using scaffolding? You can also [run sync standalone](./standalone-sync.md).
