// Simplified interactions: apenas validação do formulário

document.addEventListener('DOMContentLoaded', () => {
  const regForm = document.getElementById('regForm');
  const formMsg = document.getElementById('formMsg');
  if(!regForm) return;

  regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const category = document.getElementById('category').value;

    if (!name || !email || !phone || !category) {
      if(formMsg){
        formMsg.textContent = 'Por favor, preencha todos os campos.';
        formMsg.classList.remove('success');
        formMsg.classList.add('error');
      }
      return;
    }

    if(formMsg){
      formMsg.textContent = 'Inscrição enviada com sucesso! Obrigado.';
      formMsg.classList.remove('error');
      formMsg.classList.add('success');
    }

    try{ localStorage.setItem('lastRegistration', JSON.stringify({name,email,phone,category,ts:Date.now()})); }catch(err){}
    regForm.reset();

    setTimeout(() => {
      if(formMsg){
        formMsg.textContent = '';
        formMsg.classList.remove('success');
      }
    }, 5000);
  });
});
