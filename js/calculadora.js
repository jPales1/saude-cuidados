document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('imc-form');
  const resultadoDiv = document.getElementById('resultado');

  form.addEventListener('submit', (e) => {
      e.preventDefault();

      const peso = parseFloat(document.getElementById('peso').value);
      const altura = parseFloat(document.getElementById('altura').value);

      if(peso > 0 && altura > 0){
          const imc = peso / (altura * altura);
          let categoria = '';

          if(imc < 18.5){
              categoria = 'Baixo peso';
          } else if(imc >= 18.5 && imc < 24.9){
              categoria = 'Peso normal';
          } else if(imc >= 25 && imc < 29.9){
              categoria = 'Sobrepeso';
          } else {
              categoria = 'Obesidade';
          }

          resultadoDiv.innerHTML = `
              <h3>Seu IMC é: ${imc.toFixed(2)}</h3>
              <p>Categoria: ${categoria}</p>
          `;
      } else {
          resultadoDiv.innerHTML = `<p>Por favor, insira valores válidos.</p>`;
      }
  });
});
