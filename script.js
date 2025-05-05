// Load saved name on page load
window.onload = function() {
    const savedName = localStorage.getItem('username');
    if (savedName) {
      document.getElementById('displayName').innerText = `Welcome back, ${savedName}!`;
    }
  };
  
  function saveName() {
    const name = document.getElementById('nameInput').value;
    localStorage.setItem('username', name);
    document.getElementById('displayName').innerText = `Hello, ${name}!`;
  }
  
  function triggerAnimation() {
    const box = document.getElementById('animatedBox');
    box.classList.add('bounce');
    setTimeout(() => {
      box.classList.remove('bounce');
    }, 1000);
  }
  