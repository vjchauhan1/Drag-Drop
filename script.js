document.addEventListener('DOMContentLoaded', () => {
    let image = document.querySelectorAll('.image');

    image.forEach(img => {
        img.addEventListener('dragstart', (e) => {
            dragImg = e.target;
        });

        img.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        img.addEventListener('drop', (e) => {
            e.preventDefault();
            let dragEnd = e.target;
            if (dragImg !== dragEnd) {
                let tempId = dragImg.id;
                dragImg.id = dragEnd.id;
                dragEnd.id = tempId;

                let tempText = dragImg.textContent;
                dragImg.textContent = dragEnd.textContent;
                dragEnd.textContent = tempText;
            }
        });
    });
});
