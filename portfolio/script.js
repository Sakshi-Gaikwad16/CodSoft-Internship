const taglines = [
    "Web Developer",
    "UI/UX Designer",
    "Software Engineer",
  ];
  
  const typingElement = document.getElementById("typing-text");
  let taglineIndex = 0;
  let charIndex = 0;
  
  function type() {
    if (charIndex < taglines[taglineIndex].length) {
      typingElement.textContent += taglines[taglineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // Typing speed (milliseconds per character)
    } else {
      setTimeout(erase, 1500); // Pause before erasing
    }
  }
  
  function erase() {
    if (charIndex > 0) {
      typingElement.textContent = taglines[taglineIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, 50); // Erasing speed
    } else {
      taglineIndex = (taglineIndex + 1) % taglines.length;
      setTimeout(type, 500); // Pause before typing next tagline
    }
  }
  
  // Start the typing animation on load
  document.addEventListener("DOMContentLoaded", type);