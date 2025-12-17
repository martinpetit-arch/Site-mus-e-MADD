<script>
  const slider = document.getElementById("slider");
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function scrollToSlide(i) {
    slides[i].scrollIntoView({ inline: "center" });
  }

  document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    scrollToSlide(index);
  });

  document.getElementById("prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    scrollToSlide(index);
  });

  scrollToSlide(index);
</script>
