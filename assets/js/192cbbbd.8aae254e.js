"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[615],{2334:function(e,a,n){n.r(a),n.d(a,{assets:function(){return o},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return r},metadata:function(){return g},toc:function(){return p}});var t=n(7462),l=n(3366),s=(n(7294),n(3905)),i=["components"],r={sidebar_label:"multilanguage"},u="Multilanguage plugin",g={unversionedId:"develop/plugins/multilanguage",id:"develop/plugins/multilanguage",title:"Multilanguage plugin",description:"Languages",source:"@site/docs/develop/plugins/multilanguage.mdx",sourceDirName:"develop/plugins",slug:"/develop/plugins/multilanguage",permalink:"/develop/plugins/multilanguage",draft:!1,editUrl:"https://github.com/leemonade/leemons-docs/tree/main/docs/develop/plugins/multilanguage.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"multilanguage"},sidebar:"tutorialSidebar",previous:{title:"dataset",permalink:"/develop/plugins/dataset"},next:{title:"Bubbles Design System",permalink:"/category/bubbles-design-system"}},o={},p=[{value:"Languages",id:"languages",level:2},{value:"Add language",id:"add-language",level:3},{value:"Add many languages",id:"add-many-languages",level:3},{value:"Edit language name",id:"edit-language-name",level:3},{value:"Remove language",id:"remove-language",level:3},{value:"Language exists",id:"language-exists",level:3},{value:"Multiple languages exist",id:"multiple-languages-exist",level:3},{value:"Retrieve language",id:"retrieve-language",level:3},{value:"Retrieve multiple languages",id:"retrieve-multiple-languages",level:3},{value:"Translations",id:"translations",level:2},{value:"Add translation",id:"add-translation",level:3},{value:"Add multiples translations to the same key",id:"add-multiples-translations-to-the-same-key",level:3},{value:"Add in bulk",id:"add-in-bulk",level:3},{value:"Edit translation",id:"edit-translation",level:3},{value:"Edit multiple translations for the same key",id:"edit-multiple-translations-for-the-same-key",level:3},{value:"Edit in bulk",id:"edit-in-bulk",level:3},{value:"Remove translation for a language",id:"remove-translation-for-a-language",level:3},{value:"Remove translation for all languages",id:"remove-translation-for-all-languages",level:3},{value:"Remove translation for all languages where its key begins with a prefix",id:"remove-translation-for-all-languages-where-its-key-begins-with-a-prefix",level:3},{value:"Translation exists",id:"translation-exists",level:3},{value:"Translation count",id:"translation-count",level:3},{value:"Count translations by prefix and language",id:"count-translations-by-prefix-and-language",level:3},{value:"Retrieve translation",id:"retrieve-translation",level:3},{value:"Retrieve translations by key",id:"retrieve-translations-by-key",level:3},{value:"Retrieve value from translation",id:"retrieve-value-from-translation",level:3},{value:"Retrieve values from translations per key",id:"retrieve-values-from-translations-per-key",level:3},{value:"Retrieve translations by language",id:"retrieve-translations-by-language",level:3},{value:"Retrieve translations by key prefix",id:"retrieve-translations-by-key-prefix",level:3}],m={toc:p};function d(e){var a=e.components,n=(0,l.Z)(e,i);return(0,s.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"multilanguage-plugin"},"Multilanguage plugin"),(0,s.kt)("h2",{id:"languages"},"Languages"),(0,s.kt)("p",null,"English and Spanish are pre-installed by default."),(0,s.kt)("h3",{id:"add-language"},"Add language"),(0,s.kt)("p",null,"Returns the added language"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.locales.getProvider()\n  .add('es-ES', 'Espa\xf1ol (Espa\xf1a)');\n\n/**\n * @return [{code: 'es-ES', name: 'Espa\xf1ol (Espa\xf1a)'}]\n * */\n")),(0,s.kt)("h3",{id:"add-many-languages"},"Add many languages"),(0,s.kt)("p",null,"Returns the array of languages we are adding"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.locales.getProvider()\n  .addMany([['es-ES', 'Espa\xf1ol (Espa\xf1a)']]);\n\n/**\n * @return [{code: 'es-ES', name: 'Espa\xf1ol (Espa\xf1a)'}]\n * */\n")),(0,s.kt)("h3",{id:"edit-language-name"},"Edit language name"),(0,s.kt)("p",null,"Returns the modified language"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.locales.getProvider()\n  .setName('es-ES', 'Espa\xf1ol (Espa\xf1a) [es-ES]');\n\n/**\n * @return {code: 'es-ES', name: 'Espa\xf1ol (Espa\xf1a) [es-ES]'}\n * */\n")),(0,s.kt)("h3",{id:"remove-language"},"Remove language"),(0,s.kt)("p",null,"Returns ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if deleted, otherwise ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('multilanguage').services.locales.getProvider().delete('es-ES');\n\n/**\n * @return boolean\n * */\n")),(0,s.kt)("h3",{id:"language-exists"},"Language exists"),(0,s.kt)("p",null,"Returns ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if exists, otherwise ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('multilanguage').services.locales.getProvider().has('es-ES');\n\n/**\n * @return boolean\n * */\n")),(0,s.kt)("h3",{id:"multiple-languages-exist"},"Multiple languages exist"),(0,s.kt)("p",null,"Returns for each language whether it exists or not"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('multilanguage').services.locales.getProvider().hasMany(['es-ES', 'en']);\n\n/**\n * @return { 'es-ES': true, 'en': false }\n * */\n")),(0,s.kt)("h3",{id:"retrieve-language"},"Retrieve language"),(0,s.kt)("p",null,"Returns the specified language if it exists, otherwise ",(0,s.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('multilanguage').services.locales.getProvider().get('es-ES');\n\n/**\n * @return {code: 'es-ES', name: 'Espa\xf1ol (Espa\xf1a)'}\n * */\n")),(0,s.kt)("h3",{id:"retrieve-multiple-languages"},"Retrieve multiple languages"),(0,s.kt)("p",null,"Return an array of the specified languages if they exist. If any do not exist, they will not be in the returned array."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('multilanguage').services.locales.getProvider().getMany(['es-ES', 'en']);\n\n/**\n * @return [\n *      {code: 'es-ES', name: 'Espa\xf1ol (Espa\xf1a)'},\n *      {code: 'en', name: 'English'}\n * ]\n * */\n")),(0,s.kt)("h2",{id:"translations"},"Translations"),(0,s.kt)("p",null,"There are two ways of storing data, ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"public"))," and ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"private")),"."),(0,s.kt)("p",null,"Everything is used the same, the only difference is that with ",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)("em",{parentName:"strong"},"private"))," only your plugin will be able to access what you have stored."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Private:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('multilanguage').services.contents.getProvider();\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Public:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('multilanguage').services.common.getProvider();\n")),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"ATTENTION")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"From now on the keys have to follow the following format:"),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"plugins.(name-of-your-plugin).(key-that-you-want-to-specify)")),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("strong",{parentName:"p"},"EXAMPLE")),(0,s.kt)("p",{parentName:"div"},'If your plugin package is "leemons-plugin-users" and you want to set the "settings" key, it would look like this:'),(0,s.kt)("p",{parentName:"div"},(0,s.kt)("inlineCode",{parentName:"p"},"plugins.users.settings")))),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"CAUTION")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"All values must be stored as a ",(0,s.kt)("em",{parentName:"p"},"string")," if passed as a value anything other than a ",(0,s.kt)("em",{parentName:"p"},"string")," will\nis not a ",(0,s.kt)("em",{parentName:"p"},"string")," will give an error."))),(0,s.kt)("h3",{id:"add-translation"},"Add translation"),(0,s.kt)("p",null,"Stores a text for your plugin for the specified language with the specified key"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const key = 'plugins.example.settings';\nconst locale = 'es-ES';\nconst value = 'configuraci\xf3n';\n\nawait leemons.getPlugin('multilanguage').services.contents.getProvider().add(key, locale, value);\n\n/**\n * @return {key, locale, value}\n * */\n")),(0,s.kt)("h3",{id:"add-multiples-translations-to-the-same-key"},"Add multiples translations to the same key"),(0,s.kt)("p",null,"Same as ",(0,s.kt)("inlineCode",{parentName:"p"},".add"),", but to store multiples translations to the same key in one call."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .addManyByKey('plugins.example.save', {\n    en: 'Save',\n    'es-ES': 'Guardar',\n    'es-MX': 'Salvar',\n  });\n\n/**\n * @return [\n *      {key: 'plugins.example.save', locale: 'en', value: 'Save'},\n *      {key: 'plugins.example.save', locale: 'es-ES', value: 'Guardar'},\n *      {key: 'plugins.example.save', locale: 'es-MX', value: 'Salvar'},\n * ]\n * */\n")),(0,s.kt)("h3",{id:"add-in-bulk"},"Add in bulk"),(0,s.kt)("p",null,"Add for many languages, many keys with their translations."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .addMany({\n    en: {\n      'plugins.example.save': 'Save',\n      'plugins.example.config': 'Settings',\n    },\n    'es-ES': {\n      'plugins.example.save': 'Guardar',\n      'plugins.example.config': 'Configuraci\xf3n',\n    },\n  });\n")),(0,s.kt)("h3",{id:"edit-translation"},"Edit translation"),(0,s.kt)("p",null,"Edits a translation by resetting its value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const key = 'plugins.example.settings';\nconst locale = 'es-ES';\nconst value = 'Configuraci\xf3n';\n\nawait leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .setValue(key, locale, value);\n\n/**\n * @return {key, locale, value}\n * */\n")),(0,s.kt)("h3",{id:"edit-multiple-translations-for-the-same-key"},"Edit multiple translations for the same key"),(0,s.kt)("p",null,"Same as ",(0,s.kt)("inlineCode",{parentName:"p"},".setValue"),", but to update multiple translations for the same key in one call."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .setKey('plugins.example.save', {\n    en: 'Save',\n    'es-ES': 'Guardar',\n    'es-MX': 'Salvar',\n  });\n\n/**\n * @return [\n *      {key: 'plugins.example.save', locale: 'en', value: 'Save'},\n *      {key: 'plugins.example.save', locale: 'es-ES', value: 'Guardar'},\n *      {key: 'plugins.example.save', locale: 'es-MX', value: 'Salvar'},\n * ]\n * */\n")),(0,s.kt)("h3",{id:"edit-in-bulk"},"Edit in bulk"),(0,s.kt)("p",null,"Edits for many languages many keys with their translations."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .setMany({\n    en: {\n      'plugins.example.save': 'save',\n      'plugins.example.config': 'configuration',\n    },\n    'es-ES': {\n      'plugins.example.save': 'guardar',\n      'plugins.example.config': 'configuraci\xf3n',\n    },\n  });\n")),(0,s.kt)("h3",{id:"remove-translation-for-a-language"},"Remove translation for a language"),(0,s.kt)("p",null,"Removes the translation of that key for that language."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .delete('plugins.example.save', 'es-ES');\n\n/**\n * @return boolean\n * */\n")),(0,s.kt)("h3",{id:"remove-translation-for-all-languages"},"Remove translation for all languages"),(0,s.kt)("p",null,"Removes all translations in all languages for the specified key."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .deleteAll({ key: 'plugins.example.save' });\n")),(0,s.kt)("h3",{id:"remove-translation-for-all-languages-where-its-key-begins-with-a-prefix"},"Remove translation for all languages where its key begins with a prefix"),(0,s.kt)("p",null,"Removes all translations, in all languages, for stored keys starting with the specified string."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .deleteKeyStartsWith('plugin.example');\n")),(0,s.kt)("h3",{id:"translation-exists"},"Translation exists"),(0,s.kt)("p",null,"Check if a translation exists for that key and language."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const key = 'plugins.example.save';\nconst locale = 'es-ES';\n\nawait leemons.getPlugin('multilanguage').services.contents.getProvider().has(key, locale);\n\n/**\n * @return boolean\n * */\n")),(0,s.kt)("h3",{id:"translation-count"},"Translation count"),(0,s.kt)("p",null,"Returns the number of translations that exist for the specified key."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const key = 'plugins.example.save';\nawait leemons.getPlugin('multilanguage').services.contents.getProvider().countLocalesWithKey(key);\n\n/**\n * @return number\n * */\n")),(0,s.kt)("h3",{id:"count-translations-by-prefix-and-language"},"Count translations by prefix and language"),(0,s.kt)("p",null,"Returns the number of translations that exist for that prefix in that language."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const key = 'plugins.example';\nconst locale = 'es-ES';\nawait leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .countKeyStartsWith(key, locale);\n\n/**\n * @return number\n * */\n")),(0,s.kt)("h3",{id:"retrieve-translation"},"Retrieve translation"),(0,s.kt)("p",null,"Returns the translation if it exists for the specified key and language."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const key = 'plugins.example.save';\nconst locale = 'es-ES';\n\nawait leemons.getPlugin('multilanguage').services.contents.getProvider().get(key, locale);\n\n/**\n * @return {key, locale, value: 'Guardar'}\n * */\n")),(0,s.kt)("h3",{id:"retrieve-translations-by-key"},"Retrieve translations by key"),(0,s.kt)("p",null,"Given a key, return all translations in all available languages."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .getWithKey('plugins.example.save');\n\n/**\n * @return [\n *      {key: 'plugins.example.save', locale: 'es-ES', value: 'Guardar'},\n *      {key: 'plugins.example.save', locale: 'en', value: 'Save'},\n *      {key: 'plugins.example.save', locale: 'es-MX', value: 'Salvar'}\n * ]\n * */\n")),(0,s.kt)("h3",{id:"retrieve-value-from-translation"},"Retrieve value from translation"),(0,s.kt)("p",null,"Same as ",(0,s.kt)("inlineCode",{parentName:"p"},".get"),", but already returns the value."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const key = 'plugins.example.save';\nconst locale = 'es-ES';\n\nawait leemons.getPlugin('multilanguage').services.contents.getProvider().getValue(key, locale);\n\n/**\n * @return string Guardar\n * */\n")),(0,s.kt)("h3",{id:"retrieve-values-from-translations-per-key"},"Retrieve values from translations per key"),(0,s.kt)("p",null,"Same as ",(0,s.kt)("inlineCode",{parentName:"p"},".getWithKey"),", but returns the value for each language."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .getLocaleValueWithKey('plugins.example.save');\n\n/**\n * @return { 'es-ES': 'Guardar', 'en': 'Save', 'es-MX': 'Salvar' }\n * */\n")),(0,s.kt)("h3",{id:"retrieve-translations-by-language"},"Retrieve translations by language"),(0,s.kt)("p",null,"Return all translations given a language."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .getKeyValueWithLocale('es-ES');\n\n/**\n * @return { 'plugins.example.save': 'Guardar', 'plugins.example.config': 'Configuraci\xf3n' }\n * */\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons.getPlugin('multilanguage').services.contents.getProvider().getWithLocale('es-ES');\n\n/**\n * @return [\n *      {key: 'plugins.example.save', locale: 'es-ES', value: 'Guardar'},\n *      {key: 'plugins.example.config', locale: 'es-ES', value: 'Configuraci\xf3n'}\n * ]\n * */\n")),(0,s.kt)("h3",{id:"retrieve-translations-by-key-prefix"},"Retrieve translations by key prefix"),(0,s.kt)("p",null,"Returns all translations where the key begins with the specified text for the specified language."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"await leemons\n  .getPlugin('multilanguage')\n  .services.contents.getProvider()\n  .getKeyStartsWith('plugins.example', 'es-ES');\n\n/**\n * @return [\n *      {key: 'plugins.example.save', locale: 'es-ES', value: 'Guardar'},\n *      {key: 'plugins.example.config', locale: 'es-ES', value: 'Configuraci\xf3n'}\n * ]\n * */\n")))}d.isMDXComponent=!0}}]);