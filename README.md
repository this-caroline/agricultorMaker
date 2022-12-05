O seguinte projeto terá o objetivo de ilustrar e elucidar o funcionamento da linguagem de consulta GraphQL, demonstrando o respectivo requisito funcional:

```
AGRICULTOR
a) Descrição da Entidade:
i. Os dados poderão ser preenchidos pelos clientes e validados por um funcionário do
IDR-Paraná.
ii. Os dados poderão ser preenchidos e validados por um funcionário do IDR-Paraná.
b) Rótulos dos campos de entrada:
 Agricultor: (texto - pessoa física - Usuário)
 Titular: (botão com resposta única) (Sim ou Não)
 Categoria: (dropdown em tabela auxiliar com resposta única) (Agricultor familiar, Agricultor outro, Pescador, Quilombola, Indígena, ...)
 Escolaridade: (dropdown em tabela auxiliar com resposta única) (Fundamental, 1º grau,
2º grau, 3º grau, ...)
 CadPro: (texto com formato padrão)
 Responsável pela Validação: (Preenchido automático pelo sistema - buscar em uma tabela o Usuário responsável pela validação dos dados)
 Data da Validação: (Preenchimento automático pelo sistema - dd/mm/aaaa)
 Data de Inclusão: (Preenchimento automático pelo sistema - dd/mm/aaaa)
```

A aplicação utilizará um back-end construido em Nodejs.
A aplicação utilizará um front-end construido em HTML, bootstrap e jQuery. 
