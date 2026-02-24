# Function Providers

The `function_providers` array allows you to load external helper functions into your templates.
Each provider can be a local Go module or a remote Git repository.

## YAML Format

```yaml
templates:
  function_providers:
    - name: sprig
      type: url
      value: https://github.com/indaco/tempo-provider-sprig.git
    - name: my-local
      type: path
      value: ./my-template-functions
```

| Field   | Type     | Description                                                           |
| :------ | :------- | :-------------------------------------------------------------------- |
| `name`  | `string` | (Optional) The name of the function provider.                         |
| `type`  | `string` | Specifies if the provider is a local path or a remote url (Git repo). |
| `value` | `string` | The actual path or URL where the provider is located.                 |

For CLI usage, examples, and implementation details, see [Extending Tempo](../advanced/extending.html).
