(function () {
  var audio = document.getElementById('ww-outro');
  if (!audio) return;
  function playOutro() {
    try {
      audio.currentTime = 0;
      var p = audio.play();
      if (p && p.catch) p.catch(function () {});
    } catch (e) {}
  }
  playOutro();
  var unlocked = false;
  function unlockAndPlay() {
    if (!unlocked) {
      unlocked = true;
      playOutro();
    }
  }
  document.addEventListener('pointerdown', unlockAndPlay, { once: true, passive: true });
  document.addEventListener('keydown', unlockAndPlay, { once: true });
  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', playOutro);
  });
})();
