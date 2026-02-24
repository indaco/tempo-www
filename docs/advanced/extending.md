# Extending tempo

Customize `tempo`’s templating system by:

- Passing custom variables with [`user_data`](../config/user-data.html)
- Registering external function providers (local or remote)
- Implementing your own Go-based template functions
- Using prebuilt providers like the `sprig` one for extra utilities

These features give you control over how components and variants are generated - without touching core logic.

## Registering External Function Providers

You can add external function providers in two ways:

**1. Via the tempo.yaml configuration file:**

```yaml
templates:
  function_providers:
    - name: sprig
      type: url
      value: https://github.com/indaco/tempo-provider-sprig.git
```

**2. Via the CLI using the tempo register functions command:**

- Register a GitHub repository provider:

  ```bash
  tempo register functions --name sprig --url https://github.com/indaco/tempo-provider-sprig.git
  ```

- Register a local provider from a directory:

  ```bash
  tempo register functions --name myprovider --path /path/to/myprovider_module
  ```

## Implementing a Go-Based Function Provider

To create a custom function provider, implement the `TemplateFuncProvider` interface from the `github.com/indaco/tempo-api`.

See [tempo api](https://github.com/indaco/tempo-api) for full details.

### Example: Creating a Custom Function Provider

```go
package myprovider

import (
    "text/template"
    "github.com/indaco/tempo-api/templatefuncs"
)

// MyProvider implements the TemplateFuncProvider interface
type MyProvider struct{}

// GetFunctions returns a map of function names to implementations
func (p *MyProvider) GetFunctions() template.FuncMap {
    return template.FuncMap{
        "myFunc": func() string { return "Hello from myFunc!" },
    }
}

// Provider instance
var Provider templatefuncs.TemplateFuncProvider = &MyProvider{}
```

Once your provider is implemented:

- If published as a Git repository, register it using:

  ```bash
  tempo register functions --name myprovider --url https://github.com/user/myprovider_module.git
  ```

- If stored locally, register it using:

  ```bash
  tempo register functions --name myprovider --path /path/to/myprovider_module
  ```

## Available Function Providers

A pre-built function provider for `Masterminds/sprig` is [available](https://github.com/indaco/tempo-provider-sprig.git) for convenience:

```bash
tempo register functions --name sprig --url https://github.com/indaco/tempo-provider-sprig.git
```

This allows you to access [Sprig functions](https://github.com/Masterminds/sprig) within Tempo templates.
