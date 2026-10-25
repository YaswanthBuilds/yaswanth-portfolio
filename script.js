document.getElementById("year")?.textContent && (document.getElementById("year").textContent = new Date().getFullYear());
const observer = "IntersectionObserver" in window ? new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target);} });
},{threshold:.12}) : null;
document.querySelectorAll(".reveal").forEach(el => observer ? observer.observe(el) : el.classList.add("visible"));
