const text = "Intelligence en mouvement";
const container = document.getElementById("sloganCascade");
text.split("").forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.animationDelay = `${i * 0.1}s`;
    container.appendChild(span);
});


document.querySelectorAll('a[data-disabled="true"]').forEach(link => {
    link.addEventListener('click', e => e.preventDefault());
})