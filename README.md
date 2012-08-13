GLOBO BOOTSTRAP
=================

O Bootstrap da Globo, desenvolvido como uma extensão do Bootstrap do twitter, é um kit de ferramentas para facilmente usar componentes de interface para websites, aplicações e mais. Inclui folha de estilos padronizadas para tipografia, formulários, botões, tabelas, grids, navegação alertas e mais.

Para começar -- checkout https://github.com/globocom/bootstrap


Uso
-----

Você pode usar o Globo Bootstrap fazendo o download dos componentes desejados na página de customização.

Uma outra forma é gerar os arquivos executando o comando make.


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
* Integração com o bootstrap-server para downloads customizados

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
