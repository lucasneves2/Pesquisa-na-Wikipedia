function searchWikipedia() {
    const query = document.getElementById('query').value;
    const url = `https://pt.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${encodeURIComponent(query)}`;
  
    fetch(url) // comentario: fetch(url): Envia uma requisição HTTP para a URL especificada e retorna uma Promise que se resolve com a resposta.
      .then(response => response.json()) // comentario then(response => response.json()): Converte a resposta da API para JSON.
      .then(data => {    //then(data => {: Passa os dados JSON para a função de callback.
        const resultsDiv = document.getElementById('results'); //  comentario: Obtém o elemento div com o ID results, onde os resultados serão exibidos.
        resultsDiv.innerHTML = ''; // '';: Limpa qualquer conteúdo anterior dentro do div de resultados.
  
      
      // comentario: data.query.search.forEach(result => {: Itera sobre cada resultado de pesquisa retornado pela API.
      // const resultDiv = document.createElement('div');: Cria um novo elemento div para cada resultado.
      // resultDiv.className = 'result';: Define a classe CSS desse div como result.
      
        data.query.search.forEach(result => { 
          const resultDiv = document.createElement('div');
          resultDiv.className = 'result';

          // comentario: const title = document.createElement('h3');: Cria um elemento h3 para o título do resultado.
        // title.innerText = result.title;: Define o texto do título com o título do resultado de pesquisa retornado pela API.
  
          const title = document.createElement('h3');
          title.innerText = result.title;
  

          
          // comentario: const snippet = document.createElement('p');: Cria um elemento p para o trecho de texto do resultado.
          // snippet.innerHTML = result.snippet + '...';: Define o conteúdo HTML do parágrafo com o trecho retornado pela API, adicionando "..." no final.


          const snippet = document.createElement('p');
          snippet.innerHTML = result.snippet + '...';

// comentario: const link = document.createElement('a');: Cria um elemento a (link) para direcionar o usuário à página da Wikipedia.
// comentario: link.href = ...: Define o destino do link como a página correspondente na Wikipedia.
// comentario: link.target = '_blank';: Faz com que o link seja aberto em uma nova aba do navegador.
// comentario: link.innerText = 'Leia mais';: Define o texto do link como "Leia mais".
  
          const link = document.createElement('a');
          link.href = `https://pt.wikipedia.org/wiki/${encodeURIComponent(result.title)}`;
          link.target = '_blank';
          link.innerText = 'Leia mais';
  
         // comentario: resultDiv.appendChild(title);: Adiciona o título ao div do resultado.
         // comentario: resultDiv.appendChild(snippet);: Adiciona o trecho ao div do resultado.
          //comentario: resultDiv.appendChild(link);: Adiciona o link ao div do resultado.

          resultDiv.appendChild(title);
          resultDiv.appendChild(snippet);
          resultDiv.appendChild(link);
  
          //comentario: resultsDiv.appendChild(resultDiv);: Adiciona o div do resultado completo ao div de resultados.
          //comentario: .catch(error => console.error('Erro ao buscar na Wikipedia:', error));: Captura qualquer erro que ocorra durante a requisição ou processamento dos dados e o exibe no console.

          resultsDiv.appendChild(resultDiv);
        });
      })
      .catch(error => console.error('Erro ao buscar na Wikipedia:', error));
  }
  