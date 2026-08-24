const reservationUrl =
  'https://www.hotpepper.jp/strJ004492642/yoyaku/hpds/?ROUTE_KBN=20';
const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

const menuItems = [
  { name: '焼きたて玉子焼き', price: '480', image: '/images/material-03.png', note: 'ふっくら、出汁香る定番' },
  { name: '一夜干しサバの塩焼き', price: '720', image: '/images/saba.webp', note: '香ばしく、旨みを凝縮' },
  { name: 'マグロで肉じゃが', price: '780', image: '/images/nikujaga.webp', note: 'ハマの台所らしい自由な一皿' },
  { name: 'お刺身盛合せ 3点盛り', price: '1,250', image: '/images/sashimi.webp', note: 'その日の良い魚を目利きして' },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ハマの台所 タケ ホーム">
          <span className="brand-kicker">海鮮とジャンルレス居酒屋</span>
          <span className="brand-name">ハマの台所 <strong>タケ</strong></span>
        </a>
        <nav className="main-nav" aria-label="メインナビゲーション">
          <a href="#concept">私たちのこと</a>
          <a href="#menu">お品書き</a>
          <a href="#space">店内</a>
          <a href="#access">アクセス</a>
        </nav>
        <a className="header-reserve" href={reservationUrl} target="_blank" rel="noreferrer">
          <span>オンライン予約</span><b aria-hidden="true">↗</b>
        </a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img className="hero-image" src={`${assetBasePath}/images/hero-interior-wide.png`} alt="木の温もりを感じるハマの台所 タケのカウンター席" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">GUMYOJI · YOKOHAMA</p>
          <h1 id="hero-title"><span>旨いものは、</span><span>ジャンルをこえる。</span></h1>
          <p className="hero-copy">
            店主が目利きした海の幸と、その日の“うまい”を自由な一皿に。<br />
            弘明寺の小さな台所で、今夜もお待ちしています。
          </p>
          <div className="hero-actions">
            <a className="primary-button" href={reservationUrl} target="_blank" rel="noreferrer">
              席を予約する <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="tel:0459000578">
              <span>045-900-0578</span><small>お電話でのお問い合わせ</small>
            </a>
          </div>
        </div>
        <div className="hero-meta" aria-label="店舗の基本情報">
          <div><span>OPEN</span><b>昼 11:45–14:00</b><b>夜 17:00–21:30</b></div>
          <div><span>CLOSED</span><b>毎週火曜日</b></div>
          <div><span>ACCESS</span><b>弘明寺駅 徒歩約7分</b></div>
        </div>
        <a className="scroll-cue" href="#concept" aria-label="次のセクションへ"><span>SCROLL</span><i /></a>
      </section>

      <section className="opening-note" id="concept">
        <p>横浜・弘明寺で味わう</p>
        <h2>魚も、肉も、野菜も。<br />その日いちばんの食材を、いちばん旨いかたちで。</h2>
      </section>

      <section className="concept-section">
        <div className="concept-photo photo-tall">
          <img src={`${assetBasePath}/images/material-06.png`} alt="海鮮や揚げ物、玉子焼きなどハマの台所 タケの料理" />
          <span className="photo-index">01 / FOOD</span>
        </div>
        <div className="concept-copy">
          <p className="section-kicker">OUR KITCHEN</p>
          <h2>決まった型より、<br />目の前の“旨い”を。</h2>
          <p>
            海鮮を軸に、和も洋もとらわれず。店主自らが食材を目利きし、
            素材の持ち味を大切にしながら、その日の気分に寄り添う料理へ仕立てます。
          </p>
          <p>
            一人でふらりと、仲間と賑やかに。カウンター越しの会話も、
            この店の味のひとつです。
          </p>
          <a className="line-link" href="https://www.instagram.com/_045dining_/" target="_blank" rel="noreferrer">
            Instagramで今日のおすすめを見る <span>↗</span>
          </a>
        </div>
        <div className="concept-photo photo-small">
          <img src={`${assetBasePath}/images/material-02.png`} alt="熱々の鉄板で提供する贅沢鉄板ステーキ" />
          <span className="photo-index">02 / SPECIALTY</span>
        </div>
      </section>

      <section className="specials-section" id="menu">
        <div className="section-heading">
          <div><p className="section-kicker">TODAY&apos;S TABLE</p><h2>おすすめの一皿</h2></div>
          <p>仕入れにより内容が変わることがあります。<br />今日のおすすめは店内、またはInstagramで。</p>
        </div>

        <article className="feature-dish">
          <div className="feature-image"><img src={`${assetBasePath}/images/steak.webp`} alt="熱々の鉄板で提供する贅沢鉄板ステーキ" /></div>
          <div className="feature-copy">
            <span className="feature-number">01</span>
            <p className="feature-label">SIGNATURE</p>
            <h3>贅沢鉄板ステーキ</h3>
            <p>煙と香りまでごちそう。アツアツの鉄板で、焼き加減をお好みに仕上げながらどうぞ。</p>
            <strong><small>税込</small> ¥1,800</strong>
          </div>
        </article>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <article className="menu-card" key={item.name}>
              <div className="menu-image"><img src={`${assetBasePath}${item.image}`} alt={item.name} /></div>
              <div className="menu-card-head"><span>0{index + 2}</span><p>{item.note}</p></div>
              <h3>{item.name}</h3>
              <strong><small>税込</small> ¥{item.price}</strong>
            </article>
          ))}
        </div>

        <div className="course-callout">
          <div>
            <p className="section-kicker">FOR YOUR GATHERING</p>
            <h3>その日のおすすめを囲む、<br />おまかせコース。</h3>
          </div>
          <p>ご要望に合わせて内容や量を細かく調整します。宴会やご家族のお集まりにも、お気軽にご相談ください。</p>
          <strong>お一人様 <b>¥4,000</b><small>（税込）</small></strong>
          <a href="tel:0459000578">コースを相談する <span>→</span></a>
        </div>
      </section>

      <section className="space-section" id="space">
        <div className="space-visual">
          <img src={`${assetBasePath}/images/material-07.webp`} alt="店主との会話も楽しめるカウンター席" />
          <div className="space-stamp"><span>全</span><b>17</b><small>SEATS</small></div>
        </div>
        <div className="space-copy">
          <p className="section-kicker">A PLACE AT THE COUNTER</p>
          <h2>おかえり、と言いたくなる<br />小さな台所。</h2>
          <p>料理の音や香りを近くで楽しめるカウンター5席と、会話が弾む4名掛けテーブル。肩ひじ張らず、思い思いの時間をお過ごしください。</p>
          <dl className="seat-list">
            <div><dt>COUNTER</dt><dd>1名様 × 5席</dd></div>
            <div><dt>TABLE</dt><dd>4名様 × 3卓</dd></div>
            <div><dt>SMOKE</dt><dd>全席禁煙</dd></div>
          </dl>
        </div>
        <div className="table-photo"><img src={`${assetBasePath}/images/material-05.png`} alt="仲間との食事を楽しめるテーブル席" /></div>
      </section>

      <section className="instagram-section">
        <div className="insta-copy">
          <p className="section-kicker">FROM INSTAGRAM</p>
          <h2>今夜の“うまい”は、<br />ここから。</h2>
          <p>その日の仕入れ、おすすめ料理、店の空気を発信しています。</p>
          <a href="https://www.instagram.com/_045dining_/" target="_blank" rel="noreferrer">@_045dining_ <span>↗</span></a>
        </div>
        <a className="insta-tile tile-one" href="https://www.instagram.com/_045dining_/" target="_blank" rel="noreferrer" aria-label="Instagramを開く">
          <img src={`${assetBasePath}/images/material-04.png`} alt="" /><span>VIEW ON INSTAGRAM ↗</span>
        </a>
        <a className="insta-tile tile-two" href="https://www.instagram.com/_045dining_/" target="_blank" rel="noreferrer" aria-label="Instagramを開く">
          <img src={`${assetBasePath}/images/material-03.png`} alt="" /><span>FOLLOW US ↗</span>
        </a>
      </section>

      <section className="access-section" id="access">
        <div className="access-title">
          <p className="section-kicker">VISIT US</p>
          <h2>ハマの台所<br /><strong>タケ</strong></h2>
        </div>
        <div className="access-details">
          <dl>
            <div><dt>住所</dt><dd>〒232-0056<br />神奈川県横浜市南区通町3-48</dd></div>
            <div><dt>アクセス</dt><dd>横浜市営地下鉄ブルーライン<br />弘明寺駅 2A出口より徒歩約7分</dd></div>
            <div><dt>営業時間</dt><dd>昼 11:45–14:00<br />夜 17:00–21:30</dd></div>
            <div><dt>定休日</dt><dd>火曜日</dd></div>
          </dl>
          <a className="map-link" href="https://www.google.com/maps/search/?api=1&query=%E3%83%8F%E3%83%9E%E3%81%AE%E5%8F%B0%E6%89%80%E3%82%BF%E3%82%B1+%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C%E6%A8%AA%E6%B5%9C%E5%B8%82%E5%8D%97%E5%8C%BA%E9%80%9A%E7%94%BA3-48" target="_blank" rel="noreferrer">
            Google Mapsで開く <span>↗</span>
          </a>
        </div>
        <div className="access-photo">
          <img src={`${assetBasePath}/images/material-01.png`} alt="木の看板が目印のハマの台所 タケ外観" />
          <span>木の看板を目印にお越しください</span>
        </div>
      </section>

      <section className="reservation-section">
        <img src={`${assetBasePath}/images/hero-detail.jpg`} alt="" />
        <div className="reservation-shade" />
        <div className="reservation-content">
          <p className="section-kicker">RESERVATION</p>
          <h2>今夜、台所で<br />お待ちしています。</h2>
          <div className="reservation-actions">
            <a href={reservationUrl} target="_blank" rel="noreferrer">オンライン予約 <span>↗</span></a>
            <a href="tel:0459000578"><small>お電話はこちら</small>045-900-0578</a>
          </div>
        </div>
      </section>

      <footer>
        <a className="footer-brand" href="#top"><span>ハマの台所</span><strong>タケ</strong></a>
        <div className="footer-links">
          <a href={reservationUrl} target="_blank" rel="noreferrer">予約</a>
          <a href="https://www.instagram.com/_045dining_/" target="_blank" rel="noreferrer">Instagram</a>
          <a href="tel:0459000578">電話</a>
        </div>
        <p>© ハマの台所 タケ</p>
      </footer>

      <div className="mobile-actions">
        <a href="tel:0459000578">電話する</a>
        <a href={reservationUrl} target="_blank" rel="noreferrer">オンライン予約 ↗</a>
      </div>
    </main>
  );
}
