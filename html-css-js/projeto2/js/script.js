document.addEventListener('DOMContentLoaded', () => {
    // Mostrar alerta ao clicar no botão
    const alertButton = document.getElementById('alertButton');
    alertButton.addEventListener('click', () => {
        alert('Você clicou no botão de alerta!');
    });

    // Incrementar contador
    let counter = 0;
    const counterValue = document.getElementById('counterValue');
    const incrementButton = document.getElementById('incrementButton');
    incrementButton.addEventListener('click', () => {
        counter++;
        counterValue.textContent = counter;
    });

    // Mostrar/Esconder texto
    const text = document.getElementById('text');
    const toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', () => {
        text.classList.toggle('hidden');
    });

    // Alterar cor de fundo da página
    const backgroundSelect = document.getElementById('backgroundSelect');
    backgroundSelect.addEventListener('change', (event) => {
        document.body.style.backgroundColor = event.target.value;
    });

    // Verificar comprimento da entrada do usuário
    const inputField = document.getElementById('inputField');
    const inputMessage = document.getElementById('inputMessage');
    inputField.addEventListener('input', () => {
        if (inputField.value.length > 5) {
            inputMessage.textContent = 'A entrada é maior que 5 caracteres.';
        } else {
            inputMessage.textContent = '';
        }
    });
});
