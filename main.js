onload = () =>{
    document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("backgroundMusic");
    audio.play().catch(error => {
      console.log("Autoplay blocked! Click anywhere to play music.");
    });

    // Optional: Allow user interaction to resume audio if blocked
    document.body.addEventListener("click", function () {
      audio.play();
    }, { once: true });
  });
