import './index.css';
import { refresh, sendData } from './module/data.js';

document.addEventListener('DOMContentLoaded', () => {
  const addBtn = document.querySelector('#submit');
  const refreshBtn = document.querySelector('#refresh');

  // Hundle refresh click event

  refreshBtn.addEventListener('click', () => {
    refresh();
  });

  // Calls refresh method when page loads

  document.addEventListener('DOMContentLoaded', refresh);

  // Hundle submit button click event
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userInput = document.querySelector('#name');
    const scoreInput = document.querySelector('#score');
    const user = userInput.value;
    const score = parseInt(scoreInput.value, 10);
    sendData(user, score);

    userInput.value = '';
    scoreInput.value = '';
  });
});
