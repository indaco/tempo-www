# Standalone Sync

The `sync` command can be used **independently** of the scaffolding flow (`define`, `new`, `register`). All it requires is:

- A valid `tempo.yaml` file
- A project folder structure matching the paths defined in `tempo.yaml`
- **Guard markers** in your `.templ` files to specify where assets should be injected

This makes `tempo sync` a great option for developers who want to **synchronize CSS and JS assets** with their `.templ` files, without using the full scaffolding features.

## Use Cases

- Already have components but want automated asset injection
- Only need asset handling without using the full scaffolding flow
- Maintain existing folder structures while benefiting from tempo's synchronization

## Example Workflow

Start by creating a Go module using the `go mod init` [command](https://go.dev/ref/mod#go-mod-init).

1. **Initialize `tempo.yaml`:**

   ```bash
   tempo init
   ```

2. **Set up your folders:**

   ```bash
   .
   ├── assets/
   │   └── button/
   │       └── button.css
   └── components/
       └── button/
           └── button.templ
   ```

3. **Prepare .templ file with guard markers:**

   ```templ
   package button

   var buttonCSSHandle = templ.NewOnceHandle()

   templ Button() {
     @buttonCSSHandle.Once() {
       <style type="text/css">
       /* [tempo] BEGIN - Do not edit! This section is auto-generated. */
       /* [tempo] END */
       </style>
   }
   ```

4. **Run the sync command:**

   ```bash
   tempo sync
   ```

5. **Result:**

   CSS and JS are injected into the corresponding `.templ` files, replacing the content between the guard markers.

## Guard Markers

`tempo sync` uses guard markers to locate injection points in `.templ` files. If no markers are found, the file is skipped.

See [Guard Markers configuration](../config/guard-markers.html) for the default format and how to customize the marker label.
