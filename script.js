(function () {
  const KEY = "clickCounter.value";
  const elCount = document.getElementById("count");
  const incBtn = document.getElementById("incBtn");
  const decBtn = document.getElementById("decBtn");
  const resetBtn = document.getElementById("resetBtn");

  // načítaj uloženú hodnotu
  let value = 0;
  const saved = localStorage.getItem(KEY);
  if (saved !== null && !isNaN(parseInt(saved))) {
    value = parseInt(saved);
  }

  function render() {
    elCount.textContent = value;
  }

  function save() {
    localStorage.setItem(KEY, value);
  }

  incBtn.addEventListener("click", () => {
    value += 1;
    render();
    save();
  });

  decBtn.addEventListener("click", () => {
    value -= 1;
    render();
    save();
  });

  resetBtn.addEventListener("click", () => {
    if (confirm("Naozaj chceš vynulovať počítadlo?")) {
      value = 0;
      render();
      save();
    }
  });

  render();
})();


(function () {
  const KEY = "clickCounter.value";
  const elCount = document.getElementById("count");
  const incBtn = document.getElementById("incBtn");
  const decBtn = document.getElementById("decBtn");
  const resetBtn = document.getElementById("resetBtn");

  let value = 0;
  const saved = localStorage.getItem(KEY);
  if (saved !== null && !isNaN(parseInt(saved))) {
    value = parseInt(saved);
  }

  function render() {
    elCount.textContent = value;
  }

  function save() {
    localStorage.setItem(KEY, value);
  }

  function flashEffect(type) {
    elCount.classList.remove("inc", "dec");
    void elCount.offsetWidth; 
    elCount.classList.add(type);
  }

  incBtn.addEventListener("click", () => {
    value += 1;
    render();
    save();
    flashEffect("inc");
  });

  decBtn.addEventListener("click", () => {
    value -= 1;
    render();
    save();
    flashEffect("dec");
  });

  resetBtn.addEventListener("click", () => {
    if (confirm("Naozaj chceš vynulovať počítadlo?")) {
      value = 0;
      render();
      save();
    }
  });

  render();
})();
