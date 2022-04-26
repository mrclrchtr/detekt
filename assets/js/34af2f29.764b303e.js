"use strict";(self.webpackChunkdetekt_website=self.webpackChunkdetekt_website||[]).push([[439],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return m}});var i=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=i.createContext({}),u=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=u(t.components);return i.createElement(p.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(n),m=a,c=d["".concat(p,".").concat(m)]||d[m]||k[m]||l;return n?i.createElement(c,r(r({ref:e},s),{},{components:n})):i.createElement(c,r({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5997:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return k}});var i=n(7462),a=n(3366),l=(n(7294),n(3905)),r=["components"],o={title:"Formatting Rule Set",sidebar:"home_sidebar",keywords:["rules","formatting"],permalink:"formatting.html",toc:!0,folder:"documentation"},p=void 0,u={unversionedId:"rules/formatting",id:"rules/formatting",title:"Formatting Rule Set",description:"This rule set provides wrappers for rules implemented by ktlint - https://ktlint.github.io/.",source:"@site/docs/rules/formatting.md",sourceDirName:"rules",slug:"/rules/formatting",permalink:"/docs/rules/formatting",editUrl:"https://github.com/detekt/detekt/edit/main/docs/docs/rules/formatting.md",tags:[],version:"current",frontMatter:{title:"Formatting Rule Set",sidebar:"home_sidebar",keywords:["rules","formatting"],permalink:"formatting.html",toc:!0,folder:"documentation"},sidebar:"defaultSidebar",previous:{title:"Exceptions Rule Set",permalink:"/docs/rules/exceptions"},next:{title:"Naming Rule Set",permalink:"/docs/rules/naming"}},s={},k=[{value:"AnnotationOnSeparateLine",id:"annotationonseparateline",level:3},{value:"AnnotationSpacing",id:"annotationspacing",level:3},{value:"ArgumentListWrapping",id:"argumentlistwrapping",level:3},{value:"Configuration options:",id:"configuration-options",level:4},{value:"BlockCommentInitialStarAlignment",id:"blockcommentinitialstaralignment",level:3},{value:"ChainWrapping",id:"chainwrapping",level:3},{value:"CommentSpacing",id:"commentspacing",level:3},{value:"CommentWrapping",id:"commentwrapping",level:3},{value:"Configuration options:",id:"configuration-options-1",level:4},{value:"DiscouragedCommentLocation",id:"discouragedcommentlocation",level:3},{value:"EnumEntryNameCase",id:"enumentrynamecase",level:3},{value:"Filename",id:"filename",level:3},{value:"FinalNewline",id:"finalnewline",level:3},{value:"Configuration options:",id:"configuration-options-2",level:4},{value:"FunKeywordSpacing",id:"funkeywordspacing",level:3},{value:"FunctionTypeReferenceSpacing",id:"functiontypereferencespacing",level:3},{value:"ImportOrdering",id:"importordering",level:3},{value:"Configuration options:",id:"configuration-options-3",level:4},{value:"Indentation",id:"indentation",level:3},{value:"Configuration options:",id:"configuration-options-4",level:4},{value:"KdocWrapping",id:"kdocwrapping",level:3},{value:"Configuration options:",id:"configuration-options-5",level:4},{value:"MaximumLineLength",id:"maximumlinelength",level:3},{value:"Configuration options:",id:"configuration-options-6",level:4},{value:"ModifierListSpacing",id:"modifierlistspacing",level:3},{value:"ModifierOrdering",id:"modifierordering",level:3},{value:"MultiLineIfElse",id:"multilineifelse",level:3},{value:"NoBlankLineBeforeRbrace",id:"noblanklinebeforerbrace",level:3},{value:"NoConsecutiveBlankLines",id:"noconsecutiveblanklines",level:3},{value:"NoEmptyClassBody",id:"noemptyclassbody",level:3},{value:"NoEmptyFirstLineInMethodBlock",id:"noemptyfirstlineinmethodblock",level:3},{value:"NoLineBreakAfterElse",id:"nolinebreakafterelse",level:3},{value:"NoLineBreakBeforeAssignment",id:"nolinebreakbeforeassignment",level:3},{value:"NoMultipleSpaces",id:"nomultiplespaces",level:3},{value:"NoSemicolons",id:"nosemicolons",level:3},{value:"NoTrailingSpaces",id:"notrailingspaces",level:3},{value:"NoUnitReturn",id:"nounitreturn",level:3},{value:"NoUnusedImports",id:"nounusedimports",level:3},{value:"NoWildcardImports",id:"nowildcardimports",level:3},{value:"Configuration options:",id:"configuration-options-7",level:4},{value:"PackageName",id:"packagename",level:3},{value:"ParameterListWrapping",id:"parameterlistwrapping",level:3},{value:"Configuration options:",id:"configuration-options-8",level:4},{value:"SpacingAroundAngleBrackets",id:"spacingaroundanglebrackets",level:3},{value:"SpacingAroundColon",id:"spacingaroundcolon",level:3},{value:"SpacingAroundComma",id:"spacingaroundcomma",level:3},{value:"SpacingAroundCurly",id:"spacingaroundcurly",level:3},{value:"SpacingAroundDot",id:"spacingarounddot",level:3},{value:"SpacingAroundDoubleColon",id:"spacingarounddoublecolon",level:3},{value:"SpacingAroundKeyword",id:"spacingaroundkeyword",level:3},{value:"SpacingAroundOperators",id:"spacingaroundoperators",level:3},{value:"SpacingAroundParens",id:"spacingaroundparens",level:3},{value:"SpacingAroundRangeOperator",id:"spacingaroundrangeoperator",level:3},{value:"SpacingAroundUnaryOperator",id:"spacingaroundunaryoperator",level:3},{value:"SpacingBetweenDeclarationsWithAnnotations",id:"spacingbetweendeclarationswithannotations",level:3},{value:"SpacingBetweenDeclarationsWithComments",id:"spacingbetweendeclarationswithcomments",level:3},{value:"StringTemplate",id:"stringtemplate",level:3},{value:"TrailingComma",id:"trailingcomma",level:3},{value:"Configuration options:",id:"configuration-options-9",level:4},{value:"TypeArgumentListSpacing",id:"typeargumentlistspacing",level:3},{value:"UnnecessaryParenthesesBeforeTrailingLambda",id:"unnecessaryparenthesesbeforetrailinglambda",level:3},{value:"Wrapping",id:"wrapping",level:3}],d={toc:k};function m(t){var e=t.components,n=(0,a.Z)(t,r);return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This rule set provides wrappers for rules implemented by ktlint - ",(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/"},"https://ktlint.github.io/"),"."),(0,l.kt)("p",null,'Note: Issues reported by this rule set can only be suppressed on file level (@file:Suppress("detekt.rule").\nNote: The formatting rule set is not included in the detekt-cli or gradle plugin.'),(0,l.kt)("p",null,"To enable this rule set, add ",(0,l.kt)("i",null,'detektPlugins "io.gitlab.arturbosch.detekt:detekt-formatting:$version"'),"\nto your gradle dependencies or reference the ",(0,l.kt)("inlineCode",{parentName:"p"},"detekt-formatting"),"-jar with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--plugins")," option\nin the command line interface."),(0,l.kt)("h3",{id:"annotationonseparateline"},"AnnotationOnSeparateLine"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"annotationspacing"},"AnnotationSpacing"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"argumentlistwrapping"},"ArgumentListWrapping"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h4",{id:"configuration-options"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"indentSize")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,l.kt)("p",{parentName:"li"},"indentation size")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"maxLineLength")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"120"),") (android default: ",(0,l.kt)("inlineCode",{parentName:"p"},"100"),")"),(0,l.kt)("p",{parentName:"li"},"maximum line length"))),(0,l.kt)("h3",{id:"blockcommentinitialstaralignment"},"BlockCommentInitialStarAlignment"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"chainwrapping"},"ChainWrapping"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"commentspacing"},"CommentSpacing"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"commentwrapping"},"CommentWrapping"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-indentation%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-indentation"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h4",{id:"configuration-options-1"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"indentSize")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,l.kt)("p",{parentName:"li"},"indentation size"))),(0,l.kt)("h3",{id:"discouragedcommentlocation"},"DiscouragedCommentLocation"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"enumentrynamecase"},"EnumEntryNameCase"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"filename"},"Filename"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,"This rules overlaps with ",(0,l.kt)("a",{parentName:"p",href:"https://detekt.dev/naming.html#matchingdeclarationname"},(0,l.kt)("inlineCode",{parentName:"a"},"naming&gt;MatchingDeclarationName")),"\nfrom the standard rules, make sure to enable just one."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"finalnewline"},"FinalNewline"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,"This rules overlaps with ",(0,l.kt)("a",{parentName:"p",href:"https://detekt.dev/style.html#newlineatendoffile"},(0,l.kt)("inlineCode",{parentName:"a"},"style&gt;NewLineAtEndOfFile")),"\nfrom the standard rules, make sure to enable just one. The pro of this rule is that it can auto-correct the issue."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h4",{id:"configuration-options-2"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"insertFinalNewLine")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),")"),(0,l.kt)("p",{parentName:"li"},"report absence or presence of a newline"))),(0,l.kt)("h3",{id:"funkeywordspacing"},"FunKeywordSpacing"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"functiontypereferencespacing"},"FunctionTypeReferenceSpacing"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"importordering"},"ImportOrdering"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,"For defining import layout patterns see:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pinterest/ktlint/blob/a6ca5b2edf95cc70a138a9470cfb6c4fd5d9d3ce/ktlint-ruleset-standard/src/main/kotlin/com/pinterest/ktlint/ruleset/standard/ImportOrderingRule.kt"},"https://github.com/pinterest/ktlint/blob/a6ca5b2edf95cc70a138a9470cfb6c4fd5d9d3ce/ktlint-ruleset-standard/src/main/kotlin/com/pinterest/ktlint/ruleset/standard/ImportOrderingRule.kt")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.19.0"),(0,l.kt)("h4",{id:"configuration-options-3"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"layout")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"'*,java.**,javax.**,kotlin.**,^'"),") (android default: ",(0,l.kt)("inlineCode",{parentName:"p"},"'*'"),")"),(0,l.kt)("p",{parentName:"li"},"the import ordering layout"))),(0,l.kt)("h3",{id:"indentation"},"Indentation"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-indentation%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-indentation"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.19.0"),(0,l.kt)("h4",{id:"configuration-options-4"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"indentSize")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,l.kt)("p",{parentName:"li"},"indentation size")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("del",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"del"},"continuationIndentSize"))," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Deprecated"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"continuationIndentSize")," is ignored by KtLint and will have no effect"),(0,l.kt)("p",{parentName:"li"},"continuation indentation size"))),(0,l.kt)("h3",{id:"kdocwrapping"},"KdocWrapping"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-indentation%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-indentation"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h4",{id:"configuration-options-5"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"indentSize")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,l.kt)("p",{parentName:"li"},"indentation size"))),(0,l.kt)("h3",{id:"maximumlinelength"},"MaximumLineLength"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,"This rules overlaps with ",(0,l.kt)("a",{parentName:"p",href:"https://detekt.dev/style.html#maxlinelength"},(0,l.kt)("inlineCode",{parentName:"a"},"style&gt;MaxLineLength")),"\nfrom the standard rules, make sure to enable just one or keep them aligned. The pro of this rule is that it can\nauto-correct the issue."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h4",{id:"configuration-options-6"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"maxLineLength")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"120"),") (android default: ",(0,l.kt)("inlineCode",{parentName:"p"},"100"),")"),(0,l.kt)("p",{parentName:"li"},"maximum line length")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"ignoreBackTickedIdentifier")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"ignore back ticked identifier"))),(0,l.kt)("h3",{id:"modifierlistspacing"},"ModifierListSpacing"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"modifierordering"},"ModifierOrdering"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-modifier-order%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-modifier-order"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,"This rules overlaps with ",(0,l.kt)("a",{parentName:"p",href:"https://detekt.dev/style.html#modifierorder"},(0,l.kt)("inlineCode",{parentName:"a"},"style&gt;ModifierOrder")),"\nfrom the standard rules, make sure to enable just one. The pro of this rule is that it can auto-correct the issue."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"multilineifelse"},"MultiLineIfElse"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-modifier-order%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-modifier-order"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"noblanklinebeforerbrace"},"NoBlankLineBeforeRbrace"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"noconsecutiveblanklines"},"NoConsecutiveBlankLines"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-blank%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-blank"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"noemptyclassbody"},"NoEmptyClassBody"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-empty-class-body%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-empty-class-body"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"noemptyfirstlineinmethodblock"},"NoEmptyFirstLineInMethodBlock"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"nolinebreakafterelse"},"NoLineBreakAfterElse"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"nolinebreakbeforeassignment"},"NoLineBreakBeforeAssignment"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"nomultiplespaces"},"NoMultipleSpaces"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"nosemicolons"},"NoSemicolons"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-semi%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-semi"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"notrailingspaces"},"NoTrailingSpaces"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-trailing-whitespaces%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-trailing-whitespaces"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"nounitreturn"},"NoUnitReturn"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-unit-return%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-unit-return"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"nounusedimports"},"NoUnusedImports"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"nowildcardimports"},"NoWildcardImports"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-import%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-import"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h4",{id:"configuration-options-7"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"packagesToUseImportOnDemandProperty")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"'java.util.*,kotlinx.android.synthetic.**'"),")"),(0,l.kt)("p",{parentName:"li"},"Defines allowed wildcard imports"))),(0,l.kt)("h3",{id:"packagename"},"PackageName"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"parameterlistwrapping"},"ParameterListWrapping"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io%22%3Ektlint-website%3C/a"},'https://ktlint.github.io"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h4",{id:"configuration-options-8"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"maxLineLength")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"120"),") (android default: ",(0,l.kt)("inlineCode",{parentName:"p"},"100"),")"),(0,l.kt)("p",{parentName:"li"},"maximum line length")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("del",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"del"},"indentSize"))," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"4"),")"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Deprecated"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"indentSize")," is ignored by KtLint and will have no effect"),(0,l.kt)("p",{parentName:"li"},"indentation size"))),(0,l.kt)("h3",{id:"spacingaroundanglebrackets"},"SpacingAroundAngleBrackets"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"spacingaroundcolon"},"SpacingAroundColon"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"spacingaroundcomma"},"SpacingAroundComma"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"spacingaroundcurly"},"SpacingAroundCurly"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"spacingarounddot"},"SpacingAroundDot"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"spacingarounddoublecolon"},"SpacingAroundDoubleColon"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"spacingaroundkeyword"},"SpacingAroundKeyword"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"spacingaroundoperators"},"SpacingAroundOperators"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"spacingaroundparens"},"SpacingAroundParens"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"spacingaroundrangeoperator"},"SpacingAroundRangeOperator"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"spacingaroundunaryoperator"},"SpacingAroundUnaryOperator"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"spacingbetweendeclarationswithannotations"},"SpacingBetweenDeclarationsWithAnnotations"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"spacingbetweendeclarationswithcomments"},"SpacingBetweenDeclarationsWithComments"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"stringtemplate"},"StringTemplate"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-string-template%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-string-template"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.0.0"),(0,l.kt)("h3",{id:"trailingcomma"},"TrailingComma"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h4",{id:"configuration-options-9"},"Configuration options:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"allowTrailingComma")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"Defines whether a trailing comma (or no trailing comma) should be enforced on the defining side")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"allowTrailingCommaOnCallSite")," (default: ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,l.kt)("p",{parentName:"li"},"Defines whether a trailing comma (or no trailing comma) should be enforced on the calling side"))),(0,l.kt)("h3",{id:"typeargumentlistspacing"},"TypeArgumentListSpacing"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"unnecessaryparenthesesbeforetrailinglambda"},"UnnecessaryParenthesesBeforeTrailingLambda"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-spacing%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-spacing"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": No"),(0,l.kt)("h3",{id:"wrapping"},"Wrapping"),(0,l.kt)("p",null,"See ","<",'a href="',(0,l.kt)("a",{parentName:"p",href:"https://ktlint.github.io/#rule-indentation%22%3Ektlint-website%3C/a"},'https://ktlint.github.io/#rule-indentation"',">","ktlint-website","<","/a"),">"," for documentation."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Active by default"),": Yes - Since v1.20.0"))}m.isMDXComponent=!0}}]);