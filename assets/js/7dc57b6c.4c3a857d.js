"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[813],{560:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return r},default:function(){return p},frontMatter:function(){return o},metadata:function(){return m},toc:function(){return u}});var n=t(7462),s=t(3366),l=(t(7294),t(3905)),i=["components"],o={sidebar_label:"dataset"},r="Dataset plugin",m={unversionedId:"develop/plugins/dataset",id:"develop/plugins/dataset",title:"Dataset plugin",description:"Datasets give you all the tools to easily extend your plugin schemas and forms.",source:"@site/docs/develop/plugins/dataset.mdx",sourceDirName:"develop/plugins",slug:"/develop/plugins/dataset",permalink:"/leemons-docs/develop/plugins/dataset",draft:!1,editUrl:"https://github.com/leemonade/leemons-docs/tree/main/docs/develop/plugins/dataset.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"dataset"},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/leemons-docs/category/plugins"},next:{title:"library",permalink:"/leemons-docs/develop/plugins/library"}},c={},u=[{value:"Locations",id:"locations",level:2},{value:"Add location",id:"add-location",level:3},{value:"Update location",id:"update-location",level:3},{value:"Delete location",id:"delete-location",level:3},{value:"Location exists",id:"location-exists",level:3},{value:"Retrieve location",id:"retrieve-location",level:3},{value:"Schemas",id:"schemas",level:2},{value:"Adding a schema",id:"adding-a-schema",level:3},{value:"Update schema",id:"update-schema",level:3},{value:"Delete schema",id:"delete-schema",level:3},{value:"Schema exists",id:"schema-exists",level:3},{value:"Retrieve schema",id:"retrieve-schema",level:3},{value:"Retrieve schema compiled to a language",id:"retrieve-schema-compiled-to-a-language",level:3},{value:"Add schema translation",id:"add-schema-translation",level:3},{value:"Update schema translation",id:"update-schema-translation",level:3},{value:"Delete schema translation",id:"delete-schema-translation",level:3},{value:"Schema translation exists",id:"schema-translation-exists",level:3},{value:"Retrieve schema translations",id:"retrieve-schema-translations",level:3},{value:"Utilities",id:"utilities",level:2},{value:"Transform final schema into schema and translation",id:"transform-final-schema-into-schema-and-translation",level:3},{value:"Transform final schema ui into ui and translation",id:"transform-final-schema-ui-into-ui-and-translation",level:3},{value:"Values",id:"values",level:2},{value:"Add values",id:"add-values",level:3},{value:"Update values",id:"update-values",level:3},{value:"Delete values",id:"delete-values",level:3},{value:"Values exist",id:"values-exist",level:3},{value:"Retrieve values",id:"retrieve-values",level:3}],d={toc:u};function p(e){var a=e.components,t=(0,s.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"dataset-plugin"},"Dataset plugin"),(0,l.kt)("p",null,"Datasets give you all the tools to easily extend your plugin schemas and forms."),(0,l.kt)("h2",{id:"locations"},"Locations"),(0,l.kt)("p",null,"A location is a reference to the place in the plugin frontend where a dataset will be placed."),(0,l.kt)("h3",{id:"add-location"},"Add location"),(0,l.kt)("p",null,"Add a new location for a dataset and give it a ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"description")," so that the admin can know that it is located in the frontend."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const name = {\n  es: 'Datos adicionales del sal\xf3n de clase',\n  en: 'Additional classroom data',\n};\n\nconst description = {\n  es: 'El profesor debe indicar datos de personalizaci\xf3n del sal\xf3n.',\n  en: 'The teacher must provide custom data for the classroom.',\n};\n\nconst locationName = 'register-classroom-data';\nconst pluginName = 'plugins.classrooms';\n\nawait leemons.getPlugin('dataset').services.dataset.addLocation({\n  name,\n  description,\n  locationName,\n  pluginName,\n});\n\n/**\n * @return { name, description, locationName, pluginName }\n * */\n")),(0,l.kt)("h3",{id:"update-location"},"Update location"),(0,l.kt)("p",null,"Update location name and description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('dataset').services.dataset.updateLocation({\n  name,\n  description,\n  locationName,\n  pluginName,\n});\n\n/**\n * @return { name, description, locationName, pluginName }\n * */\n")),(0,l.kt)("h3",{id:"delete-location"},"Delete location"),(0,l.kt)("p",null,"Deletes everything related to the location except the stored data."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('dataset').services.dataset.deleteLocation(locationName, pluginName);\n\n/**\n * @return boolean\n * */\n")),(0,l.kt)("h3",{id:"location-exists"},"Location exists"),(0,l.kt)("p",null,"Check if the location exists"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('dataset').services.dataset.existLocation(locationName, pluginName);\n\n/**\n * @return boolean\n * */\n")),(0,l.kt)("h3",{id:"retrieve-location"},"Retrieve location"),(0,l.kt)("p",null,"If the location exists, the location is returned with its name and description."),(0,l.kt)("p",null,"If you specify the language to be returned, the name and description will arrive already translated into the requested language if exists."),(0,l.kt)("p",null,"If the language is not specified it will return the name and description as objects with all available languages."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locale = 'en';\n\nawait leemons\n  .getPlugin('dataset')\n  .services.dataset.getLocation(locationName, pluginName, { locale });\n\n/**\n * @return {\n *      name: 'Additional classroom data',\n *      description: 'The teacher must provide custom data for the classroom.',\n *      locationName: 'register-classroom-data',\n *      pluginName: 'plugins.classrooms'\n * }\n * */\n")),(0,l.kt)("h2",{id:"schemas"},"Schemas"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/rjsf-team/react-jsonschema-form"},"react-jsonschema-form")),(0,l.kt)("p",null,"The schemas are composed of two configuration objects:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"jsonSchema: where you define which fields the form will have and what conditions each field must fulfil to be valid."),(0,l.kt)("li",{parentName:"ul"},"jsonUI: how it has to be shown in the frontend (appearance).")),(0,l.kt)("p",null,"See some examples in ",(0,l.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form"},"react-jsonschema-form")),(0,l.kt)("h3",{id:"adding-a-schema"},"Adding a schema"),(0,l.kt)("p",null,"To add a schema you must first understand that the schema must support multiple languages, so you must have separate ",(0,l.kt)("inlineCode",{parentName:"p"},"schemas")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"texts")," that can be translated into different objects, as the schema must always be the same regardless of the language, but the texts vary according to the language."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Let's add a basic schema/ui")),(0,l.kt)("p",null,"For better understanding, let's assume we want to add these ",(0,l.kt)("inlineCode",{parentName:"p"},"schema")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"ui")," in multiples languages."),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show wrong schemas (English hardcoded)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const jsonSchema = {\n  title: 'A registration form',\n  description: 'A simple form example.',\n  type: 'object',\n  required: ['firstName', 'lastName'],\n  properties: {\n    firstName: {\n      type: 'string',\n      title: 'First name',\n      default: 'Chuck',\n    },\n    lastName: {\n      type: 'string',\n      title: 'Last name',\n    },\n    age: {\n      type: 'number',\n    },\n    telephone: {\n      type: 'string',\n      title: 'Telephone',\n      minLength: 10,\n    },\n  },\n};\n\nconst jsonUI = {\n  firstName: {\n    'ui:autofocus': true,\n    'ui:emptyValue': '',\n    'ui:autocomplete': 'family-name',\n  },\n  lastName: {\n    'ui:emptyValue': '',\n    'ui:autocomplete': 'given-name',\n  },\n  age: {\n    'ui:widget': 'updown',\n    'ui:title': 'Age of person',\n    'ui:description': '(earthian year)',\n  },\n  telephone: {\n    'ui:options': {\n      inputType: 'tel',\n    },\n  },\n};\n"))),(0,l.kt)("p",null,"Note that if we do so, we will no longer be able to display data entry forms in multiple languages."),(0,l.kt)("p",null,"What we need to do is to create the ",(0,l.kt)("inlineCode",{parentName:"p"},"schemas"),' using translation "keys", and then add the translations in the languages we need.'),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Show good schemas (Translation keys)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const jsonSchema = {\n  title: '{{it.title}}',\n  description: '{{it.description}}',\n  type: 'object',\n  required: ['firstName', 'lastName'],\n  properties: {\n    firstName: {\n      type: 'string',\n      title: '{{it.properties.firstName.title}}',\n      default: '{{it.properties.firstName.default}}',\n    },\n    lastName: { type: 'string', title: '{{it.properties.lastName.title}}' },\n    age: { type: 'number' },\n    telephone: {\n      type: 'string',\n      title: '{{it.properties.telephone.title}}',\n      minLength: 10,\n    },\n  },\n};\n\nconst jsonUI = {\n  firstName: {\n    'ui:autofocus': true,\n    'ui:emptyValue': '',\n    'ui:autocomplete': 'family-name',\n  },\n  lastName: { 'ui:emptyValue': '', 'ui:autocomplete': 'given-name' },\n  age: {\n    'ui:widget': 'updown',\n    'ui:title': '{{it.age.ui_title}}',\n    'ui:description': '{{it.age.ui_description}}',\n  },\n  telephone: { 'ui:options': { inputType: 'tel' } },\n};\n"))),(0,l.kt)("p",null,"Finally, add the ",(0,l.kt)("inlineCode",{parentName:"p"},"schemas")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"translations")," to the location."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locationName = 'register-classroom-data';\nconst pluginName = 'plugins.classrooms';\n\n// Add the Schemas\nawait leemons.getPlugin('dataset').services.dataset.addSchema({\n  jsonSchema,\n  jsonUI,\n  locationName,\n  pluginName,\n});\n\n// Add the translations\nconst schemaTranslation = {\n  title: 'A registration form',\n  description: 'A simple form example.',\n  properties: {\n    firstName: { title: 'First name', default: 'Chuck' },\n    lastName: { title: 'Last name' },\n    telephone: { title: 'Telephone' },\n  },\n};\n\nconst uiTranslation = {\n  age: { ui_title: 'Age of person', ui_description: '(earthian year)' },\n  password: { ui_help: 'Hint: Make it strong!' },\n};\nconst locale = 'en';\n\nawait leemons.getPlugin('dataset').services.dataset.addSchemaLocale({\n  locationName,\n  pluginName,\n  schemaTranslation,\n  uiTranslation,\n  locale,\n});\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOTE")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"We use ",(0,l.kt)("a",{parentName:"p",href:"https://squirrelly.js.org/"},"squirrelly.js")," to compile the schema with translations. Check out its documentation for more information."))),(0,l.kt)("h3",{id:"update-schema"},"Update schema"),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},".addSchema"),". Throw an error if no schema is found."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('dataset').services.dataset.updateSchema({\n  jsonSchema,\n  jsonUI,\n  locationName,\n  pluginName,\n});\n\n/**\n * @return {jsonSchema, jsonUI, locationName, pluginName}\n * */\n")),(0,l.kt)("h3",{id:"delete-schema"},"Delete schema"),(0,l.kt)("p",null,"Delete all schemas and translations for a given location."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('dataset').services.dataset.deleteSchema(locationName, pluginName);\n\n/**\n * @return boolean\n * */\n")),(0,l.kt)("h3",{id:"schema-exists"},"Schema exists"),(0,l.kt)("p",null,"Check if the schema exists for a given location."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('dataset').services.dataset.existSchema(locationName, pluginName);\n\n/**\n * @return boolean\n * */\n")),(0,l.kt)("h3",{id:"retrieve-schema"},"Retrieve schema"),(0,l.kt)("p",null,"Returns the schema if it exists"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('dataset').services.dataset.getSchema(locationName, pluginName);\n\n/**\n * @return {jsonSchema, jsonUI, locationName, pluginName}\n * */\n")),(0,l.kt)("h3",{id:"retrieve-schema-compiled-to-a-language"},"Retrieve schema compiled to a language"),(0,l.kt)("p",null,"If the schema and the translation exist, compile the schema and return it."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locale = 'en';\n\nawait leemons\n  .getPlugin('dataset')\n  .services.dataset.getSchemaWithLocale(locationName, pluginName, locale);\n\n/**\n * @return {\n *      jsonSchema,\n *      jsonUI,\n *      locationName,\n *      pluginName,\n *      schemaData,\n *      uiData,\n *      compileJsonSchema,\n *      compileJsonUI\n * }\n * */\n")),(0,l.kt)("h3",{id:"add-schema-translation"},"Add schema translation"),(0,l.kt)("p",null,"Add schema data for a particular language"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locale = 'en';\n\nawait leemons.getPlugin('dataset').services.dataset.addSchemaLocale({\n  locationName,\n  pluginName,\n  schemaData,\n  uiData,\n  locale,\n});\n\n/**\n * @return {locationName, pluginName, schemaData, uiData, locale}\n * */\n")),(0,l.kt)("h3",{id:"update-schema-translation"},"Update schema translation"),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},".addSchemaLocale "),". Throw an error if no translation is found."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locale = 'en';\n\nawait leemons.getPlugin('dataset').services.dataset.updateSchemaLocale({\n  locationName,\n  pluginName,\n  schemaData,\n  uiData,\n  locale,\n});\n\n/**\n * @return {locationName, pluginName, schemaData, uiData, locale}\n * */\n")),(0,l.kt)("h3",{id:"delete-schema-translation"},"Delete schema translation"),(0,l.kt)("p",null,"Delete a translation for a schema"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locale = 'en';\n\nawait leemons\n  .getPlugin('dataset')\n  .services.dataset.deleteSchemaLocale({ locationName, pluginName, locale });\n\n/**\n * @return boolean\n * */\n")),(0,l.kt)("h3",{id:"schema-translation-exists"},"Schema translation exists"),(0,l.kt)("p",null,"Check if the schema translation exists."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locale = 'en';\n\nawait leemons\n  .getPlugin('dataset')\n  .services.dataset.existSchemaLocale(locationName, pluginName, locale);\n\n/**\n * @return boolean\n * */\n")),(0,l.kt)("h3",{id:"retrieve-schema-translations"},"Retrieve schema translations"),(0,l.kt)("p",null,"Return translations of the schema if it exists in the requested language."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const locale = 'en';\n\nawait leemons\n  .getPlugin('dataset')\n  .services.dataset.getSchemaLocale(locationName, pluginName, locale);\n\n/**\n * @return {locationName, pluginName, schemaData, uiData, locale}\n * */\n")),(0,l.kt)("h2",{id:"utilities"},"Utilities"),(0,l.kt)("h3",{id:"transform-final-schema-into-schema-and-translation"},"Transform final schema into schema and translation"),(0,l.kt)("p",null,"It is passed a schema from ",(0,l.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form"},"react-jsonschema-form")," and returns two objects, one the schema to be compiled with ",(0,l.kt)("a",{parentName:"p",href:"https://squirrelly.js.org/"},"squirrelly.js")," and another with the texts to be stored as translation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('dataset').services.dataset.transformJsonSchema(jsonSchema);\n\n/**\n * @return {\n    values, // Values to be stored as translation\n    json, // Schema in [squirrelly.js] format\n  }\n * */\n")),(0,l.kt)("h3",{id:"transform-final-schema-ui-into-ui-and-translation"},"Transform final schema ui into ui and translation"),(0,l.kt)("p",null,"Pass a ui from ",(0,l.kt)("a",{parentName:"p",href:"https://rjsf-team.github.io/react-jsonschema-form"},"react-jsonschema-form")," and return two objects one the ui to compile with ",(0,l.kt)("a",{parentName:"p",href:"https://squirrelly.js.org/"},"squirrelly.js")," and another with the texts to store them as translation."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('dataset').services.dataset.transformUiSchema(jsonSchema);\n\n/**\n * @return {\n    values, // Values to be stored as translation\n    json, // Schema in [squirrelly.js] format\n  }\n * */\n")),(0,l.kt)("h2",{id:"values"},"Values"),(0,l.kt)("h3",{id:"add-values"},"Add values"),(0,l.kt)("p",null,"Stores the values of a dataset form, validating them to schema conditions."),(0,l.kt)("p",null,"Optionally these values can be linked to whatever you want."),(0,l.kt)("p",null,"For example, we are going to store extra data for a user and we want to link that data to that user to retrieve it later. For that we use the optional ",(0,l.kt)("inlineCode",{parentName:"p"},"target")," parameter where we specify (in this case) the user id."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const target = 'user-id';\nconst formData = {\n  firstName: 'Chuck',\n  lastName: 'Norris',\n  telephone: '1234567890',\n};\n\nawait leemons.getPlugin('dataset').services.dataset.addValues(\n  locationName,\n  pluginName,\n  formData,\n  { target } // Optional\n);\n\n/**\n * @return formData\n * */\n")),(0,l.kt)("h3",{id:"update-values"},"Update values"),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},".addValues"),". Throw an error if no values is found."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const target = 'user-id';\nconst formData = {\n  firstName: 'Chuck',\n  lastName: 'Norris',\n  telephone: '0000',\n};\n\nawait leemons.getPlugin('dataset').services.dataset.updateValues(\n  locationName,\n  pluginName,\n  formData,\n  { target } // Optional\n);\n\n/**\n * @return formData\n * */\n")),(0,l.kt)("h3",{id:"delete-values"},"Delete values"),(0,l.kt)("p",null,"Deletes all values if they match the criteria."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const target = 'user-id';\n\nawait leemons.getPlugin('dataset').services.dataset.deleteValues(\n  locationName,\n  pluginName,\n  { target } // Optional\n);\n\n/**\n * @return boolean\n * */\n")),(0,l.kt)("h3",{id:"values-exist"},"Values exist"),(0,l.kt)("p",null,"Check if values exist."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const target = 'user-id';\n\nawait leemons.getPlugin('dataset').services.dataset.existValues(\n  locationName,\n  pluginName,\n  { target } // Optional\n);\n\n/**\n * @return boolean\n * */\n")),(0,l.kt)("h3",{id:"retrieve-values"},"Retrieve values"),(0,l.kt)("p",null,"When retrieving stored values you can decide whether to retrieve only some of the keys or all of them."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const keys = ['name', 'surname'];\n\nawait leemons.getPlugin('dataset').services.dataset.getValues(locationName, pluginName, {\n  target, // Optional\n  keys, // Optional\n});\n\n/**\n * @return {name: 'string', surname: 'string'}\n * */\n")))}p.isMDXComponent=!0}}]);