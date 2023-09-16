const sidebar = document.querySelector('.sidebar');
const toggleButton = document.getElementById('toggle-sidebar');

toggleButton.addEventListener('click', () => {
    if (sidebar.style.width === '15em') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '15em';
    }
});

const symbol = document.querySelector('.symbol');
const circle2 = document.querySelector('.circle2');

function toggleSymbolAndCircle() {
  symbol.style.transform = 'scale(0)';
  circle2.style.transform = 'scale(1)';
  setTimeout(() => {
    symbol.style.transform = 'scale(1)';
    circle2.style.transform = 'scale(0)';
  }, 2000);
}

setInterval(toggleSymbolAndCircle, 4000); // 2 seconds for each state, repeated in a loop
