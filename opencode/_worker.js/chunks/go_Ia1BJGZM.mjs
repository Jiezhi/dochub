globalThis.process ??= {}; globalThis.process.env ??= {};
import { d as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_D-7CwiXF.mjs';
import { c as config } from './config_DB-XZaoH.mjs';

const frontmatter = {
  "title": "Go",
  "description": "專為開源寫程式模型提供的低成本訂閱服務。"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "背景",
    "text": "背景"
  }, {
    "depth": 2,
    "slug": "運作方式",
    "text": "運作方式"
  }, {
    "depth": 2,
    "slug": "使用限制",
    "text": "使用限制"
  }, {
    "depth": 3,
    "slug": "超出限制的使用量",
    "text": "超出限制的使用量"
  }, {
    "depth": 2,
    "slug": "端點",
    "text": "端點"
  }, {
    "depth": 3,
    "slug": "模型",
    "text": "模型"
  }, {
    "depth": 2,
    "slug": "隱私權",
    "text": "隱私權"
  }, {
    "depth": 2,
    "slug": "目標",
    "text": "目標"
  }];
}
const console = config.console;
const email = `mailto:${config.email}`;
function _createMdxContent(props) {
  const _components = {
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...props.components
  }, {Fragment: Fragment$1} = _components;
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>OpenCode Go 是一項低成本的訂閱服務——<strong>首月 $5 美元</strong>，之後<strong>每月 $10 美元</strong>——讓您能穩定使用受歡迎的開源寫程式模型。</p>\n<p>Go 的運作方式與 OpenCode 中的任何其他供應商相同。您訂閱 OpenCode Go 並取得您的 API key。這是<strong>完全可選的</strong>，您不需要使用它也能使用 OpenCode。</p>\n<p>它主要為國際使用者設計，模型託管於美國、歐盟和新加坡，以提供全球穩定的存取。</p>\n<hr>\n<h2 id=\"背景\"><a href=\"#背景\">背景</a></h2>\n<p>開源模型已經變得非常強大。它們在寫程式任務上的表現，現在已經接近專有模型。而且因為有許多供應商競爭提供服務，它們通常便宜得多。</p>\n<p>然而，要獲得穩定、低延遲的存取可能很困難。各家供應商的品質和可用性不一。</p>\n<aside aria-label=\"提示\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>提示</p><div class=\"starlight-aside__content\"><p>我們測試了一組精選的模型和供應商，它們與 OpenCode 搭配運作良好。</p></div></aside>\n<p>為了解決這個問題，我們做了幾件事：</p>\n<ol>\n<li>我們測試了一組精選的開源模型，並與它們的團隊討論如何最佳化運行。</li>\n<li>接著我們與幾家供應商合作，確保這些模型被正確地提供服務。</li>\n<li>最後，我們對模型與供應商的組合進行了基準測試，並整理出一份我們樂於推薦的清單。</li>\n</ol>\n<p>OpenCode Go 讓您可以存取這些模型，<strong>首月只需 $5 美元</strong>，之後<strong>每月 $10 美元</strong>。</p>\n<hr>\n<h2 id=\"運作方式\"><a href=\"#運作方式\">運作方式</a></h2>\n<p>OpenCode Go 的運作方式與 OpenCode 中的任何其他供應商相同。</p>\n"
    }), createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["您登入 ", createVNode(_components.strong, {
          children: createVNode("a", {
            href: console,
            "set:html": "OpenCode Zen"
          })
        }), "，訂閱 Go，然後複製您的 API key。"]
      }), "\n", createVNode(Fragment$1, {
        "set:html": "<li>您在 TUI 中執行 <code dir=\"auto\">/connect</code> 命令，選擇 <code dir=\"auto\">OpenCode Go</code>，然後貼上您的 API key。</li>\n<li>在 TUI 中執行 <code dir=\"auto\">/models</code> 即可查看透過 Go 可用的模型清單。</li>\n"
      })]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"注意\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>注意</p><div class=\"starlight-aside__content\"><p>每個工作區只能有一位成員訂閱 OpenCode Go。</p></div></aside>\n<p>目前的模型清單包括：</p>\n<ul>\n<li><strong>GLM-5</strong></li>\n<li><strong>GLM-5.1</strong></li>\n<li><strong>Kimi K2.5</strong></li>\n<li><strong>Kimi K2.6</strong></li>\n<li><strong>MiMo-V2.5</strong></li>\n<li><strong>MiMo-V2.5-Pro</strong></li>\n<li><strong>MiniMax M2.5</strong></li>\n<li><strong>Qwen3.5 Plus</strong></li>\n<li><strong>Qwen3.6 Plus</strong></li>\n<li><strong>MiniMax M2.7</strong></li>\n<li><strong>DeepSeek V4 Pro</strong></li>\n<li><strong>DeepSeek V4 Flash</strong></li>\n</ul>\n<p>隨著我們測試並加入新模型，模型清單可能會有所變動。</p>\n<hr>\n<h2 id=\"使用限制\"><a href=\"#使用限制\">使用限制</a></h2>\n<p>OpenCode Go 包含以下限制：</p>\n<ul>\n<li><strong>5 小時限制</strong> — $12 美元的使用量</li>\n<li><strong>每週限制</strong> — $30 美元的使用量</li>\n<li><strong>每月限制</strong> — $60 美元的使用量</li>\n</ul>\n<p>限制是以美元價值來定義。這意味著您的實際請求次數取決於您使用的模型。像 MiniMax M2.5 這樣較便宜的模型允許更多的請求次數，而像 GLM-5.1 這樣成本較高的模型則允許較少次數。</p>\n<p>下表提供了基於典型 Go 使用模式的預估請求次數：</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Model</th><th>每 5 小時請求數</th><th>每週請求數</th><th>每月請求數</th></tr></thead><tbody><tr><td>GLM-5.1</td><td>880</td><td>2,150</td><td>4,300</td></tr><tr><td>GLM-5</td><td>1,150</td><td>2,880</td><td>5,750</td></tr><tr><td>Kimi K2.5</td><td>1,850</td><td>4,630</td><td>9,250</td></tr><tr><td>Kimi K2.6</td><td>1,150</td><td>2,880</td><td>5,750</td></tr><tr><td>MiMo-V2.5 (≤ 256K)</td><td>2,150</td><td>5,450</td><td>10,900</td></tr><tr><td>MiMo-V2.5-Pro</td><td>1,290</td><td>3,225</td><td>6,450</td></tr><tr><td>Qwen3.6 Plus</td><td>3,300</td><td>8,200</td><td>16,300</td></tr><tr><td>MiniMax M2.7</td><td>3,400</td><td>8,500</td><td>17,000</td></tr><tr><td>MiniMax M2.5</td><td>6,300</td><td>15,900</td><td>31,800</td></tr><tr><td>Qwen3.5 Plus</td><td>10,200</td><td>25,200</td><td>50,500</td></tr><tr><td>DeepSeek V4 Pro</td><td>3,450</td><td>8,550</td><td>17,150</td></tr><tr><td>DeepSeek V4 Flash</td><td>31,650</td><td>79,050</td><td>158,150</td></tr></tbody></table>\n<p>預估值是基於觀察到的平均請求模式：</p>\n<ul>\n<li>GLM-5/5.1 — 每次請求 700 個輸入 token、52,000 個快取 token、150 個輸出 token</li>\n<li>Kimi K2.5/K2.6 — 每次請求 870 個輸入 token、55,000 個快取 token、200 個輸出 token</li>\n<li>DeepSeek V4 Pro — 每次請求 750 個輸入 token、82,000 個快取 token、290 個輸出 token</li>\n<li>DeepSeek V4 Flash — 每次請求 790 個輸入 token、68,000 個快取 token、280 個輸出 token</li>\n<li>MiniMax M2.7/M2.5 — 每次請求 300 個輸入 token、55,000 個快取 token、125 個輸出 token</li>\n<li>Qwen3.5 Plus — 每次請求 410 個輸入 token、47,000 個快取 token、140 個輸出 token</li>\n<li>Qwen3.6 Plus — 每次請求 500 個輸入 token、57,000 個快取 token、190 個輸出 token</li>\n<li>MiMo-V2.5 — 每次請求 1000 個輸入 token、60,000 個快取 token、140 個輸出 token</li>\n<li>MiMo-V2.5-Pro — 每次請求 350 個輸入 token、41,000 個快取 token、250 個輸出 token</li>\n</ul>\n"
    }), createVNode(_components.p, {
      children: ["您可以在 ", createVNode(_components.strong, {
        children: createVNode("a", {
          href: console,
          "set:html": "console"
        })
      }), " 中追蹤您目前的使用量。"]
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"提示\" class=\"starlight-aside starlight-aside--tip\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M1.43909 8.85483L1.44039 8.85354L4.96668 5.33815C5.30653 4.99386 5.7685 4.79662 6.2524 4.78972L6.26553 4.78963L12.9014 4.78962L13.8479 3.84308C16.9187 0.772319 20.0546 0.770617 21.4678 0.975145C21.8617 1.02914 22.2271 1.21053 22.5083 1.4917C22.7894 1.77284 22.9708 2.13821 23.0248 2.53199C23.2294 3.94517 23.2278 7.08119 20.1569 10.1521L19.2107 11.0983V17.7338L19.2106 17.7469C19.2037 18.2308 19.0067 18.6933 18.6624 19.0331L15.1456 22.5608C14.9095 22.7966 14.6137 22.964 14.29 23.0449C13.9663 23.1259 13.6267 23.1174 13.3074 23.0204C12.9881 22.9235 12.7011 22.7417 12.4771 22.4944C12.2533 22.2473 12.1006 21.9441 12.0355 21.6171L11.1783 17.3417L6.65869 12.822L4.34847 12.3589L2.38351 11.965C2.05664 11.8998 1.75272 11.747 1.50564 11.5232C1.25835 11.2992 1.07653 11.0122 0.979561 10.6929C0.882595 10.3736 0.874125 10.034 0.955057 9.7103C1.03599 9.38659 1.20328 9.09092 1.43909 8.85483ZM6.8186 10.8724L2.94619 10.096L6.32006 6.73268H10.9583L6.8186 10.8724ZM15.2219 5.21703C17.681 2.75787 20.0783 2.75376 21.1124 2.8876C21.2462 3.92172 21.2421 6.31895 18.783 8.77812L12.0728 15.4883L8.51172 11.9272L15.2219 5.21703ZM13.9042 21.0538L13.1279 17.1811L17.2676 13.0414V17.68L13.9042 21.0538Z\"></path><path d=\"M9.31827 18.3446C9.45046 17.8529 9.17864 17.3369 8.68945 17.1724C8.56178 17.1294 8.43145 17.1145 8.30512 17.1243C8.10513 17.1398 7.91519 17.2172 7.76181 17.3434C7.62613 17.455 7.51905 17.6048 7.45893 17.7835C6.97634 19.2186 5.77062 19.9878 4.52406 20.4029C4.08525 20.549 3.6605 20.644 3.29471 20.7053C3.35607 20.3395 3.45098 19.9148 3.59711 19.476C4.01221 18.2294 4.78141 17.0237 6.21648 16.5411C6.39528 16.481 6.54504 16.3739 6.65665 16.2382C6.85126 16.0016 6.92988 15.678 6.84417 15.3647C6.83922 15.3466 6.83373 15.3286 6.82767 15.3106C6.74106 15.053 6.55701 14.8557 6.33037 14.7459C6.10949 14.6389 5.84816 14.615 5.59715 14.6994C5.47743 14.7397 5.36103 14.7831 5.24786 14.8294C3.22626 15.6569 2.2347 17.4173 1.75357 18.8621C1.49662 19.6337 1.36993 20.3554 1.30679 20.8818C1.27505 21.1464 1.25893 21.3654 1.25072 21.5213C1.24662 21.5993 1.24448 21.6618 1.24337 21.7066L1.243 21.7226L1.24235 21.7605L1.2422 21.7771L1.24217 21.7827L1.24217 21.7856C1.24217 22.3221 1.67703 22.7579 2.2137 22.7579L2.2155 22.7579L2.22337 22.7578L2.23956 22.7577C2.25293 22.7575 2.27096 22.7572 2.29338 22.7567C2.33821 22.7555 2.40073 22.7534 2.47876 22.7493C2.63466 22.7411 2.85361 22.725 3.11822 22.6932C3.64462 22.6301 4.36636 22.5034 5.13797 22.2464C6.58274 21.7653 8.3431 20.7738 9.17063 18.7522C9.21696 18.639 9.26037 18.5226 9.30064 18.4029C9.30716 18.3835 9.31304 18.364 9.31827 18.3446Z\"></path></svg>提示</p><div class=\"starlight-aside__content\"><p>如果您達到了使用限制，您可以繼續使用免費模型。</p></div></aside>\n<p>使用限制可能會隨著我們從早期使用情況和回饋中學習而有所調整。</p>\n<hr>\n<h3 id=\"超出限制的使用量\"><a href=\"#超出限制的使用量\">超出限制的使用量</a></h3>\n<p>如果您在您的 Zen 餘額中也有額度，您可以在 console 中啟用 <strong>Use balance</strong> 選項。啟用後，當您達到使用限制時，Go 將會改用您的 Zen 餘額，而不是阻擋請求。</p>\n<hr>\n<h2 id=\"端點\"><a href=\"#端點\">端點</a></h2>\n<p>您也可以透過以下 API 端點存取 Go 模型。</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>模型</th><th>模型 ID</th><th>端點</th><th>AI SDK 套件</th></tr></thead><tbody><tr><td>GLM-5.1</td><td>glm-5.1</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/chat/completions</code></td><td><code dir=\"auto\">@ai-sdk/openai-compatible</code></td></tr><tr><td>GLM-5</td><td>glm-5</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/chat/completions</code></td><td><code dir=\"auto\">@ai-sdk/openai-compatible</code></td></tr><tr><td>Kimi K2.5</td><td>kimi-k2.5</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/chat/completions</code></td><td><code dir=\"auto\">@ai-sdk/openai-compatible</code></td></tr><tr><td>Kimi K2.6</td><td>kimi-k2.6</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/chat/completions</code></td><td><code dir=\"auto\">@ai-sdk/openai-compatible</code></td></tr><tr><td>DeepSeek V4 Pro</td><td>deepseek-v4-pro</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/chat/completions</code></td><td><code dir=\"auto\">@ai-sdk/openai-compatible</code></td></tr><tr><td>DeepSeek V4 Flash</td><td>deepseek-v4-flash</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/chat/completions</code></td><td><code dir=\"auto\">@ai-sdk/openai-compatible</code></td></tr><tr><td>MiMo-V2.5</td><td>mimo-v2.5</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/chat/completions</code></td><td><code dir=\"auto\">@ai-sdk/openai-compatible</code></td></tr><tr><td>MiMo-V2.5-Pro</td><td>mimo-v2.5-pro</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/chat/completions</code></td><td><code dir=\"auto\">@ai-sdk/openai-compatible</code></td></tr><tr><td>MiniMax M2.7</td><td>minimax-m2.7</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/messages</code></td><td><code dir=\"auto\">@ai-sdk/anthropic</code></td></tr><tr><td>MiniMax M2.5</td><td>minimax-m2.5</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/messages</code></td><td><code dir=\"auto\">@ai-sdk/anthropic</code></td></tr><tr><td>Qwen3.6 Plus</td><td>qwen3.6-plus</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/messages</code></td><td><code dir=\"auto\">@ai-sdk/anthropic</code></td></tr><tr><td>Qwen3.5 Plus</td><td>qwen3.5-plus</td><td><code dir=\"auto\">https://opencode.ai/zen/go/v1/messages</code></td><td><code dir=\"auto\">@ai-sdk/anthropic</code></td></tr></tbody></table>\n<p>您的 OpenCode 設定中的 <a href=\"/docs/config/#models\">model id</a> 使用 <code dir=\"auto\">opencode-go/&#x3C;model-id></code> 格式。例如，Kimi K2.6 在設定中應使用 <code dir=\"auto\">opencode-go/kimi-k2.6</code>。</p>\n<hr>\n<h3 id=\"模型\"><a href=\"#模型\">模型</a></h3>\n<p>你可以從以下位置取得所有可用模型及其中繼資料的完整清單：</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/docs/_astro/ec.4c0k7.css\"><script type=\"module\" src=\"/docs/_astro/ec.0vx5m.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#24292e;--1:#e1e4e8\">https://opencode.ai/zen/go/v1/models</span></div></div></code></pre><div class=\"copy\"><div aria-live=\"polite\"></div><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"https://opencode.ai/zen/go/v1/models\"><div></div></button></div></figure></div>\n<hr>\n<h2 id=\"隱私權\"><a href=\"#隱私權\">隱私權</a></h2>\n<p>此方案主要為國際使用者設計，模型部署於 US、EU 與 Singapore，以提供穩定的全球存取體驗。我們的供應商遵循零保留政策，不會將你的資料用於模型訓練。</p>\n<hr>\n<h2 id=\"目標\"><a href=\"#目標\">目標</a></h2>\n<p>我們建立 OpenCode Go 的目的是：</p>\n<ol>\n<li>透過低成本的訂閱服務，讓更多人能<strong>輕鬆獲得</strong> AI 寫程式的協助。</li>\n<li>提供<strong>穩定可靠</strong>的途徑來存取最好的開源寫程式模型。</li>\n<li>精選經過<strong>測試與效能評估</strong>、適合寫程式代理使用的模型。</li>\n<li>允許您在 OpenCode 中同時使用任何其他供應商，確保<strong>不被單一廠商綁定</strong>。</li>\n</ol>"
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

const url = "src/content/docs/zh-tw/go.mdx";
const file = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/zh-tw/go.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/dochub/dochub/_src/packages/web/src/content/docs/zh-tw/go.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, console, Content as default, email, file, frontmatter, getHeadings, url };
