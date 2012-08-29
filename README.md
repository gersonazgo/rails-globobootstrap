GLOBO BOOTSTRAP
=================

O Bootstrap da Globo, desenvolvido como uma extensão do Bootstrap do twitter, é um kit de ferramentas para facilmente usar componentes de interface para websites, aplicações e mais e para utilizar seus componentes nos diversos produtos da Globo.com. Inclui folha de estilos padronizadas para tipografia, formulários, botões, tabelas, grids, navegação alertas e mais.

Para começar -- checkout https://github.com/globocom/bootstrap

O Bootstrap da Globo.com possui uma versão em português do Bootstrap do twitter que está localizada em
	docs/build/languages/pt-br.json

Com este arquivo é possível traduzir todos os textos do twitter original sem interferir na documentação original.

Uso
-----

Você pode usar o Globo Bootstrap fazendo o download dos [componentes desejados na página de customização](http://globocom.github.com/bootstrap/customize.html).

A página de download é servido pelo [Bootstrap Server](https://github.com/globocom/bootstrap-server).

Como estender
-------------

Para estender o Globo Bootstrap, você precisa clonar o projeto

	git clone https://github.com/globocom/bootstrap
	
As modificações de CSS devem ser feitas na pasta less.

As modificações de Javascript devem ser feitas na pasta js.

As modificações nos templates devem ser feitas na pasta docs/templates nos arquivos com extensão .mustache.

Após qualquer modificação nos arquivos .less e .mustaque, existe um comando make para gerar os arquivos no formato css e formato html para os arquivos .less e os arquivos .html respectivamente

Qual branch devo usar
--------------

O projeto mais atualizado sempre se encontra em uma branch globo-bootstrap-vn (onde n é o número da versão)

A versão mais recente do twitter bootstrap se encontra em major.minor-wip e corresponde a versão globo-bootstrap-major.minor

Como atualizar com o twitter bootstrap
--------------------------------------

O repositório remoto do twitter está em um origin chamado upstream em que é possivel obter novas versões.

Para atualizar, basta fazer um merge da branch e rodar os comandos
	
	make
	node docs/build/translation

Após executar o último script, irá aparecer um modelo de json onde há as strings que surgiram para ser atualizadas na nova versão. Estas chaves e valores devem ser inseridas no arquivo
	
	docs/build/translation/pt-br.json

Com isto basta executar o comando
	
	node docs/build/translation
	
Novamente até não restarem strings para serem traduzidas

Como publicar o projeto
--------------------------

Para publicar os estáticos do projeto execute o comando
	
	make gh-pages-translated
	
Desta forma ele irá criar uma pasta num diretório anterior (../) chamada bootstrap-gh-pages.


Como contribuir
-----------------------

Após realizar as modificações seguindo as diretrizes acima, faça um pull request para gente ;-)


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

### globo-bootstrap-v1.1
* Modificar tag do analytics
* Listar as strings não usadas na tradução do arquivo pt-br.json
* Remover entradas duplicadas de tradução
* Componente de exemplo
* Integração com o bootstrap-server para downloads customizados

Para desenvolvedores
----------------------

Há um makefile para poder gerar os estáticos

+ `make`
Executa o compiler do less e gera o bootstrap.css e bootstrap.min.css e os templates
O compilador lessc é necessário para o comando rodar.

+ `make test`
Executa o jshint e testes do qunit com o [phantomjs](http://code.google.com/p/phantomjs/) (usado para o ci). Depende de ter o phantomjs instalado.

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
