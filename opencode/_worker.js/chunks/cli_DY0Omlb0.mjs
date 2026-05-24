globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D-7CwiXF.mjs';
import './Code_CadJumwV.mjs';

const frontmatter = {
  "title": "CLI",
  "description": "Параметры и команда opencode CLI."
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "tui",
    "text": "tui"
  }, {
    "depth": 4,
    "slug": "флаги",
    "text": "Флаги"
  }, {
    "depth": 2,
    "slug": "команды",
    "text": "Команды"
  }, {
    "depth": 3,
    "slug": "agent",
    "text": "agent"
  }, {
    "depth": 3,
    "slug": "attach",
    "text": "attach"
  }, {
    "depth": 4,
    "slug": "флаги-1",
    "text": "Флаги"
  }, {
    "depth": 4,
    "slug": "create",
    "text": "create"
  }, {
    "depth": 4,
    "slug": "list",
    "text": "list"
  }, {
    "depth": 3,
    "slug": "auth",
    "text": "auth"
  }, {
    "depth": 4,
    "slug": "login",
    "text": "login"
  }, {
    "depth": 4,
    "slug": "list-1",
    "text": "list"
  }, {
    "depth": 4,
    "slug": "logout",
    "text": "logout"
  }, {
    "depth": 3,
    "slug": "github",
    "text": "github"
  }, {
    "depth": 4,
    "slug": "install",
    "text": "install"
  }, {
    "depth": 4,
    "slug": "run",
    "text": "run"
  }, {
    "depth": 5,
    "slug": "флаги-2",
    "text": "Флаги"
  }, {
    "depth": 3,
    "slug": "mcp",
    "text": "mcp"
  }, {
    "depth": 4,
    "slug": "add",
    "text": "add"
  }, {
    "depth": 4,
    "slug": "list-2",
    "text": "list"
  }, {
    "depth": 4,
    "slug": "auth-1",
    "text": "auth"
  }, {
    "depth": 4,
    "slug": "logout-1",
    "text": "logout"
  }, {
    "depth": 4,
    "slug": "debug",
    "text": "debug"
  }, {
    "depth": 3,
    "slug": "models",
    "text": "models"
  }, {
    "depth": 4,
    "slug": "флаги-3",
    "text": "Флаги"
  }, {
    "depth": 3,
    "slug": "run-1",
    "text": "run"
  }, {
    "depth": 4,
    "slug": "флаги-4",
    "text": "Флаги"
  }, {
    "depth": 3,
    "slug": "serve",
    "text": "serve"
  }, {
    "depth": 4,
    "slug": "флаги-5",
    "text": "Флаги"
  }, {
    "depth": 3,
    "slug": "session",
    "text": "session"
  }, {
    "depth": 4,
    "slug": "list-3",
    "text": "list"
  }, {
    "depth": 5,
    "slug": "флаги-6",
    "text": "Флаги"
  }, {
    "depth": 3,
    "slug": "stats",
    "text": "stats"
  }, {
    "depth": 4,
    "slug": "флаги-7",
    "text": "Флаги"
  }, {
    "depth": 3,
    "slug": "export",
    "text": "export"
  }, {
    "depth": 3,
    "slug": "import",
    "text": "import"
  }, {
    "depth": 3,
    "slug": "web",
    "text": "web"
  }, {
    "depth": 4,
    "slug": "флаги-8",
    "text": "Флаги"
  }, {
    "depth": 3,
    "slug": "acp",
    "text": "acp"
  }, {
    "depth": 4,
    "slug": "флаги-9",
    "text": "Флаги"
  }, {
    "depth": 3,
    "slug": "uninstall",
    "text": "uninstall"
  }, {
    "depth": 4,
    "slug": "флаги-10",
    "text": "Флаги"
  }, {
    "depth": 3,
    "slug": "upgrade",
    "text": "upgrade"
  }, {
    "depth": 4,
    "slug": "флаги-11",
    "text": "Флаги"
  }, {
    "depth": 2,
    "slug": "глобальные-флаги",
    "text": "Глобальные флаги"
  }, {
    "depth": 2,
    "slug": "переменные-среды",
    "text": "Переменные среды"
  }, {
    "depth": 3,
    "slug": "экспериментальные-функции",
    "text": "Экспериментальные функции"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    nobr: "nobr",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>CLI opencode по умолчанию запускает <a href=\"/docs/tui\">TUI</a> при запуске без каких-либо аргументов.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode\"><div></div></button></div></figure></div>\n<p>Но он также принимает команды, описанные на этой странице. Это позволяет вам программно взаимодействовать с opencode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Explain how closures work in JavaScript\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode run &#x22;Explain how closures work in JavaScript&#x22;\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"tui\"><a href=\"#tui\">tui</a></h3>\n<p>Запустите TUI opencode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [project]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode [project]\"><div></div></button></div></figure></div>\n<h4 id=\"флаги\"><a href=\"#флаги\">Флаги</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Короткий"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--continue"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Продолжить последний сеанс</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>Идентификатор сеанса для продолжения</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Разветвить сеанс при продолжении (используйте с <code dir=\"auto\">--continue</code> или <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--prompt"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Промпт для использования</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--model"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Модель для использования в виде поставщика/модели.</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--agent"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Агент для использования</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Порт для прослушивания</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Имя хоста для прослушивания</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"команды\"><a href=\"#команды\">Команды</a></h2>\n<p>CLI opencode также имеет следующие команды.</p>\n<hr>\n<h3 id=\"agent\"><a href=\"#agent\">agent</a></h3>\n<p>Управляйте агентами для opencode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode agent [command]\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"attach\"><a href=\"#attach\">attach</a></h3>\n<p>Подключите терминал к уже работающему внутреннему серверу opencode, запущенному с помощью команд <code dir=\"auto\">serve</code> или <code dir=\"auto\">web</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [url]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode attach [url]\"><div></div></button></div></figure></div>\n<p>Это позволяет использовать TUI с удаленным сервером opencode. Например:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Start the backend server for web/mobile access</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">web</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--port</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">4096</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--hostname</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">0.0.0.0</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># In another terminal, attach the TUI to the running backend</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">http://10.20.30.40:4096</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode web --port 4096 --hostname 0.0.0.0opencode attach http://10.20.30.40:4096\"><div></div></button></div></figure></div>\n<h4 id=\"флаги-1\"><a href=\"#флаги-1\">Флаги</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Короткий"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--dir"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Рабочий каталог для запуска TUI</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--continue"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Продолжить последний сеанс</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>Идентификатор сеанса для продолжения</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Создать ответвление сеанса при продолжении (используйте с <code dir=\"auto\">--continue</code> или <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--password"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-p</code></td><td>Пароль базовой аутентификации (по умолчанию <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--username"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-u</code></td><td>Имя пользователя базовой аутентификации (по умолчанию <code dir=\"auto\">OPENCODE_SERVER_USERNAME</code> или <code dir=\"auto\">opencode</code>)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"create\"><a href=\"#create\">create</a></h4>\n<p>Создайте нового агента с пользовательской конфигурацией.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">create</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode agent create\"><div></div></button></div></figure></div>\n<p>Эта команда поможет вам создать новый агент с настраиваемой системной подсказкой и настройкой инструмента.</p>\n<hr>\n<h4 id=\"list\"><a href=\"#list\">list</a></h4>\n<p>Перечислите всех доступных агентов.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode agent list\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"auth\"><a href=\"#auth\">auth</a></h3>\n<p>Команда для управления учетными данными и входом в систему для провайдеров.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode auth [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"login\"><a href=\"#login\">login</a></h4>\n<p>opencode использует список провайдеров с <a href=\"https://models.dev\">Models.dev</a>, поэтому вы можете использовать <code dir=\"auto\">opencode auth login</code> для настройки ключей API для любого поставщика, которого вы хотите использовать. Это хранится в <code dir=\"auto\">~/.local/share/opencode/auth.json</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">login</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode auth login\"><div></div></button></div></figure></div>\n<p>Когда opencode запускается, он загружает поставщиков из файла учетных данных. И если в ваших средах определены какие-либо ключи или файл <code dir=\"auto\">.env</code> в вашем проекте.</p>\n<hr>\n<h4 id=\"list-1\"><a href=\"#list-1\">list</a></h4>\n<p>Перечисляет всех проверенных поставщиков, которые хранятся в файле учетных данных.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode auth list\"><div></div></button></div></figure></div>\n<p>Или короткая версия.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode auth ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"logout\"><a href=\"#logout\">logout</a></h4>\n<p>Выключает вас из провайдера, удаляя его из файла учетных данных.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">logout</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode auth logout\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"github\"><a href=\"#github\">github</a></h3>\n<p>Управляйте агентом GitHub для автоматизации репозитория.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode github [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"install\"><a href=\"#install\">install</a></h4>\n<p>Установите агент GitHub в свой репозиторий.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">install</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode github install\"><div></div></button></div></figure></div>\n<p>Это настроит необходимый рабочий процесс GitHub Actions и проведет вас через процесс настройки. <a href=\"/docs/github\">Подробнее</a>.</p>\n<hr>\n<h4 id=\"run\"><a href=\"#run\">run</a></h4>\n<p>Запустите агент GitHub. Обычно это используется в действиях GitHub.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode github run\"><div></div></button></div></figure></div>\n<h5 id=\"флаги-2\"><a href=\"#флаги-2\">Флаги</a></h5>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--event"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Имитирующее событие GitHub для запуска агента"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--token"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Токен личного доступа GitHub"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"mcp\"><a href=\"#mcp\">mcp</a></h3>\n<p>Управляйте серверами протокола контекста модели.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode mcp [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"add\"><a href=\"#add\">add</a></h4>\n<p>Добавьте сервер MCP в свою конфигурацию.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">add</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode mcp add\"><div></div></button></div></figure></div>\n<p>Эта команда поможет вам добавить локальный или удаленный сервер MCP.</p>\n<hr>\n<h4 id=\"list-2\"><a href=\"#list-2\">list</a></h4>\n<p>Перечислите все настроенные серверы MCP и состояние их подключения.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode mcp list\"><div></div></button></div></figure></div>\n<p>Или используйте короткую версию.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode mcp ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"auth-1\"><a href=\"#auth-1\">auth</a></h4>\n<p>Аутентификация с помощью сервера MCP с поддержкой OAuth.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [name]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode mcp auth [name]\"><div></div></button></div></figure></div>\n<p>Если вы не укажете имя сервера, вам будет предложено выбрать один из доступных серверов с поддержкой OAuth.</p>\n<p>Вы также можете перечислить серверы с поддержкой OAuth и их статус аутентификации.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode mcp auth list\"><div></div></button></div></figure></div>\n<p>Или используйте короткую версию.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode mcp auth ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"logout-1\"><a href=\"#logout-1\">logout</a></h4>\n<p>Удалите учетные данные OAuth для сервера MCP.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">logout</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [name]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode mcp logout [name]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"debug\"><a href=\"#debug\">debug</a></h4>\n<p>Отладка проблем с подключением OAuth для сервера MCP.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">debug</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">&#x3C;name></span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode mcp debug <name>\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"models\"><a href=\"#models\">models</a></h3>\n<p>Перечислите все доступные модели от настроенных поставщиков.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [provider]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode models [provider]\"><div></div></button></div></figure></div>\n<p>Эта команда отображает все модели, доступные у настроенных вами поставщиков, в формате <code dir=\"auto\">provider/model</code>.</p>\n<p>Это полезно для определения точного названия модели, которое будет использоваться в <a href=\"/docs/config/\">вашем config</a>.</p>\n<p>При желании вы можете передать идентификатор поставщика, чтобы фильтровать модели по этому поставщику.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">anthropic</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode models anthropic\"><div></div></button></div></figure></div>\n<h4 id=\"флаги-3\"><a href=\"#флаги-3\">Флаги</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--refresh"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Обновите кеш моделей на сайте models.dev."
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--verbose"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Используйте более подробный вывод модели (включая метаданные, такие как затраты)."
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Используйте флаг <code dir=\"auto\">--refresh</code> для обновления списка кэшированных моделей. Это полезно, когда к поставщику добавлены новые модели и вы хотите увидеть их в opencode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--refresh</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode models --refresh\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"run-1\"><a href=\"#run-1\">run</a></h3>\n<p>Запустите opencode в неинтерактивном режиме, передав приглашение напрямую.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [message..]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode run [message..]\"><div></div></button></div></figure></div>\n<p>Это полезно для создания сценариев, автоматизации или когда вам нужен быстрый ответ без запуска полного TUI. Например.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><mark><span style=\"--0:#5c37a0;--1:#c5acf4\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span></mark><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">Explain</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">the</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">use</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">of</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">context</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">in</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">Go</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode run Explain the use of context in Go\"><div></div></button></div></figure></div>\n<p>Вы также можете подключиться к работающему экземпляру <code dir=\"auto\">opencode serve</code>, чтобы избежать холодной загрузки сервера MCP при каждом запуске:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Start a headless server in one terminal</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">serve</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># In another terminal, run commands that attach to it</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">http://localhost:4096</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Explain async/await in JavaScript\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode serveopencode run --attach http://localhost:4096 &#x22;Explain async/await in JavaScript&#x22;\"><div></div></button></div></figure></div>\n<h4 id=\"флаги-4\"><a href=\"#флаги-4\">Флаги</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Короткий"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--command"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Команда для запуска, используйте сообщение для аргументов</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--continue"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Продолжить последний сеанс</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>Идентификатор сеанса для продолжения</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Разветвить сеанс при продолжении (используйте с <code dir=\"auto\">--continue</code> или <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--share"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Поделиться сеансом</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--model"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Модель для использования в виде поставщика/модели.</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--agent"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Агент для использования</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--file"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-f</code></td><td>Файл(ы) для прикрепления к сообщению</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--format"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Формат: по умолчанию (отформатированный) или json (необработанные события JSON).</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--title"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Название сеанса (использует усеченное приглашение, если значение не указано)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--attach"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Подключитесь к работающему серверу opencode (например, <a href=\"http://localhost:4096\">http://localhost:4096</a>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--password"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-p</code></td><td>Пароль базовой аутентификации (по умолчанию <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--username"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-u</code></td><td>Имя пользователя базовой аутентификации (по умолчанию <code dir=\"auto\">OPENCODE_SERVER_USERNAME</code> или <code dir=\"auto\">opencode</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--dir"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Каталог для выполнения или путь на удалённом сервере при подключении</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--variant"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Вариант модели (уровень рассуждений для провайдера)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--thinking"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Показать блоки размышлений</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Порт локального сервера (по умолчанию случайный порт)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"serve\"><a href=\"#serve\">serve</a></h3>\n<p>Запустите автономный сервер opencode для доступа к API. Полный HTTP-интерфейс можно найти в <a href=\"/docs/server\">server docs</a>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">serve</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode serve\"><div></div></button></div></figure></div>\n<p>При этом запускается HTTP-сервер, который обеспечивает доступ API к функциям opencode без интерфейса TUI. Установите <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>, чтобы включить базовую аутентификацию HTTP (имя пользователя по умолчанию — <code dir=\"auto\">opencode</code>).</p>\n<h4 id=\"флаги-5\"><a href=\"#флаги-5\">Флаги</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Порт для прослушивания"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Имя хоста для прослушивания"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--mdns"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Включить обнаружение mDNS"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--cors"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Дополнительные источники браузера, позволяющие разрешить CORS"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"session\"><a href=\"#session\">session</a></h3>\n<p>Управляйте сессиями opencode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode session [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"list-3\"><a href=\"#list-3\">list</a></h4>\n<p>Перечислите все сеансы opencode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode session list\"><div></div></button></div></figure></div>\n<h5 id=\"флаги-6\"><a href=\"#флаги-6\">Флаги</a></h5>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Короткий"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--max-count"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-n</code></td><td>Ограничить N последних сеансов.</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--format"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Формат вывода: таблица или json (таблица)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"stats\"><a href=\"#stats\">stats</a></h3>\n<p>Покажите статистику использования токенов и затрат для ваших сеансов opencode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">stats</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode stats\"><div></div></button></div></figure></div>\n<h4 id=\"флаги-7\"><a href=\"#флаги-7\">Флаги</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--days"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Показать статистику за последние N дней (все время)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--tools"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Количество инструментов для отображения (все)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--models"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Показать разбивку по использованию модели (по умолчанию скрыто). Передайте номер, чтобы показать верхнюю N"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--project"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Фильтровать по проекту (все проекты, пустая строка: текущий проект)"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"export\"><a href=\"#export\">export</a></h3>\n<p>Экспортируйте данные сеанса в формате JSON.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">export</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [sessionID]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode export [sessionID]\"><div></div></button></div></figure></div>\n<p>Если вы не укажете идентификатор сеанса, вам будет предложено выбрать один из доступных сеансов.</p>\n<hr>\n<h3 id=\"import\"><a href=\"#import\">import</a></h3>\n<p>Импортируйте данные сеанса из файла JSON или URL-адреса общего ресурса opencode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">&#x3C;file></span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode import <file>\"><div></div></button></div></figure></div>\n<p>Вы можете импортировать из локального файла или URL-адреса общего ресурса opencode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session.json</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">https://opncd.ai/s/abc123</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode import session.jsonopencode import https://opncd.ai/s/abc123\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"web\"><a href=\"#web\">web</a></h3>\n<p>Запустите автономный сервер opencode с веб-интерфейсом.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">web</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode web\"><div></div></button></div></figure></div>\n<p>При этом запускается HTTP-сервер и открывается веб-браузер для доступа к opencode через веб-интерфейс. Установите <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>, чтобы включить базовую аутентификацию HTTP (имя пользователя по умолчанию — <code dir=\"auto\">opencode</code>).</p>\n<h4 id=\"флаги-8\"><a href=\"#флаги-8\">Флаги</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Порт для прослушивания"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Имя хоста для прослушивания"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--mdns"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Включить обнаружение mDNS"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--cors"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Дополнительные источники браузера, позволяющие разрешить CORS"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"acp\"><a href=\"#acp\">acp</a></h3>\n<p>Запустите сервер ACP (агент-клиентский протокол).</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">acp</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode acp\"><div></div></button></div></figure></div>\n<p>Эта команда запускает сервер ACP, который обменивается данными через stdin/stdout с использованием nd-JSON.</p>\n<h4 id=\"флаги-9\"><a href=\"#флаги-9\">Флаги</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--cwd"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Рабочий каталог"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Порт для прослушивания"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Имя хоста для прослушивания"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"uninstall\"><a href=\"#uninstall\">uninstall</a></h3>\n<p>Удалите opencode и удалите все связанные файлы.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">uninstall</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode uninstall\"><div></div></button></div></figure></div>\n<h4 id=\"флаги-10\"><a href=\"#флаги-10\">Флаги</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Короткий"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--keep-config"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Сохраняйте файлы конфигурации</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--keep-data"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-d</code></td><td>Храните данные сеанса и снимки</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--dry-run"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Покажите, что было бы удалено без удаления</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--force"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-f</code></td><td>Пропустить запросы подтверждения</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"upgrade\"><a href=\"#upgrade\">upgrade</a></h3>\n<p>Обновляет opencode до последней версии или определенной версии.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [target]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode upgrade [target]\"><div></div></button></div></figure></div>\n<p>Чтобы обновиться до последней версии.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode upgrade\"><div></div></button></div></figure></div>\n<p>Для обновления до определенной версии.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Окно терминала</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">v0.1.48</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Копировать\" data-copied=\"Скопировано!\" data-code=\"opencode upgrade v0.1.48\"><div></div></button></div></figure></div>\n<h4 id=\"флаги-11\"><a href=\"#флаги-11\">Флаги</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Короткий"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--method"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Используемый метод установки: local, npm, pnpm, bun, brew</td>"
          })]
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"глобальные-флаги\"><a href=\"#глобальные-флаги\">Глобальные флаги</a></h2>\n<p>CLI opencode принимает следующие глобальные флаги.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Флаг"
          }), createVNode(_components.th, {
            children: "Короткий"
          }), createVNode(_components.th, {
            children: "Описание"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--help"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-h</code></td><td>Отобразить справку</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--version"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-v</code></td><td>Распечатать номер версии</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--print-logs"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Печать журналов в stderr</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--log-level"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Уровень журнала (DEBUG, INFO, WARN, ERROR)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"переменные-среды\"><a href=\"#переменные-среды\">Переменные среды</a></h2>\n<p>opencode можно настроить с помощью переменных среды.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Переменная</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code dir=\"auto\">OPENCODE_AUTO_SHARE</code></td><td>логическое значение</td><td>Автоматически делиться сеансами</td></tr><tr><td><code dir=\"auto\">OPENCODE_GIT_BASH_PATH</code></td><td>строка</td><td>Путь к исполняемому файлу Git Bash в Windows</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG</code></td><td>строка</td><td>Путь к файлу конфигурации</td></tr><tr><td><code dir=\"auto\">OPENCODE_TUI_CONFIG</code></td><td>строка</td><td>Путь к файлу конфигурации TUI</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG_DIR</code></td><td>строка</td><td>Путь к каталогу конфигурации</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG_CONTENT</code></td><td>строка</td><td>Встроенное содержимое конфигурации json</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_AUTOUPDATE</code></td><td>логическое значение</td><td>Отключить автоматическую проверку обновлений</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_PRUNE</code></td><td>логическое значение</td><td>Отключить удаление старых данных</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_TERMINAL_TITLE</code></td><td>логическое значение</td><td>Отключить автоматическое обновление заголовка терминала</td></tr><tr><td><code dir=\"auto\">OPENCODE_PERMISSION</code></td><td>строка</td><td>Встроенная конфигурация разрешений json</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_DEFAULT_PLUGINS</code></td><td>логическое значение</td><td>Отключить плагины по умолчанию</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_LSP_DOWNLOAD</code></td><td>логическое значение</td><td>Отключить автоматическую загрузку LSP-сервера</td></tr><tr><td><code dir=\"auto\">OPENCODE_ENABLE_EXPERIMENTAL_MODELS</code></td><td>логическое значение</td><td>Включить экспериментальные модели</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_AUTOCOMPACT</code></td><td>логическое значение</td><td>Отключить автоматическое сжатие контекста</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE</code></td><td>логическое значение</td><td>Отключить чтение из <code dir=\"auto\">.claude</code> (подсказка + навыки)</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE_PROMPT</code></td><td>логическое значение</td><td>Отключить чтение <code dir=\"auto\">~/.claude/CLAUDE.md</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE_SKILLS</code></td><td>логическое значение</td><td>Отключить загрузку <code dir=\"auto\">.claude/skills</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_MODELS_FETCH</code></td><td>логическое значение</td><td>Отключить получение моделей из удаленных источников</td></tr><tr><td><code dir=\"auto\">OPENCODE_FAKE_VCS</code></td><td>строка</td><td>Поддельный поставщик VCS для целей тестирования</td></tr><tr><td><code dir=\"auto\">OPENCODE_CLIENT</code></td><td>строка</td><td>Идентификатор клиента (по умолчанию <code dir=\"auto\">cli</code>)</td></tr><tr><td><code dir=\"auto\">OPENCODE_ENABLE_EXA</code></td><td>логическое значение</td><td>Включить инструменты веб-поиска Exa</td></tr><tr><td><code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code></td><td>строка</td><td>Включить базовую аутентификацию для <code dir=\"auto\">serve</code>/<code dir=\"auto\">web</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_SERVER_USERNAME</code></td><td>строка</td><td>Переопределить имя пользователя базовой аутентификации (по умолчанию <code dir=\"auto\">opencode</code>)</td></tr><tr><td><code dir=\"auto\">OPENCODE_MODELS_URL</code></td><td>строка</td><td>Пользовательский URL-адрес для получения конфигурации модели</td></tr></tbody></table>\n<hr>\n<h3 id=\"экспериментальные-функции\"><a href=\"#экспериментальные-функции\">Экспериментальные функции</a></h3>\n<p>Эти переменные среды позволяют использовать экспериментальные функции, которые могут быть изменены или удалены.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Переменная</th><th>Тип</th><th>Описание</th></tr></thead><tbody><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL</code></td><td>логическое значение</td><td>Включить все экспериментальные функции</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_ICON_DISCOVERY</code></td><td>логическое значение</td><td>Включить обнаружение значков</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT</code></td><td>логическое значение</td><td>Отключить копирование при выборе в TUI</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS</code></td><td>число</td><td>Таймаут по умолчанию для команд bash в мс</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX</code></td><td>число</td><td>Максимальное количество токенов вывода для ответов LLM</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_FILEWATCHER</code></td><td>логическое значение</td><td>Включить просмотр файлов для всего каталога</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_OXFMT</code></td><td>логическое значение</td><td>Включить форматтер oxfmt</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_LSP_TOOL</code></td><td>логическое значение</td><td>Включить экспериментальный инструмент LSP</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_DISABLE_FILEWATCHER</code></td><td>логическое значение</td><td>Отключить просмотрщик файлов</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_EXA</code></td><td>логическое значение</td><td>Включить экспериментальные функции Exa</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_LSP_TY</code></td><td>логическое значение</td><td>Включить TY LSP для файлов python</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_PLAN_MODE</code></td><td>логическое значение</td><td>Включить режим плана</td></tr></tbody></table>"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/ru/cli.mdx";
const file = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/ru/cli.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/ru/cli.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
