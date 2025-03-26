# ⚡ Quickstart

See `tempo` in action with a real-world setup.

## Try It Now

> ⚠️ Make sure you’ve installed the [prerequisites](#prerequisites) first.

Clone the [demo project](https://github.com/indaco/tempo-demo) and start developing immediately:

```bash
git clone https://github.com/indaco/tempo-demo.git
cd tempo-demo
go mod download
make dev # or: task dev
```

Then open [http://localhost:7331](http://localhost:7331) in your browser.

You’ll get:

- Live reload via `templ`
- Instant CSS/JS sync via `tempo`
- A ready-to-use **button** component with a variant (_outline_) and some JavaScript.

## Prerequisites

Install the following tools (Go 1.23+ required):

```bash
go install github.com/a-h/templ/cmd/templ@latest
go install github.com/indaco/tempo/cmd/tempo@latest
go install github.com/air-verse/air@latest
```

## Step-by-Step Overview

Here’s how the demo project was built using tempo:

1. **Create a Go module**

   ```bash
   go mod init github.com/indaco/tempo-demo
   ```

2. **Initialize tempo**

   ```bash
   tempo init
   ```

3. **Define a component template**

   ```bash
   tempo component define --js
   ```

4. **Create a component**

   ```bash
   tempo component new --name button --js
   ```

5. **Write styles and scripts** in `assets/button`
6. **Sync everything**

   ```bash
   tempo sync
   ```

7. **Generate templ code**

   ```bash
   templ fmt . && templ generate
   ```

8. **Run the dev server**

   ```bash
   make dev # or: task dev
   ```

9. **Define a variant template**

   ```bash
   tempo variant define
   ```

10. **Create the outline variant**

   ```bash
   tempo variant new --name outline --component button
   ```

   This creates:

- `assets/button/css/variant/outline.css`
- `components/button/variant/outline.templ`

Write styles for the newly created `outline` variant in `assets/button`.

11. **Edit assets and enjoy live updates!** 💥

Want to see the full config and source?
Browse the [tempo-demo repo →](https://github.com/indaco/tempo-demo)
