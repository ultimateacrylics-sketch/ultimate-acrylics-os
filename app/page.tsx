const projects = [
  { id: "UA-2026-001", business: "Joe's Coffee", city: "Anaheim", stage: "Quote", install: "Aug 15", quote: 12800, balance: 12800 },
  { id: "UA-2026-002", business: "Blu Nail Lounge", city: "Garden Grove", stage: "Production", install: "Aug 5", quote: 6400, balance: 3200 },
  { id: "UA-2026-003", business: "Rising Sun", city: "Westminster", stage: "Final Payment", install: "Jul 30", quote: 9800, balance: 4900 }
];

const money = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);

export default function Home() {
  const nav = ["Dashboard","Inbox","Customers","Projects","Pipeline","Quotes","Production","Installations","Tasks","Financials","Reports","Settings"];
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand"><div className="logo">UA</div><div><strong>Ultimate Acrylics</strong><span>Operations System</span></div></div>
        <nav>{nav.map((item,i)=><a key={item} className={i===0?"active":""} href="#"><span className="dot"/>{item}</a>)}</nav>
        <div className="footer"><span>Version 0.1</span><strong>Production Foundation</strong></div>
      </aside>
      <main>
        <header><div><p className="eyebrow">Daily Mission Control</p><h1>Good afternoon, Jaden</h1></div><div className="actions"><button>Ask Ultimate</button><button className="primary">+ New Project</button></div></header>
        <section className="mission"><div><p className="eyebrow">Today</p><h2>Your business needs attention in three areas.</h2><p>Send one quote, order material for one job, and collect one final balance.</p></div><button>Start My Day →</button></section>
        <section className="kpis">
          {[["New Leads","0"],["Quotes Waiting","1"],["Active Projects","3"],["In Production","1"],["Installs Today","0"],["Outstanding",money(20900)],["Pipeline",money(29000)]].map(([a,b])=><article key={a}><span>{a}</span><strong>{b}</strong></article>)}
        </section>
        <section className="grid">
          <div className="panel"><h2>Needs Attention</h2><div className="alert">Joe's Coffee: quote needs follow-up.</div><div className="alert">Rising Sun: {money(4900)} final balance outstanding.</div></div>
          <div className="panel"><h2>Today's Tasks</h2>{["Send revised quote","Order acrylic","Send final invoice"].map(t=><label className="task" key={t}><input type="checkbox"/>{t}</label>)}</div>
        </section>
        <section className="panel">
          <h2>Recent Projects</h2>
          <div className="tableWrap"><table><thead><tr><th>Project</th><th>Stage</th><th>Install</th><th>Quote</th><th>Balance</th></tr></thead>
          <tbody>{projects.map(p=><tr key={p.id}><td><strong>{p.business}</strong><span>{p.id} · {p.city}</span></td><td><span className="badge">{p.stage}</span></td><td>{p.install}</td><td>{money(p.quote)}</td><td>{money(p.balance)}</td></tr>)}</tbody></table></div>
        </section>
      </main>
    </div>
  );
}
