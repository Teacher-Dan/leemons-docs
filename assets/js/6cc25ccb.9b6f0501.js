"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[948],{6803:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={sidebar_position:1},s="Development stack",p={unversionedId:"develop/index",id:"develop/index",title:"Development stack",description:"Leemons is developed in a modular way, composed of Plugins, so our technology stack is divided into 4 big layers:",source:"@site/docs/develop/index.mdx",sourceDirName:"develop",slug:"/develop/",permalink:"/develop/",draft:!1,editUrl:"https://github.com/leemonade/leemons-docs/tree/main/docs/develop/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Student experience",permalink:"/student-experience"},next:{title:"Create plugins",permalink:"/develop/create-plugins"}},d={},m=[{value:"1. Presentation layer",id:"front-layer",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Static bundling &amp; serving",id:"static-bundling--serving",level:3},{value:"2. Application Layer &amp; APIs",id:"app-layer",level:2},{value:"Core &amp; API Gateway",id:"core--api-gateway",level:3},{value:"Handling connections",id:"handling-connections",level:3},{value:"3. Data layer",id:"3-data-layer",level:2},{value:"Data access",id:"data-access",level:3},{value:"Data caching",id:"data-caching",level:3},{value:"4. Communication layer",id:"4-communication-layer",level:2},{value:"Layers diagram",id:"layers-diagram",level:2}],c={toc:m};function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development-stack"},"Development stack"),(0,o.kt)("p",null,"Leemons is developed in a modular way, composed of ",(0,o.kt)("a",{parentName:"p",href:"../category/plugins"},"Plugins"),", so our technology stack is divided into 4 big layers:"),(0,o.kt)("h2",{id:"front-layer"},"1. Presentation layer"),(0,o.kt)("p",null,"The presentation layer is executed using browser standards, HTML, Javascript and CSS."),(0,o.kt)("p",null,"The frameworks used to implement this are described below."),(0,o.kt)("h3",{id:"frontend"},"Frontend"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://reactjs.org/"},(0,o.kt)("strong",{parentName:"a"},"ReactJS")),". We use it as a Javascript development framework."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://emotion.sh/"},(0,o.kt)("strong",{parentName:"a"},"EmotionJS.")),". In Leemons we don't use CSS styles directly, but we use the JSS authoring system, which allows us to apply styles from Javascript.")),(0,o.kt)("h3",{id:"static-bundling--serving"},"Static bundling & serving"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://webpack.js.org"},(0,o.kt)("strong",{parentName:"a"},"Webpack")),". We use webpack as a tool for transpiling, packaging and optimising the final files generated for development and production. It also serves as a frontend development server.")),(0,o.kt)("h2",{id:"app-layer"},"2. Application Layer & APIs"),(0,o.kt)("p",null,"It is the layer for processing business logic with persistent data, as well as for orchestration between the different plugins that compose Leemons."),(0,o.kt)("p",null,"The technologies used in this layer are described below."),(0,o.kt)("h3",{id:"core--api-gateway"},"Core & API Gateway"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org"},(0,o.kt)("strong",{parentName:"a"},"NodeJS")),". Javascript execution environment, which allows us to develop all the layers of the application in the same language."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://koajs.com"},(0,o.kt)("strong",{parentName:"a"},"KoaJS")),". Web framework that allows us to develop the API gateway between plugins, making the most of asynchronous functions and improving error handling.")),(0,o.kt)("h3",{id:"handling-connections"},"Handling connections"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.haproxy.org"},(0,o.kt)("strong",{parentName:"a"},"Haproxy")),". Used in deployments, it is a reverse proxy that allows us to map the different ports used by Leemons."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://letsencrypt.org"},(0,o.kt)("strong",{parentName:"a"},"LetsEncrypt")),". Used in deployments, it is a free SSL certificate generation service.")),(0,o.kt)("h2",{id:"3-data-layer"},"3. Data layer"),(0,o.kt)("p",null,"Due to the modularity of Leemons, we understand that different plugins may have different needs for persisting data."),(0,o.kt)("p",null,"This layer has the flexibility of connectivity to different database engines."),(0,o.kt)("h3",{id:"data-access"},"Data access"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://knexjs.org"},(0,o.kt)("strong",{parentName:"a"},"KnexJS")),". It allows us to map models, from relational SQL databases, to schemas to work with, thus supporting the most widely used databases: PostgreSQL, MySQL, and SQLite3."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bookshelfjs.org/"},(0,o.kt)("strong",{parentName:"a"},"BookshelfJS")),". It facilitates work on KnexJS, providing transaction support, relationship loading, polymorphic associations and support for ",(0,o.kt)("inlineCode",{parentName:"li"},"one-to-one"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"one-to-many")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"many-to-many")," relationships on relational databases."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://mongoosejs.com/"},(0,o.kt)("strong",{parentName:"a"},"Mongoose")),". It allows us to map NoSQL MongoDB database models to support this non-relational database.")),(0,o.kt)("h3",{id:"data-caching"},"Data caching"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redis.io"},(0,o.kt)("strong",{parentName:"a"},"Redis")),". High-performance in-memory data storage, which we use to cache endpoint responses.")),(0,o.kt)("h2",{id:"4-communication-layer"},"4. Communication layer"),(0,o.kt)("p",null,"To facilitate communication between plugins, Leemons not only provides communication between plugins via APIs, but also provides the possibility to connect via a message queue."),(0,o.kt)("p",null,"In addition, this gives us the possibility to implement plugins that interconnect users at different points in real time."),(0,o.kt)("p",null,"For this, we used the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://socket.io/"},(0,o.kt)("strong",{parentName:"a"},"SocketIO")),". It allows the establishment of a bidirectional channel between the server ",(0,o.kt)("a",{parentName:"li",href:"#app-layer"},"Application Layer")," and the client ",(0,o.kt)("a",{parentName:"li",href:"#app-layer"},"Application Layer")," or ",(0,o.kt)("a",{parentName:"li",href:"#front-layer"},"Presentation Layer")," with a WebSocket connection whenever possible, or alternatively HTTP long-polling.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"layers-diagram"},"Layers diagram"),(0,o.kt)("a",{href:"/leemons-layers-diagram.pdf",target:"_blank"},(0,o.kt)("img",{src:"/img/sys-diagram.png",alt:"Layers diagram"})))}u.isMDXComponent=!0}}]);