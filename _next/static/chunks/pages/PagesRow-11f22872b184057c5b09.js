_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"+SU/":function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),a=t("YFqc"),c=t.n(a),u=o.a.createElement;n.default=function(e){return u("span",null,u(c.a,{href:"/pages/".concat(e.save_id)},u("a",{className:"btn btn-outline-dark ml-2 mb-2"},e.title)))}},QBkH:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/PagesRow",function(){return t("+SU/")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),c=t("elyg"),u=t("nOHt"),i=t("vNVm"),l={};function s(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),p=f.href,d=f.as,v=e.children,h=e.replace,b=e.shallow,g=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var y=a.Children.only(v),_=y&&"object"===typeof y&&y.ref,w=(0,i.useIntersection)({rootMargin:"200px"}),E=r(w,2),L=E[0],k=E[1],M=a.default.useCallback((function(e){L(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,L]);(0,a.useEffect)((function(){var e=k&&n&&(0,c.isLocalURL)(p),r="undefined"!==typeof m?m:t&&t.locale,o=l[p+"%"+d+(r?"%"+r:"")];e&&!o&&s(t,p,d,{locale:r})}),[d,p,k,m,n,t]);var I={ref:M,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,t,p,d,h,b,g,m)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),s(t,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var N="undefined"!==typeof m?m:t&&t.locale,C=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(d,N,t&&t.locales,t&&t.domainLocales);I.href=C||(0,c.addBasePath)((0,c.addLocale)(d,N,t&&t.defaultLocale))}return a.default.cloneElement(y,I)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],p=s[1],d=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=t("q1tI"),a=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var u=new Map}},[["QBkH",0,2,1]]]);