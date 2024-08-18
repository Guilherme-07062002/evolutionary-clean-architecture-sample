# Arquitetura Limpa / Evolutiva - Lista de Tarefas

Projeto exemplificando a construção de uma API RESTful que se baseia em uma lista de tarefas com Node.js, utilizando princípios de Clean Architecture, Arquitetura Evolutiva e TDD, integrando a maleabilidade do Express com a modularidade do NestJS. 

## Arquitetura Limpa (Clean Architecture)
A Arquitetura Limpa, proposta por Robert C. Martin (conhecido como Uncle Bob), é uma abordagem para o design de software que visa criar sistemas modulares, altamente testáveis e de fácil manutenção. Essa arquitetura organiza o código em camadas que separam as responsabilidades e isolam as dependências, garantindo que a lógica de negócio não seja afetada por detalhes de implementação como frameworks ou bancos de dados.

### Principais princípios da Arquitetura Limpa:

* Independência de frameworks: O código da aplicação não deve ser dependente de frameworks específicos, permitindo que eles sejam substituídos sem grandes impactos.
* Testabilidade: A lógica de negócio deve ser testável de forma independente de detalhes externos como interfaces de usuário ou sistemas de banco de dados.
* Independência de UI: A interface do usuário (UI) pode ser alterada sem afetar a lógica central do sistema.
* Independência de banco de dados: Mudanças no banco de dados ou a troca de tecnologias de armazenamento não devem impactar a lógica de negócio.
* Independência de agentes externos: Sistemas e serviços externos podem ser modificados ou substituídos sem afetar a aplicação.
A estrutura típica de uma Arquitetura Limpa envolve camadas como entidades, casos de uso, adaptadores, e frameworks, organizadas em torno de um núcleo de regras de negócio que permanece isolado de detalhes técnicos.

## Arquitetura Evolutiva (Evolutionary Architecture)
A Arquitetura Evolutiva é uma abordagem que prioriza a capacidade de um sistema de software para adaptar-se a mudanças ao longo do tempo, de maneira contínua e incremental. Em vez de projetar um sistema rígido desde o início, a Arquitetura Evolutiva aceita que os requisitos e as tecnologias irão mudar e, portanto, o sistema deve ser capaz de evoluir para atender a essas novas demandas.

### Principais características da Arquitetura Evolutiva:

* Facilidade de mudança: O sistema é construído para suportar mudanças, permitindo que novos requisitos sejam implementados sem grandes reescritas.
* Testes contínuos: Automação de testes e integração contínua são fundamentais para garantir que as mudanças não introduzam regressões.
* Feedback constante: O processo de desenvolvimento é iterativo e incremental, permitindo que o feedback dos usuários e do mercado seja incorporado rapidamente ao sistema.
* Decisões arquiteturais reversíveis: As decisões arquiteturais são tomadas de forma que possam ser alteradas ou ajustadas à medida que o sistema evolui.

A Arquitetura Evolutiva é especialmente útil em ambientes ágeis, onde a capacidade de responder rapidamente a mudanças é crucial para o sucesso do projeto.

## Execução

1. Clone o repositório

```bash
https://github.com/Guilherme-07062002/evolutionary-clean-architecture-sample
```

2. Instale as dependências

```bash
yarn
```

3. Inicie o servidor

```bash
yarn dev
```

4. Acesse a API em:

```bash
http://localhost:3000
```

5. E para rodar os testes:

```bash
yarn test
```

