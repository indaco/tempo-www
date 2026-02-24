# User Data

The `user_data` key lets you define custom values that are passed into your templates as `.UserData`.

These values can be strings, booleans, numbers, or nested maps - and are available in all your component and variant templates.

> [!INFO]
> These values are available inside any `.gotxt` or `.templ` file rendered by `tempo`.

**Example: tempo.yaml**

```yaml
# ....
templates:
  user_data:
    author: Jane Doe
    year: 2025
    config:
      option1: true
      option2: false
```

**Basic Access (dot notation)**

```go
Author: {{ .UserData.author }}
Year: {{ .UserData.year }}
```

**Nested Access**

You can use either:

- `index`(built-in from [text/template](https://pkg.go.dev/text/template))
- `lookup`(provided by _tempo_, supports dot notation)

```go
{{ index (index .UserData "config") "option1" }}
{{ lookup .UserData "config.option1" }}
```
