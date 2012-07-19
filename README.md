GLOBO BOOTSTRAP
=================

O Bootstrap da Globo, desenvolvido como uma extensão do Bootstrap do twitter, é um kit de ferramentas para facilmente usar componentes de interface para websites, aplicações e mais. Inclui folha de estilos padronizadas para tipografia, formulários, botões, tabelas, grids, navegação alertas e mais.

Para começar -- checkout https://github.com/globocom/bootstrap!


Uso
-----

Você pode usar o Globo Bootstrap de duas maneiras, simplesmente use o CSS compilado em algum projeto, ou execute o LESS no seu site e compile em tempo de execução like a boss.

Versão less:

``` html
<link rel="stylesheet/less" type="text/css" href="lib/bootstrap.less">
<script src="less.js" type="text/javascript"></script>
```

A maneira CSS padrão

``` html
<link rel="stylesheet" type="text/css" href="bootstrap.css">
```

Para mais informações, consulte a documentação.


Versionamento
--------------

Para transparência e no ciclo de release, e para manter compatibilidade, o Globo Bootstrap será mantido pelo Semantic Versioning.

Os guidelines serão no seguinte formato:

`<major>.<minor>.<patch>`

Esta nomenclatura segue os seguintes princípios:

* Quebra de compatibilidade com versão anterior aumenta o major
* Adição de funcionalidade sem quebrar versionamento aumenta o minor
* New additions without breaking backwards compatibility bumps the minor
* Bug fixes aumenta o patch

Para mais informações, visite http://semver.org/.


Bug tracker
-----------

Se encontrou algum bug, crie uma issue no github

https://github.com/globocom/bootstrap/issues


Roadmap
---------------

### 2.0
* Barra da globo estendendo a barra do bootstrap
* Página de customização de download gerando o build corretamente

### 1.0
* Usar imagens no bootstrap no projeto
* Script de deploy para documentação webmedia
* Formulários personalizados para selectbox e checkbox
* Tipografia do H1 e H2
* Box principal
* Validação de formulários


Changelog
-----------------
### 1.2.1
* Corrigido alguns bugs na listagem ordenada
* Introduzida na página de documentação exemplos de uso com o plugin de sortable do jQuery-ui

### 1.2
* Criada seção de um componente css lista reordenáveis
* Importado sprite do jQuery UI, por enquanto somente com o mapeamento da classe do ícone que representa um item reordenável
* Espacamento do box-footer do boxe primário para dar uma melhor leitura e separação da barra 

### 1.1.3
* Retirado bold dos botoes primários
* Posicionamento do checkbox original escondido no checkbox personalizado

### 1.1.2
* Acertado tamanho dos add-ons que ficaram com altura errada após todos os inputs no projeto terem um tamanho maior
* Tooltip nao contava apropriadamente os caracteres quando o usuário saia do campo e voltava novamente
* Modificando cor do texto no input com erro para a cor normal e mantendo o estado de erro no input e o texto auxiliar
* sinalização de disable no selecbox personalizado

### 1.1.1
* Caminho absoluto do sprite do globocms apontando para página de documentação
* Altura da cortina um pouco maior no plugin de alerta

### 1.1
* Estados de erro do selectbox personalizado
* Usando fonte da globo na página principal e a Proxima nos títulos das seções
* Alterada cor dos estados de erro geral para um vermelho mais claro
* Adicionado ao core o page-header para criar uma estrutura de título com borda inferior e possibilidade de ter botoes ao lado
* Adicionado na documentação a versão

### 1.0
* Tradução de todo conteúdo para português
* Seção de box para criar dashboards e boxes de formulários no CMA
* Criação de um plugin de contador de caracteres, integrado com o tooltip para inputs de formulário
* Extensão de um alerta para criar avisos no modo cortina
* Inserção de plugins para personalizar checkboxes e selectboxes


Para desenvolvedores
----------------------

Há um makefile para poder gerar os estáticos

+ **build** - `make build`
Executa o compiler do less e gera o bootstrap.css e bootstrap.min.css
O compilador lessc é necessário para o comando rodar.

+ **watch** - `make watch`
Método para automaticamente fazer o build a cada vez que o arquivo é salvo
O Watchr é necessário para o comando funcionar


Autores
-------

## Twitter Bootstrap

**Mark Otto**

+ http://twitter.com/mdo
+ http://github.com/markdotto

**Jacob Thornton**

+ http://twitter.com/fat
+ http://github.com/fat

## Globo Bootstrap

**Alexandre Magno**

+ http://blog.alexandremagno.net
+ github.com/alexanmtz
+ @alexanmtz

**Guilherme Garnier**

+ http://blog.guilhermegarnier.com
+ github/ggarnier
+ @guilhermgarnier




Copyright and license
---------------------

Copyright 2012 Twitter, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
