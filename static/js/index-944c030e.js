import {b4 as e, b5 as t, br as s, p as l, b7 as n, q as a, F as o, bl as i, be as r, v as u, r as c, l as m, z as p, bD as d, bd as g, bm as h, bc as x, bf as k, bE as v, bF as y, bG as b, bH as f, bI as w, bJ as S, bK as _, bL as A, bM as V, bN as O, bO as j, bP as z, bQ as I, bR as L, bS as E} from "./Akubela-element-plus-Vendor-47553b40.js";
import {V as M, W as N, o as P, e as $, u as D, U as H, M as R, X as T, l as C, Y as W, Z as q, $ as F, a0 as K, a1 as X, a2 as B, b as G, a3 as J} from "./Akubela-login-home-part-Vendor-facddf88.js";
import "./Akubela-devices-img-Vendor-0f46fa2c.js";
import "./Akubela-scenes-security-other-img-Vendor-2a1534ad.js";
!function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
            t(e);
        new MutationObserver((e => {
            for (const s of e)
                if ("childList" === s.type)
                    for (const e of s.addedNodes)
                        "LINK" === e.tagName && "modulepreload" === e.rel && t(e)
        }
        )).observe(document, {
            childList: !0,
            subtree: !0
        })
    }
    function t(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const t = function(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity),
            e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
            "use-credentials" === e.crossorigin ? t.credentials = "include" : "anonymous" === e.crossorigin ? t.credentials = "omit" : t.credentials = "same-origin",
            t
        }(e);
        fetch(e.href, t)
    }
}();
const Q = {
    __name: "SkeletonBase",
    props: {
        customSkeletonStyle: {
            type: Object,
            default: () => {}
        }
    },
    setup: l => (n, a) => (e(),
    t("div", {
        class: "akubela-skeleton",
        style: s(l.customSkeletonStyle)
    }, null, 4))
}
  , U = {
    class: "devices-skeleton-main"
}
  , Y = {
    class: "skeleton-main-left"
}
  , Z = {
    class: "skeleton-main-right"
}
  , ee = {
    class: "content"
}
  , te = {
    class: "content"
}
  , se = {
    __name: "SkeletonDevices",
    setup(s) {
        const c = () => new Array(N());
        return l(( () => {}
        )),
        (s, l) => (e(),
        t("div", U, [n("div", Y, [a(Q, {
            "custom-skeleton-style": {
                width: "206px",
                height: "100%"
            }
        })]), n("div", Z, [a(Q, {
            "custom-skeleton-style": {
                width: "316px",
                height: "40px"
            }
        }), a(Q, {
            "custom-skeleton-style": {
                width: "210px",
                height: "36px",
                "margin-top": "10px"
            }
        }), n("div", ee, [(e(!0),
        t(o, null, i(c(), ( (t, s) => (e(),
        r(Q, {
            key: u(M)() + s + "",
            "custom-skeleton-style": {
                width: "220px",
                height: "220px",
                "margin-bottom": "15px",
                "margin-right": "20px"
            }
        })))), 128))]), a(Q, {
            "custom-skeleton-style": {
                width: "210px",
                height: "36px",
                "margin-top": "-4px"
            }
        }), n("div", te, [(e(!0),
        t(o, null, i(c(), ( (t, s) => (e(),
        r(Q, {
            key: u(M)() + s + "",
            "custom-skeleton-style": {
                width: "220px",
                height: "220px",
                "margin-bottom": "15px",
                "margin-right": "20px"
            }
        })))), 128))])])]))
    }
}
  , le = {
    class: "home-skeleton-main"
}
  , ne = {
    class: "part-scenes"
}
  , ae = {
    class: "part-devices"
}
  , oe = {
    __name: "SkeletonHome",
    setup(s) {
        const c = () => new Array(N());
        return l(( () => {}
        )),
        (s, l) => (e(),
        t("div", le, [a(Q, {
            "custom-skeleton-style": {
                width: "580px",
                height: "88px",
                "border-radius": "49px"
            }
        }), a(Q, {
            "custom-skeleton-style": {
                width: "210px",
                height: "36px",
                "margin-top": "28px"
            }
        }), n("div", ne, [(e(!0),
        t(o, null, i(c(), ( (t, s) => (e(),
        r(Q, {
            key: u(M)() + s + "",
            "custom-skeleton-style": {
                width: "226px",
                height: "106px",
                "margin-top": "15px",
                "margin-left": "2px",
                "margin-right": "12px"
            }
        })))), 128))]), a(Q, {
            "custom-skeleton-style": {
                width: "210px",
                height: "36px",
                "margin-top": "25px"
            }
        }), n("div", ae, [(e(!0),
        t(o, null, i(c(), ( (t, s) => (e(),
        r(Q, {
            key: u(M)() + s + "",
            "custom-skeleton-style": {
                width: "226px",
                height: "226px",
                "margin-top": "15px",
                "margin-left": "2px",
                "margin-right": "12px"
            }
        })))), 128))])]))
    }
}
  , ie = {
    class: "scene-skeleton-main"
}
  , re = {
    class: "part-scenes"
}
  , ue = {
    __name: "SkeletonScenes",
    setup: s => (l(( () => {}
    )),
    (s, l) => (e(),
    t("div", ie, [a(Q, {
        "custom-skeleton-style": {
            width: "120px",
            height: "32px"
        }
    }), n("div", re, [(e(!0),
    t(o, null, i(new Array(N()), ( (t, s) => (e(),
    r(Q, {
        key: u(M)() + s + "",
        "custom-skeleton-style": {
            width: "226px",
            height: "106px",
            "margin-top": "15px",
            "margin-left": "2px",
            "margin-right": "12px"
        }
    })))), 128))])])))
}
  , ce = {
    class: "scene-skeleton-main"
}
  , me = {
    class: "part-scenes"
}
  , pe = {
    __name: "SkeletonWallpaper",
    setup: s => (l(( () => {}
    )),
    (s, l) => (e(),
    t("div", ce, [a(Q, {
        "custom-skeleton-style": {
            width: "120px",
            height: "32px"
        }
    }), n("div", me, [(e(!0),
    t(o, null, i(new Array(N()), ( (t, s) => (e(),
    r(Q, {
        key: u(M)() + s + "",
        "custom-skeleton-style": {
            width: "calc(100vw - 282px)",
            height: "247px",
            "margin-top": "20px"
        }
    }, null, 8, ["custom-skeleton-style"])))), 128))])])))
}
  , de = {
    class: "scene-skeleton-edit-main"
}
  , ge = {
    __name: "SkeletonScenesEdit",
    setup: s => (s, l) => (e(),
    t("div", de, [a(Q, {
        "custom-skeleton-style": {
            width: "120px",
            height: "32px"
        }
    }), a(Q, {
        "custom-skeleton-style": {
            width: "calc(100vw - 282px)",
            height: "calc(100vh - 135px)",
            "margin-top": "15px",
            "margin-left": "2px",
            "margin-right": "12px"
        }
    }, null, 8, ["custom-skeleton-style"])]))
}
  , he = {
    class: "skeleton"
}
  , xe = {
    __name: "App",
    setup(s) {
        const l = P();
        let i = $();
        const E = {
            en: v,
            "zh-cn": y,
            "zh-tw": b,
            de: f,
            es: w,
            fr: S,
            it: _,
            ja: A,
            ko: V,
            nl: O,
            pl: j,
            pt: z,
            ru: I,
            tr: L
        };
        let M = c(!0)
          , N = c(!1);
        const F = D()
          , K = c(3e3)
          , X = c("small");
        let B = H();
        const G = c();
        let J = c(null)
          , Q = c(!1);
        R.on("$mitt_skeleton", (e => {
            let t = null;
            if (e.includes("close"))
                return t && clearTimeout(t),
                M.value = !0,
                void (J.value = null);
            e.includes("layout") ? N.value = !0 : e.includes("unmounted") ? N.value = !1 : q(e) && (J.value = e,
            M.value = !1,
            t = setTimeout(( () => {
                M.value = !0,
                J.value = null
            }
            ), 6e3))
        }
        ));
        const U = e => {
            B = e || H(),
            C.set("lang", B || "en"),
            F.locale.value = B,
            G.value = B && E[B] ? E[B] : v,
            R.emit("i18nInited")
        }
        ;
        R.on("changeLang", U),
        m(( () => {
            if (i.setDevicesAvatarObj(),
            T()) {
                let e = document.createElement("link");
                e.rel = "icon",
                e.href = "/logo.ico",
                document.head.appendChild(e),
                e = null
            }
            U();
            "3.1.7_1" !== C.get("VERSION") && "https:" !== document.location.protocol && (C.set("VERSION", "3.1.7_1"),
            window.location.reload()),
            Y()
        }
        ));
        const Y = async () => {
            var e;
            try {
                Q.value = !1,
                setTimeout(( () => {
                    Q.value = !0
                }
                ), 3e3);
                const t = await W.getConfig({
                    item: ["status.general.firmware", "status.general.model"]
                });
                if (null == (e = null == t ? void 0 : t.data) ? void 0 : e.success) {
                    const e = {
                        PS251: "PS51V2",
                        SmartPanel: "X933H"
                    };
                    e[t.data.result["status.general.model"]] && (t.data.result["status.general.model"] = e[t.data.result["status.general.model"]]),
                    C.set("deviceModel", t.data.result["status.general.model"]),
                    l.deviceModel = t.data.result["status.general.model"];
                    const s = t.data.result["status.general.firmware"]
                      , n = s.split(".");
                    l.setVersion(s),
                    l.setversionArray(n),
                    l.setversionOem(n[1])
                }
                Q.value = !0
            } catch (t) {}
        }
        ;
        return (s, l) => {
            const i = p("router-view")
              , c = d;
            return e(),
            t(o, null, [g(n("div", he, [g(a(se, null, null, 512), [[h, "Devices" === u(J)]]), g(a(oe, null, null, 512), [[h, "Home" === u(J)]]), g(a(ue, null, null, 512), [[h, "Scenes" === u(J)]]), g(a(ge, null, null, 512), [[h, "ModifyOrdinaryScene" === u(J)]]), g(a(pe, null, null, 512), [[h, "Wallpaper" === u(J)]])], 512), [[h, !u(M) && u(N) && "LoginView" !== u(J)]]), a(c, {
                locale: G.value,
                size: X.value,
                "z-index": K.value
            }, {
                default: x(( () => [u(Q) ? (e(),
                r(i, {
                    key: 0
                })) : k("", !0)])),
                _: 1
            }, 8, ["locale", "size", "z-index"])], 64)
        }
    }
}
  , ke = F();
const ve = K(( () => {
    "Devices" !== X.currentRoute.value.name ? R.emit("$mitt_skeleton", "close") : setTimeout(( () => {
        R.emit("$mitt_skeleton", "close")
    }
    ), 350)
}
), 100)
  , ye = E(xe);
B().then((e => {
    ye.directive("skeletonClose", {
        mounted(e, t, s, l) {
            ( (e, t, s, l) => {
                "layout" !== t.arg ? ve() : R.emit("$mitt_skeleton", "layout")
            }
            )(0, t)
        }
    }),
    ye.config.globalProperties.$api = W,
    ye.component("SvgIcon", G),
    J(ye),
    ye.use(ke),
    ye.use(e),
    ye.mount("#app"),
    R.emit("i18nInited")
}
));
export {Q as _};