# Getting Started

See `tempo` in action with a working demo project.

## Prerequisites

- **Go 1.23+** and `tempo` installed - see [Installation](./installation.html)
- [templ](https://templ.guide): `go install github.com/a-h/templ/cmd/templ@latest`
- [air](https://github.com/air-verse/air): `go install github.com/air-verse/air@latest`

## Try It

Clone the [demo project](https://github.com/indaco/tempo-demo):

```bash
git clone https://github.com/indaco/tempo-demo.git
cd tempo-demo
go mod download
make dev # or: task dev
```

Open [http://localhost:7331](http://localhost:7331). You'll get:

- Live reload via `templ`
- Instant CSS/JS sync via `tempo`
- A ready-to-use **button** component with an _outline_ variant

## Step-by-Step Walkthrough

Here's how the demo project was built using tempo:

1. **Create a Go module**

   ```bash
   go mod init github.com/indaco/tempo-demo
   ```

2. **Initialize tempo**

   ```bash
   tempo init
   ```

   This generates a `tempo.yaml` config file. See [Configuration](../config/index.html) for available options.

3. **Define a component template**

   ```bash
   tempo component define --js
   ```

   Generates reusable templates in `.tempo-files/templates/` with a corresponding action file in `.tempo-files/actions/`. See [Templates & Actions](../advanced/index.html) to learn more.

4. **Create a component**

   ```bash
   tempo component new --name button --js
   ```

   This generates:

   - `assets/button/` - CSS and JS source files
   - `components/button/` - `.templ` and `.go` files

5. **Write styles and scripts** in `assets/button`

6. **Sync everything**

   ```bash
   tempo sync
   ```

   Injects CSS and JS into `.templ` components using **guard markers**. See [Guard Markers](../config/guard-markers.html) for details.

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

11. **Edit assets and enjoy live updates!**

Browse the [tempo-demo repo](https://github.com/indaco/tempo-demo) for the full source.

Not using scaffolding? You can also [run sync standalone](./standalone-sync.html).
