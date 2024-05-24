const App = {
  init: function () {
    App.animate();
  },

  animate: function () {
    function whichTransitionEvent() {
      let t;
      const el = document.createElement("fake");
      const transitions = {
        transition: "transitionend",
        OTransition: "oTransitionEnd",
        MozTransition: "transitionend",
        WebkitTransition: "webkitTransitionEnd",
      };

      for (t in transitions) {
        if (el.style[t] !== undefined) {
          return transitions[t];
        }
      }
    }

    function playSound() {
      console.log("Play");
      audio.currentTime = 0;
      audio.play();
    }

    const audio = document.querySelector(`audio`);
    const onOffElement = document.querySelector(".on-off");
    const power = document.querySelector(".power");
    const text = document.querySelector(".animated-text");

    onOffElement.textContent = "<OFF-ON>";
    setTimeout(() => {
      onOffElement.classList.add("on");
    }, 500);

    power.classList.add("power-on");

    const transitionEvent = whichTransitionEvent();
    text.classList.add("end");
    text.addEventListener(transitionEvent, playSound);
  },
};

window.addEventListener("load", (event) => {
  App.init();
});
