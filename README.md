query-filter-kit
--
[![npm version](https://badge.fury.io/js/query-filter-kit.svg)](https://badge.fury.io/js/query-filter-kit)
[![Npm package total downloads](https://badgen.net/npm/dt/query-filter-kit)](https://npmjs.com/package/query-filter-kit)

A javascript library, helps in building and parsing huge list of query filters. 

### Introduction
- In e-commerce and similar applications, users can apply a variety of filters to search for products.
- These filters are then sent to the backend server as part of an `HTTP` request. 
- When creating these requests, it is recommended to use the `GET` method so that the URL can be bookmarked by users. 
- However, this can add complexity to the process of building the query, as it must now include all of the filter criteria, such as `"colors in [red, blue]" and "price between [100, 200]"`

`query-filter-kit` package is built exactly to solve this problem.

### Features
- Build queries using a fluent API
- Parse queries into an object
- Support for a variety of operators, including equality, inequality, contains, less than, less than equal to, and more

### Installation
```bash
npm install -S query-filter-kit
```


### Usage

#### QueryFilterBuilder
- Used to build complex query using fluent API to a string

```javascript
const querykit = require('query-filter-kit');

const builder = new querykit.QueryFilterBuilder()
    .withGreaterThan("discount", 20)
    .withIn("colors", ["red", "blue", "green"])
    .withEquals("gender", "men")
    .withInRange("price", 500, 1000);

const query = builder.build();
console.log(query);
// Output
// discount:gt:20&colors:in:red,blue,green&gender:eq:men&price:btw:500,1000


// before assigning to query parameter in GET request, make sure to encode the query
const encodedQuery = encodeURIComponent(query);
console.log(encodedQuery);

// Output:
// discount%3Agt%3A20%26colors%3Ain%3Ared%2Cblue%2Cgreen%26gender%3Aeq%3Amen%26price%3Abtw%3A500%2C1000
 
```

#### QueryFilterParser
- Used to parse the query string to a json object

```javascript
const querykit = require('query-filter-kit');

const queryString = 'discount:gt:20&colors:in:red,blue,green&gender:eq:men&price:btw:500,1000';
const parser = new querykit.QueryFilterParser(queryString);

// Print by stringifying the parsed json object
console.log(JSON.stringify(parser.parse(), null, 4));
/*
Output:
{
    "discount": [
        {
            "op": "gt",
            "value": "20"
        }
    ],
    "colors": [
        {
            "op": "in",
            "value": [ "red", "blue", "green" ]
        }
    ],
    "gender": [
        {
            "op": "eq",
            "value": "men"
        }
    ],
    "price": [
        {
            "op": "btw",
            "value": ["500", "1000"]
        }
    ]
}
*/

// For advance usage, there is a raw parser, which generates an array of list of string
console.log(parser.raw());
/*
Output:
[
  [ 'discount', 'gt', '20' ],
  [ 'colors', 'in', 'red,blue,green' ],
  [ 'gender', 'eq', 'men' ],
  [ 'price', 'btw', '500,1000' ]
]
*/
```

### Contributing

Contributions are welcome! Please open an issue or pull request on GitHub.

### License

query-filter-kit is licensed under the MIT License.

---
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://bmc.link/yekabotepavan)


Developed with ❤️ by Pavan Kumar Yekabote.
