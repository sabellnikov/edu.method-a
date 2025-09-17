// Объект с пользователями, паролями и URL для перенаправления
const users = {
  'test': { pass: 'test', url: 'http://vk.ru' },
  'user2': { pass: 'pass2', url: 'http://ya.ru' },
  'user3': { pass: 'pass3', url: 'http://google.com' },
  'user4': { pass: 'pass4', url: 'http://mail.ru' },
  'user5': { pass: 'pass5', url: 'http://avito.ru' }
};

// Функция для очистки полей формы
function clearFields() {
  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
}

function loginCheck() {
  const user = document.getElementById('login-user').value;
  const pass = document.getElementById('login-pass').value;
  
  if (users[user] && users[user].pass === pass) {
    window.location.href = users[user].url;
  } else {
    document.getElementById('login-error').classList.remove('hidden');
    // Очищаем поля после неуспешной попытки
    clearFields();
  }
}

// Функция для установки приветствия в зависимости от времени суток
function setTimeBasedGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const greetingElement = document.getElementById('greeting-title');
  
  let greeting;
  
  if (hour >= 5 && hour < 12) {
    greeting = 'Доброе утро! <span class="wave-animation">👋</span>';
  } else if (hour >= 12 && hour < 17) {
    greeting = 'Добрый день! <span class="wave-animation">👋</span>';
  } else if (hour >= 17 && hour < 22) {
    greeting = 'Добрый вечер! <span class="wave-animation">👋</span>';
  } else {
    greeting = 'Доброй ночи! <span class="wave-animation">👋</span>';
  }
  
  greetingElement.innerHTML = greeting;
}

// Устанавливаем приветствие при загрузке страницы
document.addEventListener('DOMContentLoaded', setTimeBasedGreeting);

// Добавляем обработчик для входа по Enter
document.addEventListener('DOMContentLoaded', function() {
  const loginInput = document.getElementById('login-user');
  const passInput = document.getElementById('login-pass');
  
  // Очищаем поля при загрузке и возврате назад
  clearFields();
  window.addEventListener('pageshow', clearFields);
  
  // Обработчики для входа по Enter
  [loginInput, passInput].forEach(input => {
    input.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') loginCheck();
    });
  });
});
