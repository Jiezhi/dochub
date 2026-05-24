globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D-7CwiXF.mjs';
import './Code_CadJumwV.mjs';

const frontmatter = {
  "title": "CLI",
  "description": "Opcje i polecenia wiersza poleceń OpenCode."
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "tui",
    "text": "tui"
  }, {
    "depth": 4,
    "slug": "flagi",
    "text": "Flagi"
  }, {
    "depth": 2,
    "slug": "polecenia",
    "text": "Polecenia"
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
    "slug": "flagi-1",
    "text": "Flagi"
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
    "slug": "flagi-2",
    "text": "Flagi"
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
    "slug": "flagi-3",
    "text": "Flagi"
  }, {
    "depth": 3,
    "slug": "run-1",
    "text": "run"
  }, {
    "depth": 4,
    "slug": "flagi-4",
    "text": "Flagi"
  }, {
    "depth": 3,
    "slug": "serve",
    "text": "serve"
  }, {
    "depth": 4,
    "slug": "flagi-5",
    "text": "Flagi"
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
    "slug": "flagi-6",
    "text": "Flagi"
  }, {
    "depth": 3,
    "slug": "stats",
    "text": "stats"
  }, {
    "depth": 4,
    "slug": "flagi-7",
    "text": "Flagi"
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
    "slug": "flagi-8",
    "text": "Flagi"
  }, {
    "depth": 3,
    "slug": "acp",
    "text": "acp"
  }, {
    "depth": 4,
    "slug": "flagi-9",
    "text": "Flagi"
  }, {
    "depth": 3,
    "slug": "uninstall",
    "text": "uninstall"
  }, {
    "depth": 4,
    "slug": "flagi-10",
    "text": "Flagi"
  }, {
    "depth": 3,
    "slug": "upgrade",
    "text": "upgrade"
  }, {
    "depth": 4,
    "slug": "flagi-11",
    "text": "Flagi"
  }, {
    "depth": 2,
    "slug": "flagi-globalne",
    "text": "Flagi globalne"
  }, {
    "depth": 2,
    "slug": "zmienne-środowiskowe",
    "text": "Zmienne środowiskowe"
  }, {
    "depth": 3,
    "slug": "eksperymentalne",
    "text": "Eksperymentalne"
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
      "set:html": "<p>CLI OpenCode domyślnie uruchamia <a href=\"/docs/tui\">TUI</a>, gdy wywołasz je bez argumentów.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode\"><div></div></button></div></figure></div>\n<p>CLI obsługuje też polecenia opisane na tej stronie, więc możesz używać OpenCode programowo.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Explain how closures work in JavaScript\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode run &#x22;Explain how closures work in JavaScript&#x22;\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"tui\"><a href=\"#tui\">tui</a></h3>\n<p>Uruchamia interfejs terminalowy (TUI) OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [project]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode [project]\"><div></div></button></div></figure></div>\n<h4 id=\"flagi\"><a href=\"#flagi\">Flagi</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Skrót"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Kontynuuj ostatnią sesję</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>Identyfikator sesji do kontynuowania</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Sklonuj sesję podczas kontynuacji (użyj z <code dir=\"auto\">--continue</code> lub <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--prompt"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Monit do użycia</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--model"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Model do użycia w formacie dostawca/model</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--agent"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Agent do użycia</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Port do nasłuchiwania</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Nazwa hosta, do której należy się powiązać</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"polecenia\"><a href=\"#polecenia\">Polecenia</a></h2>\n<p>Interfejs CLI OpenCode zawiera także dodatkowe polecenia.</p>\n<hr>\n<h3 id=\"agent\"><a href=\"#agent\">agent</a></h3>\n<p>Zarządzaj agentami OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode agent [command]\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"attach\"><a href=\"#attach\">attach</a></h3>\n<p>Dołącz terminal do już działającego serwera backendu OpenCode uruchomionego za pomocą <code dir=\"auto\">serve</code> lub <code dir=\"auto\">web</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [url]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode attach [url]\"><div></div></button></div></figure></div>\n<p>Pozwala to połączyć TUI ze zdalnym backendem OpenCode. Na przykład:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Start the backend server for web/mobile access</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">web</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--port</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">4096</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--hostname</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">0.0.0.0</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># In another terminal, attach the TUI to the running backend</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">http://10.20.30.40:4096</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode web --port 4096 --hostname 0.0.0.0opencode attach http://10.20.30.40:4096\"><div></div></button></div></figure></div>\n<h4 id=\"flagi-1\"><a href=\"#flagi-1\">Flagi</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Skrót"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "<td></td><td>Katalog roboczy, w którym uruchomić TUI</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--continue"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Kontynuuj ostatnią sesję</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>Identyfikator sesji do kontynuowania</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Rozgałęź sesję podczas kontynuowania (użyj z <code dir=\"auto\">--continue</code> lub <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--password"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-p</code></td><td>Hasło uwierzytelniania podstawowego (domyślnie <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--username"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-u</code></td><td>Nazwa użytkownika uwierzytelniania podstawowego (domyślnie <code dir=\"auto\">OPENCODE_SERVER_USERNAME</code> lub <code dir=\"auto\">opencode</code>)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"create\"><a href=\"#create\">create</a></h4>\n<p>Utwórz nowego agenta z niestandardową konfiguracją.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">create</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode agent create\"><div></div></button></div></figure></div>\n<p>To polecenie poprowadzi Cię przez proces tworzenia nowego agenta z niestandardowym promptem systemowym i konfiguracją narzędzi.</p>\n<hr>\n<h4 id=\"list\"><a href=\"#list\">list</a></h4>\n<p>Wyświetl listę wszystkich agentów.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode agent list\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"auth\"><a href=\"#auth\">auth</a></h3>\n<p>Zarządzaj danymi uwierzytelniającymi i logowaniem dla dostawców.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode auth [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"login\"><a href=\"#login\">login</a></h4>\n<p>OpenCode integruje się z wieloma dostawcami. Możesz użyć <code dir=\"auto\">opencode auth login</code>, aby skonfigurować klucz API dla dowolnego obsługiwanego dostawcy. Klucze są bezpiecznie przechowywane w <code dir=\"auto\">~/.local/share/opencode/auth.json</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">login</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode auth login\"><div></div></button></div></figure></div>\n<p>Podczas uruchamiania OpenCode ładuje dostawców z pliku poświadczeń, a także ze zmiennych środowiskowych lub pliku <code dir=\"auto\">.env</code> w Twoim projekcie.</p>\n<hr>\n<h4 id=\"list-1\"><a href=\"#list-1\">list</a></h4>\n<p>Wyświetl listę wszystkich uwierzytelnionych dostawców przechowywanych w pliku poświadczeń.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode auth list\"><div></div></button></div></figure></div>\n<p>Lub skrócona wersja:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode auth ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"logout\"><a href=\"#logout\">logout</a></h4>\n<p>Wyloguj się z dostawcy, usuwając go z pliku poświadczeń.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">logout</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode auth logout\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"github\"><a href=\"#github\">github</a></h3>\n<p>Zarządzaj agentem GitHub w celu automatyzacji repozytorium.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode github [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"install\"><a href=\"#install\">install</a></h4>\n<p>Zainstaluj agenta GitHub w swoim repozytorium.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">install</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode github install\"><div></div></button></div></figure></div>\n<p>Spowoduje to utworzenie pliku workflow GitHub Actions i poprowadzi Cię przez proces konfiguracji. <a href=\"/docs/github\">Dowiedz się więcej</a>.</p>\n<hr>\n<h4 id=\"run\"><a href=\"#run\">run</a></h4>\n<p>Uruchom agenta na GitHubie. Zwykle używane w GitHub Actions.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode github run\"><div></div></button></div></figure></div>\n<h5 id=\"flagi-2\"><a href=\"#flagi-2\">Flagi</a></h5>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "Zdarzenie GitHub, które wyzwoliło agenta"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--token"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Osobisty token dostępu GitHub"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"mcp\"><a href=\"#mcp\">mcp</a></h3>\n<p>Zarządzaj serwerami Model Context Protocol (MCP).</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode mcp [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"add\"><a href=\"#add\">add</a></h4>\n<p>Dodaj serwer MCP do swojej konfiguracji.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">add</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode mcp add\"><div></div></button></div></figure></div>\n<p>To polecenie poprowadzi Cię przez proces dodawania lokalnego lub zdalnego serwera MCP.</p>\n<hr>\n<h4 id=\"list-2\"><a href=\"#list-2\">list</a></h4>\n<p>Wyświetl listę wszystkich skonfigurowanych serwerów MCP i ich status.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode mcp list\"><div></div></button></div></figure></div>\n<p>Lub skrócona wersja:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode mcp ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"auth-1\"><a href=\"#auth-1\">auth</a></h4>\n<p>Uwierzytelnij się w serwerze MCP z włączoną funkcją OAuth.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [name]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode mcp auth [name]\"><div></div></button></div></figure></div>\n<p>Jeśli nie podasz nazwy serwera, zostaniesz poproszony o wybranie jednego z serwerów wymagających uwierzytelnienia.</p>\n<p>Możesz także wyświetlić listę serwerów obsługujących OAuth i ich status uwierzytelnienia.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode mcp auth list\"><div></div></button></div></figure></div>\n<p>Lub skrócona wersja:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode mcp auth ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"logout-1\"><a href=\"#logout-1\">logout</a></h4>\n<p>Usuń tokeny OAuth dla serwera MCP.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">logout</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [name]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode mcp logout [name]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"debug\"><a href=\"#debug\">debug</a></h4>\n<p>Debuguj problemy z połączeniem OAuth dla serwera MCP.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">debug</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">&#x3C;name></span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode mcp debug <name>\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"models\"><a href=\"#models\">models</a></h3>\n<p>Wyświetl listę modeli ze wszystkich skonfigurowanych dostawców.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [provider]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode models [provider]\"><div></div></button></div></figure></div>\n<p>Pokazuje modele dostępne do użycia w <code dir=\"auto\">provider/model</code>.</p>\n<p>Jest to identyfikator modelu, którego używasz w <a href=\"/docs/config\">konfiguracji</a>.</p>\n<p>Opcjonalnie możesz podać identyfikator dostawcy, aby filtrować modele według tego dostawcy.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">anthropic</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode models anthropic\"><div></div></button></div></figure></div>\n<h4 id=\"flagi-3\"><a href=\"#flagi-3\">Flagi</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "Odśwież pamięć podręczną modeli"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--verbose"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Bardziej szczegółowe dane wyjściowe modelu (zawiera metadane, takie jak koszty)"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Użyj flagi <code dir=\"auto\">--refresh</code>, aby zaktualizować listę modeli w pamięci podręcznej. Jest to przydatne, gdy dostawca dodał nowe modele, które chcesz zobaczyć w OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--refresh</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode models --refresh\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"run-1\"><a href=\"#run-1\">run</a></h3>\n<p>Uruchom OpenCode w trybie nieinteraktywnym, przekazując bezpośrednio prompt.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [message..]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode run [message..]\"><div></div></button></div></figure></div>\n<p>Jest to przydatne do tworzenia skryptów, automatyzacji lub gdy chcesz wysłać szybkie zapytanie bez uruchamiania TUI. Na przykład:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><mark><span style=\"--0:#5c37a0;--1:#c5acf4\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span></mark><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">Explain</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">the</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">use</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">of</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">context</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">in</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">Go</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode run Explain the use of context in Go\"><div></div></button></div></figure></div>\n<p>Można również użyć tego z działającym <code dir=\"auto\">opencode serve</code>, aby uniknąć zimnego startu serwera MCP przy każdym uruchomieniu:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Start a headless server in one terminal</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">serve</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># In another terminal, run commands that attach to it</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">http://localhost:4096</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Explain async/await in JavaScript\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode serveopencode run --attach http://localhost:4096 &#x22;Explain async/await in JavaScript&#x22;\"><div></div></button></div></figure></div>\n<h4 id=\"flagi-4\"><a href=\"#flagi-4\">Flagi</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Skrót"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "<td></td><td>Polecenie do uruchomienia, reszta to argumenty</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--continue"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Kontynuuj ostatnią sesję</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>Identyfikator sesji do kontynuowania</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Sklonuj sesję podczas kontynuacji (użyj z <code dir=\"auto\">--continue</code> lub <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--share"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Udostępnij sesję po zakończeniu</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--model"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Model do użycia w formacie dostawca/model</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--agent"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Agent do użycia</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--file"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-f</code></td><td>Pliki do załączenia do wiadomości</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--format"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Format wyjściowy: <code dir=\"auto\">default</code> (sformatowany) lub <code dir=\"auto\">json</code> (surowy JSON)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--title"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Tytuł sesji (jeśli nie podano, zostanie wygenerowany z promptu)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--attach"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Dołącz do działającego serwera OpenCode (np. <a href=\"http://localhost:4096\">http://localhost:4096</a>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--password"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-p</code></td><td>Hasło uwierzytelniania podstawowego (domyślnie <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--username"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-u</code></td><td>Nazwa użytkownika uwierzytelniania podstawowego (domyślnie <code dir=\"auto\">OPENCODE_SERVER_USERNAME</code> lub <code dir=\"auto\">opencode</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--dir"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Katalog do uruchomienia lub ścieżka na zdalnym serwerze podczas dołączania</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--variant"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Wariant modelu (poziom wnioskowania specyficzny dla dostawcy)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--thinking"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Pokaż bloki myślenia</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Port dla serwera lokalnego (domyślnie losowy)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"serve\"><a href=\"#serve\">serve</a></h3>\n<p>Uruchom serwer OpenCode (bez interfejsu) w celu uzyskania dostępu do API. Pełny opis API HTTP znajduje się w <a href=\"/docs/server\">dokumentacji serwera</a>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">serve</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode serve\"><div></div></button></div></figure></div>\n<p>Uruchamia to serwer HTTP, który zapewnia dostęp do API OpenCode bez interfejsu TUI. Ustaw <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>, aby włączyć podstawowe uwierzytelnianie HTTP (domyślna nazwa użytkownika to <code dir=\"auto\">opencode</code>).</p>\n<h4 id=\"flagi-5\"><a href=\"#flagi-5\">Flagi</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "Port do nasłuchiwania"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Nazwa hosta, do której należy się powiązać"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--mdns"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Włącz wykrywanie mDNS"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--cors"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Dodatkowe dozwolone źródła CORS"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"session\"><a href=\"#session\">session</a></h3>\n<p>Zarządzaj sesjami OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode session [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"list-3\"><a href=\"#list-3\">list</a></h4>\n<p>Lista wszystkich sesji OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode session list\"><div></div></button></div></figure></div>\n<h5 id=\"flagi-6\"><a href=\"#flagi-6\">Flagi</a></h5>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Skrót"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "<td><code dir=\"auto\">-n</code></td><td>Ogranicz do ostatnich N sesji</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--format"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Format wyjściowy: tabela lub json (tabela)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"stats\"><a href=\"#stats\">stats</a></h3>\n<p>Pokaż statystyki wykorzystania tokenów i sesji OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">stats</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode stats\"><div></div></button></div></figure></div>\n<h4 id=\"flagi-7\"><a href=\"#flagi-7\">Flagi</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "Pokaż statystyki z ostatnich N dni (domyślnie: cały czas)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--tools"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Pokaż użycie poszczególnych narzędzi (domyślnie: wszystkie)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--models"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Pokaż podział na modele (domyślnie ukryty). Podaj liczbę, aby pokazać N najczęstszych"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--project"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Filtruj według projektu (domyślnie: wszystkie projekty, pusty ciąg: bieżący projekt)"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"export\"><a href=\"#export\">export</a></h3>\n<p>Eksportuj dane sesji jako JSON.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">export</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [sessionID]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode export [sessionID]\"><div></div></button></div></figure></div>\n<p>Jeśli nie podasz identyfikatora sesji, zostaniesz poproszony o wybranie jednej z ostatnich sesji.</p>\n<hr>\n<h3 id=\"import\"><a href=\"#import\">import</a></h3>\n<p>Importuj dane sesji z pliku JSON lub adresu URL udostępniania OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">&#x3C;file></span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode import <file>\"><div></div></button></div></figure></div>\n<p>Możesz importować z pliku lokalnego lub adresu URL.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session.json</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">https://opncd.ai/s/abc123</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode import session.jsonopencode import https://opncd.ai/s/abc123\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"web\"><a href=\"#web\">web</a></h3>\n<p>Uruchom serwer OpenCode z interfejsem internetowym.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">web</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode web\"><div></div></button></div></figure></div>\n<p>Uruchamia to serwer HTTP i udostępnia OpenCode przez interfejs przeglądarkowy. Ustaw <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>, aby włączyć podstawowe uwierzytelnianie HTTP (domyślna nazwa użytkownika to <code dir=\"auto\">opencode</code>).</p>\n<h4 id=\"flagi-8\"><a href=\"#flagi-8\">Flagi</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "Port do nasłuchiwania"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Nazwa hosta, do której należy się powiązać"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--mdns"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Włącz wykrywanie mDNS"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--cors"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Dodatkowe dozwolone źródła CORS"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"acp\"><a href=\"#acp\">acp</a></h3>\n<p>Uruchom serwer ACP (Agent Client Protocol).</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">acp</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode acp\"><div></div></button></div></figure></div>\n<p>Uruchamia serwer ACP, który komunikuje się przez stdin/stdout przy użyciu JSON-RPC.</p>\n<h4 id=\"flagi-9\"><a href=\"#flagi-9\">Flagi</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "Katalog roboczy"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Port do nasłuchiwania"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Nazwa hosta, do której należy się powiązać"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"uninstall\"><a href=\"#uninstall\">uninstall</a></h3>\n<p>Odinstaluj OpenCode i usuń wszystkie powiązane pliki.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">uninstall</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode uninstall\"><div></div></button></div></figure></div>\n<h4 id=\"flagi-10\"><a href=\"#flagi-10\">Flagi</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Skrót"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Zachowaj pliki konfiguracyjne</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--keep-data"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-d</code></td><td>Zachowaj dane sesji i migawki</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--dry-run"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Pokaż co zostanie usunięte</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--force"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-f</code></td><td>Pomiń monity o potwierdzenie</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"upgrade\"><a href=\"#upgrade\">upgrade</a></h3>\n<p>Aktualizuj OpenCode do najnowszej lub określonej wersji.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [target]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode upgrade [target]\"><div></div></button></div></figure></div>\n<p>Aby zaktualizować do najnowszej wersji:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode upgrade\"><div></div></button></div></figure></div>\n<p>Aby zaktualizować do konkretnej wersji:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Okno terminala</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">v0.1.48</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Skopiuj do schowka\" data-copied=\"Skopiowane!\" data-code=\"opencode upgrade v0.1.48\"><div></div></button></div></figure></div>\n<h4 id=\"flagi-11\"><a href=\"#flagi-11\">Flagi</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Skrót"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Wymuś metodę instalacji: curl, npm, pnpm, bun, brew</td>"
          })]
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"flagi-globalne\"><a href=\"#flagi-globalne\">Flagi globalne</a></h2>\n<p>Interfejs CLI OpenCode przyjmuje następujące flagi globalne dla każdego polecenia.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flaga"
          }), createVNode(_components.th, {
            children: "Skrót"
          }), createVNode(_components.th, {
            children: "Opis"
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
            "set:html": "<td><code dir=\"auto\">-h</code></td><td>Wyświetl pomoc</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--version"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-v</code></td><td>Wydrukuj numer wersji</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--print-logs"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Drukuj logi na stderr</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--log-level"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Poziom logowania (DEBUG, INFO, WARN, ERROR)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"zmienne-środowiskowe\"><a href=\"#zmienne-środowiskowe\">Zmienne środowiskowe</a></h2>\n<p>OpenCode można skonfigurować za pomocą zmiennych środowiskowych.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Zmienna</th><th>Typ</th><th>Opis</th></tr></thead><tbody><tr><td><code dir=\"auto\">OPENCODE_AUTO_SHARE</code></td><td>boolean</td><td>Automatycznie udostępniaj sesje</td></tr><tr><td><code dir=\"auto\">OPENCODE_GIT_BASH_PATH</code></td><td>string</td><td>Ścieżka do pliku wykonywalnego Git Bash w systemie Windows</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG</code></td><td>string</td><td>Ścieżka do pliku konfiguracyjnego</td></tr><tr><td><code dir=\"auto\">OPENCODE_TUI_CONFIG</code></td><td>string</td><td>Ścieżka do pliku konfiguracyjnego TUI</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG_DIR</code></td><td>string</td><td>Ścieżka do katalogu konfiguracyjnego</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG_CONTENT</code></td><td>string</td><td>Treść konfiguracji JSON (inline)</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_AUTOUPDATE</code></td><td>boolean</td><td>Wyłącz automatyczne sprawdzanie aktualizacji</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_PRUNE</code></td><td>boolean</td><td>Wyłącz czyszczenie starych wyników (pruning)</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_TERMINAL_TITLE</code></td><td>boolean</td><td>Wyłącz automatyczne ustawianie tytułu terminala</td></tr><tr><td><code dir=\"auto\">OPENCODE_PERMISSION</code></td><td>string</td><td>Konfiguracja uprawnień w JSON (inline)</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_DEFAULT_PLUGINS</code></td><td>boolean</td><td>Wyłącz domyślne wtyczki</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_LSP_DOWNLOAD</code></td><td>boolean</td><td>Wyłącz automatyczne pobieranie serwerów LSP</td></tr><tr><td><code dir=\"auto\">OPENCODE_ENABLE_EXPERIMENTAL_MODELS</code></td><td>boolean</td><td>Włącz modele eksperymentalne</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_AUTOCOMPACT</code></td><td>boolean</td><td>Wyłącz automatyczne kompaktowanie kontekstu</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE</code></td><td>boolean</td><td>Wyłącz integrację z <code dir=\"auto\">.claude</code> (prompt + skills)</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE_PROMPT</code></td><td>boolean</td><td>Wyłącz czytanie <code dir=\"auto\">~/.claude/CLAUDE.md</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE_SKILLS</code></td><td>boolean</td><td>Wyłącz ładowanie <code dir=\"auto\">.claude/skills</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_MODELS_FETCH</code></td><td>boolean</td><td>Wyłącz pobieranie modeli ze źródeł zewnętrznych</td></tr><tr><td><code dir=\"auto\">OPENCODE_FAKE_VCS</code></td><td>string</td><td>Fałszywy dostawca VCS do celów testowych</td></tr><tr><td><code dir=\"auto\">OPENCODE_CLIENT</code></td><td>string</td><td>Identyfikator klienta (domyślnie <code dir=\"auto\">cli</code>)</td></tr><tr><td><code dir=\"auto\">OPENCODE_ENABLE_EXA</code></td><td>boolean</td><td>Włącz narzędzie wyszukiwania internetowego Exa</td></tr><tr><td><code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code></td><td>string</td><td>Włącz uwierzytelnianie podstawowe dla <code dir=\"auto\">serve</code>/<code dir=\"auto\">web</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_SERVER_USERNAME</code></td><td>string</td><td>Nazwa użytkownika do autoryzacji (domyślnie <code dir=\"auto\">opencode</code>)</td></tr><tr><td><code dir=\"auto\">OPENCODE_MODELS_URL</code></td><td>string</td><td>Niestandardowy adres URL do pobierania konfiguracji modeli</td></tr></tbody></table>\n<hr>\n<h3 id=\"eksperymentalne\"><a href=\"#eksperymentalne\">Eksperymentalne</a></h3>\n<p>Te zmienne włączają funkcje eksperymentalne, które mogą ulec zmianie lub zostać usunięte.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Zmienna</th><th>Typ</th><th>Opis</th></tr></thead><tbody><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL</code></td><td>boolean</td><td>Włącz wszystkie funkcje eksperymentalne</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_ICON_DISCOVERY</code></td><td>boolean</td><td>Włącz wykrywanie ikon</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT</code></td><td>boolean</td><td>Wyłącz kopiowanie przy zaznaczaniu w TUI</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS</code></td><td>number</td><td>Domyślny limit czasu dla narzędzia bash w ms</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX</code></td><td>number</td><td>Maksymalne tokeny wyjściowe dla LLM</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_FILEWATCHER</code></td><td>boolean</td><td>Włącz obserwatora plików dla całego katalogu</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_OXFMT</code></td><td>boolean</td><td>Włącz formater oxfmt</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_LSP_TOOL</code></td><td>boolean</td><td>Włącz eksperymentalne narzędzie LSP</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_DISABLE_FILEWATCHER</code></td><td>boolean</td><td>Wyłącz obserwatora plików</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_EXA</code></td><td>boolean</td><td>Włącz funkcje eksperymentalne Exa</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_LSP_TY</code></td><td>boolean</td><td>Włącz TY LSP dla plików python</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_PLAN_MODE</code></td><td>boolean</td><td>Włącz tryb planowania</td></tr></tbody></table>"
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

const url = "src/content/docs/pl/cli.mdx";
const file = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/pl/cli.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/pl/cli.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
