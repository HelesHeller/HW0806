function formatJSON() {
    const input = document.getElementById('jsonInput').value;
    const resultContainer = document.getElementById('jsonResult');
    const errorMessage = document.getElementById('errorMessage');

    try {
        // Парсинг введённого JSON
        const jsonObject = JSON.parse(input);


        resultContainer.textContent = JSON.stringify(jsonObject, null, 4);


        errorMessage.textContent = '';
    } catch (error) {

        resultContainer.textContent = '';
        errorMessage.textContent = 'Ошибка: Введенные данные не являются корректным JSON.';
        console.error('JSON parsing error:', error);
    }
}
