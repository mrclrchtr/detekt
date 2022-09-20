"use strict";(self.webpackChunk_detekt_website=self.webpackChunk_detekt_website||[]).push([[9487],{4090:function(e,t,r){r.r(t),r.d(t,{default:function(){return C}});var a=r(7294),o=r(6010),n=r(7767),l={ruleset:{color:"#39ca30",description:"A collection of custom rules for Detekt"},processor:{color:"#e9669e",description:"A custom processor for Detekt"},reporter:{color:"#fe6829",description:"A custom reporter for Detekt"},plugin:{color:"#a44fb7",description:"A plugin or a tool built on top of Detekt"}},s=[{title:"Compiler",description:"A ruleset that wraps the warnings and info messages of the Kotlin compiler as detekt findings..",repo:"https://github.com/BraisGabin/detekt-compiler-rules",ruleset:"compiler",rules:["CompilerInfo","CompilerWarning"],usesTypeResolution:!0,tags:["ruleset"]},{title:"Compose by appKODE",description:"A set of Detekt rules to help prevent common errors in projects using Jetpack Compose.",repo:"https://github.com/appKODE/detekt-rules-compose",ruleset:"compose",rules:["ReusedModifierInstance","UnnecessaryEventHandlerParameter","ComposableEventParameterNaming","ModifierHeightWithText","ModifierParameterPosition","ModifierDefaultValue","MissingModifierDefaultValue","PublicComposablePreview"],usesTypeResolution:!1,tags:["ruleset"]},{title:"Compose by Twitter",description:"Static checks to aid with a healthy adoption of Jetpack Compose.",repo:"https://github.com/twitter/compose-rules/",ruleset:"TwitterCompose",rules:["ComposableNaming","ComposableParamOrder","ContentEmitterReturningValues","ModifierComposable","ModifierMissing","ModifierReused","ModifierWithoutDefault","MultipleEmitters","MutableParams","PreviewPublic","RememberMissing","ViewModelForwarding","ViewModelInjection"],usesTypeResolution:!1,tags:["ruleset"]},{title:"Doist detekt-rules",description:"This repository contains custom detekt rules based on Doist internal coding conventions.",repo:"https://github.com/Doist/detekt-rules",ruleset:"DoistRuleSet",rules:["NoBlankNewLineAfterClassHeader","ConsistentWhenEntries","SingleLineWhenEntryExpressionsAreWrapped","MutableObservablePropertyIsPrivate","NoNotNullOperator","TodoPattern"],usesTypeResolution:!1,tags:["ruleset"]},{title:"Hint",description:"A ruleset to implement detection of violation of programming principles. detekt-hint offers also instructions on how to integrate with Danger and Github Actions",repo:"https://github.com/mkohm/detekt-hint",tags:["plugin","ruleset"],ruleset:"detekt-hint",rules:["InterfaceSegregationPrinciple","LackOfCohesionMethods","OpenClosedPrinciple","UseCompositionInsteadOfInheritance"],usesTypeResolution:!0},{title:"Gitlab Report",description:"A reporter to export Detekt findings to GitLab Code Quality (and other code climate compatible tools).\nThis is designed for use with GitLab, but should also work fine with everything else that accepts the code climate format.",repo:"https://gitlab.com/cromefire/detekt-gitlab-report",tags:["reporter"]},{title:"Operator",description:"Rules to prefer expressions over named functions for kotlin operators.",repo:"https://github.com/colematthew4/detekt-operator",ruleset:"detekt-operator",rules:["PreferInOverContainsSyntax","PreferUnaryPrefixOverFunctionSyntax","PreferUnaryPostfixOverFunctionSyntax","PreferArithmeticSymbolSyntax","PreferBracketAccessorOverFunctionSyntax"],usesTypeResolution:!1,tags:["ruleset"]},{title:"Verify Implementation",description:"A ruleset which enables verifying whether concrete classes are implemented as specified according to annotations applied to base types.",repo:"https://github.com/cph-cachet/detekt-verify-implementation",ruleset:"verify-implementation",rules:["Immutable","DataClass"],usesTypeResolution:!0,tags:["ruleset"]}],i=r(9960),c={marketplaceCardHeader:"marketplaceCardHeader_zLSb",marketplaceCardTitle:"marketplaceCardTitle_LF2A",marketplaceCardButton:"marketplaceCardButton_I435",marketplaceCardBody:"marketplaceCardBody_V7HC",tagContainer:"tagContainer_FF1X"},m="tag_LfQE",u="textLabel_SR2X",p="colorLabel_JII_";function d(e){var t=e.tag;return a.createElement("li",{title:function(e){return e in l?l[e].description:null}(t),className:m},a.createElement("span",{className:u},e.tag.toLowerCase()),a.createElement("span",{className:p,style:{backgroundColor:function(e){return e in l?l[e].color:null}(t)}}))}var h=a.memo(d);function g(e){var t=e.extension;return a.createElement("li",{key:t.title,className:"card shadow--md"},a.createElement("div",{className:"card__body"},a.createElement("div",{className:c.marketplaceCardHeader},a.createElement("h3",{className:c.marketplaceCardTitle},t.title),a.createElement("ul",{className:c.tagContainer},t.tags.map((function(e){return a.createElement("li",null,a.createElement(h,{tag:e}))}))),a.createElement(i.Z,{href:t.repo,className:(0,o.Z)("button","button--secondary","button--sm",c.marketplaceHeaderButton)},"Source")),a.createElement("div",{className:c.marketplaceCardBody},a.createElement(i.Z,{href:t.repo},t.repo),a.createElement("p",null,t.description),t.rules&&a.createElement("p",null,a.createElement("h5",null,"Rules"),a.createElement("p",null,"Uses type resolution:"," ",a.createElement("strong",null,t.usesTypeResolution.toString())),a.createElement("p",null,a.createElement("ul",null,t.rules.map((function(e){return a.createElement("li",null,a.createElement("code",null,e))}))))))))}var f=a.memo(g),b={marketplaceList:"marketplaceList_TLQA",marketplaceHeaderButton:"marketplaceHeaderButton_v9XI"},k="Detekt 3rd-party Marketplace";function E(){return a.createElement("section",{className:"margin-top--lg margin-bottom--lg text--center"},a.createElement("h1",null,k),a.createElement("p",null,"List of Detekt Rules, Extensions & Plugins that have been built by the community."),a.createElement("a",{className:(0,o.Z)("button","button--primary",b.marketplaceHeaderButton),href:"https://github.com/detekt/detekt/blob/main/website/src/data/marketplace.js",target:"_blank",rel:"noreferrer"},"\ud83d\ude4f Please add your ruleset"),a.createElement("a",{className:(0,o.Z)("button","button--secondary",b.marketplaceHeaderButton),href:"https://github.com/topics/detekt-rules",target:"_blank",rel:"noreferrer"},"Find more rules on Github"))}function y(){return 0===s.length?a.createElement("section",{className:"margin-top--lg margin-bottom--xl"},a.createElement("div",{className:"container padding-vert--md text--center"},a.createElement("h2",null,"No results"))):a.createElement("section",{className:"margin-top--lg margin-bottom--xl"},a.createElement(a.Fragment,null,a.createElement("div",{className:"container margin-top--lg"},a.createElement("h2",{className:b.marketplaceHeader},"All extensions"),a.createElement("ul",{className:(0,o.Z)("clean-list",b.marketplaceList)},s.map((function(e){return a.createElement(f,{key:e.title,extension:e})}))))))}function C(){return a.createElement(n.Z,{title:k,description:"List of Detekt Rules that have been built by the community \ud83c\udf89"},a.createElement("main",{className:"margin-vert--lg"},a.createElement(E,null),a.createElement(y,null)))}}}]);