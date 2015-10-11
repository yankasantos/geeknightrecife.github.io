# Geek Night Recife [![Status das Dependências](https://gemnasium.com/geeknightrecife/geeknightrecife.github.io.svg)](https://gemnasium.com/geeknightrecife/geeknightrecife.github.io)

Hotsite do Geek Night Recife.

Esse hotsite tem seu build e deploy orgulhosamente realizados pelo [Snap CI](https://snap-ci.com/).

__No momento o status do build é:__

[![Status do Build](https://snap-ci.com/geeknightrecife/geeknightrecife.github.io/branch/source/build_image)](https://snap-ci.com/geeknightrecife/geeknightrecife.github.io/branch/source)

O hotsite utiliza o `Project Zeppelin` com diversas customizações. Para informações específicas do template [clique aqui](https://github.com/gdg-x/zeppelin).

## Instalando

1. Instale o [Git](http://git-scm.com/downloads) e [Ruby](https://www.ruby-lang.org/en/downloads/), caso ainda não tenha.

2. Clone o projeto

  ```
    $ git clone https://github.com/geeknightrecife/geeknightrecife.github.io
  ```

3. Troque o branch para `source`

  ```
    $ git checkout source
  ```

4. Instale as dependências

  ```
    $ bundle install
  ```

5. Ative o watcher para que o site seja recompilado a cada alteração

  ```
    $ bundle exec jekyll serve --watch
  ```  

## Atualizando

* O Snap CI roda 2 builds diários agendados. Às 12:30 e 00:30. O build agendado tem duas funções principais.
    1. Capturar as menções da hashtag #geeknightrecife no twitter e adicionar a página
    2. Arquivar um evento passado automaticamente.
       
       No build da madrugada, o Snap CI irá verificar se o último evento cadastrado na página já aconteceu, e irá automaticamente colocar esse evento na seção "Edições Anteriores" do site, setar o parâmetro `preparingNextEvent` do arquivo `_config.yml` para `true` novamente, e criar a tag no git com o formato `yyyy-MM-DD`. Se por algum motivo essa etapa não for executada automaticamente, vá para [Atualizando Manualmente](https://github.com/geeknightrecife/geeknightrecife.github.io#atualizando manualmente) para fazer a execução manual.

1. Para cadastrar um novo evento, atualize os arquivos `location.yml`, `organizers.yml`, `schedule.yml`, `sessions.yml` e `speakers.yml` com as informações do próximo evento.

2. Caso o participante da edição passada tenha enviado o link para os slides, adicionar o link para a apresentação, inserindo uma key `presentation:` no arquivo `sessions.yml` copiado no passo anterior.

3. Substituir `heroButtons` no arquivo ```_config.yml```para o link do novo evento do Facebook. 

4. Garanta que o parâmetro `preparingNextEvent` do arquivo `_config.yml` esteja setado para false.

5. Adicione as fotos dos palestrantes e patrocinadores de acordo com as guidelines da seção [Guidelines](https://github.com/geeknightrecife/geeknightrecife.github.io#guidelines)

6. Commit e push bara o branch `source`

  ```
    $ git push origin source
  ```

7. O Snap CI irá detectar o novo push no branch `source`, e fará o build e publicação do hotsite.

8. O progresso do build pode ser acompanhado [aqui](https://snap-ci.com/mateusrevoredo/geeknightrecife.github.io/branch/source)

9. Após a finalização do build com sucesso, a nova versão do site estará disponível [aqui](http://geeknightrecife.github.io) 

##Atualizando Manualmente

1. Antes de começar a modificar a versão atual para adicionar informações de um novo evento, crie uma tag para o último

  ```
    $ git tag yyyy-MM-DD // E.x.: 2015-07-05
  ```

2. ####Mover os dados do evento anterior para o histórico
	1. Criar uma pasta no formato `yyyy-MM-DD` dentro de `_data/archive`
	2. Copiar os arquivos `schedule.yml`, `speakers.yml`, `sessions.yml`, `organizers.yml` e `location.yml` para dentro da pasta criada antes de começar a editá-los.
	3. Caso o participante da edição passada tenha enviado o link para os slides, adicionar o link para a apresentação, inserindo uma key `presentation:` no arquivo `sessions.yml` copiado no passo anterior.

3. Atualize os arquivos `location.yml`, `organizers.yml`, `schedule.yml`, `sessions.yml` e `speakers.yml` dentro da pasta `_data` com as informações do próximo evento.

4. ####Atualizar o arquivo `_config.yml`
	1. Substituir `heroButtons` para o link do novo evento do Facebook.

5. Commit e push bara o branch `source`

  ```
    $ git push origin source
  ```

##TODO

- [ ] Cadastrar o histórico de todos os eventos passados
- [ ] Adicionar convenções de tamanhos de imagem e nomenclatura de arquivos aqui no README
- [ ] Adicionar o badge do slackin em algum ponto do site
- [ ] Form de "quero palestrar inline"
- [ ] Adicionar Gulp para minificação, geração da build, watch etc.
