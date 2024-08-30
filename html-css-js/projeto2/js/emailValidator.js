document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('emailInput').value;
    const emailMessage = document.getElementById('emailMessage').value;
    const emailForm = document.getElementById('emailForm').value;

    // Associa a função de validação ao evento de submissão de um formulário
    emailForm.addEventListener('submit', (event) => {
        const email = emailInput.value;
        if (!validarEmail(email)) {
            event.preventDefault(); // Impede o envio do formulário se o e-mail não for válido
        } else {
            emailMessage.textContent = 'CPF válido.';
            emailMessage.style.color = 'green';
        }
    });
    
    function validarEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return false;
        }

        return true;
    }

});