# Medieval-Restaurant
 In this project, I will develop a website to manage restaurants. The website has a medieval theme and is built using Angular for the Front-End and C# for the Back-End.



Notions

ctrl + shift + p => reaload Window
dotnet build

.\createModels.ps1 CT-C-001YU\SQLEXPRESS Restaurant_Medieval_DB
dotnet add package Trevisharp.Security.Jwt --version 1.0.0
dotnet add reference ..\DTO\DTO.csproj


// Competencias:

Obs: 'Tem tela/Tem Interface' = Possui parte visual, mesmo sem funcionar.

- [X] Repositório GIT criado.
- [X] Porjeto do Frontend Angular Criado.
- [X] Possui tela de Login.
- [X] Possui tela de cadastro.
- [ ] Possui tela de usuário normal das promoções.
- [ ] Possui tela para visualizar código da promoção.
- [X] Possui tela de Administrador.
- [X] Possui tela de Pedidos.
- [X] Possui tela de Cadastro de Produtos.
- [ ] Possui tela de Cadastro de Promoções.
- [X] Possui tela do totem.
- [ ] Possui tela dos gráficos.
- [ ] Tela do totem tem interface para inserção de código da promoção.
- [ ] Tela do totem tem interface para colocar itens na sacola.
- [X] Banco de dados criado com tabelas de Usuário, Pedido, ItemPedido, Produto, Promoção ou similar.
- [X] Rotas no Frontend Configuradas.
- [X] Projeto Backend C# criado.
- [X] CORS Configurado.
- [ ] HttpClient configurado e podendo ser usado para fazer quests entre Back e Front.
- [X] Entity Framework Configurado no Backend e Model gerada.
- [X] Bilbioteca de JWT instalada.
- [ ] Operação de cadastro realmente salva um usuário no banco de dados.
- [ ] Cadastro tem algumas validações sendo mais robusto.
- [ ] Login realmente busca usuário no banco de dados.
- [X] Aplica salt na senha do usuário.
- [X] Aplica slow Hash na senha do usuário.
- [ ] Login retorna JWT para o frontend que o guarda no Sessin Storage.
- [ ] Após o Login a página de usuário normal ou adm é mostrada corretamente.
- [ ] Adm é capaz de ver produtos existentes.
- [ ] Adm é capaz de cadastrar novos produtos.
- [ ] Adm é capaz de ver promoções existentes.
- [ ] Adm é capaz de criar novas promoções.
- [ ] Adm é capaz de ver Dashboard com dois gráficos de informações.
- [ ] Gráficos do Dashboard realmente refletem os dados no banco.
- [ ] É possível ver produtos existentes no Totem.
- [ ] É possível adicionar itens em uma sacola.
- [ ] Ao finalizar a compra o pedido é realmente registrado no banco de dados.
- [ ] É possível ver o custo total do pedido.
- [ ] É possível adicionar uma promoção com um código promocional.
- [ ] Promoção afeta o custo total do pedido.
- [ ] Pedidos podem ser vistos na tela de pedidos.
- [ ] É possível editar um pedido como 'Entregue' de alguma forma.
- [ ] Apenas os pedidos corretos aparecem na tela de pedidos (finalizados, porém não entregues).
- [ ] Usuário é capaz de ver as promoções no sistema.
- [ ] Usuário é capaz de gerar um código de promoção válido.
- [ ] Sistema realmente válida código de promoção.