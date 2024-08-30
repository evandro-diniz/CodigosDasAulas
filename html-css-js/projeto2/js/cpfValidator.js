document.addEventListener('DOMContentLoaded', () => {
    const cpfForm = document.getElementById('cpfForm');
    const cpfInput = document.getElementById('cpfInput');
    const cpfMessage = document.getElementById('cpfMessage');

    cpfForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir o envio do formulário

        const cpf = cpfInput.value;
        if (validarCPF(cpf)) {
            cpfMessage.textContent = 'CPF válido.';
            cpfMessage.style.color = 'green';
        } else {
            cpfMessage.textContent = 'CPF inválido. Por favor, verifique e tente novamente.';
            cpfMessage.style.color = 'red';
        }
    });

    function validarCPF(cpf) {
        // Remove caracteres não numéricos
        cpf = cpf.replace(/[^\d]+/g, '');

        // Verifica se o CPF tem 11 dígitos ou se todos são iguais
        if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
            return false;
        }

        // Calcula os dígitos verificadores
        let soma = 0;
        let resto;

        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.substring(9, 10))) {
            return false;
        }

        soma = 0;
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }
        resto = (soma * 10) % 11;

        if ((resto === 10) || (resto === 11)) {
            resto = 0;
        }
        if (resto !== parseInt(cpf.substring(10, 11))) {
            return false;
        }

        return true;
    }
});
