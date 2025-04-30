document.addEventListener("DOMContentLoaded", () => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => populateSummary(data))
      .catch(error => console.error('Error loading data:', error));
  });
  
  function populateSummary(data) {
    const summaryList = document.querySelector('.summary-list');
    summaryList.innerHTML = ''; 
  
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.classList.add('summary-item', item.category.toLowerCase());
      const textStyle =  `summary-item ${item.category.toLowerCase()}`
      listItem.innerHTML = `
        <div class="icon-label">
          <img src="${item.icon}" alt="${item.category} icon" />
          <span>${item.category}</span>
        </div>
        <span class=${textStyle}>${item.score} <span class="out-of">/ 100</span></span>
      `;
  
      summaryList.appendChild(listItem);
    });
  }
  