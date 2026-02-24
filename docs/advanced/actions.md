# Actions

Actions define **how templates should be processed**. They are stored in `.tempo-files/actions/` as JSON files. Actions reference template files by path - see [Templates](./templates.html) for the variables and functions available inside those files.

Example **component action file (component.json)**:

```json
[
  {
    "item": "file",
    "templateFile": "component/templ/component.templ.gotxt",
    "path": "{{ .GoPackage }}/{{ .ComponentName | goPackageName }}/{{ .ComponentName | goPackageName }}.templ"
  },
  {
    "item": "file",
    "templateFile": "component/assets/css/base.css.gotxt",
    "path": "{{ .AssetsDir }}/{{ .ComponentName | goPackageName }}/css/base.css"
  },
  {
    "item": "folder",
    "source": "component/assets/css/themes",
    "destination": "{{ .AssetsDir }}/{{ .ComponentName | goPackageName }}/css/themes"
  }
]
```

Each object defines a templating action:

| Key            | Type          | Description                                        |
| :------------- | :------------ | :------------------------------------------------- |
| `item`         | `file/folder` | Whether the action is creating a file or a folder. |
| `templateFile` | `string`      | Path to the template file (_only for file items_). |
| `path`         | `string`      | Output path for the generated file.                |
| `source`       | `string`      | Source folder (_only for folder items_).           |
| `destination`  | `string`      | Destination folder for copied content.             |
| `skipIfExists` | `bool`        | Whether to skip the file if it already exists.     |
| `force`        | `bool`        | Whether to overwrite existing files.               |

> [!NOTE]
> When `item` is `folder`, all files inside the source folder will be processed and copied to the destination folder.

**Variant actions (variant.json) follow the same structure** but target a specific component’s variant subfolder.
