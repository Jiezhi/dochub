globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D-7CwiXF.mjs';
import './Code_CadJumwV.mjs';

const frontmatter = {
  "title": "CLI",
  "description": "Opzioni e comandi della CLI di OpenCode."
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "tui",
    "text": "tui"
  }, {
    "depth": 4,
    "slug": "flag",
    "text": "Flag"
  }, {
    "depth": 2,
    "slug": "comandi",
    "text": "Comandi"
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
    "slug": "flag-1",
    "text": "Flag"
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
    "slug": "flag-2",
    "text": "Flag"
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
    "slug": "flag-3",
    "text": "Flag"
  }, {
    "depth": 3,
    "slug": "run-1",
    "text": "run"
  }, {
    "depth": 4,
    "slug": "flag-4",
    "text": "Flag"
  }, {
    "depth": 3,
    "slug": "serve",
    "text": "serve"
  }, {
    "depth": 4,
    "slug": "flag-5",
    "text": "Flag"
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
    "slug": "flag-6",
    "text": "Flag"
  }, {
    "depth": 3,
    "slug": "stats",
    "text": "stats"
  }, {
    "depth": 4,
    "slug": "flag-7",
    "text": "Flag"
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
    "slug": "flag-8",
    "text": "Flag"
  }, {
    "depth": 3,
    "slug": "acp",
    "text": "acp"
  }, {
    "depth": 4,
    "slug": "flag-9",
    "text": "Flag"
  }, {
    "depth": 3,
    "slug": "uninstall",
    "text": "uninstall"
  }, {
    "depth": 4,
    "slug": "flag-10",
    "text": "Flag"
  }, {
    "depth": 3,
    "slug": "upgrade",
    "text": "upgrade"
  }, {
    "depth": 4,
    "slug": "flag-11",
    "text": "Flag"
  }, {
    "depth": 2,
    "slug": "flag-globali",
    "text": "Flag globali"
  }, {
    "depth": 2,
    "slug": "variabili-dambiente",
    "text": "Variabili d’ambiente"
  }, {
    "depth": 3,
    "slug": "sperimentale",
    "text": "Sperimentale"
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
      "set:html": "<p>La CLI di OpenCode, per impostazione predefinita, avvia la <a href=\"/docs/tui\">TUI</a> quando viene eseguita senza argomenti.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode\"><div></div></button></div></figure></div>\n<p>Ma accetta anche i comandi documentati in questa pagina. Questo ti permette di interagire con OpenCode in modo programmatico.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Explain how closures work in JavaScript\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode run &#x22;Explain how closures work in JavaScript&#x22;\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"tui\"><a href=\"#tui\">tui</a></h3>\n<p>Avvia l’interfaccia testuale di OpenCode (interfaccia utente da terminale).</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [project]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode [project]\"><div></div></button></div></figure></div>\n<h4 id=\"flag\"><a href=\"#flag\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Breve"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Continua l’ultima sessione</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>ID sessione da continuare</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Duplica la sessione quando continui (usa con <code dir=\"auto\">--continue</code> o <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--prompt"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Prompt da usare</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--model"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Modello nel formato provider/model</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--agent"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Agente da usare</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Porta su cui mettersi in ascolto</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Hostname su cui mettersi in ascolto</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"comandi\"><a href=\"#comandi\">Comandi</a></h2>\n<p>La CLI di OpenCode include anche i seguenti comandi.</p>\n<hr>\n<h3 id=\"agent\"><a href=\"#agent\">agent</a></h3>\n<p>Gestisci gli agenti per OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode agent [command]\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"attach\"><a href=\"#attach\">attach</a></h3>\n<p>Collega un terminale a un backend server di OpenCode già in esecuzione avviato tramite i comandi <code dir=\"auto\">serve</code> o <code dir=\"auto\">web</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [url]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode attach [url]\"><div></div></button></div></figure></div>\n<p>Questo consente di usare la TUI con un backend OpenCode remoto. Per esempio:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Start the backend server for web/mobile access</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">web</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--port</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">4096</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--hostname</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">0.0.0.0</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># In un altro terminale, collega la TUI al backend in esecuzione</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">http://10.20.30.40:4096</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode web --port 4096 --hostname 0.0.0.0opencode attach http://10.20.30.40:4096\"><div></div></button></div></figure></div>\n<h4 id=\"flag-1\"><a href=\"#flag-1\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Breve"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "<td></td><td>Working directory in cui avviare la TUI</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--continue"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Continua l’ultima sessione</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>ID sessione da continuare</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Crea un fork della sessione durante la continuazione (usa con <code dir=\"auto\">--continue</code> o <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--password"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-p</code></td><td>Password per l’autenticazione di base (predefinita: <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--username"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-u</code></td><td>Nome utente per l’autenticazione di base (predefinito: <code dir=\"auto\">OPENCODE_SERVER_USERNAME</code> o <code dir=\"auto\">opencode</code>)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"create\"><a href=\"#create\">create</a></h4>\n<p>Crea un nuovo agente con configurazione personalizzata.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">create</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode agent create\"><div></div></button></div></figure></div>\n<p>Questo comando ti guida nella creazione di un nuovo agente con un system prompt personalizzato e configurazione degli strumenti.</p>\n<hr>\n<h4 id=\"list\"><a href=\"#list\">list</a></h4>\n<p>Elenca tutti gli agenti disponibili.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode agent list\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"auth\"><a href=\"#auth\">auth</a></h3>\n<p>Comando per gestire le credenziali e il login dei provider.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"login\"><a href=\"#login\">login</a></h4>\n<p>OpenCode si basa sull’elenco provider di <a href=\"https://models.dev\">Models.dev</a>, quindi puoi usare <code dir=\"auto\">opencode auth login</code> per configurare le API key per qualunque provider tu voglia usare. Le credenziali vengono salvate in <code dir=\"auto\">~/.local/share/opencode/auth.json</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">login</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth login\"><div></div></button></div></figure></div>\n<p>Quando OpenCode si avvia, carica i provider dal file delle credenziali e, se presenti, anche eventuali key definite nell’ambiente o in un file <code dir=\"auto\">.env</code> nel progetto.</p>\n<hr>\n<h4 id=\"list-1\"><a href=\"#list-1\">list</a></h4>\n<p>Elenca tutti i provider autenticati come salvati nel file delle credenziali.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth list\"><div></div></button></div></figure></div>\n<p>Oppure la versione corta.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"logout\"><a href=\"#logout\">logout</a></h4>\n<p>Esegue il logout da un provider rimuovendolo dal file delle credenziali.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">logout</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth logout\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"github\"><a href=\"#github\">github</a></h3>\n<p>Gestisci l’agente GitHub per l’automazione dei repository.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode github [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"install\"><a href=\"#install\">install</a></h4>\n<p>Installa l’agente GitHub nel tuo repository.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">install</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode github install\"><div></div></button></div></figure></div>\n<p>Questo configura il workflow GitHub Actions necessario e ti guida nel processo di configurazione. <a href=\"/docs/github\">Scopri di più</a>.</p>\n<hr>\n<h4 id=\"run\"><a href=\"#run\">run</a></h4>\n<p>Esegui l’agente GitHub. Tipicamente usato in GitHub Actions.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode github run\"><div></div></button></div></figure></div>\n<h5 id=\"flag-2\"><a href=\"#flag-2\">Flag</a></h5>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "Evento GitHub mock per cui eseguire l’agente"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--token"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "GitHub personal access token"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"mcp\"><a href=\"#mcp\">mcp</a></h3>\n<p>Gestisci i server Model Context Protocol.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"add\"><a href=\"#add\">add</a></h4>\n<p>Aggiungi un server MCP alla tua configurazione.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">add</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp add\"><div></div></button></div></figure></div>\n<p>Questo comando ti guida nell’aggiunta di un server MCP locale o remoto.</p>\n<hr>\n<h4 id=\"list-2\"><a href=\"#list-2\">list</a></h4>\n<p>Elenca tutti i server MCP configurati e il loro stato di connessione.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp list\"><div></div></button></div></figure></div>\n<p>Oppure la versione corta.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"auth-1\"><a href=\"#auth-1\">auth</a></h4>\n<p>Autentica con un server MCP con OAuth abilitato.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [name]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp auth [name]\"><div></div></button></div></figure></div>\n<p>Se non fornisci un nome server, ti verrà chiesto di selezionare tra i server OAuth-capable disponibili.</p>\n<p>Puoi anche elencare i server OAuth-capable e il loro stato di autenticazione.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp auth list\"><div></div></button></div></figure></div>\n<p>Oppure la versione corta.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp auth ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"logout-1\"><a href=\"#logout-1\">logout</a></h4>\n<p>Rimuovi le credenziali OAuth per un server MCP.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">logout</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [name]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp logout [name]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"debug\"><a href=\"#debug\">debug</a></h4>\n<p>Esegui debug di problemi di connessione OAuth per un server MCP.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">debug</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">&#x3C;name></span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp debug <name>\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"models\"><a href=\"#models\">models</a></h3>\n<p>Elenca tutti i modelli disponibili dai provider configurati.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [provider]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode models [provider]\"><div></div></button></div></figure></div>\n<p>Questo comando mostra tutti i modelli disponibili tra i provider configurati nel formato <code dir=\"auto\">provider/model</code>.</p>\n<p>È utile per capire l’esatto nome del modello da usare nella <a href=\"/docs/config/\">config</a>.</p>\n<p>Puoi anche passare opzionalmente un ID provider per filtrare i modelli a quel provider.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">anthropic</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode models anthropic\"><div></div></button></div></figure></div>\n<h4 id=\"flag-3\"><a href=\"#flag-3\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "Aggiorna la cache modelli da models.dev"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--verbose"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Output più verboso (include metadati come i costi)"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Usa <code dir=\"auto\">--refresh</code> per aggiornare l’elenco modelli in cache. È utile quando nuovi modelli vengono aggiunti a un provider e vuoi vederli in OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--refresh</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode models --refresh\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"run-1\"><a href=\"#run-1\">run</a></h3>\n<p>Esegui opencode in modalità non interattiva passando un prompt direttamente.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [message..]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode run [message..]\"><div></div></button></div></figure></div>\n<p>È utile per scripting, automazione o quando vuoi una risposta rapida senza avviare la TUI completa. Per esempio:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><mark><span style=\"--0:#5c37a0;--1:#c5acf4\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span></mark><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">Explain</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">the</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">use</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">of</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">context</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">in</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">Go</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode run Explain the use of context in Go\"><div></div></button></div></figure></div>\n<p>Puoi anche collegarti a una istanza <code dir=\"auto\">opencode serve</code> già in esecuzione per evitare i cold boot dei server MCP ad ogni esecuzione:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Avvia un server headless in un terminale</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">serve</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># In un altro terminale, esegui comandi che si collegano ad esso</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">http://localhost:4096</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Explain async/await in JavaScript\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode serveopencode run --attach http://localhost:4096 &#x22;Explain async/await in JavaScript&#x22;\"><div></div></button></div></figure></div>\n<h4 id=\"flag-4\"><a href=\"#flag-4\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Breve"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "<td></td><td>Il comando da eseguire; usa message per gli argomenti</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--continue"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Continua l’ultima sessione</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>ID sessione da continuare</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Duplica la sessione quando continui (usa con <code dir=\"auto\">--continue</code> o <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--share"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Condividi la sessione</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--model"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Modello nel formato provider/model</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--agent"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Agente da usare</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--file"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-f</code></td><td>File da allegare al messaggio</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--format"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Formato: default (formattato) o json (eventi JSON grezzi)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--title"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Titolo sessione (usa prompt troncato se non viene fornito un valore)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--attach"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Attach a un server opencode in esecuzione (es. <a href=\"http://localhost:4096\">http://localhost:4096</a>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--password"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-p</code></td><td>Password per l’autenticazione di base (predefinita: <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--username"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-u</code></td><td>Nome utente per l’autenticazione di base (predefinito: <code dir=\"auto\">OPENCODE_SERVER_USERNAME</code> o <code dir=\"auto\">opencode</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--dir"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Directory di esecuzione, o percorso sul server remoto durante il collegamento</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--variant"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Variante del modello (sforzo di ragionamento specifico del provider)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--thinking"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Mostra blocchi di pensiero</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Porta per il server locale (di default una porta casuale)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"serve\"><a href=\"#serve\">serve</a></h3>\n<p>Avvia un server OpenCode headless per accesso via API. Vedi le <a href=\"/docs/server\">server docs</a> per l’interfaccia HTTP completa.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">serve</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode serve\"><div></div></button></div></figure></div>\n<p>Avvia un server HTTP che espone accesso API alle funzionalità di opencode senza la TUI. Imposta <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code> per abilitare HTTP basic auth (username di default <code dir=\"auto\">opencode</code>).</p>\n<h4 id=\"flag-5\"><a href=\"#flag-5\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "Porta su cui mettersi in ascolto"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Hostname su cui mettersi in ascolto"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--mdns"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Abilita discovery mDNS"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--cors"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Origin browser addizionali per consentire CORS"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"session\"><a href=\"#session\">session</a></h3>\n<p>Gestisci le sessioni OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode session [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"list-3\"><a href=\"#list-3\">list</a></h4>\n<p>Elenca tutte le sessioni OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode session list\"><div></div></button></div></figure></div>\n<h5 id=\"flag-6\"><a href=\"#flag-6\">Flag</a></h5>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Breve"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "<td><code dir=\"auto\">-n</code></td><td>Limita alle N sessioni più recenti</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--format"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Formato output: table o json (table)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"stats\"><a href=\"#stats\">stats</a></h3>\n<p>Mostra statistiche di utilizzo token e costo per le sessioni OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">stats</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode stats\"><div></div></button></div></figure></div>\n<h4 id=\"flag-7\"><a href=\"#flag-7\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "Mostra statistiche per gli ultimi N giorni (all time)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--tools"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Numero di strumenti da mostrare (all)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--models"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Mostra breakdown di utilizzo modelli (nascosto di default). Passa un numero per top N"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--project"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Filtra per progetto (tutti i progetti; stringa vuota: progetto corrente)"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"export\"><a href=\"#export\">export</a></h3>\n<p>Esporta i dati di sessione come JSON.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">export</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [sessionID]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode export [sessionID]\"><div></div></button></div></figure></div>\n<p>Se non fornisci un ID sessione, ti verrà chiesto di selezionare tra le sessioni disponibili.</p>\n<hr>\n<h3 id=\"import\"><a href=\"#import\">import</a></h3>\n<p>Importa i dati di sessione da un file JSON o da un URL di condivisione OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">&#x3C;file></span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode import <file>\"><div></div></button></div></figure></div>\n<p>Puoi importare da un file locale o da un URL di condivisione OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session.json</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">https://opncd.ai/s/abc123</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode import session.jsonopencode import https://opncd.ai/s/abc123\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"web\"><a href=\"#web\">web</a></h3>\n<p>Avvia un server OpenCode headless con interfaccia web.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">web</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode web\"><div></div></button></div></figure></div>\n<p>Avvia un server HTTP e apre un browser per accedere a OpenCode tramite interfaccia web. Imposta <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code> per abilitare HTTP basic auth (username di default <code dir=\"auto\">opencode</code>).</p>\n<h4 id=\"flag-8\"><a href=\"#flag-8\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "Porta su cui mettersi in ascolto"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Hostname su cui mettersi in ascolto"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--mdns"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Abilita discovery mDNS"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--cors"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Origin browser addizionali per consentire CORS"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"acp\"><a href=\"#acp\">acp</a></h3>\n<p>Avvia un server ACP (Agent Client Protocol).</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">acp</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode acp\"><div></div></button></div></figure></div>\n<p>Questo comando avvia un server ACP che comunica via stdin/stdout usando nd-JSON.</p>\n<h4 id=\"flag-9\"><a href=\"#flag-9\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "Directory di lavoro"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Porta su cui mettersi in ascolto"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Hostname su cui mettersi in ascolto"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"uninstall\"><a href=\"#uninstall\">uninstall</a></h3>\n<p>Disinstalla OpenCode e rimuove tutti i file correlati.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">uninstall</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode uninstall\"><div></div></button></div></figure></div>\n<h4 id=\"flag-10\"><a href=\"#flag-10\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Breve"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Mantieni i file di configurazione</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--keep-data"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-d</code></td><td>Mantieni dati di sessione e snapshot</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--dry-run"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Mostra cosa verrebbe rimosso senza rimuovere</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--force"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-f</code></td><td>Salta le richieste di conferma</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"upgrade\"><a href=\"#upgrade\">upgrade</a></h3>\n<p>Aggiorna opencode all’ultima versione o a una versione specifica.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [target]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode upgrade [target]\"><div></div></button></div></figure></div>\n<p>Per aggiornare all’ultima versione:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode upgrade\"><div></div></button></div></figure></div>\n<p>Per aggiornare a una versione specifica:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">v0.1.48</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode upgrade v0.1.48\"><div></div></button></div></figure></div>\n<h4 id=\"flag-11\"><a href=\"#flag-11\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Breve"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Metodo di installazione usato: curl, npm, pnpm, bun, brew</td>"
          })]
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"flag-globali\"><a href=\"#flag-globali\">Flag globali</a></h2>\n<p>La CLI di opencode accetta i seguenti flag globali.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Breve"
          }), createVNode(_components.th, {
            children: "Descrizione"
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
            "set:html": "<td><code dir=\"auto\">-h</code></td><td>Mostra l’help</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--version"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-v</code></td><td>Stampa il numero di versione</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--print-logs"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Stampa i log su stderr</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--log-level"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Livello log (DEBUG, INFO, WARN, ERROR)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"variabili-dambiente\"><a href=\"#variabili-dambiente\">Variabili d’ambiente</a></h2>\n<p>OpenCode può essere configurato tramite variabili d’ambiente.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Variabile</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code dir=\"auto\">OPENCODE_AUTO_SHARE</code></td><td>boolean</td><td>Condivide automaticamente le sessioni</td></tr><tr><td><code dir=\"auto\">OPENCODE_GIT_BASH_PATH</code></td><td>string</td><td>Percorso all’eseguibile Git Bash su Windows</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG</code></td><td>string</td><td>Percorso al file di configurazione</td></tr><tr><td><code dir=\"auto\">OPENCODE_TUI_CONFIG</code></td><td>string</td><td>Percorso al file di configurazione TUI</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG_DIR</code></td><td>string</td><td>Percorso alla directory di configurazione</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG_CONTENT</code></td><td>string</td><td>Contenuto JSON di config inline</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_AUTOUPDATE</code></td><td>boolean</td><td>Disabilita i controlli automatici di aggiornamento</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_PRUNE</code></td><td>boolean</td><td>Disabilita la potatura dei dati vecchi</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_TERMINAL_TITLE</code></td><td>boolean</td><td>Disabilita aggiornamenti automatici del titolo terminale</td></tr><tr><td><code dir=\"auto\">OPENCODE_PERMISSION</code></td><td>string</td><td>Config permessi JSON inline</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_DEFAULT_PLUGINS</code></td><td>boolean</td><td>Disabilita i plugin di default</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_LSP_DOWNLOAD</code></td><td>boolean</td><td>Disabilita download automatico dei server LSP</td></tr><tr><td><code dir=\"auto\">OPENCODE_ENABLE_EXPERIMENTAL_MODELS</code></td><td>boolean</td><td>Abilita modelli sperimentali</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_AUTOCOMPACT</code></td><td>boolean</td><td>Disabilita compaction automatica del contesto</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE</code></td><td>boolean</td><td>Disabilita lettura da <code dir=\"auto\">.claude</code> (prompt + skill)</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE_PROMPT</code></td><td>boolean</td><td>Disabilita lettura di <code dir=\"auto\">~/.claude/CLAUDE.md</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE_SKILLS</code></td><td>boolean</td><td>Disabilita caricamento di <code dir=\"auto\">.claude/skills</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_MODELS_FETCH</code></td><td>boolean</td><td>Disabilita fetch dei modelli da fonti remote</td></tr><tr><td><code dir=\"auto\">OPENCODE_FAKE_VCS</code></td><td>string</td><td>Provider VCS finto per scopi di test</td></tr><tr><td><code dir=\"auto\">OPENCODE_CLIENT</code></td><td>string</td><td>Identificatore client (default <code dir=\"auto\">cli</code>)</td></tr><tr><td><code dir=\"auto\">OPENCODE_ENABLE_EXA</code></td><td>boolean</td><td>Abilita gli strumenti di web search Exa</td></tr><tr><td><code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code></td><td>string</td><td>Abilita basic auth per <code dir=\"auto\">serve</code>/<code dir=\"auto\">web</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_SERVER_USERNAME</code></td><td>string</td><td>Sovrascrive lo username basic auth (default <code dir=\"auto\">opencode</code>)</td></tr><tr><td><code dir=\"auto\">OPENCODE_MODELS_URL</code></td><td>string</td><td>URL personalizzato per recuperare la configurazione modelli</td></tr></tbody></table>\n<hr>\n<h3 id=\"sperimentale\"><a href=\"#sperimentale\">Sperimentale</a></h3>\n<p>Queste variabili d’ambiente abilitano funzionalità sperimentali che potrebbero cambiare o essere rimosse.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Variabile</th><th>Tipo</th><th>Descrizione</th></tr></thead><tbody><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL</code></td><td>boolean</td><td>Abilita tutte le funzionalità sperimentali</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_ICON_DISCOVERY</code></td><td>boolean</td><td>Abilita icon discovery</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT</code></td><td>boolean</td><td>Disabilita copy on select nella TUI</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS</code></td><td>number</td><td>Timeout di default per comandi bash in ms</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX</code></td><td>number</td><td>Massimo token di output per risposte LLM</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_FILEWATCHER</code></td><td>boolean</td><td>Abilita file watcher per l’intera dir</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_OXFMT</code></td><td>boolean</td><td>Abilita formatter oxfmt</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_LSP_TOOL</code></td><td>boolean</td><td>Abilita strumento LSP sperimentale</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_DISABLE_FILEWATCHER</code></td><td>boolean</td><td>Disabilita file watcher</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_EXA</code></td><td>boolean</td><td>Abilita funzionalità Exa sperimentali</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_LSP_TY</code></td><td>boolean</td><td>Abilita TY LSP per i file python</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_PLAN_MODE</code></td><td>boolean</td><td>Abilita plan mode</td></tr></tbody></table>"
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

const url = "src/content/docs/it/cli.mdx";
const file = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/it/cli.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/it/cli.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
