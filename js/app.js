limpar();

function adicionar() {
  // recuperar valores nome do produto, quantidade e valor.
  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = Number(produto.split('R$')[1]);
  let quantidadeProduto = Number(document.getElementById('quantidade').value);


  // calcular o preco e o nosso subtotal.
  let preco = quantidadeProduto * valorUnitario;


  // adicionar no carrinho.
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML +=
    `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto}
    <span class="texto-azul">R$${preco}</span>
  </section>`;

  // atualizar o valor total.
  let totalElemento = document.getElementById('valor-total');
  let totalAtual = Number(totalElemento.textContent.replace('R$', ''));
  let novototal = totalAtual + preco;
  totalElemento.textContent = `R$${novototal}`;
  document.getElementById('quantidade').value = 1;
}

function limpar() {
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';


}