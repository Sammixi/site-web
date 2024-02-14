document.getElementById('yes-btn').addEventListener('click', function() {
    createPeony();
});

function createPeony() {
    var peony = document.createElement('img');
    peony.src = 'pivoines.png';
    peony.alt = 'P';
    peony.style.position = 'fixed';
    peony.style.left = Math.random() * (window.innerWidth - 100) + 'px'; 
    peony.style.top = Math.random() * (window.innerHeight - 100) + 'px'; 
    peony.style.width = '100px'; 
    peony.style.zIndex = '1'; 
    document.body.appendChild(peony);

    setTimeout(function() {
        document.body.removeChild(peony);
    }, 3000);
}
