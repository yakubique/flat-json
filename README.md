# Flat JSON

Concat all arrays inside array and return

[![Test `flat-json` action](https://github.com/yakubique/flat-json/actions/workflows/test-myself.yaml/badge.svg)](https://github.com/yakubique/flat-json/actions/workflows/test-myself.yaml)

[Usage workflow](https://github.com/yakubique/flat-json/actions/workflows/test-myself.yaml)

## Usage
```yaml
- name: Flat JSON
  id: list
  uses: yakubique/flat-json@v1
  with:
    input: '[[1], [2,3], [4,5], [6]]'

# result: "[1,2,3,4,5,6]"
```

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|   INPUT   |  TYPE  | REQUIRED |  DEFAULT  |        DESCRIPTION        |
|-----------|--------|----------|-----------|---------------------------|
|   input   | string |   true   |           | Input JSON string or file |
| from_file | string |  false   | `"false"` |    Load JSON from file    |
|  to_file  | string |  false   | `"false"` |    Save result to file    |

<!-- AUTO-DOC-INPUT:END -->




## Outputs

<!-- AUTO-DOC-OUTPUT:START - Do not remove or modify this section -->

| OUTPUT |  TYPE  |                        DESCRIPTION                        |
|--------|--------|-----------------------------------------------------------|
| result | string | Result list in JSON format (or file if `to_file = true`)  |

<!-- AUTO-DOC-OUTPUT:END -->



----

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S1UZ9P7)
