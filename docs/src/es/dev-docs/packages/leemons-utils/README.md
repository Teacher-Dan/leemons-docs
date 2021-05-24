# leemons-utils

leemons-utils es el paquete en el que están todas las funciones para ayudarte en el desarrollo, contienen funcionalidad común que te puede ser útil en cualquier momento.

Para usar `leemons-utils` en tus paquetes, es necesario que lo instales antes:

:::: tabs type:border-card
::: tab yarn

```bash
yarn add leemons-utils
```

:::
::: tab npm

```bash
npm install leemons-utils
```

:::
::::

## env

La función env devuelve el valor de la variable de entorno solicitada si existe, si no, devuelve el valor por defecto especificado.

```js
const {env} = require('leemons-utils');

// Si NODE_ENV no está definidio, devuelve 'development',
// si no, devuelve process.env.NODE_ENV
env('NODE_ENV', 'development');
```

## getModel

Devuelve el modelo solicitado si existe, si no existe, devuelve null.

::: warning NOTA
Los modelos retornados no contienen información del ORM.
:::

```js
const {getModel} = require('leemons-utils');

getModel('leemons::usuarios');
```

Si un array de modelos es provisto, busca el modelo en dicho array.

```js
const {getModel} = require('leemons-utils');

const modelos = [
 modelo1: {...},
 modelo2: {...},
 ...
];

getModel('modelo1', modelos);
```

## generateModelName

Genera un nombre para el modelo basado en el origen y nombre original.

```js
const {generateModelName} = require('leemons-utils');

const nombreModelo = generateModelName('plugins.usuarios', 'roles');

console.log(nombreModelo); // > plugins_users::roles
```

## parseFilters

Transforma los [filtros](../leemons-database/#filtros) en un JSON útil para la función [buildQuery](#buildquery).

Los filtros y los filtros por defecto son JSONs para [filtrar](../leemons-database/#filtros) la consulta.

```js
const {parseFilters} = require('leemons-utils');

const filtros = {
 $or: [
   { nombre_$contains: 'John' },
   { nombre_$contains: 'Jane' }
 ]
};

const filtrosDefecto = {
 $limit: 5
};

const consulta = parseFilters({ filters, defaults, model });
```

## buildQuery

Llama al constructor de consultas del modelo que estemos utilizando.

buildQuery require los siguientes parametros:

* El modelo que quieres consultar.
* Los [filtros](../leemons-database/#filtros) que quieres usar en tu [consulta](../leemons-database/#consultas).
* Otros parámetros que requiera tu [conector](../leemons-database/#conectores)

```js
const {buildQuery} = require('leemons-utils');

const filtros = parseFilters({ ... }, { ... }, modelo);
// Los filtros finales para usar en tus consultas
const query = buildQuery(modelo, filtros, ...rest);
```

## readdirRecursiveSync

Lee un directorio y todas sus subcarpetas, al final devuelve un JSON con la estructura del directorio:

```js
const {readdirRecursiveSync} = require('leemons-utils');
readdirRecursiveSync('plugins');
```

::: details Esta llamada produce un output como el siguiente JSON:

```json
 {
 "name": "plugins",
 "type": "directory",
 "path": "",
 "content": [
   {
     "name": "user-admin",
     "type": "directory",
     "path": "user-admin",
     "content": [
       {
         "name": "config",
         "type": "directory",
         "path": "user-admin/config",
         "content": [
           {
             "name": "config.js",
             "path": "user-admin/config/config.js",
             "type": "file"
           }
         ]
       },
       {
         "name": "controllers",
         "type": "directory",
         "path": "user-admin/controllers",
         "content": [
           {
             "name": "posts.js",
             "path": "user-admin/controllers/posts.js",
             "type": "file"
           },
           {
             "name": "routes.js",
             "path": "user-admin/controllers/routes.js",
             "type": "file"
           },
           {
             "name": "users.js",
             "path": "user-admin/controllers/users.js",
             "type": "file"
           }
         ]
       },
       {
         "name": "models",
         "type": "directory",
         "path": "user-admin/models",
         "content": [
           {
             "name": "posts.js",
             "path": "user-admin/models/posts.js",
             "type": "file"
           },
           {
             "name": "users.js",
             "path": "user-admin/models/users.js",
             "type": "file"
           }
         ]
       },
       {
         "name": "next",
         "type": "directory",
         "path": "user-admin/next",
         "content": [
           {
             "name": "pages",
             "type": "directory",
             "path": "user-admin/next/pages",
             "content": [
               {
                 "name": "login.js",
                 "path": "user-admin/next/pages/login.js",
                 "type": "file"
               },
               {
                 "name": "register.js",
                 "path": "user-admin/next/pages/register.js",
                 "type": "file"
               }
             ]
           }
         ]
       }
     ]
   }
 ]
}
```

:::

También puedes generar la integridad de un directorio con el algoritmo checksums de la siguiente forma:

```js
const {readdirRecursiveSync} = require('leemons-utils');
readdirRecursiveSync('plugins', {checksums: true});
```

::: details Esta llamada produce un output como el siguiente JSON:

```json
{
 "name": "plugins",
 "type": "directory",
 "path": "",
 "content": [
   {
     "name": "user-admin",
     "type": "directory",
     "path": "user-admin",
     "content": [
       {
         "name": "config",
         "type": "directory",
         "path": "user-admin/config",
         "content": [
           {
             "name": "config.js",
             "path": "user-admin/config/config.js",
             "type": "file",
             "checksum": "af2d854eb189e9f51836ae1a12c260b4"
           }
         ],
         "checksum": "4760ab8606783caef4c3e58d936097dd"
       },
       {
         "name": "controllers",
         "type": "directory",
         "path": "user-admin/controllers",
         "content": [
           {
             "name": "posts.js",
             "path": "user-admin/controllers/posts.js",
             "type": "file",
             "checksum": "d7d3c1fa7f1c9c0fec246ae96cc58381"
           },
           {
             "name": "routes.js",
             "path": "user-admin/controllers/routes.js",
             "type": "file",
             "checksum": "cb66af956dfcd169d4aaca4225ccf4be"
           },
           {
             "name": "users.js",
             "path": "user-admin/controllers/users.js",
             "type": "file",
             "checksum": "3d82dfff5f688648aa2a86433b87489d"
           }
         ],
         "checksum": "e2149e209f845c0c97a26a2314390c38"
       },
       {
         "name": "models",
         "type": "directory",
         "path": "user-admin/models",
         "content": [
           {
             "name": "posts.js",
             "path": "user-admin/models/posts.js",
             "type": "file",
             "checksum": "388d3df6e2d65280ba24f2172acb46f4"
           },
           {
             "name": "users.js",
             "path": "user-admin/models/users.js",
             "type": "file",
             "checksum": "b6878d605208324f2ad9e09a836b36e5"
           }
         ],
         "checksum": "bc802a1b666fca93d2f0a896e3581b76"
       },
       {
         "name": "next",
         "type": "directory",
         "path": "user-admin/next",
         "content": [
           {
             "name": "pages",
             "type": "directory",
             "path": "user-admin/next/pages",
             "content": [
               {
                 "name": "login.js",
                 "path": "user-admin/next/pages/login.js",
                 "type": "file",
                 "checksum": "c67ce04cbef16144dc5414ca60f086fb"
               },
               {
                 "name": "register.js",
                 "path": "user-admin/next/pages/register.js",
                 "type": "file",
                 "checksum": "ebcd2ebd8792719b02cc75a90de6fd59"
               }
             ],
             "checksum": "7b61e9b346c733147261fde09f987849"
           }
         ],
         "checksum": "4183d53dcbcea6219f46f78583d69f3c"
       }
     ],
     "checksum": "144424ced9d8f36104427384974bee52"
   }
 ],
 "checksum": "f78ad87301ce507b255e8fb98c3ab7ca"
}
```

:::

Si quieres ignorar un archivo o capeta, necesitas llamar a la función con el parámetros ignore:

```js
const {readdirRecursiveSync} = require('leemons-utils');
readdirRecursiveSync('plugins', {ignore: ['config', 'next', 'models', 'posts.js']});
```

::: details Esta llamada produce un output como el siguiente JSON:

```json
{
 "name": "plugins",
 "type": "directory",
 "path": "",
 "content": [
   {
     "name": "user-admin",
     "type": "directory",
     "path": "user-admin",
     "content": [
       {
         "name": "controllers",
         "type": "directory",
         "path": "user-admin/controllers",
         "content": [
           {
             "name": "routes.js",
             "path": "user-admin/controllers/routes.js",
             "type": "file"
           },
           {
             "name": "users.js",
             "path": "user-admin/controllers/users.js",
             "type": "file"
           }
         ]
       }
     ]
   }
 ]
}
```

:::

Finalmente, puedes obtener el output con todo JSONs en lugar de Arrays.

```js
const {readdirRecursiveSync} = require('leemons-utils');
readdirRecursiveSync('plugins', {json: true});
```

::: details Esta llamada produce un output como el siguiente JSON:

```json
{
 "name": "plugins",
 "type": "directory",
 "path": "",
 "content": {
   "user-admin": {
     "name": "user-admin",
     "type": "directory",
     "path": "user-admin",
     "content": {
       "config": {
         "name": "config",
         "type": "directory",
         "path": "user-admin/config",
         "content": {
           "config.js": {
             "name": "config.js",
             "path": "user-admin/config/config.js",
             "type": "file"
           }
         }
       },
       "controllers": {
         "name": "controllers",
         "type": "directory",
         "path": "user-admin/controllers",
         "content": {
           "posts.js": {
             "name": "posts.js",
             "path": "user-admin/controllers/posts.js",
             "type": "file"
           },
           "routes.js": {
             "name": "routes.js",
             "path": "user-admin/controllers/routes.js",
             "type": "file"
           },
           "users.js": {
             "name": "users.js",
             "path": "user-admin/controllers/users.js",
             "type": "file"
           }
         }
       },
       "models": {
         "name": "models",
         "type": "directory",
         "path": "user-admin/models",
         "content": {
           "posts.js": {
             "name": "posts.js",
             "path": "user-admin/models/posts.js",
             "type": "file"
           },
           "users.js": {
             "name": "users.js",
             "path": "user-admin/models/users.js",
             "type": "file"
           }
         }
       },
       "next": {
         "name": "next",
         "type": "directory",
         "path": "user-admin/next",
         "content": {
           "pages": {
             "name": "pages",
             "type": "directory",
             "path": "user-admin/next/pages",
             "content": {
               "login.js": {
                 "name": "login.js",
                 "path": "user-admin/next/pages/login.js",
                 "type": "file"
               },
               "register.js": {
                 "name": "register.js",
                 "path": "user-admin/next/pages/register.js",
                 "type": "file"
               }
             }
           }
         }
       }
     }
   }
 }
}
```

:::

## getStackTrace

Si necesitas acceder a la pila de llamadas de la función actual, con esta función puedes.

Tras su ejecución, te provee de las últimas 10 llamadas, si indicas el índice de la llamada deseada, tan solo devolverá la llamada indicada.

```js
const {getStackTrace} = require('leemons-utils');

console.log(getStackTrace());
// > [
//     {
//       "fileName": "/leemons/packages/leemons-utils/lib/getStackTrace.js",
//       "lineNumber": 13,
//       "columnNumber": 15,
//       "functionName": "getStackTrace"
//     },
//     {
//       "fileName": "/leemons/packages/leemons/lib/leemons.js",
//       "lineNumber": 154,
//       "columnNumber": 32,
//       "functionName": "load"
//     },
//     {
//       "fileName": "internal/process/task_queues.js",
//       "lineNumber": 93,
//       "columnNumber": 5,
//       "functionName": "processTicksAndRejections"
//     },
//     {
//       "fileName": "/leemons/packages/leemons/lib/leemons.js",
//       "lineNumber": 182,
//       "columnNumber": 5,
//       "functionName": "start"
//     }
//   ]
```

O solamente la llamada que necesitamos:

```js
const {getStackTrace} = require('leemons-utils');

console.log(getStackTrace(3));

// > {
//     "fileName": "/leemons/packages/leemons/lib/leemons.js",
//     "lineNumber": 182,
//     "columnNumber": 5,
//     "functionName": "start"
//   }
```

::: warning NOTA
Este método se utiliza para exponer información sólo a ciertas llamadas.
:::
