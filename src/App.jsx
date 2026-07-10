import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Cloud,
  FileText,
  FolderOpen,
  Link2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    eyebrow: "01 / Capture",
    title: "思いつきを、まず残す",
    body: "メモ、リンク、会話、クリップをiPhoneから一つのキューへ。整理は後からで構いません。",
  },
  {
    icon: Sparkles,
    eyebrow: "02 / Review",
    title: "確認してから整える",
    body: "Apple Intelligenceが利用できる環境では、タイトル、要約、タグ、次のアクションをMarkdownへ整理します。",
  },
  {
    icon: FolderOpen,
    eyebrow: "03 / Vault",
    title: "選んだVaultへ書き込む",
    body: "Filesで選択したiCloud DriveやObsidianのフォルダへ、確認済みのノートだけを保存します。",
  },
];

const integrations = [
  { icon: Cloud, label: "iCloud Drive", detail: "Filesで選んだフォルダへ" },
  { icon: Sparkles, label: "Apple Intelligence", detail: "利用可能な環境で整理" },
  { icon: Link2, label: "Shortcuts / Siri", detail: "声や共有シートから記録" },
];

function PhonePreview() {
  return (
    <figure className="phone-figure">
      <div className="phone-shell" aria-label="NoteFlow iPhone capture screen">
        <div className="phone-speaker" />
        <div className="phone-screen">
          <img src="./assets/noteflow-capture.png" alt="NoteFlowのキャプチャ画面" />
        </div>
      </div>
      <figcaption>iPhone / iOS 27 preview</figcaption>
    </figure>
  );
}

function FeatureBlock({ feature }) {
  const Icon = feature.icon;

  return (
    <article className="feature-block">
      <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
      <p className="eyebrow">{feature.eyebrow}</p>
      <h3>{feature.title}</h3>
      <p className="feature-body">{feature.body}</p>
    </article>
  );
}

export function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="NoteFlow home">
          <span className="brand-mark">N</span>
          <span>NoteFlow</span>
        </a>
        <nav className="site-nav" aria-label="メインナビゲーション">
          <a href="#workflow">使い方</a>
          <a href="#privacy">プライバシー</a>
          <a href="./support.html">サポート</a>
        </nav>
        <a className="header-link" href="./support.html">
          <span>Support</span>
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </header>

      <main id="top">
        <section className="hero-band">
          <div className="hero-copy">
            <p className="eyebrow">A focused capture queue for iPhone</p>
            <h1>思いつきを、<br /><em>確認してから</em>Vaultへ。</h1>
            <p className="hero-lead">
              NoteFlowは、メモや会話をすばやく残し、あなたが確認した内容だけをMarkdownとして知識の置き場所へ届けます。
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#workflow">
                使い方を見る
                <ChevronRight size={17} aria-hidden="true" />
              </a>
              <a className="button button-light" href="./support.html">
                サポート
              </a>
            </div>
            <p className="release-note"><Check size={15} aria-hidden="true" /> アカウント不要 / iOS 18以降</p>
          </div>
          <PhonePreview />
        </section>

        <section className="signal-band" aria-label="NoteFlow product signals">
          <div><strong>01</strong><span>Capture first</span></div>
          <div><strong>02</strong><span>Review locally</span></div>
          <div><strong>03</strong><span>Write deliberately</span></div>
          <div><strong>∞</strong><span>Your knowledge base</span></div>
        </section>

        <section className="section feature-section" id="workflow">
          <div className="section-intro">
            <p className="eyebrow">The workflow</p>
            <h2>記録と整理の間に、<br />確認の時間をつくる。</h2>
          </div>
          <div className="feature-grid">
            {features.map((feature) => <FeatureBlock key={feature.eyebrow} feature={feature} />)}
          </div>
        </section>

        <section className="dark-band">
          <div className="dark-band-copy">
            <p className="eyebrow">Device intelligence</p>
            <h2>AIに任せる範囲を、<br />あなたが決める。</h2>
            <p>
              Apple Intelligenceの利用可否に応じて整理方法を切り替えます。入力内容は開発者のサーバーへ送らず、利用できない場合もローカル処理で確認キューを止めません。
            </p>
            <a className="text-link light-link" href="./privacy.html">プライバシー方針を読む <ArrowUpRight size={16} /></a>
          </div>
          <div className="prompt-panel" aria-label="AI prompt policy">
            <div className="prompt-panel-top"><Sparkles size={18} /><span>Instruction profile / Second brain</span></div>
            <p>事実を補完しない。元のニュアンスを保つ。不明な点は「未確認」と明記する。</p>
            <div className="prompt-rule"><span /> Raw Capture is always preserved</div>
          </div>
        </section>

        <section className="section integration-section">
          <div className="section-intro split-intro">
            <div>
              <p className="eyebrow">Works with your tools</p>
              <h2>今ある環境に、<br />静かに接続する。</h2>
            </div>
            <p>NoteFlowは新しい閉じた場所をつくるのではなく、iPhone、Files、iCloud Drive、Obsidianをつなぐための確認レイヤーです。</p>
          </div>
          <div className="integration-list">
            {integrations.map(({ icon: Icon, label, detail }) => (
              <div className="integration-row" key={label}>
                <Icon size={21} strokeWidth={1.8} aria-hidden="true" />
                <strong>{label}</strong>
                <span>{detail}</span>
                <ChevronRight size={17} aria-hidden="true" />
              </div>
            ))}
          </div>
        </section>

        <section className="privacy-band" id="privacy">
          <div className="privacy-icon"><ShieldCheck size={24} strokeWidth={1.7} /></div>
          <div>
            <p className="eyebrow">Local by default</p>
            <h2>あなたのノートは、あなたの管理下に。</h2>
            <p>アカウント、広告、第三者分析SDKはありません。Vaultへの書き込みは、選択と確認の後にだけ実行されます。</p>
          </div>
          <a className="text-link" href="./privacy.html">Privacy Policy <ArrowUpRight size={16} /></a>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#top"><span className="brand-mark">N</span><span>NoteFlow</span></a>
        <div className="footer-links">
          <a href="./privacy.html">プライバシー</a>
          <a href="./support.html">サポート</a>
          <a href="mailto:support@eescc.jp">お問い合わせ</a>
        </div>
        <small>© 2026 ESC.</small>
      </footer>
    </div>
  );
}
