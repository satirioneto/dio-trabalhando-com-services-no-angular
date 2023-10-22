# Projeto de Estudos - Trabalhando com Services no Angular

Este projeto foi desenvolvido como parte de um estudo sobre Services no Angular. O objetivo foi compreender os conceitos fundamentais e a implementação de Services para isolar a lógica de negócios e otimizar a aplicação.

## Resumo dos Estudos

### Os 3 pilares de um service

- Services são arquivos Typescript para isolar as regras de negócio, diferenciando-se dos componentes.
- Os services podem ser compartilhados por vários componentes.
- É recomendado criar services especializados em atividades específicas para facilitar a manutenção.

### Preparando estrutura de pastas

- Organização das pastas 'components' e 'services' para uma estrutura mais clara.

### Preparando o componente de Pokemon

- Criação e configuração inicial do componente de Pokemon.

### Estilizando um componente de Pokemon

- Estilização básica do componente de Pokemon.

### Desacoplando seu componente e deixando-o inteligente

- Desacoplamento do componente e uso de propriedades e diretivas para dinamizar a exibição.

### Entendendo o papel do service

- Criação dos arquivos 'environments' e do serviço 'pokemonService' para integrar com a API.

### A anatomia de um service

- Exploração da estrutura e função de um serviço, incluindo a implementação da interface Injectable.

### Como injetar um service

- Injeção de dependência do serviço nos componentes e criação de métodos para interagir com a API.

### Service conversando com environment

- Utilização do arquivo de environment para armazenar variáveis de ambiente e configurar o service de acordo.

### Trabalhando com módulos HTTP

- Implementação de requisições HTTP (fetch) para interagir com a API.

### Observables

- Utilização de Observables para gerenciar a assincronicidade, subscrição e manipulação de dados.

### Trabalhando com o subscribe

- Configuração e utilização de subscribe para lidar com os dados obtidos.

### Terminando de tipar os dados

- Adição de tipagem aos dados e componentes para garantir a consistência do código.

### Adicionar pesquisa por Pokemon

- Implementação de pesquisa de Pokemon utilizando o módulo FormsModule.

## Instalação e Execução

Para executar este projeto localmente, siga as instruções abaixo:

1. Clone este repositório em seu ambiente local.
2. Navegue até o diretório do projeto.
3. Execute `npm install` para instalar as dependências.
4. Execute `ng serve` para iniciar o servidor de desenvolvimento.
5. Abra seu navegador e acesse `http://localhost:4200/`.
