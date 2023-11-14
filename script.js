function validarForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var messageElement = document.getElementById('message');

    if (username === '' || password === '') {
      messageElement.innerText = 'Por favor, preencha todos os campos.';
      messageElement.className = '';
    } else {
      messageElement.innerText = 'Login bem-sucedido!';
      messageElement.className = 'successo';

      console.log('Username:', username);
      console.log('Password:', password);
    }

    messageElement.style.display = 'block';

    setTimeout(function() {
      messageElement.style.display = 'none';
    }, 3000);
  }