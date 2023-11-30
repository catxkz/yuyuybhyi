<script>
    const carousel = document.querySelector('.carousel');
    let currentIndex = 0;

    function showImage(index) {
        const width = carousel.clientWidth;
        const transformValue = -index * width + 'px';
        carousel.style.transform = 'translateX(' + transformValue + ')';
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % carousel.children.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); // Auto slide every 3 seconds
</script>
