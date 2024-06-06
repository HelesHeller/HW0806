function formatJSON() {
    const input = document.getElementById('jsonInput').value;
    const resultContainer = document.getElementById('jsonResult');
    const errorMessage = document.getElementById('errorMessage');

    try {
        // Парсинг введённого JSON
        const jsonObject = JSON.parse(input);

        // Преобразование JSON в форматированную строку
        // Вывод отформатированного JSON
        resultContainer.textContent = JSON.stringify(jsonObject, null, 4);

        // Очистка сообщений об ошибках
        errorMessage.textContent = '';
    } catch (error) {
        // Вывод сообщения об ошибке в случае некорректного JSON
        resultContainer.textContent = '';
        errorMessage.textContent = 'Ошибка: Введенные данные не являются корректным JSON.';
        console.error('JSON parsing error:', error);  // Отладочная информация в консоли
    }
}
