"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[640],{4628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=t(4848),o=t(8453);const s={},c="Headline button",d={id:"device/user_interface/components/HeadlineButton",title:"Headline button",description:"Class: HeadlineButton",source:"@site/docs/device/user_interface/components/HeadlineButton.md",sourceDirName:"device/user_interface/components",slug:"/device/user_interface/components/HeadlineButton",permalink:"/docs/device/user_interface/components/HeadlineButton",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"deviceDocsSidebar",previous:{title:"Action bar",permalink:"/docs/device/user_interface/components/ActionBar"},next:{title:"List item",permalink:"/docs/device/user_interface/components/ListItem"}},r={},l=[{value:"Use cases",id:"use-cases",level:2},{value:"Design and layout",id:"design-and-layout",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>text: string</code>",id:"text-string",level:3},{value:"<code>icon: string</code>",id:"icon-string",level:3},{value:"<code>onClick?(): any</code>",id:"onclick-any",level:3},{value:"<code>textColor?: number</code>",id:"textcolor-number",level:3},{value:"<code>backgroundNormal?: number</code>",id:"backgroundnormal-number",level:3},{value:"<code>backgroundSelected?: number</code>",id:"backgroundselected-number",level:3},{value:"<code>backgroundPressed?: number</code>",id:"backgroundpressed-number",level:3}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"headline-button",children:"Headline button"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Class: ",(0,i.jsx)(n.code,{children:"HeadlineButton"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This component provides a small button with width-depending design. It contain icon and title, which will be visible only if there\u2019s enough space on screen."}),"\n",(0,i.jsxs)(n.p,{children:["Component can be focused by wheel, their click will call ",(0,i.jsx)(n.code,{children:"onClick()"})," callback."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Demo",src:t(5100).A+"",width:"1050",height:"480"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="page/index.js"',children:'import { ListView } from "mzfw/device/UiListView";\nimport { HeadlineButton } from "mzfw/device/UiButton";\nimport { spawnPlaceholders } from "mzfw/device/DocumentationDemos";\n\n// NOTE: That\'s import for zeusx. If you\'re writing for zeus, use instead\n// const { align } = hmUI;\nimport { align } from "@zosx/ui";\n\nclass MyPage extends ListView {\n  buildHeader() {\n    // Headline button\n    return new HeadlineButton({\n      text: "Settings",\n      icon: "settings",\n      onClick: () => {\n        console.log("onSettings");\n      }\n    });\n  }\n\n  build() {\n    return [\n      // Grey rectangles, for preview\n      ...spawnPlaceholders(5),\n    ];\n  }\n}\n\nPage(ListView.makePage(new MyPage()));\n'})}),"\n",(0,i.jsx)(n.h2,{id:"use-cases",children:"Use cases"}),"\n",(0,i.jsxs)(n.p,{children:["This component is designed to be used in header and/or footer of ",(0,i.jsx)(n.a,{href:"../compositors/ListView",children:"ListView"})," compositor. It can be used to provide out-of-context page action, example to open \u201cAbout this app\u201d or settings dialog."]}),"\n",(0,i.jsx)(n.h2,{id:"design-and-layout",children:"Design and layout"}),"\n",(0,i.jsx)(n.p,{children:"This component has three layouts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Icon button without title for screen smaller than 200 px;"}),"\n",(0,i.jsx)(n.li,{children:"Small icon and title for screen smaller than 380 px;"}),"\n",(0,i.jsx)(n.li,{children:"Large icon and title for large screens."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Used in this component icon should be available in following sizes:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Icon  size"}),(0,i.jsx)(n.th,{children:"Device model(s)"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"32 px"}),(0,i.jsxs)(n.td,{children:["GTS 4 Mini, Bip 5 and other with ",(0,i.jsx)(n.code,{children:"IS_SMALL_SCREEN_DEVICE"})," flag"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"48 px"}),(0,i.jsx)(n.td,{children:"Band 7, Mi Band 7 and all other devices"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,i.jsx)(n.p,{children:"No issues or limitations found."}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"text-string",children:(0,i.jsx)(n.code,{children:"text: string"})}),"\n",(0,i.jsx)(n.p,{children:"Button text, visible on large screens."}),"\n",(0,i.jsx)(n.h3,{id:"icon-string",children:(0,i.jsx)(n.code,{children:"icon: string"})}),"\n",(0,i.jsxs)(n.p,{children:["Icon file name without extension. Icon should be located in app assets: ",(0,i.jsx)(n.code,{children:"$ASSETS/icon/$ICON_SIZE/$NAME.png"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"onclick-any",children:(0,i.jsx)(n.code,{children:"onClick?(): any"})}),"\n",(0,i.jsx)(n.p,{children:"Button on click handler. Optional."}),"\n",(0,i.jsx)(n.h3,{id:"textcolor-number",children:(0,i.jsx)(n.code,{children:"textColor?: number"})}),"\n",(0,i.jsxs)(n.p,{children:["Button text color. Optional, default loaded from theme ",(0,i.jsx)(n.code,{children:"BUTTON_TEXT"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"backgroundnormal-number",children:(0,i.jsx)(n.code,{children:"backgroundNormal?: number"})}),"\n",(0,i.jsxs)(n.p,{children:["Normal button background color.  Optional, default load from theme ",(0,i.jsx)(n.code,{children:"BUTTON_NORMAL"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"backgroundselected-number",children:(0,i.jsx)(n.code,{children:"backgroundSelected?: number"})}),"\n",(0,i.jsxs)(n.p,{children:["Selected button background color.  Optional, default load from theme ",(0,i.jsx)(n.code,{children:"BUTTON_SELECTED"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"backgroundpressed-number",children:(0,i.jsx)(n.code,{children:"backgroundPressed?: number"})}),"\n",(0,i.jsxs)(n.p,{children:["Pressed button background color.  Optional, default load from theme ",(0,i.jsx)(n.code,{children:"BUTTON_PRESSED"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},5100:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/HeadlineButton_demo-286f8338b337c0118758a7695b369394.png"},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>d});var i=t(6540);const o={},s=i.createContext(o);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);