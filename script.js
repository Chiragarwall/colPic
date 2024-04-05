// document.getElementById('enter-button').addEventListener('click', function() {
//     document.getElementById('image-upload').click();
// });

// document.getElementById('image-upload').addEventListener('change', function(event) {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onload = function() {
//         const img = new Image();
//         img.src = reader.result;
//         img.onload = function() {
//             const canvas = document.createElement('canvas');
//             const MAX_WIDTH = 200;
//             const MAX_HEIGHT = 300;
//             let width = this.width;
//             let height = this.height;
//             if (width > height) {
//                 if (width > MAX_WIDTH) {
//                     height *= MAX_WIDTH / width;
//                     width = MAX_WIDTH;
//                 }
//             } else {
//                 if (height > MAX_HEIGHT) {
//                     width *= MAX_HEIGHT / height;
//                     height = MAX_HEIGHT;
//                 }
//             }
//             canvas.width = width;
//             canvas.height = height;
//             const ctx = canvas.getContext('2d');
//             ctx.drawImage(this, 0, 0, width, height);

//             const prevCanvas = document.querySelector('canvas');
//             if (prevCanvas) {
//                 prevCanvas.parentNode.removeChild(prevCanvas);
//             }

//             canvas.addEventListener('click', function(event) {
//                 const x = event.offsetX;
//                 const y = event.offsetY;
//                 const pixelData = ctx.getImageData(x, y, 1, 1).data;
//                 const r = pixelData[0];
//                 const g = pixelData[1];
//                 const b = pixelData[2];
//                 const colorValue = rgbToHex(r, g, b);
//                 document.getElementById('color-popup').style.display = 'block';
//                 document.getElementById('color-box').style.backgroundColor = colorValue;
//                 document.getElementById('color-value').textContent = `Color Value: ${colorValue}`;
//                 document.getElementById('color-rgb').textContent = `RGB Value: (${r}, ${g}, ${b})`;
                
//                 // Adjusting popup position relative to the image
//                 const rect = canvas.getBoundingClientRect();
//                 const popup = document.getElementById('color-popup');
//                 const offsetX = -300; // Adjust this value to change horizontal offset
//                 const offsetY = -90; // Adjust this value to change vertical offset
//                 popup.style.top = rect.top + offsetY + 'px';
//                 popup.style.left = rect.right + offsetX + 'px';
//             });

//             // Appending the canvas containing the image to the container div
//             document.getElementById('image-container').appendChild(canvas);
//         };
//     };
//     reader.readAsDataURL(file);
// });

// document.getElementById('close-popup').addEventListener('click', function() {
//     document.getElementById('color-popup').style.display = 'none';
// });

// function rgbToHex(r, g, b) {
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }


document.getElementById('enter-button').addEventListener('click', function() {
    document.getElementById('image-upload').click();
});

document.getElementById('image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function() {
        const img = new Image();
        img.src = reader.result;
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const MAX_WIDTH = 200;
            const MAX_HEIGHT = 300;
            let width = this.width;
            let height = this.height;
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(this, 0, 0, width, height);

            const prevCanvas = document.querySelector('canvas');
            if (prevCanvas) {
                prevCanvas.parentNode.removeChild(prevCanvas);
            }

            canvas.addEventListener('click', function(event) {
                const x = event.offsetX;
                const y = event.offsetY;
                const pixelData = ctx.getImageData(x, y, 1, 1).data;
                const r = pixelData[0];
                const g = pixelData[1];
                const b = pixelData[2];
                const colorValue = rgbToHex(r, g, b);
                document.getElementById('color-popup').style.display = 'block';
                document.getElementById('color-box').style.backgroundColor = colorValue;
                document.getElementById('color-value').textContent = `Color Value: ${colorValue}`;
                document.getElementById('color-rgb').textContent = `RGB Value: (${r}, ${g}, ${b})`;
                
                // Adjusting popup position relative to the image
                const rect = canvas.getBoundingClientRect();
                const popup = document.getElementById('color-popup');
                const offsetX = 20; // Adjust this value to change horizontal offset
                const offsetY = -20; // Adjust this value to change vertical offset
                
                // Calculate popup position
                let popupLeft = rect.right + offsetX;
                let popupTop = rect.top + offsetY;
                
                // Check if the popup goes outside the right window edge
                if (popupLeft + popup.offsetWidth > window.innerWidth) {
                    popupLeft = window.innerWidth - popup.offsetWidth;
                }
                
                // Check if the popup goes outside the bottom window edge
                if (popupTop + popup.offsetHeight > window.innerHeight) {
                    popupTop = window.innerHeight - popup.offsetHeight;
                }
                
                // Set popup position
                popup.style.top = Math.max(popupTop, 0) + 'px';
                popup.style.left = Math.max(popupLeft, 0) + 'px';
            });
            

            // Appending the canvas containing the image to the container div
            document.getElementById('image-container').appendChild(canvas);
        };
    };
    reader.readAsDataURL(file);
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('color-popup').style.display = 'none';
});

function rgbToHex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
