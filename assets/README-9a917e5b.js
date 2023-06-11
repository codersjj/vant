import{o as s,a as t,z as n}from"./vue-libs-6a67f9c6.js";const e={class:"van-doc-markdown-body"},l=n(`<h1>FloatingPanel</h1><div class="van-doc-card"><h3 id="intro" tabindex="-1">Intro</h3><p>A panel that floats at the bottom of a page, which can be dragged up and down to browse content, often used to provide additional functionality or information. Please upgrade <code>vant</code> to &gt;= v4.5.0 before using this component.</p></div><div class="van-doc-card"><h3 id="install" tabindex="-1">Install</h3><p>Register component globally via <code>app.use</code>, refer to <a href="#/en-US/advanced-usage#zu-jian-zhu-ce" target="_blank">Component Registration</a> for more registration ways.</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">FloatingPanel</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> app = <span class="hljs-title function_">createApp</span>();
app.<span class="hljs-title function_">use</span>(<span class="hljs-title class_">FloatingPanel</span>);
</code></pre></div><h2 id="usage" tabindex="-1">Usage</h2><div class="van-doc-card"><h3 id="basic-usage" tabindex="-1">Basic Usage</h3><p>The default height of FloatingPanel is <code>100px</code>, and users can drag it to expand the panel to a height of <code>60%</code> of the screen height.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">van-cell-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">van-cell</span>
      <span class="hljs-attr">v-for</span>=<span class="hljs-string">&quot;i in 26&quot;</span>
      <span class="hljs-attr">:key</span>=<span class="hljs-string">&quot;i&quot;</span>
      <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;String.fromCharCode(i + 64)&quot;</span>
      <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;large&quot;</span>
    /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">van-cell-group</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="custom-anchors" tabindex="-1">Custom Anchors</h3><p>You can set the anchor position of FloatingPanel through the <code>anchors</code> attribute, and control the display height of the current panel through <code>v-model:height</code>.</p><p>For example, you can make the panel stop at three positions: <code>100px</code>, 40% of the screen height, and 70% of the screen height.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span> <span class="hljs-attr">v-model:height</span>=<span class="hljs-string">&quot;height&quot;</span> <span class="hljs-attr">:anchors</span>=<span class="hljs-string">&quot;anchors&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center; padding: 15px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Panel Show Height {{ height }} px<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> anchors = [
      <span class="hljs-number">100</span>,
      <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-number">0.4</span> * <span class="hljs-variable language_">window</span>.<span class="hljs-property">innerHeight</span>),
      <span class="hljs-title class_">Math</span>.<span class="hljs-title function_">round</span>(<span class="hljs-number">0.7</span> * <span class="hljs-variable language_">window</span>.<span class="hljs-property">innerHeight</span>),
    ];
    <span class="hljs-keyword">const</span> height = <span class="hljs-title function_">ref</span>(anchors[<span class="hljs-number">0</span>]);

    <span class="hljs-keyword">return</span> { anchors, height };
  },
};
</code></pre></div><div class="van-doc-card"><h3 id="head-drag-only" tabindex="-1">Head Drag Only</h3><p>By default, both the header and content areas of FloatingPanel can be dragged, but you can disable dragging of the content area through the <code>content-draggable</code> attribute.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">van-floating-panel</span> <span class="hljs-attr">:content-draggable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;text-align: center; padding: 15px&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>Content cannot be dragged<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">van-floating-panel</span>&gt;</span>
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model:height</td><td>The current display height of the panel</td><td><em>number | string</em></td><td><code>0</code></td></tr><tr><td>anchors</td><td>Setting custom anchors, unit <code>px</code></td><td><em>number[]</em></td><td><code>[100, window.innerWidth * 0.6]</code></td></tr><tr><td>duration</td><td>Transition duration, unit second</td><td><em>number | string</em></td><td><code>0.3</code></td></tr><tr><td>content-draggable</td><td>Allow dragging content</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td>safe-area-inset-bottom</td><td>Whether to enable bottom safe area adaptation</td><td><em>boolean</em></td><td><code>true</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td>height-change</td><td>Emitted when panel height is changed and the dragging is finished</td><td><em>{ height: number }</em></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>default</td><td>Custom panel content</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="types" tabindex="-1">Types</h3><p>The component exports the following type definitions:</p><pre><code class="language-ts"><span class="hljs-keyword">import</span> <span class="hljs-keyword">type</span> { <span class="hljs-title class_">FloatingPanelProps</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;
</code></pre></div><h2 id="theming" tabindex="-1">Theming</h2><div class="van-doc-card"><h3 id="css-variables" tabindex="-1">CSS Variables</h3><p>The component provides the following CSS variables, which can be used to customize styles. Please refer to <a href="#/en-US/config-provider" target="_blank">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Default Value</th><th>Description</th></tr></thead><tbody><tr><td>--van-floating-panel-border-radius</td><td><em>16px</em></td><td>-</td></tr><tr><td>--van-floating-panel-header-height</td><td><em>30px</em></td><td>-</td></tr><tr><td>--van-floating-panel-z-index</td><td><em>999</em></td><td>-</td></tr><tr><td>--van-floating-panel-background</td><td><em>var(--van-background-2)</em></td><td>-</td></tr><tr><td>--van-floating-panel-bar-width</td><td><em>20px</em></td><td>-</td></tr><tr><td>--van-floating-panel-bar-height</td><td><em>3px</em></td><td>-</td></tr><tr><td>--van-floating-panel-bar-color</td><td><em>var(--van-gray-5)</em></td><td>-</td></tr></tbody></table></div>`,14),d=[l],i={__name:"README",setup(p,{expose:a}){return a({frontmatter:{}}),(h,c)=>(s(),t("div",e,d))}};export{i as default};
