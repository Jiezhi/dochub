globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D-7CwiXF.mjs';
import './Code_CadJumwV.mjs';

const frontmatter = {
  "title": "CLI",
  "description": "OpenCode CLI muligheder og kommandoer."
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
    "slug": "kommandoer",
    "text": "Kommandoer"
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
    "slug": "upgrade-1",
    "text": "upgrade"
  }, {
    "depth": 2,
    "slug": "globale-flag",
    "text": "Globale flag"
  }, {
    "depth": 2,
    "slug": "miljøvariabler",
    "text": "Miljøvariabler"
  }, {
    "depth": 3,
    "slug": "eksperimentel",
    "text": "Eksperimentel"
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
      "set:html": "<p>OpenCode CLI starter som standard <a href=\"/docs/tui\">TUI</a>, når den kører uden nogen argumenter.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode\"><div></div></button></div></figure></div>\n<p>Men den accepterer også kommandoer som dokumenteret på denne side. Dette giver dig mulighed for at interagere med OpenCode programmatisk.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Explain how closures work in JavaScript\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode run &#x22;Explain how closures work in JavaScript&#x22;\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"tui\"><a href=\"#tui\">tui</a></h3>\n<p>Start OpenCode terminalbrugergrænsefladen.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [project]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode [project]\"><div></div></button></div></figure></div>\n<h4 id=\"flag\"><a href=\"#flag\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Kort"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Fortsæt sidste session</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>Sessions-id for at fortsætte</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Forgren sessionen ved fortsættelse (brug med <code dir=\"auto\">--continue</code> eller <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--prompt"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Spørg om at bruge</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--model"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Model til brug i form af provider/model</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--agent"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Agent hos bruge</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Port at lytte på</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Værtsnavn at lytte på</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"kommandoer\"><a href=\"#kommandoer\">Kommandoer</a></h2>\n<p>OpenCode CLI har også følgende kommandoer.</p>\n<hr>\n<h3 id=\"agent\"><a href=\"#agent\">agent</a></h3>\n<p>Administrer agenter i OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode agent [command]\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"attach\"><a href=\"#attach\">attach</a></h3>\n<p>Tilslut en terminal til en allerede kørende OpenCode backend-server startet via <code dir=\"auto\">serve</code> eller <code dir=\"auto\">web</code> kommandoer.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [url]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode attach [url]\"><div></div></button></div></figure></div>\n<p>Dette gør det muligt at bruge TUI med en ekstern OpenCode backend. For eksempel:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Start the backend server for web/mobile access</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">web</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--port</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">4096</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--hostname</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">0.0.0.0</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># In another terminal, attach the TUI to the running backend</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">http://10.20.30.40:4096</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode web --port 4096 --hostname 0.0.0.0opencode attach http://10.20.30.40:4096\"><div></div></button></div></figure></div>\n<h4 id=\"flag-1\"><a href=\"#flag-1\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Kort"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "<td></td><td>Arbejdsmappe til at starte TUI i</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--continue"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Fortsæt den seneste session</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>Sessions-id for at fortsætte</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Forgren sessionen ved fortsættelse (brug med <code dir=\"auto\">--continue</code> eller <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--password"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-p</code></td><td>Adgangskode til basic auth (standard: <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--username"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-u</code></td><td>Brugernavn til basic auth (standard: <code dir=\"auto\">OPENCODE_SERVER_USERNAME</code> eller <code dir=\"auto\">opencode</code>)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h4 id=\"create\"><a href=\"#create\">create</a></h4>\n<p>Opret en ny agent med brugerdefineret konfiguration.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">create</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode agent create\"><div></div></button></div></figure></div>\n<p>Denne kommando vil guide dig gennem oprettelse af en ny agent med en brugerdefineret systemprompt og værktøjskonfiguration.</p>\n<hr>\n<h4 id=\"list\"><a href=\"#list\">list</a></h4>\n<p>Liste over alle tilgængelige agenter.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">agent</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode agent list\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"auth\"><a href=\"#auth\">auth</a></h3>\n<p>Kommando til at administrere legitimationsoplysninger og login for udbydere.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"login\"><a href=\"#login\">login</a></h4>\n<p>OpenCode drives af udbyderlisten på <a href=\"https://models.dev\">Models.dev</a>, så du kan bruge <code dir=\"auto\">opencode auth login</code> til at konfigurere API-nøgler for enhver udbyder, du vil bruge. Dette er gemt i <code dir=\"auto\">~/.local/share/opencode/auth.json</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">login</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth login\"><div></div></button></div></figure></div>\n<p>Når OpenCode starter op, indlæser den udbyderne fra legitimationsfilen. Og hvis der er nogen nøgler defineret i dine miljøer eller en <code dir=\"auto\">.env</code> fil i dit projekt.</p>\n<hr>\n<h4 id=\"list-1\"><a href=\"#list-1\">list</a></h4>\n<p>Viser alle de godkendte udbydere som gemt i legitimationsfilen.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth list\"><div></div></button></div></figure></div>\n<p>Eller den korte version.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"logout\"><a href=\"#logout\">logout</a></h4>\n<p>Logger dig ud af en udbyder ved at rydde den fra legitimationsfilen.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">logout</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode auth logout\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"github\"><a href=\"#github\">github</a></h3>\n<p>Administrator GitHub-agenten til lagerautomatisering.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode github [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"install\"><a href=\"#install\">install</a></h4>\n<p>Installatør GitHub-agenten i dit lager.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">install</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode github install\"><div></div></button></div></figure></div>\n<p>Dette opsætter det nødvendige GitHub Actions workflow og guider dig gennem konfigurationsprocessen. <a href=\"/docs/github\">Learn more</a>.</p>\n<hr>\n<h4 id=\"run\"><a href=\"#run\">run</a></h4>\n<p>Kør GitHub-agenten. Dette bruges typisk i GitHub Actions.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">github</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode github run\"><div></div></button></div></figure></div>\n<h5 id=\"flag-2\"><a href=\"#flag-2\">Flag</a></h5>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "GitHub mock begivenhed for at køre agenten for"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--token"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "GitHub personlig adgangstoken"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"mcp\"><a href=\"#mcp\">mcp</a></h3>\n<p>Administrator Model Context Protocol-servere.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"add\"><a href=\"#add\">add</a></h4>\n<p>Tilføj en MCP-server til din konfiguration.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">add</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp add\"><div></div></button></div></figure></div>\n<p>Denne kommando vil guide dig gennem tilføjelse af enten en lokal eller ekstern MCP-server.</p>\n<hr>\n<h4 id=\"list-2\"><a href=\"#list-2\">list</a></h4>\n<p>Liste over alle konfigurerede MCP-servere og deres forbindelsesstatus.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp list\"><div></div></button></div></figure></div>\n<p>Eller brug den korte version.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"auth-1\"><a href=\"#auth-1\">auth</a></h4>\n<p>Godkendt med en OAuth-aktiveret MCP-server.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [name]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp auth [name]\"><div></div></button></div></figure></div>\n<p>Hvis du ikke angiver et servernavn, bliver du bedt om at vælge blandt tilgængelige OAuth-kompatible servere.</p>\n<p>Du kan også angive OAuth-kompatible servere og deres godkendelsesstatus.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp auth list\"><div></div></button></div></figure></div>\n<p>Eller brug den korte version.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">auth</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">ls</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp auth ls\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"logout-1\"><a href=\"#logout-1\">logout</a></h4>\n<p>Fjern OAuth-legitimationsoplysninger for en MCP-server.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">logout</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [name]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp logout [name]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"debug\"><a href=\"#debug\">debug</a></h4>\n<p>Fejlfinding af OAuth-forbindelsesproblemer for en MCP-server.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">mcp</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">debug</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">&#x3C;name></span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode mcp debug <name>\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"models\"><a href=\"#models\">models</a></h3>\n<p>Liste over alle tilgængelige modeller fra konfigurerede udbydere.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [provider]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode models [provider]\"><div></div></button></div></figure></div>\n<p>Denne kommando viser alle tilgængelige modeller på tværs af dine konfigurerede udbydere i formatet <code dir=\"auto\">provider/model</code>.</p>\n<p>Dette er nyttigt til at finde ud af det nøjagtige modelnavn, der skal bruges i <a href=\"/docs/config/\">your config</a>.</p>\n<p>Du kan eventuelt videregive et udbyder-id for at filtrere modeller efter den udbyder.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">anthropic</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode models anthropic\"><div></div></button></div></figure></div>\n<h4 id=\"flag-3\"><a href=\"#flag-3\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "Opdater modelcachen fra models.dev"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--verbose"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Brug mere detaljeret modeloutput (inkluderer metadata som omkostninger)"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Brug flaget <code dir=\"auto\">--refresh</code> til at opdatere den cachelagrede modelliste. Dette er nyttigt, når nye modeller er blevet tilføjet til en udbyder, og du vil se dem i OpenCode.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">models</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--refresh</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode models --refresh\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"run-1\"><a href=\"#run-1\">run</a></h3>\n<p>Kør opencode i ikke-interaktiv tilstand ved at sende en prompt direkte.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [message..]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode run [message..]\"><div></div></button></div></figure></div>\n<p>Dette er nyttigt til scripting, automatisering, eller når du vil have et hurtigt svar uden at starte hele TUI. F.eks.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><mark><span style=\"--0:#5c37a0;--1:#c5acf4\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span></mark><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">Explain</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">the</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">use</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">of</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">context</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">in</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">Go</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode run Explain the use of context in Go\"><div></div></button></div></figure></div>\n<p>Du kan også vedhæfte til en kørende <code dir=\"auto\">opencode serve</code>-instans for at undgå MCP serverens kolde opstartstider ved hver kørsel:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># Start a headless server in one terminal</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">serve</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#616972;--1:#99A0A6\"># In another terminal, run commands that attach to it</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">run</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#005CC5;--1:#79B8FF\">--attach</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">http://localhost:4096</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">\"Explain async/await in JavaScript\"</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode serveopencode run --attach http://localhost:4096 &#x22;Explain async/await in JavaScript&#x22;\"><div></div></button></div></figure></div>\n<h4 id=\"flag-4\"><a href=\"#flag-4\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Kort"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "<td></td><td>Kommandoen til at køre, brug besked til args</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--continue"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Fortsæt sidste session</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--session"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-s</code></td><td>Sessions-id for at fortsætte</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--fork"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Forgren sessionen ved fortsættelse (brug med <code dir=\"auto\">--continue</code> eller <code dir=\"auto\">--session</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--share"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Del sessionen</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--model"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Model til brug i form af provider/model</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--agent"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Agent til brug</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--file"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-f</code></td><td>Fil(er), der skal vedhæftes til meddelelsen</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--format"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Format: standard (formateret) eller json (rå JSON hændelser)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--title"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Titel for sessionen (bruger trunkeret prompt, hvis der ikke er angivet nogen værdi)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--attach"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Tilslut til en kørende opencode-server (f.eks. <a href=\"http://localhost:4096\">http://localhost:4096</a>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--password"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-p</code></td><td>Adgangskode til basic auth (standard: <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--username"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-u</code></td><td>Brugernavn til basic auth (standard: <code dir=\"auto\">OPENCODE_SERVER_USERNAME</code> eller <code dir=\"auto\">opencode</code>)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--dir"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Mappe at køre i, eller sti på fjernserveren ved tilkobling</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--variant"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Modelvariant (udbyder-specifik ræsonneringsindsats)</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--thinking"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Vis tænkeblokke</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Port til den lokale server (standard til vilkårlig port)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"serve\"><a href=\"#serve\">serve</a></h3>\n<p>Start en hovedløs OpenCode-server til API-adgang. Tjek <a href=\"/docs/server\">server docs</a> for den fulde HTTP-grænseflade.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">serve</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode serve\"><div></div></button></div></figure></div>\n<p>Dette starter en HTTP-server, der giver API-adgang til opencode-funktionalitet uden TUI-grænsefladen. Indstil <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code> for at aktivere HTTP grundlæggende godkendelse (brugernavn er standard til <code dir=\"auto\">opencode</code>).</p>\n<h4 id=\"flag-5\"><a href=\"#flag-5\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "Port at lytte på"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Værtsnavn at lytte på"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--mdns"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Aktiver mDNS-opdagelse"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--cors"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Yderligere browseroprindelse til at tillade CORS"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"session\"><a href=\"#session\">session</a></h3>\n<p>Administrator OpenCode sessionsholder.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [command]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode session [command]\"><div></div></button></div></figure></div>\n<hr>\n<h4 id=\"list-3\"><a href=\"#list-3\">list</a></h4>\n<p>Liste over alle OpenCode sessioner.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">list</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode session list\"><div></div></button></div></figure></div>\n<h5 id=\"flag-6\"><a href=\"#flag-6\">Flag</a></h5>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Kort"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "<td><code dir=\"auto\">-n</code></td><td>Begræns til N seneste sessioner</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--format"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Outputformat: tabel eller json (tabel)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"stats\"><a href=\"#stats\">stats</a></h3>\n<p>Vis tokenbrug og omkostningsstatistikker for dine OpenCode-sessioner.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">stats</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode stats\"><div></div></button></div></figure></div>\n<h4 id=\"flag-7\"><a href=\"#flag-7\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "Vis statistik for de sidste N dage (hele tiden)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--tools"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Antal værktøjer, der skal vises (alle)"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--models"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Vis modelbrugsopdeling (skjult som standard). Send et tal for at vise top N"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--project"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Filtre efter projekt (alle projekter, tom streng: nuværende projekt)"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"export\"><a href=\"#export\">export</a></h3>\n<p>Eksporter sessionsdata som JSON.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">export</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [sessionID]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode export [sessionID]\"><div></div></button></div></figure></div>\n<p>Hvis du ikke angiver et sessions-id, bliver du bedt om at vælge mellem tilgængelige sessioner.</p>\n<hr>\n<h3 id=\"import\"><a href=\"#import\">import</a></h3>\n<p>Importer sessionsdata fra en JSON fil eller OpenCode del URL.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">&#x3C;file></span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode import <file>\"><div></div></button></div></figure></div>\n<p>Du kan importere fra en lokal fil eller en OpenCode share URL.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">session.json</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">import</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">https://opncd.ai/s/abc123</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode import session.jsonopencode import https://opncd.ai/s/abc123\"><div></div></button></div></figure></div>\n<hr>\n<h3 id=\"web\"><a href=\"#web\">web</a></h3>\n<p>Start en hovedløs OpenCode-server med en webgrænseflade.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">web</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode web\"><div></div></button></div></figure></div>\n<p>Dette starter en HTTP-server og åbner en webbrowser for at få adgang til OpenCode via en webgrænseflade. Indstil <code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code> for at aktivere HTTP grundlæggende godkendelse (brugernavn er standard til <code dir=\"auto\">opencode</code>).</p>\n<h4 id=\"flag-8\"><a href=\"#flag-8\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "Port at lytte på"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Værtsnavn at lytte på"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--mdns"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Aktiver mDNS-opdagelse"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--cors"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Yderligere browseroprindelse til at tillade CORS"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"acp\"><a href=\"#acp\">acp</a></h3>\n<p>Start en ACP-server (Agent Client Protocol).</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">acp</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode acp\"><div></div></button></div></figure></div>\n<p>Denne kommando starter en ACP-server, der kommunikerer via stdin/stdout ved hjælp af nd-JSON.</p>\n<h4 id=\"flag-9\"><a href=\"#flag-9\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "Arbejdsmappe"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--port"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Port at lytte på"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--hostname"
              })
            })
          }), createVNode(_components.td, {
            "set:html": "Værtsnavn at lytte på"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"uninstall\"><a href=\"#uninstall\">uninstall</a></h3>\n<p>Afinstaller OpenCode og fjern alle relaterede filer.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">uninstall</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode uninstall\"><div></div></button></div></figure></div>\n<h4 id=\"flag-10\"><a href=\"#flag-10\">Flag</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Kort"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "<td><code dir=\"auto\">-c</code></td><td>Se konfigurationsfiler</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--keep-data"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-d</code></td><td>Gem sessionsdata og snapshots</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--dry-run"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Vis, hvad der ville blive fjernet uden at fjerne</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--force"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-f</code></td><td>Spring bekræftelsesspørgsmål over</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h3 id=\"upgrade\"><a href=\"#upgrade\">upgrade</a></h3>\n<p>Opdaterer OpenCode til den nyeste version eller en specifik version.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> [target]</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode upgrade [target]\"><div></div></button></div></figure></div>\n<p>For at opgradere til den nyeste version.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode upgrade\"><div></div></button></div></figure></div>\n<p>For at opgradere til en bestemt version.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#6F42C1;--1:#B392F0\">opencode</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">upgrade</span><span style=\"--0:#24292E;--1:#E1E4E8\"> </span><span style=\"--0:#032F62;--1:#9ECBFF\">v0.1.48</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"opencode upgrade v0.1.48\"><div></div></button></div></figure></div>\n<h4 id=\"upgrade-1\"><a href=\"#upgrade-1\">upgrade</a></h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Kort"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "<td><code dir=\"auto\">-m</code></td><td>Installationsmetoden, der blev brugt; curl, npm, pnpm, bun, brew</td>"
          })]
        })
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"globale-flag\"><a href=\"#globale-flag\">Globale flag</a></h2>\n<p>opencode CLI tager følgende globale flag.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
    }), createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Flag"
          }), createVNode(_components.th, {
            children: "Kort"
          }), createVNode(_components.th, {
            children: "Beskrivelse"
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
            "set:html": "<td><code dir=\"auto\">-h</code></td><td>Vis hjælp</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--version"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td><code dir=\"auto\">-v</code></td><td>Udskriftsversionsnummer</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--print-logs"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Udskriv logfiler til stderr</td>"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.nobr, {
              children: createVNode(_components.code, {
                children: "--log-level"
              })
            })
          }), createVNode(Fragment$1, {
            "set:html": "<td></td><td>Logniveau (DEBUG, INFO, WARN, ERROR)</td>"
          })]
        })]
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<hr>\n<h2 id=\"miljøvariabler\"><a href=\"#miljøvariabler\">Miljøvariabler</a></h2>\n<p>OpenCode kan konfigureres ved hjælp af miljøvariabler.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Variabel</th><th>Skriv</th><th>Beskrivelse</th></tr></thead><tbody><tr><td><code dir=\"auto\">OPENCODE_AUTO_SHARE</code></td><td>boolean</td><td>Del automatisk session</td></tr><tr><td><code dir=\"auto\">OPENCODE_GIT_BASH_PATH</code></td><td>string</td><td>Sti til Git Bash eksekverbar på Windows</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG</code></td><td>string</td><td>Sti til konfigurationsfil</td></tr><tr><td><code dir=\"auto\">OPENCODE_TUI_CONFIG</code></td><td>string</td><td>Sti til TUI-konfigurationsfil</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG_DIR</code></td><td>string</td><td>Sti til konfigurationsmappe</td></tr><tr><td><code dir=\"auto\">OPENCODE_CONFIG_CONTENT</code></td><td>string</td><td>Indbygget json-konfigurationsindhold</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_AUTOUPDATE</code></td><td>boolean</td><td>Deaktiver automatisk opdateringskontrol</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_PRUNE</code></td><td>boolean</td><td>Deaktiver beskæring af gamle data</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_TERMINAL_TITLE</code></td><td>boolean</td><td>Deaktiver automatisk opdatering af terminaltitel</td></tr><tr><td><code dir=\"auto\">OPENCODE_PERMISSION</code></td><td>string</td><td>Indbygget json-tilladelseskonfiguration</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_DEFAULT_PLUGINS</code></td><td>boolean</td><td>Deaktiver standard plugins</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_LSP_DOWNLOAD</code></td><td>boolean</td><td>Deaktiver automatisk LSP-serverdownloads</td></tr><tr><td><code dir=\"auto\">OPENCODE_ENABLE_EXPERIMENTAL_MODELS</code></td><td>boolean</td><td>Aktive eksperimentelle modeller</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_AUTOCOMPACT</code></td><td>boolean</td><td>Deaktiver automatisk kontekstkomprimering</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE</code></td><td>boolean</td><td>Deaktiver læsning fra <code dir=\"auto\">.claude</code> (prompt + færdigheder)</td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE_PROMPT</code></td><td>boolean</td><td>Deaktiver læsning <code dir=\"auto\">~/.claude/CLAUDE.md</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_CLAUDE_CODE_SKILLS</code></td><td>boolean</td><td>Deaktiver indlæsning af <code dir=\"auto\">.claude/skills</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_DISABLE_MODELS_FETCH</code></td><td>boolean</td><td>Deaktivering af modeller fra eksterne kilder</td></tr><tr><td><code dir=\"auto\">OPENCODE_FAKE_VCS</code></td><td>string</td><td>Falsk VCS-udbyder til testformål</td></tr><tr><td><code dir=\"auto\">OPENCODE_CLIENT</code></td><td>string</td><td>Klient-id (standard til <code dir=\"auto\">cli</code>)</td></tr><tr><td><code dir=\"auto\">OPENCODE_ENABLE_EXA</code></td><td>boolean</td><td>Aktiver Exa-websøgeværktøjer</td></tr><tr><td><code dir=\"auto\">OPENCODE_SERVER_PASSWORD</code></td><td>string</td><td>Aktiver grundlæggende godkendelse for <code dir=\"auto\">serve</code>/<code dir=\"auto\">web</code></td></tr><tr><td><code dir=\"auto\">OPENCODE_SERVER_USERNAME</code></td><td>string</td><td>Tilsidesæt grundlæggende godkendelsesbrugernavn (standard <code dir=\"auto\">opencode</code>)</td></tr><tr><td><code dir=\"auto\">OPENCODE_MODELS_URL</code></td><td>string</td><td>Brugerdefineret URL til hentning af modelkonfiguration</td></tr></tbody></table>\n<hr>\n<h3 id=\"eksperimentel\"><a href=\"#eksperimentel\">Eksperimentel</a></h3>\n<p>Disse miljøvariabler muliggør eksperimentelle funktioner, der kan ændres eller fjernes.</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Variabel</th><th>Skriv</th><th>Beskrivelse</th></tr></thead><tbody><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL</code></td><td>boolean</td><td>Aktiver alle eksperimentelle funktioner</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_ICON_DISCOVERY</code></td><td>boolean</td><td>Aktiver ikonopdagelse</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_DISABLE_COPY_ON_SELECT</code></td><td>boolean</td><td>Deaktiver kopi ved valg i TUI</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_BASH_DEFAULT_TIMEOUT_MS</code></td><td>nummer</td><td>Standard timeout for bash-kommandoer i ms</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX</code></td><td>nummer</td><td>Maks. output-tokens for LLM-svar</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_FILEWATCHER</code></td><td>boolean</td><td>Aktiver filovervågning for hele dir</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_OXFMT</code></td><td>boolean</td><td>Aktiver oxfmt formatter</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_LSP_TOOL</code></td><td>boolean</td><td>Aktive eksperimenter LSP værktøj</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_DISABLE_FILEWATCHER</code></td><td>boolean</td><td>Deaktiver filovervågning</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_EXA</code></td><td>boolean</td><td>Aktive eksperimenter Exa-funktioner</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_LSP_TY</code></td><td>boolean</td><td>Aktiver TY LSP for python-filer</td></tr><tr><td><code dir=\"auto\">OPENCODE_EXPERIMENTAL_PLAN_MODE</code></td><td>boolean</td><td>Aktiver plantilstand</td></tr></tbody></table>"
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

const url = "src/content/docs/da/cli.mdx";
const file = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/da/cli.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/da/cli.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
