  // задай свой "секретный код"
  const secretKey = "12345";  

  // получаем параметры из URL
  const urlParams = new URLSearchParams(window.location.search);

  // проверяем наличие кода
  if (urlParams.get("key") !== secretKey) {
    // если кода нет или он неверный → редиректим на главную
    window.location.href = "/";
  } else {
    // если ключ правильный, удаляем параметр из URL
    if (urlParams.has("key")) {
      // удаляем параметр key
      urlParams.delete("key");
      
      // формируем новый URL без параметра key
      const newUrl = window.location.pathname + (urlParams.toString() ? '?' + urlParams.toString() : '');
      
      // обновляем URL без перезагрузки страницы
      window.history.replaceState(null, '', newUrl);
    }
  }