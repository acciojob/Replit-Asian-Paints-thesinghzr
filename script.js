document.addEventListener('DOMContentLoaded', () => {
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('reset_button');

    changeButton.addEventListener('click', () => {
        const blockId = document.getElementById('block_id').value;
        const color = document.getElementById('colour_id').value;

        // Reset all grid items to transparent
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });

        // Change the background color of the specified block
        const block = document.getElementById(blockId);
        if (block) {
            block.style.backgroundColor = color;
        }
    });

    resetButton.addEventListener('click', () => {
        // Reset all grid items to transparent
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            item.style.backgroundColor = 'transparent';
        });
    });
});