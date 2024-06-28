document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    class Particle {
        constructor(x, y, size, color, weight) {
            this.x = x;
            this.y = y;
            this.size = size;
            this.color = color;
            this.weight = weight;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            this.y += this.weight;
            this.x += Math.sin(this.weight);

            if (this.size > 0.2) this.size -= 0.1;
        }
    }

    function init() {
        particlesArray = [];
        for (let i = 0; i < 100; i++) {
            let size = Math.random() * 5 + 1;
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let color = 'rgba(255, 255, 255, 0.8)';
            let weight = Math.random() * 1 - 0.5;
            particlesArray.push(new Particle(x, y, size, color, weight));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });
});