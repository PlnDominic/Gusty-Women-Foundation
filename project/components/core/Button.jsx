import React from 'react';

/**
 * Gutsy Women Foundation — Button
 * Pill-shaped CTA. Primary = purple fill; secondary = outlined purple;
 * gold / magenta for emphasis; ghost for low-priority.
 */
export function Button({
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
    sm: { padding: '8px 16px', fontSize: 14 },
    md: { padding: '12px 24px', fontSize: 15 },
    lg: { padding: '16px 32px', fontSize: 17 },
  };
  const variants = {
    primary: { background: 'var(--gwf-purple-600)', color: '#fff', border: '2px solid var(--gwf-purple-600)' },
    secondary: { background: 'transparent', color: 'var(--gwf-purple-600)', border: '2px solid var(--gwf-purple-600)' },
    gold: { background: 'var(--gwf-gold-500)', color: 'var(--gwf-ink)', border: '2px solid var(--gwf-gold-500)' },
    magenta: { background: 'var(--gwf-magenta-600)', color: '#fff', border: '2px solid var(--gwf-magenta-600)' },
    'on-dark': { background: '#fff', color: 'var(--gwf-purple-700)', border: '2px solid #fff' },
    'outline-light': { background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,.85)' },
    ghost: { background: 'transparent', color: 'var(--gwf-purple-600)', border: '2px solid transparent' },
  };
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);

  const hoverShift = {
    primary: { background: 'var(--gwf-purple-700)', borderColor: 'var(--gwf-purple-700)' },
    secondary: { background: 'var(--gwf-purple-600)', color: '#fff' },
    gold: { background: 'var(--gwf-gold-600)', borderColor: 'var(--gwf-gold-600)' },
    magenta: { background: 'var(--gwf-magenta-700)', borderColor: 'var(--gwf-magenta-700)' },
    'on-dark': { background: 'var(--gwf-purple-100)' },
    'outline-light': { background: 'rgba(255,255,255,.14)' },
    ghost: { background: 'var(--gwf-purple-100)' },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      style={{
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
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
