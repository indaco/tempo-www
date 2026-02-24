# Guard Markers

`tempo` uses **guard markers** to determine where to inject CSS and JS into your `.templ` files.

By default, this is what it looks like:

```go
/* [tempo] BEGIN - Do not edit! This section is auto-generated. */
/* [tempo] END */
```

You can change the label (_tempo_) by updating:

```yaml
templates:
  guard_marker: your-custom-marker
```

> [!IMPORTANT]
> Only the text inside the square brackets is configurable.
>
> The _BEGIN_ / _END_ comments must stay exactly as shown.

Related topics:

- [`sync` command](../cli/sync.html)
- [Standalone sync](../guide/standalone-sync.html)
