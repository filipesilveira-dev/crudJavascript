# CRUD com Javascript (Exercício autoral realizado durante curso de engenheiro front end da EBAC)

## Como usar?

Na tela de início, selecione a ação que deseja dentre 3 opções:

- Cadastrar usuários
- Listar usuários
- Deletar usuários

Na sessão de "cadastrar", é possível adicionar o nome do usuário que fará parte do banco de dados e seu email.
Na sessão de "listar", é possível visualizar todos os cadastros feitos.
Na sessão de "deletar", é possível deletar um usuário do banco de dados clicando em um "x" ao lado de suas informações.

## Funcionalidades

- Ao adicionar um usuário, suas informações serão armazenadas em um API temporária e logo já constarão nas opções de "listar" e de "deletar". Isso é possível por algoritmos que criam novos elementos HTML à medida que novos usuários são cadastrados. O campo onde foi digitado também é limpo para um novo cadastro.
- Além disso, funções no javascript que alteram estados de CSS de elementos HTML possibilitam que determinada área apareça enquanto outra desapareção (display: none).
- Um botão de voltar também foi acrescido para permitir ao usuário transitar nas diferentes possibilidaes da página.

## Melhorias futuras

```sh
1 - Validação de nome e email;
2 - Considerar uma tela de login no início, especificando o nível de acesso do usuário: dependendo do nível de acesso, o usuário não deveria ser capaz de deletar alguém do banco de dados;
3 - Melhorar esteticamente a página, acrescentando uma paleta de cores, por exemplo; 
4 - Melhorar a organização do código, visando otimização e melhor leitura e manutenção.
```