# Clincker (Web)
🔗 URL Shortener in an easy and quick way.

## Sobre

Hoje em dia, um _link_ pode desde redirecionar para alguma página da _web_, até mesmo fazer um negócio ser achado ou não por clientes. Sendo assim, a relevância desse meio é muito importante.

E foi para atender essa demanda que uma solução simples e eficaz surgiu, o Clincker.

## Conceito

O principal objetivo é proporcionar ao usuário uma forma simples de tornar uma URL maior em algo mais acessível e prático. Os diferenciais desta ferramenta é exatamente a simplicidade e praticidade.

Por meio desta ferramenta, vão ser possíveis realizar o cadastro dos _links_ que desejar, além também de observar informações adicionais sobre seu uso da aplicação.

![Arquitetura de Uso](.github/clincker-web.jpg)

### Escopo

o foco é construir uma interface _web_ totalmente direcionada para o usuário final, sendo então B2C. Interface que será totalmente responsiva e compatível com dispositivos móveis, já que dispositivos móveis estão em uso constante hoje em dia.

A aplicação contará com o gerenciamento total dos dados de URL cadastrados, cadastro completo também de usuários e também funcionalidades adicionais de comunicação passiva para com o usuário, para que o uso seja mais interativo.

## Tecnologias

A parte visual será construída em **React**, facilitando o desenvolvimento da interface por meio de um workflow mais dinâmico.

Para estilização visual, vai ser colocado em prática também bibliotecas como **Styled Components**, com as requisições sendo feitas diretamente para o _back end_ por meio do **Axios**.

Além disso, contará também com arquitetura que se assemelha a microsserviços, facilitando o uso destas ferramentas.

# Getting Started

## Variáveis ambiente

Primeiro passo para rodar o projeto, é configurar os parâmetros contidos no arquivo .env. Para isso, basta pegar o arquivo example.env que está na raiz do projeto, e renomeá-lo para .env.

Após isso, preencha os parâmetros com os valores desejados de configurações, então só falta rodar o projeto.

## Ativando o servidor

Caso estiver usando Docker, basta rodar docker compose up para que a aplicação seja executada. Caso contrário, só seguir o passo a passo a seguir.

Para rodar, basta rodar os comandos abaixo.

```shell
$ npm install
$ npm run dev

# ou

$ yarn
$ yarn dev
```

Então vá ao navegador e abra o endereço `http://localhost:<porta-configurada-no-arquivo-env>` para ver o resultado.
