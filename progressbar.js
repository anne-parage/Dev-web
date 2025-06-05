class ProgressGraph extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.counts = {
        "T-shirt stitch": 0,
        "Casque": 0
      };
  
      this.shadowRoot.innerHTML = `
        <style>
          .graph-container {
            display : flex;
            margin-top: 2rem;
            gap :24rem;
          }
          .bar-block {
            margin: 1rem 0;
          }
          .label {
            font-weight: bold;
            margin-bottom: 4px;
          }
          .bar {
            background: lightgray;
            border-radius: 10px;
            overflow: hidden;
            height: 20px;
            position: relative;
          }
          .fill {
            height: 100%;
            background-color: green;
            width: 0%;
            transition: width 0.3s ease;
          }
          .info {
            font-size: 0.9rem;
            margin-top: 4px;
          }
        </style>
        <div class="graph-container">
          <div class="bar-block">
            <div class="label">T-shirt stitch</div>
            <div class="bar"><div class="fill" id="stitch-bar"></div></div>
            <div class="info" id="stitch-info">0 achat(s) - 0%</div>
          </div>
          <div class="bar-block">
            <div class="label">Casque</div>
            <div class="bar"><div class="fill" id="casque-bar"></div></div>
            <div class="info" id="casque-info">0 achat(s) - 0%</div>
          </div>
        </div>
      `;
    }
  
    updateProgress() {
      const total = this.counts["T-shirt stitch"] + this.counts["Casque"];
      const stitchCount = this.counts["T-shirt stitch"];
      const casqueCount = this.counts["Casque"];
      const stitchPct = total ? ((stitchCount / total) * 100).toFixed(1) : 0;
      const casquePct = total ? ((casqueCount / total) * 100).toFixed(1) : 0;
  
      this.shadowRoot.getElementById('stitch-bar').style.width = `${stitchPct}%`;
      this.shadowRoot.getElementById('casque-bar').style.width = `${casquePct}%`;
  
      this.shadowRoot.getElementById('stitch-info').textContent = `${stitchCount} achat(s) - ${stitchPct}%`;
      this.shadowRoot.getElementById('casque-info').textContent = `${casqueCount} achat(s) - ${casquePct}%`;
    }
  
    increment(productName) {
      if (this.counts[productName] !== undefined) {
        this.counts[productName]++;
        this.updateProgress();
      }
    }
  }
  
  customElements.define('progress-graph', ProgressGraph);