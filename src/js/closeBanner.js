export default function closeBanner() {

  let topBanner = document.querySelector(".top-banner");

  document.querySelector(".top-banner__text-btn").addEventListener('click', () => {

    topBanner.classList.add("closed");
    
    setTimeout(() => {
      topBanner.style.display = "none"
    }, 600);

  })
}

