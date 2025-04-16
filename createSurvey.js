document.addEventListener('DOMContentLoaded', function () {
    const sheet = document.createElement('style');
    document.body.appendChild(sheet);
  
    const $rangeInput = document.querySelector('.range input');
    const labels = document.querySelectorAll('.range-labels li');
    const prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];
  
    function getTrackStyle(el) {
      const curVal = el.value;
      const val = (curVal - 1) * 25; // 5 steps: 0%, 25%, 50%, 75%, 100%
      let style = '';
  
      // Reset label classes
      labels.forEach((label, i) => {
        label.classList.remove('active');
      });
  
      const curLabel = labels[curVal - 1];
      if (curLabel) curLabel.classList.add('active');
  
      // Set track style
      for (let i = 0; i < prefs.length; i++) {
        style += `.range input::-${prefs[i]} { background: linear-gradient(to right, #F2BAA3 0%, #F2BAA3 ${val}%, #b2b2b2 ${val}%, #b2b2b2 100%); }\n`;
      }
  
      return style;
    }
  
    $rangeInput.addEventListener('input', function () {
      sheet.textContent = getTrackStyle(this);
    });
  
    labels.forEach((label, index) => {
      label.addEventListener('click', () => {
        $rangeInput.value = index + 1;
        $rangeInput.dispatchEvent(new Event('input'));
      });
    });
  
    // Init once at load
    $rangeInput.dispatchEvent(new Event('input'));
  });