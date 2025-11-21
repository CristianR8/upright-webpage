;(function () {
  // Si la animación ya terminó al menos una vez,
  // no volvemos a reproducirla: solo aplicamos el estado final.
  if (window.__rocketDone) {
    try {
      if (window.TweenMax) {
        TweenMax.set("#rocket", { y: -10, rotation: 40 });
        TweenMax.set(".takeoff", { y: -300, opacity: 0 });
        TweenMax.set(".stars", { opacity: 0 });
        TweenMax.set(".stars2", { opacity: 1 });
        TweenMax.set(".smoke", { opacity: 0, y: -20, scale: 1 });
        TweenMax.set(".artboard", { rotation: 40 });
      }
    } catch (e) {
      // silencioso: si algo falla, simplemente no aplicamos overrides
    }
    return;
  }

  // Evita inicializaciones duplicadas en React Strict Mode (dev)
  if (window.__rocketTL) {
    try {
      window.__rocketTL.kill();
    } catch (e) {}
    window.__rocketTL = null;
  }

  var tl = new TimelineMax({
    onComplete: function () {
      // Marcamos que ya se ejecutó completamente al menos una vez
      window.__rocketDone = true;
    },
  });

  tl.addLabel("start", 0)
    .add(
      TweenMax.from(".takeoff", 0.5, {
        scaleY: 0,
        y: -200,
        ease: Expo.easeInOut,
        delay: 3,
      })
    )
    .add(TweenMax.to("#rocket", 1, { className: "+=shake", delay: -1 }))
    .add(TweenMax.to(".smoke", 2, { y: -50, delay: 1 }))
    .add(TweenMax.to("#rocket", 1, { className: "-=shake" }))
    .add(TweenMax.to("#rocket", 1, { y: -300, delay: -1 }))
    .add(TweenMax.to(".takeoff", 1, { y: -300, delay: -1 }))
    .add(TweenMax.to(".smoke", 5, { scale: 1, y: -20, delay: -1 }))
    .add(TweenMax.to("#rocket", 1, { y: -10, rotate: 40, delay: -3 }))
    .add(TweenMax.to(".takeoff", 0.2, { opacity: 0, delay: -3 }))
    .add(TweenMax.to(".stars", 0.2, { opacity: 0, delay: -3 }))
    .add(TweenMax.from(".stars2", 0.2, { opacity: 0, delay: -3 }))
    .add(TweenMax.to(".artboard", 0.2, { rotation: 40, delay: -3 }))
    .add(TweenMax.to(".smoke", 2, { opacity: 0, delay: -2 }));

  window.__rocketTL = tl;
})();
