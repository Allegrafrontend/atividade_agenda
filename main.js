const form = document.getElementById('formAgenda');

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const inputNome = document.getElementById('nome-agenda');
            const inputTelefone = document.getElementById('telefone-agenda');

            
            let novaLinha = '<tr>';
            novaLinha += `<td>${inputNome.value}</td>`;
            novaLinha += `<td>${inputTelefone.value}</td>`;
            novaLinha += '</tr>';

            
            const corpoTabela = document.querySelector('#tabela-agenda tbody');

            
            corpoTabela.innerHTML += novaLinha;

            
            inputNome.value = '';
            inputTelefone.value = '';
        });