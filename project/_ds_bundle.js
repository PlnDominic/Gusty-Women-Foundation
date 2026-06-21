/* @ds-bundle: {"format":3,"namespace":"GutsyWomenFoundationDesignSystem_dd7d23","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Capsule","sourcePath":"components/core/Capsule.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"ProgramCard","sourcePath":"components/patterns/ProgramCard.jsx"},{"name":"StatCard","sourcePath":"components/patterns/StatCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"26e3c66c3366","components/core/Button.jsx":"d661b37f446f","components/core/Capsule.jsx":"277846618e2c","components/core/Input.jsx":"b67e67320847","components/core/SectionHeading.jsx":"13373d0d0f55","components/patterns/ProgramCard.jsx":"4f0d413e8d08","components/patterns/StatCard.jsx":"459bfe3b8cdd","ui_kits/website/App.jsx":"8c181eb71692","ui_kits/website/Apply.jsx":"40566d396f6f","ui_kits/website/Footer.jsx":"f5d3e59e6f09","ui_kits/website/Hero.jsx":"2748ec6606f3","ui_kits/website/Icon.jsx":"26f28901108e","ui_kits/website/Nav.jsx":"13de8ac4783b","ui_kits/website/Sections.jsx":"f046ea1bb7ec"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GutsyWomenFoundationDesignSystem_dd7d23 = window.GutsyWomenFoundationDesignSystem_dd7d23 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Gutsy Women Foundation — Badge
 * Small status marker, e.g. "Applications Open".
 */
function Badge({
  children,
  tone = 'open',
  style = {}
}) {
  const tones = {
    open: {
      background: 'var(--gwf-magenta-100)',
      color: 'var(--gwf-magenta-700)',
      dot: 'var(--gwf-magenta-600)'
    },
    soon: {
      background: 'var(--gwf-gold-100)',
      color: 'var(--gwf-gold-600)',
      dot: 'var(--gwf-gold-500)'
    },
    closed: {
      background: '#EFEEF4',
      color: 'var(--gwf-ink-muted)',
      dot: 'var(--gwf-ink-muted)'
    },
    info: {
      background: 'var(--gwf-purple-100)',
      color: 'var(--gwf-purple-700)',
      dot: 'var(--gwf-purple-500)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px 5px 10px',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      background: t.background,
      color: t.color,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: t.dot
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gutsy Women Foundation — Button
 * Pill-shaped CTA. Primary = purple fill; secondary = outlined purple;
 * gold / magenta for emphasis; ghost for low-priority.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 14
    },
    md: {
      padding: '12px 24px',
      fontSize: 15
    },
    lg: {
      padding: '16px 32px',
      fontSize: 17
    }
  };
  const variants = {
    primary: {
      background: 'var(--gwf-purple-600)',
      color: '#fff',
      border: '2px solid var(--gwf-purple-600)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--gwf-purple-600)',
      border: '2px solid var(--gwf-purple-600)'
    },
    gold: {
      background: 'var(--gwf-gold-500)',
      color: 'var(--gwf-ink)',
      border: '2px solid var(--gwf-gold-500)'
    },
    magenta: {
      background: 'var(--gwf-magenta-600)',
      color: '#fff',
      border: '2px solid var(--gwf-magenta-600)'
    },
    'on-dark': {
      background: '#fff',
      color: 'var(--gwf-purple-700)',
      border: '2px solid #fff'
    },
    'outline-light': {
      background: 'transparent',
      color: '#fff',
      border: '2px solid rgba(255,255,255,.85)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--gwf-purple-600)',
      border: '2px solid transparent'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverShift = {
    primary: {
      background: 'var(--gwf-purple-700)',
      borderColor: 'var(--gwf-purple-700)'
    },
    secondary: {
      background: 'var(--gwf-purple-600)',
      color: '#fff'
    },
    gold: {
      background: 'var(--gwf-gold-600)',
      borderColor: 'var(--gwf-gold-600)'
    },
    magenta: {
      background: 'var(--gwf-magenta-700)',
      borderColor: 'var(--gwf-magenta-700)'
    },
    'on-dark': {
      background: 'var(--gwf-purple-100)'
    },
    'outline-light': {
      background: 'rgba(255,255,255,.14)'
    },
    ghost: {
      background: 'var(--gwf-purple-100)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      width: fullWidth ? '100%' : 'auto',
      opacity: disabled ? 0.5 : 1,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out)',
      transform: press ? 'translateY(0) scale(0.98)' : hover && !disabled ? 'translateY(-2px)' : 'none',
      boxShadow: hover && !disabled && variant === 'primary' ? 'var(--shadow-md)' : 'none',
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? hoverShift[variant] : {}),
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Capsule.jsx
try { (() => {
/**
 * Gutsy Women Foundation — Capsule
 * The signature pill chip used for dates, time, location, status.
 */
function Capsule({
  children,
  tone = 'purple',
  iconLeft = null,
  size = 'md',
  style = {}
}) {
  const tones = {
    purple: {
      background: 'var(--gwf-purple-600)',
      color: '#fff'
    },
    'purple-soft': {
      background: 'var(--gwf-purple-100)',
      color: 'var(--gwf-purple-700)'
    },
    gold: {
      background: 'var(--gwf-gold-500)',
      color: 'var(--gwf-ink)'
    },
    magenta: {
      background: 'var(--gwf-magenta-600)',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: '#fff',
      boxShadow: 'inset 0 0 0 2px rgba(255,255,255,.7)'
    },
    'outline-ink': {
      background: 'transparent',
      color: 'var(--gwf-purple-700)',
      boxShadow: 'inset 0 0 0 2px var(--gwf-purple-200)'
    }
  };
  const sizes = {
    sm: {
      padding: '5px 12px',
      fontSize: 12
    },
    md: {
      padding: '8px 16px',
      fontSize: 14
    },
    lg: {
      padding: '11px 22px',
      fontSize: 16
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      lineHeight: 1.1,
      ...sizes[size],
      ...tones[tone],
      ...style
    }
  }, iconLeft, children);
}
Object.assign(__ds_scope, { Capsule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Capsule.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Gutsy Women Foundation — Input
 * Text field with label, used across Apply / Contact / Newsletter.
 */
function Input({
  label,
  type = 'text',
  placeholder = '',
  value,
  defaultValue,
  onChange,
  required = false,
  hint = '',
  multiline = false,
  rows = 4,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldStyle = {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'var(--gwf-ink)',
    width: '100%',
    boxSizing: 'border-box',
    padding: '12px 16px',
    borderRadius: 'var(--radius-md)',
    background: '#fff',
    border: `1.5px solid ${focus ? 'var(--gwf-purple-500)' : 'var(--border-subtle)'}`,
    boxShadow: focus ? '0 0 0 4px rgba(91,45,142,0.12)' : 'none',
    outline: 'none',
    transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    resize: multiline ? 'vertical' : undefined
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--gwf-ink-soft)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gwf-magenta-600)'
    }
  }, " *")), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--gwf-ink-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * Gutsy Women Foundation — SectionHeading
 * Eyebrow + uppercase display title with optional gold swoosh underline.
 */
function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  onDark = false,
  swoosh = false,
  swooshWord = null,
  style = {}
}) {
  const titleColor = onDark ? '#fff' : 'var(--gwf-ink)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: onDark ? 'var(--gwf-gold-500)' : 'var(--gwf-magenta-600)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      fontSize: 'clamp(26px, 3vw, 40px)',
      lineHeight: 1.04,
      color: titleColor,
      margin: 0
    }
  }, swoosh && swooshWord ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-block'
    }
  }, swooshWord, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: '4%',
      bottom: 2,
      height: 7,
      background: 'var(--gwf-gold-500)',
      borderRadius: 7,
      transform: 'rotate(-1deg)'
    }
  })) : null, swoosh && swooshWord ? ' ' : '', title));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ProgramCard.jsx
try { (() => {
/**
 * Gutsy Women Foundation — ProgramCard
 * White squircle card with photo, status badge, title, meta and CTA.
 * Hover lifts.
 */
function ProgramCard({
  image,
  title,
  description,
  status = 'open',
  statusLabel = 'Applications Open',
  meta = [],
  ctaLabel = 'Learn More',
  onCta,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      transform: hover ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 188,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.05)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: status
  }, statusLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 22px 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      textTransform: 'uppercase',
      letterSpacing: '-0.01em',
      fontSize: 21,
      lineHeight: 1.1,
      color: 'var(--gwf-ink)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--gwf-ink-soft)',
      margin: 0
    }
  }, description), meta.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      marginTop: 2
    }
  }, meta.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--gwf-purple-700)'
    }
  }, m.icon, /*#__PURE__*/React.createElement("span", null, m.text)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onCta
  }, ctaLabel))));
}
Object.assign(__ds_scope, { ProgramCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ProgramCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/StatCard.jsx
try { (() => {
/**
 * Gutsy Women Foundation — StatCard
 * Big animated counter + label. Used in the homepage "About strip".
 */
function StatCard({
  value,
  suffix = '',
  label,
  accent = 'purple',
  animate = true,
  style = {}
}) {
  const accents = {
    purple: 'var(--gwf-purple-600)',
    gold: 'var(--gwf-gold-600)',
    magenta: 'var(--gwf-magenta-600)'
  };
  const target = typeof value === 'number' ? value : parseInt(value, 10) || 0;
  const [display, setDisplay] = React.useState(animate ? 0 : target);
  React.useEffect(() => {
    if (!animate) {
      setDisplay(target);
      return;
    }
    let raf;
    const start = performance.now();
    const dur = 1200;
    const tick = now => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, animate]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: '28px 26px',
      borderTop: `4px solid ${accents[accent]}`,
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(38px, 4.4vw, 56px)',
      lineHeight: 1,
      color: accents[accent],
      letterSpacing: '-0.02em',
      fontVariantNumeric: 'tabular-nums'
    }
  }, display.toLocaleString(), suffix), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 15,
      textTransform: 'uppercase',
      letterSpacing: '0.06em',
      color: 'var(--gwf-ink-soft)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* Gutsy Women Foundation — website app shell */
(() => {
  window.GWF = window.GWF || {};
  function App() {
    const G = window.GWF;
    const [view, setView] = React.useState('home');
    const [active, setActive] = React.useState('Home');
    const scrollRef = React.useRef(null);
    const openApply = () => {
      setView('apply');
      setActive('Apply');
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    };
    const goHome = () => {
      setView('home');
      setActive('Home');
    };
    const onNav = n => {
      if (n === 'Apply') return openApply();
      setActive(n);
      setView('home');
      requestAnimationFrame(() => {
        const map = {
          About: 'sec-stats',
          Programs: 'sec-featured',
          Blog: 'sec-testimonials',
          Contact: 'sec-footer',
          Home: 'sec-top'
        };
        const el = document.getElementById(map[n]);
        if (el && scrollRef.current) scrollRef.current.scrollTo({
          top: Math.max(0, el.offsetTop - 70),
          behavior: 'smooth'
        });
      });
    };
    return /*#__PURE__*/React.createElement("div", {
      ref: scrollRef,
      "data-kit-scroll": true,
      style: {
        height: '100vh',
        overflowY: 'auto',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("span", {
      id: "sec-top"
    }), /*#__PURE__*/React.createElement(G.Nav, {
      onApply: openApply,
      active: active,
      onNav: onNav
    }), view === 'home' ? /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(G.Hero, {
      onApply: openApply,
      onLearn: () => onNav('Programs')
    }), /*#__PURE__*/React.createElement("div", {
      id: "sec-stats"
    }, /*#__PURE__*/React.createElement(G.StatStrip, null)), /*#__PURE__*/React.createElement("div", {
      id: "sec-featured"
    }, /*#__PURE__*/React.createElement(G.Featured, {
      onApply: openApply
    })), /*#__PURE__*/React.createElement(G.WhatWeDo, null), /*#__PURE__*/React.createElement("div", {
      id: "sec-testimonials"
    }, /*#__PURE__*/React.createElement(G.Testimonials, null)), /*#__PURE__*/React.createElement(G.Partners, null), /*#__PURE__*/React.createElement(G.Newsletter, null)) : /*#__PURE__*/React.createElement("main", {
      style: {
        background: 'var(--gwf-purple-100)',
        minHeight: 'calc(100vh - 72px)',
        padding: 'clamp(32px,5vw,64px) clamp(16px,4vw,40px)'
      }
    }, /*#__PURE__*/React.createElement(G.Apply, {
      onClose: goHome
    })), /*#__PURE__*/React.createElement("div", {
      id: "sec-footer"
    }, /*#__PURE__*/React.createElement(G.Footer, {
      onNav: onNav
    })));
  }
  window.GWF.App = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Apply.jsx
try { (() => {
/* Gutsy Women Foundation — Multi-step application */
(() => {
  window.GWF = window.GWF || {};
  const {
    Button,
    Input,
    Capsule
  } = window.GutsyWomenFoundationDesignSystem_dd7d23;
  const Icon = window.GWF.Icon;
  const STEPS = ['Personal', 'Background', 'Motivation', 'Review'];
  function Apply({
    onClose
  }) {
    const [step, setStep] = React.useState(0);
    const [done, setDone] = React.useState(false);
    const [f, setF] = React.useState({
      name: '',
      age: '',
      location: '',
      email: '',
      phone: '',
      education: '',
      occupation: '',
      why: '',
      goals: ''
    });
    const set = k => e => setF(p => ({
      ...p,
      [k]: e.target.value
    }));
    const pct = (step + 1) / STEPS.length * 100;
    if (done) return /*#__PURE__*/React.createElement(Success, {
      onClose: onClose,
      name: f.name
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 720,
        margin: '0 auto',
        background: '#fff',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'linear-gradient(135deg,var(--gwf-purple-600),var(--gwf-purple-900))',
        padding: '28px clamp(24px,4vw,40px) 24px',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Capsule, {
      tone: "gold",
      size: "sm"
    }, "Cohort 2 Application"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: 26,
        margin: '14px 0 0'
      }
    }, STEPS[step], " details")), onClose && /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      style: {
        background: 'rgba(255,255,255,.14)',
        border: 'none',
        borderRadius: '50%',
        width: 38,
        height: 38,
        color: '#fff',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "x",
      size: 18
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        borderRadius: 8,
        background: 'rgba(255,255,255,.18)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        background: 'var(--gwf-gold-500)',
        borderRadius: 8,
        transition: 'width var(--dur-slow) var(--ease-out)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 10
      }
    }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        fontWeight: 600,
        color: i <= step ? 'var(--gwf-gold-500)' : 'rgba(255,255,255,.55)'
      }
    }, i + 1, ". ", s))))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'clamp(24px,4vw,40px)'
      }
    }, step === 0 && /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Input, {
      label: "Full name",
      placeholder: "Ama Mensah",
      value: f.name,
      onChange: set('name'),
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Age",
      type: "number",
      placeholder: "22",
      value: f.age,
      onChange: set('age')
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Location",
      placeholder: "Accra, Ghana",
      value: f.location,
      onChange: set('location'),
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@example.com",
      value: f.email,
      onChange: set('email'),
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Phone",
      placeholder: "+233 ...",
      value: f.phone,
      onChange: set('phone')
    })), step === 1 && /*#__PURE__*/React.createElement(Grid, null, /*#__PURE__*/React.createElement(Input, {
      label: "Highest education",
      placeholder: "BSc, University of Ghana",
      value: f.education,
      onChange: set('education')
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Current occupation",
      placeholder: "Student / Founder / Employed",
      value: f.occupation,
      onChange: set('occupation')
    })), step === 2 && /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 18
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Why do you want to join Cohort 2?",
      multiline: true,
      rows: 4,
      placeholder: "Tell us about the idea you want to build...",
      value: f.why,
      onChange: set('why'),
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "What goals do you hope to achieve?",
      multiline: true,
      rows: 4,
      placeholder: "Where do you want to be in 12 months?",
      value: f.goals,
      onChange: set('goals')
    })), step === 3 && /*#__PURE__*/React.createElement(Review, {
      f: f,
      onEdit: setStep
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 30,
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => step === 0 ? onClose && onClose() : setStep(step - 1)
    }, step === 0 ? 'Cancel' : 'Back'), step < STEPS.length - 1 ? /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      }),
      onClick: () => setStep(step + 1)
    }, "Continue") : /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 18
      }),
      onClick: () => setDone(true)
    }, "Submit Application"))));
  }
  function Grid({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 18
      },
      className: "kit-apply-grid"
    }, children);
  }
  function Review({
    f,
    onEdit
  }) {
    const rows = [['Personal', 0, [['Name', f.name], ['Age', f.age], ['Location', f.location], ['Email', f.email], ['Phone', f.phone]]], ['Background', 1, [['Education', f.education], ['Occupation', f.occupation]]], ['Motivation', 2, [['Why', f.why], ['Goals', f.goals]]]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, rows.map(([title, idx, items]) => /*#__PURE__*/React.createElement("div", {
      key: title,
      style: {
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-md)',
        padding: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: 15,
        color: 'var(--gwf-purple-700)'
      }
    }, title), /*#__PURE__*/React.createElement("a", {
      onClick: () => onEdit(idx),
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 13,
        color: 'var(--gwf-magenta-600)',
        cursor: 'pointer'
      }
    }, "Edit")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, items.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: 'flex',
        gap: 12,
        fontFamily: 'var(--font-body)',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 96,
        color: 'var(--gwf-ink-muted)',
        flexShrink: 0
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--gwf-ink)',
        fontWeight: 500
      }
    }, v || /*#__PURE__*/React.createElement("em", {
      style: {
        color: 'var(--gwf-ink-muted)',
        fontWeight: 400
      }
    }, "\u2014"))))))));
  }
  function Success({
    onClose,
    name
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 560,
        margin: '0 auto',
        background: '#fff',
        borderRadius: 'var(--radius-xl)',
        boxShadow: 'var(--shadow-lg)',
        padding: 'clamp(36px,5vw,56px)',
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 76,
        height: 76,
        borderRadius: '50%',
        background: 'var(--gwf-purple-100)',
        color: 'var(--gwf-purple-600)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 40
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: 30,
        color: 'var(--gwf-ink)',
        margin: '22px 0 0'
      }
    }, "Application received!"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        lineHeight: 1.6,
        color: 'var(--gwf-ink-soft)',
        margin: '12px 0 0'
      }
    }, "Thank you", name ? `, ${name.split(' ')[0]}` : '', ". We've received your Cohort 2 application and will be in touch by email soon. Keep building."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        marginTop: 26
      }
    }, ['facebook', 'twitter', 'instagram', 'linkedin'].map(s => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        width: 42,
        height: 42,
        borderRadius: '50%',
        background: 'var(--gwf-purple-100)',
        color: 'var(--gwf-purple-700)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s,
      size: 19
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: onClose
    }, "Back to Home")));
  }
  window.GWF.Apply = Apply;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Apply.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Gutsy Women Foundation — Footer */
(() => {
  window.GWF = window.GWF || {};
  const Icon = window.GWF.Icon;
  const SOCIALS = ['facebook', 'twitter', 'instagram', 'music', 'linkedin'];
  const COLS = [{
    h: 'Explore',
    items: ['Home', 'About', 'Programs', 'Blog', 'Contact']
  }, {
    h: 'Programs',
    items: ['Masterclass', 'Bootcamps', 'Webinars', 'Apply']
  }];
  function Footer({
    onNav
  }) {
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: 'var(--gwf-purple-900)',
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'clamp(48px,6vw,72px) clamp(16px,4vw,40px) 32px',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
        gap: 'clamp(28px,4vw,48px)'
      },
      className: "kit-footer-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-lockup.png",
      alt: "Gutsy Women Foundation",
      style: {
        height: 46,
        filter: 'brightness(0) invert(1)',
        opacity: 0.96
      }
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.6,
        color: 'rgba(255,255,255,.65)',
        margin: '18px 0 0',
        maxWidth: 280
      }
    }, "Leveling the playing field for young women in Ghana \u2014 through mentorship, training and community."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        marginTop: 22
      }
    }, SOCIALS.map(s => /*#__PURE__*/React.createElement(Social, {
      key: s,
      name: s
    })))), COLS.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.h
    }, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--gwf-gold-500)',
        margin: '0 0 16px'
      }
    }, c.h), /*#__PURE__*/React.createElement("ul", {
      style: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 11
      }
    }, c.items.map(it => /*#__PURE__*/React.createElement("li", {
      key: it
    }, /*#__PURE__*/React.createElement(FooterLink, {
      label: it,
      onClick: () => onNav && onNav(it)
    })))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: 'var(--gwf-gold-500)',
        margin: '0 0 16px'
      }
    }, "Get in touch"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "mailto:gutsywomenfoundation@gmail.com",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        color: 'rgba(255,255,255,.8)',
        textDecoration: 'none',
        fontFamily: 'var(--font-body)',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 17,
      color: "var(--gwf-gold-500)"
    }), " gutsywomenfoundation@gmail.com"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        color: 'rgba(255,255,255,.8)',
        fontFamily: 'var(--font-body)',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 17,
      color: "var(--gwf-gold-500)"
    }), " Yota East, Legon \xB7 Accra"), /*#__PURE__*/React.createElement("a", {
      href: "https://www.gutsywomenfoundation.org",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        color: 'rgba(255,255,255,.8)',
        textDecoration: 'none',
        fontFamily: 'var(--font-body)',
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 17,
      color: "var(--gwf-gold-500)"
    }), " www.gutsywomenfoundation.org")))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid rgba(255,255,255,.12)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '20px clamp(16px,4vw,40px)',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: 'rgba(255,255,255,.5)'
      }
    }, "\xA9 2026 Gutsy Women Foundation. All rights reserved."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: 'rgba(255,255,255,.5)'
      }
    }, "Leveling the Playing Field"))));
  }
  function Social({
    name
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => e.preventDefault(),
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        width: 38,
        height: 38,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: h ? 'var(--gwf-gold-500)' : 'rgba(255,255,255,.1)',
        color: h ? 'var(--gwf-ink)' : '#fff',
        transition: 'all var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: name,
      size: 18
    }));
  }
  function FooterLink({
    label,
    onClick
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      onClick: onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        color: h ? 'var(--gwf-gold-500)' : 'rgba(255,255,255,.72)',
        cursor: 'pointer',
        transition: 'color var(--dur-fast)'
      }
    }, label);
  }
  window.GWF.Footer = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Gutsy Women Foundation — Hero */
(() => {
  window.GWF = window.GWF || {};
  const {
    Button,
    Capsule
  } = window.GutsyWomenFoundationDesignSystem_dd7d23;
  const Icon = window.GWF.Icon;
  function Hero({
    onApply,
    onLearn
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        background: 'linear-gradient(145deg,var(--gwf-purple-700) 0%,var(--gwf-purple-900) 70%)',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: -120,
        right: -80,
        width: 360,
        height: 360,
        borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(245,197,24,.18),transparent 70%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: -140,
        left: -100,
        width: 380,
        height: 380,
        borderRadius: '50%',
        background: 'radial-gradient(circle,rgba(194,24,91,.22),transparent 70%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'clamp(48px,7vw,96px) clamp(16px,4vw,40px)',
        display: 'grid',
        gridTemplateColumns: '1.05fr 0.95fr',
        gap: 'clamp(28px,5vw,72px)',
        alignItems: 'center',
        position: 'relative'
      },
      className: "kit-hero-grid"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Capsule, {
      tone: "outline",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "sparkles",
        size: 15
      })
    }, "Cohort 2 \xB7 Applications Open")), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 'clamp(40px,6vw,72px)',
        lineHeight: 0.98,
        letterSpacing: '-0.015em',
        margin: '20px 0 0'
      }
    }, "Leveling", /*#__PURE__*/React.createElement("br", null), "the", ' ', /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative',
        display: 'inline-block',
        color: 'var(--gwf-gold-500)'
      }
    }, "Playing", /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: '2%',
        bottom: 4,
        height: 9,
        background: 'var(--gwf-gold-500)',
        borderRadius: 8,
        opacity: 0.35,
        transform: 'rotate(-1.2deg)'
      }
    })), ' ', "Field"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'clamp(16px,1.4vw,19px)',
        lineHeight: 1.55,
        color: 'rgba(255,255,255,.82)',
        maxWidth: 460,
        margin: '20px 0 0'
      }
    }, "We empower young women across Ghana with the mentorship, training and networks to move beyond dreaming \u2014 and start building."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        flexWrap: 'wrap',
        marginTop: 30
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      }),
      onClick: onApply
    }, "Apply Now"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline-light",
      size: "lg",
      onClick: onLearn
    }, "Learn More")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 26,
        marginTop: 36
      }
    }, /*#__PURE__*/React.createElement(MiniStat, {
      n: "2",
      l: "Cohorts Run"
    }), /*#__PURE__*/React.createElement(Div, null), /*#__PURE__*/React.createElement(MiniStat, {
      n: "250+",
      l: "Women Empowered"
    }), /*#__PURE__*/React.createElement(Div, null), /*#__PURE__*/React.createElement(MiniStat, {
      n: "18",
      l: "Partners"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 380
      },
      className: "kit-hero-photos"
    }, /*#__PURE__*/React.createElement(Photo, {
      src: "../../assets/event-audience.jpg",
      style: {
        position: 'absolute',
        top: 0,
        right: 28,
        width: '74%',
        height: 250,
        transform: 'rotate(2.5deg)',
        zIndex: 2
      }
    }), /*#__PURE__*/React.createElement(Photo, {
      src: "../../assets/event-participant.jpg",
      style: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '62%',
        height: 220,
        transform: 'rotate(-3deg)',
        zIndex: 3
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: 26,
        right: 0,
        zIndex: 4
      }
    }, /*#__PURE__*/React.createElement(Capsule, {
      tone: "magenta",
      size: "lg",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "map-pin",
        size: 16
      })
    }, "Yota East, Legon")))));
  }
  function Photo({
    src,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-pop)',
        border: '4px solid rgba(255,255,255,.85)',
        ...style
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }));
  }
  function MiniStat({
    n,
    l
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 28,
        color: 'var(--gwf-gold-500)',
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 12,
        color: 'rgba(255,255,255,.7)',
        marginTop: 4,
        textTransform: 'uppercase',
        letterSpacing: '0.06em'
      }
    }, l));
  }
  function Div() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 1,
        background: 'rgba(255,255,255,.2)'
      }
    });
  }
  window.GWF.Hero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Icon.jsx
try { (() => {
/* Gutsy Women Foundation — icon set.
   Real Lucide (lucide.dev) 24×24 line icons, inlined for reliable React rendering. */
(() => {
  window.GWF = window.GWF || {};
  const e = React.createElement;
  const P = {
    'arrow-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M5 12h14"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m12 5 7 7-7 7"
    })),
    'arrow-up-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M7 7h10v10"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M7 17 17 7"
    })),
    calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      width: "18",
      height: "18",
      x: "3",
      y: "4",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 2v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8 2v4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 10h18"
    })),
    'map-pin': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "10",
      r: "3"
    })),
    clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }), /*#__PURE__*/React.createElement("polyline", {
      points: "12 6 12 12 16 14"
    })),
    mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      width: "20",
      height: "16",
      x: "2",
      y: "4",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
    })),
    users: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 21v-2a4 4 0 0 0-3-3.87"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })),
    'graduation-cap': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M22 10v6"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5"
    })),
    'share-2': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "5",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "12",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "19",
      r: "3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "8.59",
      x2: "15.42",
      y1: "13.51",
      y2: "17.49"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "15.41",
      x2: "8.59",
      y1: "6.51",
      y2: "10.49"
    })),
    award: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "8",
      r: "6"
    })),
    sparkles: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
    })),
    check: /*#__PURE__*/React.createElement("path", {
      d: "M20 6 9 17l-5-5"
    }),
    'chevron-left': /*#__PURE__*/React.createElement("path", {
      d: "m15 18-6-6 6-6"
    }),
    'chevron-right': /*#__PURE__*/React.createElement("path", {
      d: "m9 18 6-6-6-6"
    }),
    x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m6 6 12 12"
    })),
    facebook: /*#__PURE__*/React.createElement("path", {
      d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
    }),
    instagram: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
      width: "20",
      height: "20",
      x: "2",
      y: "2",
      rx: "5",
      ry: "5"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "17.5",
      x2: "17.51",
      y1: "6.5",
      y2: "6.5"
    })),
    linkedin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
    }), /*#__PURE__*/React.createElement("rect", {
      width: "4",
      height: "12",
      x: "2",
      y: "9"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "4",
      cy: "4",
      r: "2"
    })),
    twitter: /*#__PURE__*/React.createElement("path", {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
    }),
    music: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M9 18V5l12-2v13"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "6",
      cy: "18",
      r: "3"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "18",
      cy: "16",
      r: "3"
    }))
  };
  function Icon({
    name,
    size = 20,
    color = 'currentColor',
    strokeWidth = 2,
    style = {}
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: {
        display: 'block',
        flexShrink: 0,
        ...style
      },
      "aria-hidden": "true"
    }, P[name] || null);
  }
  window.GWF.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Gutsy Women Foundation — Navbar */
(() => {
  window.GWF = window.GWF || {};
  const {
    Button
  } = window.GutsyWomenFoundationDesignSystem_dd7d23;
  const NAV = ['Home', 'About', 'Programs', 'Blog', 'Contact'];
  function Nav({
    onApply,
    active = 'Home',
    onNav
  }) {
    const [scrolled, setScrolled] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const el = document.querySelector('[data-kit-scroll]');
      if (!el) return;
      const onScroll = () => setScrolled(el.scrollTop > 12);
      el.addEventListener('scroll', onScroll);
      return () => el.removeEventListener('scroll', onScroll);
    }, []);
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 40,
        background: scrolled ? 'rgba(255,255,255,0.9)' : '#fff',
        backdropFilter: scrolled ? 'saturate(160%) blur(10px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
        transition: 'background var(--dur-base), border-color var(--dur-base)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 clamp(16px,4vw,40px)',
        height: 72,
        display: 'flex',
        alignItems: 'center',
        gap: 24
      }
    }, /*#__PURE__*/React.createElement("a", {
      onClick: () => onNav && onNav('Home'),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
        textDecoration: 'none'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-lockup.png",
      alt: "Gutsy Women Foundation",
      style: {
        height: 42
      }
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        gap: 28,
        alignItems: 'center'
      },
      className: "kit-desktop-nav"
    }, NAV.map(n => /*#__PURE__*/React.createElement(NavLink, {
      key: n,
      label: n,
      active: active === n,
      onClick: () => onNav && onNav(n)
    }))), /*#__PURE__*/React.createElement("div", {
      className: "kit-desktop-nav"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      size: "sm",
      onClick: onApply
    }, "Apply Now")), /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(true),
      className: "kit-mobile-toggle",
      style: {
        marginLeft: 'auto',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--gwf-purple-700)'
      },
      "aria-label": "Menu"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "26",
      height: "26",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "4",
      x2: "20",
      y1: "6",
      y2: "6"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      x2: "20",
      y1: "12",
      y2: "12"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "4",
      x2: "20",
      y1: "18",
      y2: "18"
    })))), open && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        background: 'linear-gradient(150deg,var(--gwf-purple-600),var(--gwf-purple-900))',
        display: 'flex',
        flexDirection: 'column',
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(false),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#fff'
      },
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement("svg", {
      width: "28",
      height: "28",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 6 6 18"
    }), /*#__PURE__*/React.createElement("path", {
      d: "m6 6 12 12"
    })))), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        marginTop: 24,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n,
      onClick: () => {
        onNav && onNav(n);
        setOpen(false);
      },
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: 30,
        color: active === n ? 'var(--gwf-gold-500)' : '#fff',
        cursor: 'pointer'
      }
    }, n)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      size: "lg",
      onClick: () => {
        setOpen(false);
        onApply();
      }
    }, "Apply Now")))));
  }
  function NavLink({
    label,
    active,
    onClick
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("a", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 15,
        cursor: 'pointer',
        color: active ? 'var(--gwf-purple-700)' : hover ? 'var(--gwf-gold-600)' : 'var(--gwf-ink-soft)',
        position: 'relative',
        paddingBottom: 4,
        transition: 'color var(--dur-fast)'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        height: 2.5,
        width: active || hover ? '100%' : '0%',
        background: active ? 'var(--gwf-purple-600)' : 'var(--gwf-gold-500)',
        borderRadius: 2,
        transition: 'width var(--dur-base) var(--ease-out)'
      }
    }));
  }
  window.GWF.Nav = Nav;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Gutsy Women Foundation — homepage sections */
(() => {
  window.GWF = window.GWF || {};
  const NS = window.GutsyWomenFoundationDesignSystem_dd7d23;
  const {
    Button,
    Capsule,
    StatCard,
    SectionHeading
  } = NS;
  const Icon = window.GWF.Icon;
  const wrap = {
    maxWidth: 'var(--container-max)',
    margin: '0 auto',
    padding: '0 clamp(16px,4vw,40px)'
  };
  function StatStrip() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: 'var(--gwf-purple-100)',
        padding: 'clamp(40px,6vw,72px) 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 22
      },
      className: "kit-stat-grid"
    }, /*#__PURE__*/React.createElement(StatCard, {
      value: 2,
      label: "Cohorts Run",
      accent: "purple"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: 250,
      suffix: "+",
      label: "Women Empowered",
      accent: "gold"
    }), /*#__PURE__*/React.createElement(StatCard, {
      value: 18,
      label: "Partner Organisations",
      accent: "magenta"
    })));
  }
  function Featured({
    onApply
  }) {
    const facts = [{
      icon: 'calendar',
      text: '5th – 7th August 2026'
    }, {
      icon: 'clock',
      text: '8:00AM Each Day'
    }, {
      icon: 'map-pin',
      text: 'Yota East, Legon'
    }];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'clamp(56px,8vw,104px) 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        background: 'linear-gradient(135deg,var(--gwf-purple-600),var(--gwf-purple-900))',
        boxShadow: 'var(--shadow-lg)',
        display: 'grid',
        gridTemplateColumns: '1fr 0.85fr'
      },
      className: "kit-featured"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 'clamp(32px,4vw,56px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Capsule, {
      tone: "gold",
      size: "sm"
    }, "Featured Programme"), /*#__PURE__*/React.createElement(Capsule, {
      tone: "outline",
      size: "sm"
    }, "Cohort 2")), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        textTransform: 'uppercase',
        color: '#fff',
        fontSize: 'clamp(26px,3vw,40px)',
        lineHeight: 1.04,
        margin: '18px 0 0'
      }
    }, "Mentorship Program", /*#__PURE__*/React.createElement("br", null), "Masterclass"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontWeight: 800,
        color: 'var(--gwf-gold-500)',
        fontSize: 'clamp(15px,1.6vw,20px)',
        margin: '14px 0 0',
        textTransform: 'uppercase',
        letterSpacing: '0.02em'
      }
    }, "Ignite \u2022 Build \u2022 Scale"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        color: 'rgba(255,255,255,.82)',
        fontSize: 16,
        lineHeight: 1.6,
        margin: '8px 0 0',
        maxWidth: 420
      }
    }, "Turning Dreams Into Reality. For young women ready to move beyond dreaming and start building."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        margin: '26px 0 30px'
      }
    }, facts.map(f => /*#__PURE__*/React.createElement("div", {
      key: f.text,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        color: '#fff'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: 'rgba(255,255,255,.12)',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--gwf-gold-500)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: f.icon,
      size: 18
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 15.5
      }
    }, f.text)))), /*#__PURE__*/React.createElement(Button, {
      variant: "gold",
      size: "lg",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 18
      }),
      onClick: onApply
    }, "Apply Now")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        minHeight: 360
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/flyer-cohort2-alt.jpg",
      alt: "Cohort 2 masterclass flyer",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })))));
  }
  const PILLARS = [{
    icon: 'users',
    title: 'Mentorship',
    body: 'One-to-one guidance from women who have built and led.'
  }, {
    icon: 'graduation-cap',
    title: 'Training',
    body: 'Practical masterclasses that turn ideas into action plans.'
  }, {
    icon: 'share-2',
    title: 'Networking',
    body: 'A community of ambitious peers, partners and sponsors.'
  }, {
    icon: 'award',
    title: 'Leadership',
    body: 'Confidence and skills to lead in business and community.'
  }];
  function WhatWeDo() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'clamp(56px,8vw,104px) 0',
        background: 'var(--gwf-purple-100)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "What We Do",
      title: "Our Four Pillars",
      align: "center"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gap: 20,
        marginTop: 44
      },
      className: "kit-pillar-grid"
    }, PILLARS.map((p, i) => /*#__PURE__*/React.createElement(Pillar, _extends({
      key: p.title
    }, p, {
      accent: ['purple', 'gold', 'magenta', 'purple'][i]
    }))))));
  }
  function Pillar({
    icon,
    title,
    body,
    accent
  }) {
    const [hover, setHover] = React.useState(false);
    const c = {
      purple: 'var(--gwf-purple-600)',
      gold: 'var(--gwf-gold-500)',
      magenta: 'var(--gwf-magenta-600)'
    }[accent];
    const bg = accent === 'gold' ? 'var(--gwf-gold-100)' : accent === 'magenta' ? 'var(--gwf-magenta-100)' : 'var(--gwf-purple-100)';
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        background: '#fff',
        borderRadius: 'var(--radius-lg)',
        padding: '28px 24px',
        boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-md)',
        transform: hover ? 'translateY(-6px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 54,
        height: 54,
        borderRadius: 16,
        background: bg,
        color: c,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 26
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: 19,
        color: 'var(--gwf-ink)',
        margin: '18px 0 8px'
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.55,
        color: 'var(--gwf-ink-soft)',
        margin: 0
      }
    }, body));
  }
  const QUOTES = [{
    q: 'Cohort 1 gave me the courage and the network to finally launch. I stopped dreaming and started building.',
    n: 'Akosua D.',
    r: 'Founder, Cohort 1',
    img: '../../assets/event-participant.jpg'
  }, {
    q: 'The mentorship was real and personal. My mentor still checks in on my goals months later.',
    n: 'Efua B.',
    r: 'Participant, Cohort 1',
    img: '../../assets/event-audience.jpg'
  }, {
    q: 'I walked in with an idea and walked out with a plan, a team and partners who believe in it.',
    n: 'Naa K.',
    r: 'Founder, Cohort 1',
    img: '../../assets/event-hero.jpg'
  }];
  function Testimonials() {
    const [i, setI] = React.useState(0);
    const go = d => setI(p => (p + d + QUOTES.length) % QUOTES.length);
    const t = QUOTES[i];
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'clamp(56px,8vw,104px) 0',
        background: 'linear-gradient(160deg,var(--gwf-purple-700),var(--gwf-purple-900))'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        ...wrap,
        maxWidth: 880,
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement(SectionHeading, {
      eyebrow: "Voices",
      title: "From Our Cohorts",
      align: "center",
      onDark: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        marginTop: 44
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 120,
        lineHeight: 0.6,
        color: 'var(--gwf-gold-500)',
        opacity: 0.5,
        display: 'block',
        height: 56
      }
    }, "\u201C"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        color: '#fff',
        fontSize: 'clamp(20px,2.4vw,30px)',
        lineHeight: 1.3,
        margin: '0 auto',
        maxWidth: 720
      }
    }, t.q), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: t.img,
      alt: t.n,
      style: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        objectFit: 'cover',
        border: '3px solid var(--gwf-gold-500)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        color: '#fff',
        fontSize: 15
      }
    }, t.n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 13,
        color: 'rgba(255,255,255,.65)'
      }
    }, t.r))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(RoundBtn, {
      onClick: () => go(-1),
      name: "chevron-left"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 7,
        alignItems: 'center'
      }
    }, QUOTES.map((_, k) => /*#__PURE__*/React.createElement("span", {
      key: k,
      onClick: () => setI(k),
      style: {
        width: k === i ? 22 : 8,
        height: 8,
        borderRadius: 8,
        background: k === i ? 'var(--gwf-gold-500)' : 'rgba(255,255,255,.35)',
        cursor: 'pointer',
        transition: 'width var(--dur-base)'
      }
    }))), /*#__PURE__*/React.createElement(RoundBtn, {
      onClick: () => go(1),
      name: "chevron-right"
    })))));
  }
  function RoundBtn({
    onClick,
    name
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        width: 44,
        height: 44,
        borderRadius: '50%',
        border: '2px solid rgba(255,255,255,.4)',
        background: h ? '#fff' : 'transparent',
        color: h ? 'var(--gwf-purple-700)' : '#fff',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all var(--dur-fast)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: name,
      size: 20
    }));
  }
  const PARTNERS = ['ENABLE', 'IDEA HUB', 'LEGON', 'ACCRA TECH', 'BLOOM', 'ASCEND', 'YOTA'];
  function Partners() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: 'clamp(44px,6vw,72px) 0',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        textAlign: 'center',
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 13,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        color: 'var(--gwf-ink-muted)',
        margin: '0 0 28px'
      }
    }, "Partners & Sponsors"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'clamp(20px,5vw,56px)',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }, PARTNERS.map(p => /*#__PURE__*/React.createElement("span", {
      key: p,
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        fontSize: 20,
        color: 'var(--gwf-purple-300)',
        letterSpacing: '0.04em'
      }
    }, p)))));
  }
  function Newsletter() {
    const [email, setEmail] = React.useState('');
    const [done, setDone] = React.useState(false);
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: '0 0 clamp(64px,8vw,104px)',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: wrap
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 'var(--radius-xl)',
        background: 'var(--gwf-gold-500)',
        padding: 'clamp(32px,5vw,56px)',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        gap: 32,
        alignItems: 'center',
        boxShadow: 'var(--shadow-md)'
      },
      className: "kit-news"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 800,
        textTransform: 'uppercase',
        fontSize: 'clamp(24px,3vw,36px)',
        lineHeight: 1.05,
        color: 'var(--gwf-ink)',
        margin: 0
      }
    }, "Stay in the loop"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        color: 'rgba(26,26,46,.78)',
        margin: '10px 0 0',
        maxWidth: 380
      }
    }, "Get cohort openings, events and impact stories straight to your inbox.")), /*#__PURE__*/React.createElement("div", null, done ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        color: 'var(--gwf-purple-700)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 20
    }), " You're subscribed \u2014 thank you!") : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        if (email) setDone(true);
      },
      style: {
        display: 'flex',
        gap: 10,
        background: '#fff',
        padding: 6,
        borderRadius: 'var(--radius-pill)',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      value: email,
      onChange: e => setEmail(e.target.value),
      type: "email",
      required: true,
      placeholder: "you@example.com",
      style: {
        flex: 1,
        border: 'none',
        outline: 'none',
        padding: '12px 18px',
        fontFamily: 'var(--font-body)',
        fontSize: 15,
        background: 'transparent',
        color: 'var(--gwf-ink)'
      }
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      type: "submit"
    }, "Subscribe"))))));
  }
  Object.assign(window.GWF, {
    StatStrip,
    Featured,
    WhatWeDo,
    Testimonials,
    Partners,
    Newsletter
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Capsule = __ds_scope.Capsule;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.ProgramCard = __ds_scope.ProgramCard;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
