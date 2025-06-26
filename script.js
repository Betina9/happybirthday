document.addEventListener("DOMContentLoaded", function () {
  const age = parseInt(document.querySelector("#age").textContent);
  const candlesContainer = document.querySelector("#candles");
  const message = document.querySelector("#message");

  // Lag lys
  for (let i = 0; i < age; i++) {
    const candle = document.createElement("span");
    candle.classList.add("candle");
    candle.textContent = "🕯️";
    candlesContainer.appendChild(candle);
  }

  // Blås ut
  document.querySelector("#blowOutBtn").addEventListener("click", () => {
    const candles = document.querySelectorAll(".candle");

    candles.forEach((candle) => {
      // Fjern flammen
      candle.style.opacity = 0;

      // Legg til røyk
      const smoke = document.createElement("span");
      smoke.classList.add("smoke");
      smoke.textContent = "💨";
      candle.appendChild(smoke);
    });

    message.textContent = "Lysene er blåst ut! 🎉";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("birthdayMusic");
  const muteToggle = document.getElementById("muteToggle");
  const volumeSlider = document.getElementById("volumeSlider");
  const playMusicBtn = document.getElementById("playMusic");

  // Start musikk etter brukerklikk
  playMusicBtn.addEventListener("click", () => {
    audio.play();
    playMusicBtn.disabled = true;
    playMusicBtn.textContent = "🎶 Spiller";
  });

  // Mute / unmute
  muteToggle.addEventListener("click", () => {
    audio.muted = !audio.muted;
    muteToggle.textContent = audio.muted ? "🔇 Slå på lyd" : "🔊 Slå av lyd";
  });

  // Volum
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });
});
