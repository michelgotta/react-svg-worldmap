(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[488],{517:function(e,t,r){"use strict";var n=r(7378);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},4535:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(7378),a=r(4956);var o=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=r(8944),l="tabItem_c0e5",i="tabItemActive_28AG";var c=function(e){var t,r=e.lazy,a=e.block,c=e.defaultValue,p=e.values,s=e.groupId,f=e.className,m=n.Children.toArray(e.children),d=null!=p?p:m.map((function(e){return{value:e.props.value,label:e.props.label}})),v=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,x=o(),C=x.tabGroupChoices,D=x.setTabGroupChoices,g=(0,n.useState)(v),b=g[0],M=g[1],E=[];if(null!=s){var y=C[s];null!=y&&y!==b&&d.some((function(e){return e.value===y}))&&M(y)}var P=function(e){var t=e.currentTarget,r=E.indexOf(t),n=d[r].value;M(n),null!=s&&(D(s,n),setTimeout((function(){var e,r,n,a,o,u,l,c;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,o=e.right,u=window,l=u.innerHeight,c=u.innerWidth,r>=0&&o<=c&&a<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},L=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=E.indexOf(e.target)+1;r=E[n]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.target)-1;r=E[a]||E[E.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},f)},d.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,u.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:L,onFocus:P,onClick:P},null!=r?r:t)}))),r?(0,n.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},1503:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7378),a=r(5646),o=r.n(a),u=r(8922);function l(){return n.createElement(o(),{color:"red",tooltipBgColor:"blue",title:"Top 10 Populous Countries Large Map",borderColor:"blue",frameColor:"pink",valueSuffix:"people",size:"lg",data:u.B,frame:!0})}},3015:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7378),a=r(5646),o=r.n(a),u=r(8922);function l(){return n.createElement(o(),{color:"green",tooltipBgColor:"purple",title:"Top 10 GDP per Capita Medium Map",valuePrefix:"$",size:"md",data:u.t,frame:!0})}},5372:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7378),a=r(5646),o=r.n(a),u=r(8922);function l(){return n.createElement(o(),{color:"#39cac4",tooltipBgColor:"black",title:"Top 10 GDP per Capita Numerically Sized Map",valuePrefix:"$",size:100,data:u.t,frame:!0})}},6389:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7378),a=r(5646),o=r.n(a),u=r(8922);function l(){return n.createElement(o(),{color:"pink",tooltipBgColor:"black",title:"Top 10 GDP per Capita Responsive Map",valuePrefix:"$",size:"responsive",data:u.t,frame:!0})}},2549:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7378),a=r(5646),o=r.n(a),u=r(8922);function l(){return n.createElement(o(),{color:"red",tooltipBgColor:"blue",title:"Top 10 Populous Countries Small Map",valueSuffix:"people",size:"sm",data:u.B,frame:!0})}},6334:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7378),a=r(5646),o=r.n(a),u=r(8922);function l(){return n.createElement(o(),{color:"green",tooltipBgColor:"purple",title:"Top 10 GDP per Capita Extra Large Map",valuePrefix:"$",size:"xl",data:u.t,frame:!0})}},6164:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7378),a=r(5646),o=r.n(a),u=r(8922);function l(){return n.createElement(o(),{color:"yellow",tooltipBgColor:"black",title:"Top 10 GDP per Capita Extra Extra Large Map",valuePrefix:"$",size:"xxl",data:u.t,frame:!0})}},8922:function(e,t,r){"use strict";r.d(t,{B:function(){return n},t:function(){return a}});var n=[{country:"cn",value:1389618778},{country:"in",value:1311559204},{country:"us",value:331883986},{country:"id",value:264935824},{country:"br",value:210301591},{country:"ng",value:208679114},{country:"ru",value:141944641},{country:"mx",value:127318112}],a=[{country:"cn",value:9770.8},{country:"in",value:2010},{country:"us",value:62794.6},{country:"id",value:3893.6},{country:"br",value:8920.8},{country:"ng",value:2028.2},{country:"ru",value:11288.9},{country:"mx",value:9673.4}]},9206:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(7378),a=r(29),o=r(5644),u=r(4535),l=r(517),i=r(2496),c=["SM","MD","LG","XL","XXL","Responsive","Numeric"],p={},s={};function f(){return n.createElement(a.Z,{title:"Sizing examples"},n.createElement("div",{className:i.Z.main},n.createElement(u.Z,{values:c.map((function(e){return{label:e,value:e.toLowerCase()}})),defaultValue:"sm",className:i.Z.tabsContainer},c.map((function(e){var t=p[e];return n.createElement(l.Z,{value:e.toLowerCase(),key:e},n.createElement(t,null),n.createElement("div",{className:i.Z.code},n.createElement(o.Z,{className:"language-tsx"},s[e])))})))))}c.forEach((function(e){p[e]=r(1506)("./"+e).default,s[e]=r(1357)("./"+e).default}))},2597:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\nimport WorldMap from 'react-svg-worldmap';\nimport {populationData} from '../../data/CountryData';\n\nexport default function App(): JSX.Element {\n  return (\n    <WorldMap\n      color=\"red\"\n      tooltipBgColor={'blue'}\n      title=\"Top 10 Populous Countries Large Map\"\n      borderColor={'blue'}\n      frameColor={'pink'}\n      valueSuffix=\"people\"\n      size=\"lg\"\n      data={populationData}\n      frame={true}\n    />\n  );\n}\n"},7258:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\nimport WorldMap from 'react-svg-worldmap';\nimport {GDPData} from '../../data/CountryData';\n\nexport default function App(): JSX.Element {\n  return (\n    <WorldMap\n      color=\"green\"\n      tooltipBgColor={'purple'}\n      title=\"Top 10 GDP per Capita Medium Map\"\n      valuePrefix=\"$\"\n      size=\"md\"\n      data={GDPData}\n      frame={true}\n    />\n  );\n}\n"},2020:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\nimport WorldMap from 'react-svg-worldmap';\nimport {GDPData} from '../../data/CountryData';\n\nexport default function App(): JSX.Element {\n  return (\n    <WorldMap\n      color=\"#39cac4\"\n      tooltipBgColor={'black'}\n      title=\"Top 10 GDP per Capita Numerically Sized Map\"\n      valuePrefix=\"$\"\n      size={100}\n      data={GDPData}\n      frame={true}\n    />\n  );\n}\n"},9894:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\nimport WorldMap from 'react-svg-worldmap';\nimport {GDPData} from '../../data/CountryData';\n\nexport default function App(): JSX.Element {\n  return (\n    <WorldMap\n      color=\"pink\"\n      tooltipBgColor={'black'}\n      title=\"Top 10 GDP per Capita Responsive Map\"\n      valuePrefix=\"$\"\n      size=\"responsive\"\n      data={GDPData}\n      frame={true}\n    />\n  );\n}\n"},6420:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\nimport WorldMap from 'react-svg-worldmap';\nimport {populationData} from '../../data/CountryData';\n\nexport default function App(): JSX.Element {\n  return (\n    <WorldMap\n      color=\"red\"\n      tooltipBgColor={'blue'}\n      title=\"Top 10 Populous Countries Small Map\"\n      valueSuffix=\"people\"\n      size=\"sm\"\n      data={populationData}\n      frame={true}\n    />\n  );\n}\n"},8653:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\nimport WorldMap from 'react-svg-worldmap';\nimport {GDPData} from '../../data/CountryData';\n\nexport default function App(): JSX.Element {\n  return (\n    <WorldMap\n      color=\"green\"\n      tooltipBgColor={'purple'}\n      title=\"Top 10 GDP per Capita Extra Large Map\"\n      valuePrefix=\"$\"\n      size=\"xl\"\n      data={GDPData}\n      frame={true}\n    />\n  );\n}\n"},5867:function(e,t,r){"use strict";r.r(t),t.default="import React from 'react';\nimport WorldMap from 'react-svg-worldmap';\nimport {GDPData} from '../../data/CountryData';\n\nexport default function App(): JSX.Element {\n  return (\n    <WorldMap\n      color=\"yellow\"\n      tooltipBgColor={'black'}\n      title=\"Top 10 GDP per Capita Extra Extra Large Map\"\n      valuePrefix=\"$\"\n      size=\"xxl\"\n      data={GDPData}\n      frame={true}\n    />\n  );\n}\n"},1357:function(e,t,r){var n={"./LG":2597,"./LG.tsx":2597,"./MD":7258,"./MD.tsx":7258,"./Numeric":2020,"./Numeric.tsx":2020,"./Responsive":9894,"./Responsive.tsx":9894,"./SM":6420,"./SM.tsx":6420,"./XL":8653,"./XL.tsx":8653,"./XXL":5867,"./XXL.tsx":5867};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=1357},1506:function(e,t,r){var n={"./LG":1503,"./LG.tsx":1503,"./MD":3015,"./MD.tsx":3015,"./Numeric":5372,"./Numeric.tsx":5372,"./Responsive":6389,"./Responsive.tsx":6389,"./SM":2549,"./SM.tsx":2549,"./XL":6334,"./XL.tsx":6334,"./XXL":6164,"./XXL.tsx":6164};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=1506}}]);