globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D-7CwiXF.mjs';
import './Code_CadJumwV.mjs';

const frontmatter = {
  "title": "CLI",
  "description": "OpenCode CLI opcije i naredbe."
};
function getHeadings() {
  return [{
    "depth": 3,
    "slug": "tui",
    "text": "tui"
  }, {
    "depth": 4,
    "slug": "opcije",
    "text": "Opcije"
  }, {
    "depth": 2,
    "slug": "naredbe",
    "text": "Naredbe"
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
    "slug": "opcije-1",
    "text": "Opcije"
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
    "slug": "opcije-2",
    "text": "Opcije"
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
    "slug": "opcije-3",
    "text": "Opcije"
  }, {
    "depth": 3,
    "slug": "run-1",
    "text": "run"
  }, {
    "depth": 4,
    "slug": "opcije-4",
    "text": "Opcije"
  }, {
    "depth": 3,
    "slug": "serve",
    "text": "serve"
  }, {
    "depth": 4,
    "slug": "opcije-5",
    "text": "Opcije"
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
    "slug": "opcije-6",
    "text": "Opcije"
  }, {
    "depth": 3,
    "slug": "stats",
    "text": "stats"
  }, {
    "depth": 4,
    "slug": "opcije-7",
    "text": "Opcije"
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
    "slug": "opcije-8",
    "text": "Opcije"
  }, {
    "depth": 3,
    "slug": "acp",
    "text": "acp"
  }, {
    "depth": 4,
    "slug": "opcije-9",
    "text": "Opcije"
  }, {
    "depth": 3,
    "slug": "uninstall",
    "text": "uninstall"
  }, {
    "depth": 4,
    "slug": "opcije-10",
    "text": "Opcije"
  }, {
    "depth": 3,
    "slug": "upgrade",
    "text": "upgrade"
  }, {
    "depth": 4,
    "slug": "opcije-11",
    "text": "Opcije"
  }, {
    "depth": 2,
    "slug": "globalne-opcije",
    "text": "Globalne opcije"
  }, {
    "depth": 2,
    "slug": "varijable-okruženja",
    "text": "Varijable okruženja"
  }, {
    "depth": 3,
    "slug": "eksperimentalno",
    "text": "Eksperimentalno"
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
      "set:html": "<p>OpenCode CLI po defaultu pokreće <a href=\"/docs/tui\">TUI</a> kada se pokrene bez ikakvih argumenata.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode\"><div></div></button></div></figure></div>\n<p>Ali takođe prihvata naredbe kao što je dokumentovano na ovoj stranici. Ovo vam omogućava programsku interakciju sa OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Explain how closures work in JavaScript\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode run &#x22;Explain how closures work in JavaScript&#x22;\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"tui\"><a href=\"#tui\">tui</a></h3>\n<p>Pokrenite OpenCode terminalski korisnički interfejs.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [project]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode [project]\"><div></div></button></div></figure></div>\n<h4 id=\"opcije\"><a href=\"#opcije\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
          }), createVNode(_components.th, {
            children: "Kratko"
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
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Nastavite posljednju sesiju</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>ID sesije za nastavak</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Forkujte sesiju pri nastavku (koristiti sa <code dir=\"auto\">--continue</code> ili <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--prompt"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Prompt za upotrebu</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--model"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Model za korištenje u obliku provider/model</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--agent"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Agent za korištenje</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Port na kojem treba slušati</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Hostname na kojem treba slušati</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"naredbe\"><a href=\"#naredbe\">Naredbe</a></h2>\n<p>OpenCode CLI takođe ima sljedeće naredbe.</p>\n<hr>\n<h3 id=\"agent\"><a href=\"#agent\">agent</a></h3>\n<p>Upravljajte OpenCode agentima.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode agent [command]\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"attach\"><a href=\"#attach\">attach</a></h3>\n<p>Priključite terminal na već pokrenut OpenCode backend server pokrenut putem <code dir=\"auto\">serve</code> ili <code dir=\"auto\">web</code> naredbi.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [url]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode attach [url]\"><div></div></button></div></figure></div>\n<p>Ovo omogućava korištenje TUI-ja sa udaljenim OpenCode backend-om. Na primjer:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Start the backend server for web/mobile access</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">web</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--port</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">4096</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--hostname</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">0.0.0.0</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># In another terminal, attach the TUI to the running backend</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">http://10.20.30.40:4096</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode web --port 4096 --hostname 0.0.0.0opencode attach http://10.20.30.40:4096\"><div></div></button></div></figure></div>\n<h4 id=\"opcije-1\"><a href=\"#opcije-1\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
          }), createVNode(_components.th, {
            children: "Kratko"
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
            "set:html": "<td></td><td>Radni direktorij za pokretanje TUI-a</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--continue"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Nastavi posljednju sesiju</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>ID sesije za nastavak</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Forkuj sesiju prilikom nastavka (koristite sa <code dir=\"auto\">--continue</code> ili <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--password"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-p</code></td><td>Lozinka za osnovnu autentifikaciju (zadano: <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--username"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-u</code></td><td>Korisničko ime za osnovnu autentifikaciju (zadano: <code dir=\"auto\">OPENCODE_SERVER_USERNAME</code> ili <code dir=\"auto\">opencode</code>)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"create\"><a href=\"#create\">create</a></h4>\n<p>Kreirajte novog agenta s prilagođenom konfiguracijom.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">create</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode agent create\"><div></div></button></div></figure></div>\n<p>Ova naredba će vas voditi kroz kreiranje novog agenta sa prilagođenim sistemskim promptom i konfiguracijom alata.</p>\n<hr>\n<h4 id=\"list\"><a href=\"#list\">list</a></h4>\n<p>Navedite sve dostupne agente.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode agent list\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"auth\"><a href=\"#auth\">auth</a></h3>\n<p>Naredba za upravljanje vjerodajnicama i prijavom za provajdere.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"login\"><a href=\"#login\">login</a></h4>\n<p>OpenCode pokreće lista provajdera na <a href=\"https://models.dev\">Models.dev</a>, tako da možete koristiti <code dir=\"auto\">opencode auth login</code> da konfigurirate API ključeve za bilo kojeg provajdera kojeg želite koristiti. Ovo je pohranjeno u <code dir=\"auto\">~/.local/share/opencode/auth.json</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">login</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth login\"><div></div></button></div></figure></div>\n<p>Kada se OpenCode pokrene, učitava dobavljače iz datoteke vjerodajnica. I ako postoje neki ključevi definirani u vašim okruženjima ili <code dir=\"auto\">.env</code> fajl u vašem projektu.</p>\n<hr>\n<h4 id=\"list-1\"><a href=\"#list-1\">list</a></h4>\n<p>Navodi sve autentifikovane dobavljače pohranjene u datoteci vjerodajnica.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth list\"><div></div></button></div></figure></div>\n<p>Ili kratka verzija.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"logout\"><a href=\"#logout\">logout</a></h4>\n<p>Odjavljuje vas s provajdera tako što ga briše iz datoteke vjerodajnica.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">logout</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth logout\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"github\"><a href=\"#github\">github</a></h3>\n<p>Upravljajte GitHub agentom za automatizaciju repozitorija.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode github [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"install\"><a href=\"#install\">install</a></h4>\n<p>Instalirajte GitHub agenta u svoj repozitorij.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">install</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode github install\"><div></div></button></div></figure></div>\n<p>Ovo postavlja neophodni tok rada GitHub Actions i vodi vas kroz proces konfiguracije. <a href=\"/docs/github\">Saznajte više</a>.</p>\n<hr>\n<h4 id=\"run\"><a href=\"#run\">run</a></h4>\n<p>Pokrenite GitHub agent. Ovo se obično koristi u GitHub Actions.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode github run\"><div></div></button></div></figure></div>\n<h5 id=\"opcije-2\"><a href=\"#opcije-2\">Opcije</a></h5>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
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
            "set:html": "GitHub mock event za pokretanje agenta"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--token"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "GitHub Personal Access Token"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"mcp\"><a href=\"#mcp\">mcp</a></h3>\n<p>Upravljajte Model Context Protocol (MCP) serverima.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"add\"><a href=\"#add\">add</a></h4>\n<p>Dodajte MCP server svojoj konfiguraciji.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">add</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp add\"><div></div></button></div></figure></div>\n<p>Ova naredba će vas voditi kroz dodavanje lokalnog ili udaljenog MCP servera.</p>\n<hr>\n<h4 id=\"list-2\"><a href=\"#list-2\">list</a></h4>\n<p>Navedite sve konfigurirane MCP servere i njihov status veze.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp list\"><div></div></button></div></figure></div>\n<p>Ili koristite kratku verziju.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"auth-1\"><a href=\"#auth-1\">auth</a></h4>\n<p>Autentifikujte se sa MCP serverom koji je omogućen za OAuth.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [name]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp auth [name]\"><div></div></button></div></figure></div>\n<p>Ako ne navedete ime servera, od vas će biti zatraženo da izaberete neki od dostupnih servera koji podržavaju OAuth.\nTakođer možete navesti servere koji podržavaju OAuth i njihov status autentifikacije.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp auth list\"><div></div></button></div></figure></div>\n<p>Ili koristite kratku verziju.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp auth ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"logout-1\"><a href=\"#logout-1\">logout</a></h4>\n<p>Uklonite OAuth vjerodajnice za MCP server.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">logout</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [name]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp logout [name]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"debug\"><a href=\"#debug\">debug</a></h4>\n<p>Otklanjanje grešaka (debug) OAuth veze sa MCP serverom.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">debug</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">&#x3C;name></span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp debug <name>\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"models\"><a href=\"#models\">models</a></h3>\n<p>Navedite sve dostupne modele konfiguriranih provajdera.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [provider]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode models [provider]\"><div></div></button></div></figure></div>\n<p>Ova naredba prikazuje sve modele dostupne kod vaših konfiguriranih provajdera u formatu <code dir=\"auto\">provider/model</code>.\nOvo je korisno za pronalaženje tačnog naziva modela za korištenje u <a href=\"/docs/config/\">vašoj konfiguraciji</a>.\nOpciono možete proslijediti ID provajdera za filtriranje modela po tom dobavljaču.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">anthropic</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode models anthropic\"><div></div></button></div></figure></div>\n<h4 id=\"opcije-3\"><a href=\"#opcije-3\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
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
            "set:html": "Osvježite keš modela sa models.dev"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--verbose"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Koristite detaljniji izlaz modela (uključuje metapodatke poput troškova)"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Koristite <code dir=\"auto\">--refresh</code> zastavicu da ažurirate keširanu listu modela. Ovo je korisno kada su novi modeli dodani provajderu i želite da ih vidite u OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--refresh</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode models --refresh\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"run-1\"><a href=\"#run-1\">run</a></h3>\n<p>Pokrenite OpenCode u neinteraktivnom modu tako što ćete direktno proslijediti prompt.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [message..]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode run [message..]\"><div></div></button></div></figure></div>\n<p>Ovo je korisno za skriptiranje, automatizaciju ili kada želite brz odgovor bez pokretanja punog TUI-ja. Na primjer:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><mark><span style=\"--0:#5c37a0;--1:#c5acf4\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span></mark><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">Explain</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">the</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">use</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">of</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">context</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">in</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">Go</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode run Explain the use of context in Go\"><div></div></button></div></figure></div>\n<p>Također možete priključiti pokrenutu <code dir=\"auto\">opencode serve</code> instancu kako biste izbjegli vrijeme hladnog pokretanja MCP servera pri svakom pokretanju:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Start a headless server in one terminal</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">serve</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># In another terminal, run commands that attach to it</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">http://localhost:4096</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Explain async/await in JavaScript\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode serveopencode run --attach http://localhost:4096 &#x22;Explain async/await in JavaScript&#x22;\"><div></div></button></div></figure></div>\n<h4 id=\"opcije-4\"><a href=\"#opcije-4\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
          }), createVNode(_components.th, {
            children: "Kratko"
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
            "set:html": "<td></td><td>Naredba za pokretanje, koristite poruku za argumente</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--continue"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Nastavite posljednju sesiju</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>ID sesije za nastavak</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Forkujte sesiju pri nastavku (koristiti sa <code dir=\"auto\">--continue</code> ili <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--share"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Podijelite sesiju</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--model"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Model za korištenje u obliku provider/model</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--agent"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Agent za korištenje</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--file"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-f</code></td><td>Fajlovi koje treba priložiti poruci</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--format"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Format: default (formatiran) ili json (sirovi JSON događaji)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--title"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Naslov sesije (koristi skraćeni prompt ako nije navedena vrijednost)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--attach"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Priključite na pokrenuti OpenCode server (npr. <a href=\"http://localhost:4096\">http://localhost:4096</a>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--password"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-p</code></td><td>Lozinka za osnovnu autentifikaciju (zadano: <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--username"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-u</code></td><td>Korisničko ime za osnovnu autentifikaciju (zadano: <code dir=\"auto\">OPENCODE_SERVER_USERNAME</code> ili <code dir=\"auto\">opencode</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--dir"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Direktorij za pokretanje, ili putanja na udaljenom serveru pri spajanju</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--variant"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Varijanta modela (napor zaključivanja specifičan za provajdera)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--thinking"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Prikaži blokove razmišljanja</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Port za lokalni server (zadano na nasumični port)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"serve\"><a href=\"#serve\">serve</a></h3>\n<p>Pokrenite OpenCode headless server za API pristup. Pogledajte <a href=\"/docs/server\">server docs</a> za kompletan HTTP interfejs.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">serve</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode serve\"><div></div></button></div></figure></div>\n<p>Ovo pokreće HTTP server koji pruža API pristup funkcionalnosti OpenCode-a bez TUI interfejsa. Postavite <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code> da omogućite HTTP osnovnu auth (korisničko ime je zadano na <code dir=\"auto\">opencode</code>).</p>\n<h4 id=\"opcije-5\"><a href=\"#opcije-5\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
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
            "set:html": "Port na kojem treba slušati"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Hostname na kojem treba slušati"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--mdns"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Omogući mDNS otkrivanje"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--cors"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Dodatni origin(i) pretraživača koji dozvoljavaju CORS"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"session\"><a href=\"#session\">session</a></h3>\n<p>Upravljajte OpenCode sesijama.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode session [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"list-3\"><a href=\"#list-3\">list</a></h4>\n<p>Navedite sve OpenCode sesije.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode session list\"><div></div></button></div></figure></div>\n<h5 id=\"opcije-6\"><a href=\"#opcije-6\">Opcije</a></h5>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
          }), createVNode(_components.th, {
            children: "Kratko"
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
            "set:html": "<td><code dir=\"auto\">-n</code></td><td>Ograničenje na N najnovijih sesija</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--format"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Izlazni format: table ili json (table)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"stats\"><a href=\"#stats\">stats</a></h3>\n<p>Prikaži statistiku upotrebe tokena i troškova za vaše OpenCode sesije.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">stats</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode stats\"><div></div></button></div></figure></div>\n<h4 id=\"opcije-7\"><a href=\"#opcije-7\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
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
            "set:html": "Prikaži statistiku za zadnjih N dana (sva vremena)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--tools"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Broj alata za prikaz (svi)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--models"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Prikaži raščlambu korištenja modela (skriveno prema zadanim postavkama). Proslijedite broj za prikaz top N"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--project"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Filtriraj po projektu (svi projekti, prazan niz: trenutni projekt)"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"export\"><a href=\"#export\">export</a></h3>\n<p>Izvezite podatke sesije kao JSON.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">export</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [sessionID]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode export [sessionID]\"><div></div></button></div></figure></div>\n<p>Ako ne unesete ID sesije, od vas će biti zatraženo da odaberete neku od dostupnih sesija.</p>\n<hr>\n<h3 id=\"import\"><a href=\"#import\">import</a></h3>\n<p>Uvezite podatke sesije iz JSON datoteke ili OpenCode dijeljenog URL-a.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">&#x3C;file></span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode import <file>\"><div></div></button></div></figure></div>\n<p>Možete uvesti iz lokalne datoteke ili OpenCode dijeljenog URL-a.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session.json</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">https://opncd.ai/s/abc123</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode import session.jsonopencode import https://opncd.ai/s/abc123\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"web\"><a href=\"#web\">web</a></h3>\n<p>Pokrenite OpenCode headless server sa web interfejsom.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">web</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode web\"><div></div></button></div></figure></div>\n<p>Ovo pokreće HTTP server i otvara web pretraživač za pristup OpenCode-u preko web interfejsa. Postavite <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code> da omogućite HTTP osnovnu auth (korisničko ime je zadano na <code dir=\"auto\">opencode</code>).</p>\n<h4 id=\"opcije-8\"><a href=\"#opcije-8\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
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
            "set:html": "Port na kojem treba slušati"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Hostname na kojem treba slušati"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--mdns"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Omogući mDNS otkrivanje"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--cors"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Dodatni origin(i) pretraživača koji dozvoljavaju CORS"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"acp\"><a href=\"#acp\">acp</a></h3>\n<p>Pokrenite ACP (Agent Client Protocol) server.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">acp</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode acp\"><div></div></button></div></figure></div>\n<p>Ova naredba pokreće ACP server koji komunicira preko stdin/stdout koristeći nd-JSON.</p>\n<h4 id=\"opcije-9\"><a href=\"#opcije-9\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
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
            "set:html": "Radni direktorij"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Port na kojem treba slušati"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Hostname na kojem slušati"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"uninstall\"><a href=\"#uninstall\">uninstall</a></h3>\n<p>Deinstalirajte OpenCode i uklonite sve povezane datoteke.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">uninstall</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode uninstall\"><div></div></button></div></figure></div>\n<h4 id=\"opcije-10\"><a href=\"#opcije-10\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
          }), createVNode(_components.th, {
            children: "Kratko"
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
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Sačuvajte konfiguracijske datoteke</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--keep-data"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-d</code></td><td>Sačuvajte podatke i snimke sesije</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--dry-run"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Pokažite šta bi bilo uklonjeno bez uklanjanja</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--force"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-f</code></td><td>Preskoči upite za potvrdu</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"upgrade\"><a href=\"#upgrade\">upgrade</a></h3>\n<p>Ažurira OpenCode na najnoviju verziju ili određenu verziju.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [target]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode upgrade [target]\"><div></div></button></div></figure></div>\n<p>Za nadogradnju na najnoviju verziju.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode upgrade\"><div></div></button></div></figure></div>\n<p>Za nadogradnju na određenu verziju.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">v0.1.48</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode upgrade v0.1.48\"><div></div></button></div></figure></div>\n<h4 id=\"opcije-11\"><a href=\"#opcije-11\">Opcije</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
          }), createVNode(_components.th, {
            children: "Kratko"
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
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Korišteni način instalacije; curl, npm, pnpm, bun, brew</td>"
          })]
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"globalne-opcije\"><a href=\"#globalne-opcije\">Globalne opcije</a></h2>\n<p>OpenCode CLI prihvata sljedeće globalne zastavice.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Opcija"
          }), createVNode(_components.th, {
            children: "Kratko"
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
            "set:html": "<td><code dir=\"auto\">-h</code></td><td>Prikaži pomoć</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--version"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-v</code></td><td>Ispiši broj verzije</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--print-logs"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Ispis logova u stderr</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--log-level"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Nivo logovanja (DEBUG, INFO, WARN, ERROR)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"varijable-okruženja\"><a href=\"#varijable-okruženja\">Varijable okruženja</a></h2>\n<p>OpenCode se može konfigurirati pomoću varijabli okruženja.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Varijabla</th><th>Tip</th><th>Opis</th></tr></thead><tbody><tr><td><code dir=\"auto\">OPENCODE_AUTO_SHARE</code></td><td>boolean</td><td>Automatski dijeli sesije</td></tr><tr><td><code dir=\"auto\">OPENCODE_GIT_BASH_PATH</code></td><td>string</td><td>Putanja do Git Bash izvršne datoteke na Windows-u</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG</code></td><td>string</td><td>Putanja do konfiguracijskog fajla</td></tr><tr><td><code dir=\"auto\">OPENCODE_TUI_CONFIG</code></td><td>string</td><td>Putanja do TUI konfiguracijskog fajla</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG_DIR</code></td><td>string</td><td>Putanja do konfiguracijskog direktorija</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG_CONTENT</code></td><td>string</td><td>Inline json konfiguracijski sadržaj</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_AUTOUPDATE</code></td><td>boolean</td><td>Onemogući automatske provjere ažuriranja</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_PRUNE</code></td><td>boolean</td><td>Onemogući brisanje (pruning) starih podataka</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_TERMINAL_TITLE</code></td><td>boolean</td><td>Onemogući automatsko ažuriranje naslova terminala</td></tr><tr><td><code dir=\"auto\">OPENCODE_PERMISSION</code></td><td>string</td><td>Inline json konfiguracija dozvola</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_DEFAULT_PLUGINS</code></td><td>boolean</td><td>Onemogući podrazumijevane dodatke (plugins)</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_LSP_DOWNLOAD</code></td><td>boolean</td><td>Onemogući automatsko preuzimanje LSP servera</td></tr><tr><td><code dir=\"auto\">OPENCODE_ENABLE_EXPERIMENTAL_MODELS</code></td><td>boolean</td><td>Omogući eksperimentalne modele</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_AUTOCOMPACT</code></td><td>boolean</td><td>Onemogući automatsko sažimanje konteksta</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE</code></td><td>boolean</td><td>Onemogući čitanje iz <code dir=\"auto\">.claude</code> (prompt + vještine)</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE_PROMPT</code></td><td>boolean</td><td>Onemogući čitanje <code dir=\"auto\">~/.claude/CLAUDE.md</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE_SKILLS</code></td><td>boolean</td><td>Onemogući učitavanje <code dir=\"auto\">.claude/skills</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_MODELS_FETCH</code></td><td>boolean</td><td>Onemogući dohvaćanje modela iz udaljenih izvora</td></tr><tr><td><code dir=\"auto\">OPENCODE_FAKE_VCS</code></td><td>string</td><td>Lažni VCS provajder za potrebe testiranja</td></tr><tr><td><code dir=\"auto\">OPENCODE_CLIENT</code></td><td>string</td><td>Identifikator klijenta (zadano na <code dir=\"auto\">cli</code>)</td></tr><tr><td><code dir=\"auto\">OPENCODE_ENABLE_EXA</code></td><td>boolean</td><td>Omogući Exa alate za web pretraživanje</td></tr><tr><td><code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code></td><td>string</td><td>Omogući osnovnu autentifikaciju za <code dir=\"auto\">serve</code>/<code dir=\"auto\">web</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_SERVER_USERNAME</code></td><td>string</td><td>Poništi osnovno korisničko ime autentifikacije (zadano <code dir=\"auto\">opencode</code>)</td></tr><tr><td><code dir=\"auto\">OPENCODE_MODELS_URL</code></td><td>string</td><td>Prilagođeni URL za dohvaćanje konfiguracije modela</td></tr></tbody></table>\n<hr>\n<h3 id=\"eksperimentalno\"><a href=\"#eksperimentalno\">Eksperimentalno</a></h3>\n<p>Ove varijable okruženja omogućavaju eksperimentalne karakteristike koje se mogu promijeniti ili ukloniti.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Varijabla</th><th>Tip</th><th>Opis</th></tr></thead><tbody><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL</code></td><td>boolean</td><td>Omogući sve eksperimentalne funkcije</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_ICON_DISCOVERY</code></td><td>boolean</td><td>Omogući otkrivanje ikona</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT</code></td><td>boolean</td><td>Onemogući kopiranje pri odabiru u TUI</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS</code></td><td>number</td><td>Zadano vremensko ograničenje za bash naredbe u ms</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX</code></td><td>number</td><td>Maksimalni izlazni tokeni za LLM odgovore</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_FILEWATCHER</code></td><td>boolean</td><td>Omogući praćenje datoteka za cijeli direktorij</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_OXFMT</code></td><td>boolean</td><td>Omogući oxfmt formatter</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_LSP_TOOL</code></td><td>boolean</td><td>Omogući eksperimentalni LSP alat</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_DISABLE_FILEWATCHER</code></td><td>boolean</td><td>Onemogući praćenje datoteka</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_EXA</code></td><td>boolean</td><td>Omogući eksperimentalne Exa funkcije</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_LSP_TY</code></td><td>boolean</td><td>Omogući TY LSP za python datoteke</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_PLAN_MODE</code></td><td>boolean</td><td>Omogući Plan mod</td></tr></tbody></table>"
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

const url = "src/content/docs/bs/cli.mdx";
const file = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/bs/cli.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/bs/cli.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
