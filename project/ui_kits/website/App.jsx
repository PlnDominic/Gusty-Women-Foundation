/* Gutsy Women Foundation — website app shell */
(() => {
  window.GWF = window.GWF || {};
  function App() {
    const G = window.GWF;
    const [view, setView] = React.useState('home');
    const [active, setActive] = React.useState('Home');
    const scrollRef = React.useRef(null);

    const openApply = () => { setView('apply'); setActive('Apply'); if (scrollRef.current) scrollRef.current.scrollTop = 0; };
    const goHome = () => { setView('home'); setActive('Home'); };

    const onNav = (n) => {
      if (n === 'Apply') return openApply();
      setActive(n);
      setView('home');
      requestAnimationFrame(() => {
        const map = { About: 'sec-stats', Programs: 'sec-featured', Blog: 'sec-testimonials', Contact: 'sec-footer', Home: 'sec-top' };
        const el = document.getElementById(map[n]);
        if (el && scrollRef.current) scrollRef.current.scrollTo({ top: Math.max(0, el.offsetTop - 70), behavior: 'smooth' });
      });
    };

    return (
      <div ref={scrollRef} data-kit-scroll style={{ height: '100vh', overflowY: 'auto', background: '#fff' }}>
        <span id="sec-top" />
        <G.Nav onApply={openApply} active={active} onNav={onNav} />
        {view === 'home' ? (
          <main>
            <G.Hero onApply={openApply} onLearn={() => onNav('Programs')} />
            <div id="sec-stats"><G.StatStrip /></div>
            <div id="sec-featured"><G.Featured onApply={openApply} /></div>
            <G.WhatWeDo />
            <div id="sec-testimonials"><G.Testimonials /></div>
            <G.Partners />
            <G.Newsletter />
          </main>
        ) : (
          <main style={{ background: 'var(--gwf-purple-100)', minHeight: 'calc(100vh - 72px)', padding: 'clamp(32px,5vw,64px) clamp(16px,4vw,40px)' }}>
            <G.Apply onClose={goHome} />
          </main>
        )}
        <div id="sec-footer"><G.Footer onNav={onNav} /></div>
      </div>
    );
  }
  window.GWF.App = App;
})();
