// Checkbox Component Demo
export function initCheckboxDemo() {
  const section = document.getElementById('checkbox');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-header" style="margin-bottom: 32px;">
      <p style="margin-top: 0; opacity: 0.7; font-size: 14px;">Master-tier checkbox system with morphological SVG state transitions, liquid bounce physics, and premium glassmorphism effects.</p>
    </div>
    
    <div id="checkboxNav" class="demo-controls" style="margin: 20px 0; display: flex; gap: 12px; flex-wrap: wrap;">
      <ui-button label="🎮 Playground"  onclick="showInteractiveCheckbox()" selected="true"></ui-button>
      <ui-button label="✨ Elite Specimens"  onclick="showEliteSpecimens()"></ui-button>
      <ui-button label="🏆 Supreme Tier"  style="--ui-button-bg: linear-gradient(135deg, #8b5cf6, #ec4899); --ui-button-border:none;" onclick="showSupremeFeatures()"></ui-button>
      <ui-button label="🛡️ Branded Icons"  onclick="showBrandingSpecimens()"></ui-button>
      <ui-button label="🎨 Colors"  onclick="showCheckboxColors()"></ui-button>
      <ui-button label="📏 Sizes"  onclick="showCheckboxSizes()"></ui-button>
      <ui-button label="🎬 Staggered Reveal"  onclick="showRevealAnimations()"></ui-button>
      <ui-button label="📖 Contextual Layouts"  onclick="showContextualLayouts()"></ui-button>
      <ui-button label="States"  onclick="showCheckboxStates()"></ui-button>
      <ui-button label="📋 Form Lab"  onclick="showCheckboxForm()"></ui-button>
      <ui-button label="🃏 Variants" onclick="showCheckboxVariants()"></ui-button>
    </div>

    <div id="checkboxDemoContainer" style="margin-top: 20px;"></div>
  `;

  const updateActiveBtn = (funcName) => {
    const nav = document.getElementById('checkboxNav');
    if (!nav) return;
    nav.querySelectorAll('ui-button').forEach(btn => {
      const onclick = btn.getAttribute('onclick') || '';
      btn.selected = onclick.includes(funcName);
    });
  };

  window.showInteractiveCheckbox = function () {
    updateActiveBtn('showInteractiveCheckbox');
    const container = document.getElementById('checkboxDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-fade-in">
        <h3 class="specimen-title">🎮 Interactive Playground</h3>
        <div class="playground-settings" style="padding: 24px; border-radius: 16px; margin-bottom: 24px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
              <ui-input id="chkLabel" label="Label Text" value="Tactical Approval" size="md"></ui-input>
              <ui-input id="chkDesc" label="Description" value="Authorize deployment of new assets" size="md"></ui-input>
              <ui-dropdown id="chkSize" label="Size" variant="outline" value="md" size="md" options='[
                  {"label": "XXX Small", "value": "xxxs"},
                  {"label": "XX Small", "value": "xxs"},
                  {"label": "Extra Small", "value": "xs"},
                  {"label": "Small", "value": "small"},
                  {"label": "md", "value": "md"},
                  {"label": "Large", "value": "large"},
                  {"label": "Extra Large", "value": "xl"},
                  {"label": "XX Large", "value": "xxl"},
                  {"label": "XXX Large", "value": "xxxl"}
              ]'></ui-dropdown>
              <ui-dropdown id="chkVariant" label="Variant" variant="outline" value="default" size="md" options='[
                  {"label": "Default", "value": "default"},
                  {"label": "Glassmorphism", "value": "glass"},
                  {"label": "Raised Relief", "value": "raised"},
                  {"label": "Circular (Rounded)", "value": "rounded"},
                  {"label": "Button-Style", "value": "button"},
                  {"label": "Chip-Style", "value": "chip"},
                  {"label": "Filled (Constant Color)", "value": "filled"},
                  {"label": "Tick Only", "value": "tick"},
                  {"label": "Round-Color (Premium)", "value": "round-color"}
              ]'></ui-dropdown>
              <ui-dropdown id="chkColor" label="Color" variant="outline" value="primary" size="md" options='[
                  {"label": "Primary (Emerald)", "value": "primary"},
                  {"label": "Success (Green)", "value": "success"},
                  {"label": "Danger (Crimson)", "value": "danger"},
                  {"label": "Warning (Amber)", "value": "warning"},
                  {"label": "Info (Cyan)", "value": "info"}
              ]'></ui-dropdown>
              <ui-input id="chkIcon" label="Custom Icon (Name)" placeholder="e.g., star, shield, heart" size="md"></ui-input>
              <ui-input id="chkImage" label="Custom Image (URL)" placeholder="e.g., /assets/logo.png" size="md"></ui-input>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; align-items: center;">
                  <ui-checkbox id="chkConfetti" label="🎉 Confetti" checked label-position="top" size="md"></ui-checkbox>
                  <ui-checkbox id="chkGlow" label="🕯️ Glow" checked label-position="top" size="md"></ui-checkbox>
                  <ui-checkbox id="chkHaptic" label="🧠 Haptic" checked label-position="top" size="md"></ui-checkbox>
                  <ui-checkbox id="chkRtl" label="🌍 RTL" label-position="top" size="md"></ui-checkbox>
              </div>
          </div>
        </div>

        <div class="playground-preview" style="padding: 60px; min-height: 200px; position: relative; overflow: hidden;">
          <div id="chkInteractivePreview"></div>
        </div>

        <div style="margin-top: 24px;">
          <ui-code-preview id="checkboxCodePreview" label="Implementation Code" expanded="false"></ui-code-preview>
        </div>
      </div>
    `;
    
  };

  window.showBrandingSpecimens = function () {
    updateActiveBtn('showBrandingSpecimens');
    const container = document.getElementById('checkboxDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">🛡️ Branded Multi-State Metadata</h3>
        <p class="specimen-description">High-fidelity iconography for specialized interaction models.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;">
           <div style="padding: 24px; background:rgba(var(--primary-rgb, 139, 92, 246), 0.03); border-radius: 16px;">
              <h4 style="margin: 0 0 16px 0; font-size: 13px; opacity: 0.5;">Custom Symbols (Lucide)</h4>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                 <ui-checkbox label="Priority Asset" custom-check-icon="shield-alert" color="warning" checked glow></ui-checkbox>
                 <ui-checkbox label="Social Favorite" custom-check-icon="heart" color="danger" checked haptic></ui-checkbox>
                 <ui-checkbox label="Star Rating" custom-check-icon="star" color="warning" checked variant="round-color"></ui-checkbox>
                 <ui-checkbox label="System Lock" custom-check-icon="lock" color="secondary" checked></ui-checkbox>
              </div>
           </div>

           <div style="padding: 24px; background:rgba(var(--primary-rgb, 139, 92, 246), 0.03); border-radius: 16px;">
              <h4 style="margin: 0 0 16px 0; font-size: 13px; opacity: 0.5;">Image-Based Branding</h4>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                 <ui-checkbox label="User Verified" custom-image="/build/assets/images/logo.png" color="info" checked haptic></ui-checkbox>
                 <ui-checkbox label="External Auth" custom-image="/build/assets/images/logo.png" color="primary" checked></ui-checkbox>
              </div>
              <p style="margin-top: 16px; font-size: 11px; opacity: 0.6;">Direct image substrate supports alpha transparency and custom object-fit.</p>
           </div>
        </div>
      </div>
    `;
  };

  window.showCheckboxColors = function () {
    updateActiveBtn('showCheckboxColors');
    const container = document.getElementById('checkboxDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">🎨 Tactical Color Palette</h3>
        <p class="specimen-description">Context-aware semantic coloring for intuitive status feedback.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 24px;">
           <ui-checkbox label="Primary" color="primary" checked glow size="md"></ui-checkbox>
           <ui-checkbox label="Secondary" color="secondary" checked glow size="md"></ui-checkbox>
           <ui-checkbox label="Success" color="success" checked glow size="md"></ui-checkbox>
           <ui-checkbox label="Danger" color="danger" checked glow size="md"></ui-checkbox>
           <ui-checkbox label="Warning" color="warning" checked glow size="md"></ui-checkbox>
           <ui-checkbox label="Info" color="info" checked glow size="md"></ui-checkbox>
        </div>

        <div style="margin-top: 40px;">
           <h4 style="font-size: 13px; opacity: 0.5; text-transform: uppercase; margin-bottom: 20px;">Premium Round-Color Variant</h4>
           <div style="display: flex; gap: 24px; flex-wrap: wrap;">
              <ui-checkbox label="Active" color="primary" variant="round-color" checked></ui-checkbox>
              <ui-checkbox label="Critical" color="danger" variant="round-color" checked></ui-checkbox>
              <ui-checkbox label="Stable" color="success" variant="round-color" checked></ui-checkbox>
              <ui-checkbox label="Alert" color="warning" variant="round-color" checked></ui-checkbox>
           </div>
        </div>
      </div>
    `;
  };

  window.showCheckboxSizes = function () {
    updateActiveBtn('showCheckboxSizes');
    const container = document.getElementById('checkboxDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">📏 High-Fidelity Scaling</h3>
        <p class="specimen-description">Optimized pixel-perfect geometry from micro-interactions to XL displays.</p>
        
        <div style="display: flex; flex-direction: column; gap: 32px;">
           <div style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
              <ui-checkbox label="XXXS" size="xxxs" checked></ui-checkbox>
              <ui-checkbox label="XXS" size="xxs" checked></ui-checkbox>
              <ui-checkbox label="XS" size="xs" checked></ui-checkbox>
              <ui-checkbox label="Small" size="small" checked></ui-checkbox>
              <ui-checkbox label="md" size="md" checked></ui-checkbox>
              <ui-checkbox label="Large" size="large" checked></ui-checkbox>
           </div>
           
           <div style="display: flex; align-items: flex-end; gap: 32px; flex-wrap: wrap; padding-top: 20px; border-top:1px dashed var(--border-subtle);">
              <ui-checkbox label="Extra Large" size="xl" checked description="Optimized for touch interfaces"></ui-checkbox>
              <ui-checkbox label="XXL" size="xxl" checked description="Hero section scales"></ui-checkbox>
              <ui-checkbox label="XXXL" size="xxxl" checked description="Maximum accessibility focus"></ui-checkbox>
           </div>
        </div>
      </div>
    `;
  };

  window.showEliteSpecimens = function () {
    updateActiveBtn('showEliteSpecimens');
    const container = document.getElementById('checkboxDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">✨ Elite Material Specimens</h3>
        <p class="specimen-description">High-fidelity visual archetypes designed for premium interfaces.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
           <div style="padding: 32px; background:var(--bg-tertiary, var(--bg-secondary)); border-radius: 20px; color:var(--text-primary); border:1px solid var(--border-default);">
              <h4 style="margin: 0 0 20px 0; font-size: 14px; opacity: 0.6; text-transform: uppercase;">Glassmorphism</h4>
              <ui-checkbox 
                label="Frosted Transmission" 
                description="Refractive backdrop-filter substrate"
                variant="glass" 
                color="info" 
                glow 
                checked>
              </ui-checkbox>
              <div style="margin-top: 16px; padding: 12px; background:var(--bg-secondary, rgba(0,0,0,0.04)); border-radius: 8px; font-size: 12px;">
                 Perfect for overlaying on rich imagery or vibrant gradients.
              </div>
           </div>

           <div style="padding: 32px; background:var(--bg-secondary, var(--bg-secondary)); border-radius: 20px; border:1px solid var(--border-subtle, var(--border-subtle));">
              <h4 style="margin: 0 0 20px 0; font-size: 14px; opacity: 0.6; text-transform: uppercase;">Raised Relief</h4>
              <ui-checkbox 
                label="Tactile Elevation" 
                description="Multi-layered skeletal shadows"
                variant="raised" 
                color="primary" 
                glow 
                checked>
              </ui-checkbox>
              <div style="margin-top: 16px; padding: 12px; background:var(--bg-page, white); border:1px solid var(--border-subtle, var(--border-subtle)); border-radius: 8px; font-size: 12px;">
                 Adds physical depth and emphasis to critical actions.
              </div>
           </div>

           <div style="padding: 32px; background:var(--bg-page, white); border-radius: 20px; border:1px solid var(--border-subtle, var(--border-subtle)); grid-column: span 1;">
              <h4 style="margin: 0 0 20px 0; font-size: 14px; opacity: 0.6; text-transform: uppercase;">Celebratory Burst</h4>
              <ui-checkbox 
                label="Achievement Unlocked" 
                description="Integrated particle physics engine"
                confetti 
                haptic 
                color="success">
              </ui-checkbox>
              <p style="font-size: 11px; margin-top: 12px; opacity: 0.7;">Click to trigger the confetti burst.</p>
           </div>
        </div>
      </div>
    `;
  };

  window.showRevealAnimations = function () {
    updateActiveBtn('showRevealAnimations');
    const container = document.getElementById('checkboxDemoContainer');
    container.innerHTML = `
      <div class="demo-block">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
           <h3 class="specimen-title" style="margin: 0;">🎬 Staggered Reveal Orchestration</h3>
           <ui-button onclick="showRevealAnimations()" variant="outline" color="secondary" size="md" label="Replay Animation"></ui-button>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;">
           <div>
              <h4 style="font-size: 13px; opacity: 0.5; margin-bottom: 16px;">Slide-Up Stagger</h4>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <ui-checkbox value="1" label="Read Access" description="View public assets"></ui-checkbox>
                <ui-checkbox value="2" label="Write Access" description="Modify existing records"></ui-checkbox>
                <ui-checkbox value="3" label="Admin Privileges" description="Full system control"></ui-checkbox>
                <ui-checkbox value="4" label="API Access" description="Third-party integration"></ui-checkbox>
              </div>
           </div>

           <div>
              <h4 style="font-size: 13px; opacity: 0.5; margin-bottom: 16px;">Zoom-In Stagger (Grid)</h4>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
                <ui-checkbox value="analytics" variant="button" label="Analytics" size="md"></ui-checkbox>
                <ui-checkbox value="security" variant="button" label="Security" size="md"></ui-checkbox>
                <ui-checkbox value="caching" variant="button" label="Caching" size="md"></ui-checkbox>
                <ui-checkbox value="logs" variant="button" label="Logs" size="md"></ui-checkbox>
                <ui-checkbox value="backup" variant="button" label="Backup" size="md"></ui-checkbox>
                <ui-checkbox value="monitoring" variant="button" label="Monitoring" size="md"></ui-checkbox>
              </div>
           </div>
        </div>
      </div>
    `;
  };

  window.showContextualLayouts = function () {
    updateActiveBtn('showContextualLayouts');
    const container = document.getElementById('checkboxDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-fade-in">
        <h3 class="specimen-title">📖 Advanced Contextual Layouts</h3>
        <p class="specimen-description">Optimized for data-dense environments using side-aligned metadata.</p>
        
        <div style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">
           <div style="padding: 24px; border:1px solid var(--border-subtle, var(--border-subtle)); border-radius: 16px; background:var(--bg-page, var(--bg-primary));">
              <h4 style="margin: 0 0 16px 0; font-size: 13px; opacity: 0.5;">Side-Metadata (Dense Mode)</h4>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                 <ui-checkbox label="Production" description="• v2.4.0" description-position="side" color="primary" checked haptic></ui-checkbox>
                 <ui-checkbox label="Staging" description="• v2.5.0-rc" description-position="side" color="warning" haptic></ui-checkbox>
                 <ui-checkbox label="Development" description="• v2.6.0-alpha" description-position="side" color="danger" haptic></ui-checkbox>
              </div>
           </div>

           <div style="padding: 24px; border:1px solid var(--border-subtle, var(--border-subtle)); border-radius: 16px; background:var(--bg-page, var(--bg-primary));">
              <h4 style="margin: 0 0 16px 0; font-size: 13px; opacity: 0.5;">Standard Stacked Mode</h4>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                 <ui-checkbox label="Encryption" description="AES-256 multi-layer hardware protection" color="success" checked></ui-checkbox>
                 <ui-checkbox label="Cloud Sync" description="Automatic synchronization with remote clusters" color="info"></ui-checkbox>
              </div>
           </div>
        </div>
      </div>
    `;
  };

  window.showCheckboxStates = function () {
    updateActiveBtn('showCheckboxStates');
    const container = document.getElementById('checkboxDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">Standard Interactive States</h3>

        <div style="display: flex; flex-direction: column; gap: 32px;">

          <div>
            <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color:var(--text-secondary,var(--text-muted)); margin: 0 0 14px;">Core States</p>
            <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap; padding: 20px; background:var(--bg-secondary,var(--bg-secondary)); border-radius: 12px;">
              <ui-checkbox label="Default" size="md"></ui-checkbox>
              <ui-checkbox label="Checked" checked size="md"></ui-checkbox>
              <ui-checkbox label="Indeterminate" indeterminate size="md"></ui-checkbox>
              <ui-checkbox label="Disabled" disabled size="md"></ui-checkbox>
              <ui-checkbox label="Disabled Checked" disabled checked size="md"></ui-checkbox>
              <ui-checkbox label="Readonly" readonly checked size="md"></ui-checkbox>
            </div>
          </div>

          <div>
            <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color:var(--text-secondary,var(--text-muted)); margin: 0 0 14px;">Validation States</p>
            <div style="display: flex; gap: 24px; align-items: flex-start; flex-wrap: wrap; padding: 20px; background:var(--bg-secondary,var(--bg-secondary)); border-radius: 12px;">
              <ui-checkbox label="Invalid (unchecked)" invalid size="md" error-message="This field is required"></ui-checkbox>
              <ui-checkbox label="Invalid (checked)" invalid checked size="md" error-message="Value not allowed"></ui-checkbox>
              <ui-checkbox label="With helper text" size="md" helper-text="Optional — you can skip this"></ui-checkbox>
            </div>
          </div>

          <div>
            <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color:var(--text-secondary,var(--text-muted)); margin: 0 0 14px;">Skeleton Loading</p>
            <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap; padding: 20px; background:var(--bg-secondary,var(--bg-secondary)); border-radius: 12px;">
              <ui-checkbox label="Loading..." skeleton size="xs"></ui-checkbox>
              <ui-checkbox label="Loading..." skeleton size="md"></ui-checkbox>
              <ui-checkbox label="Loading..." skeleton size="xl"></ui-checkbox>
            </div>
          </div>

          <div>
            <p style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color:var(--text-secondary,var(--text-muted)); margin: 0 0 14px;">RTL (Right-to-Left)</p>
            <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap; padding: 20px; background:#fff1f2; border-radius: 12px;" dir="rtl">
              <ui-checkbox label="تفعيل الإشعارات" rtl checked color="danger" glow size="md"></ui-checkbox>
              <ui-checkbox label="حفظ كلمة المرور" rtl color="primary" size="md"></ui-checkbox>
            </div>
          </div>

        </div>
      </div>
    `;
  };

  window.showCheckboxForm = function () {
    updateActiveBtn('showCheckboxForm');
    const container = document.getElementById('checkboxDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-fade-in">
        <h3 class="specimen-title">📋 Native Form Integration</h3>
        <p class="specimen-description">Demonstrating ElementInternals, validation, and standard FormData extraction.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
           <form id="checkboxTestForm" style="padding: 32px; background:var(--bg-page, white); border:1px solid var(--border-subtle, var(--border-subtle)); border-radius: 24px;">
              <div style="margin-bottom: 24px;">
                 <ui-checkbox name="tos" value="accepted" label="Accept Terms of Service" required checked haptic></ui-checkbox>
              </div>
              
              <div style="margin-bottom: 32px;">
                 <label style="display: block; font-weight: 600; margin-bottom: 8px;">Areas of Interest (Required, 2+)</label><div style="display: flex; flex-direction: column; gap: 8px;">
                    <ui-checkbox value="web" label="Web Development"></ui-checkbox>
                    <ui-checkbox value="ai" label="Artificial Intelligence"></ui-checkbox>
                    <ui-checkbox value="iot" label="Internet of Things"></ui-checkbox>
                    <ui-checkbox value="security" label="Cyber Security"></ui-checkbox>
                 </div>
              </div>

               <ui-button type="submit" label="Submit Security Profile" variant="outline" color="primary" style="width: 100%;"></ui-button>
               <ui-button type="reset" label="Reset Form" variant="outline" color="secondary" style="width: 100%; margin-top: 12px;"></ui-button>
           </form>

           <div id="formResult" style="padding: 24px; background:var(--bg-secondary, var(--bg-secondary)); border-radius: 20px; border:1px solid var(--border-subtle, var(--border-subtle)); font-family: monospace; font-size: 13px;">
              <h4 style="margin-top: 0; opacity: 0.5;">Form Output (FormData)</h4>
              <div id="formDataOutput">Submit form to see data...</div>
           </div>
        </div>
      </div>
    `;

    const form = document.getElementById('checkboxTestForm');
    if (form) form.addEventListener('submit', e => {
      e.preventDefault();
      const fd = new FormData(form);
      const data = {};
      fd.forEach((value, key) => {
        if (!data[key]) {
          data[key] = value;
        } else {
          if (!Array.isArray(data[key])) data[key] = [data[key]];
          data[key].push(value);
        }
      });
      document.getElementById('formDataOutput').innerHTML = '<pre style="margin:0;">' + JSON.stringify(data, null, 2) + '</pre>';
    });
  };

  window.showCheckboxVariants = function () {
    updateActiveBtn('showCheckboxVariants');
    const container = document.getElementById('checkboxDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 40px;">

        <div class="demo-block">
          <h3 class="specimen-title">🃏 All Variants Side-by-Side</h3>
          <p class="specimen-description">Every built-in <code>variant</code> in unchecked, checked, and indeterminate states.</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px;">
            ${['default','filled','bordered','glass','raised','tick-only','round-color'].map(v => `
            <div style="padding: 16px; background:${v === 'glass' ? 'var(--text-primary, #1e293b)' : 'var(--bg-secondary,#f8fafc)'}; border-radius: 12px; border:1px solid var(--border-default,var(--border-subtle));" ${v === 'glass' ? 'class="dark"' : ''}>
              <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color:${v === 'glass' ? 'rgba(255,255,255,0.4)' : 'var(--text-secondary,#64748b)'}; margin: 0 0 10px;">${v}</p>
              <div style="display: flex; flex-direction: column; gap: 8px;">
                <ui-checkbox label="Off" variant="${v}" color="primary"></ui-checkbox>
                <ui-checkbox label="On" variant="${v}" color="primary" checked></ui-checkbox>
                <ui-checkbox label="Mixed" variant="${v}" color="primary" indeterminate></ui-checkbox>
              </div>
            </div>`).join('')}
          </div>
        </div>

        <div class="demo-block">
          <h3 class="specimen-title">🔲 Button Mode (<code>is-button</code>)</h3>
          <p class="specimen-description">Renders checkboxes as pill/button chips — ideal for tag filters and multi-select pickers.</p>
          <div style="display: flex; flex-direction: column; gap: 20px; padding: 24px; background:var(--bg-secondary,var(--bg-secondary)); border-radius: 12px;">
            <div>
              <p style="font-size: 11px; font-weight: 700; color:var(--text-secondary,var(--text-muted)); margin: 0 0 10px;">Filter chips</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <ui-checkbox name="filter" value="new" label="New" is-button checked color="primary"></ui-checkbox>
                <ui-checkbox name="filter" value="sale" label="On Sale" is-button color="danger"></ui-checkbox>
                <ui-checkbox name="filter" value="trending" label="Trending" is-button checked color="warning"></ui-checkbox>
                <ui-checkbox name="filter" value="top" label="Top Rated" is-button color="success"></ui-checkbox>
              </div>
            </div>
            <div>
              <p style="font-size: 11px; font-weight: 700; color:var(--text-secondary,var(--text-muted)); margin: 0 0 10px;">With icons</p>
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <ui-checkbox name="feat" value="wifi" label="WiFi" is-button icon="wifi" checked color="info"></ui-checkbox>
                <ui-checkbox name="feat" value="bt" label="Bluetooth" is-button icon="bluetooth" color="info"></ui-checkbox>
                <ui-checkbox name="feat" value="nfc" label="NFC" is-button icon="radio" checked color="info"></ui-checkbox>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-block">
          <h3 class="specimen-title">🏷️ Label Positions</h3>
          <p class="specimen-description">The <code>label-position</code> prop controls where the label appears relative to the checkbox.</p>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 24px; background:var(--bg-secondary,var(--bg-secondary)); border-radius: 12px;">
            ${['right','left','top','bottom'].map(pos => `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <span style="font-size: 10px; font-weight: 700; color:var(--text-secondary,var(--text-muted)); font-family: monospace;">${pos}</span>
              <ui-checkbox label="Accept" label-position="${pos}" checked color="primary"></ui-checkbox>
            </div>`).join('')}
          </div>
        </div>

      </div>
    `;
  };

  setTimeout(() => window.showInteractiveCheckbox(), 50);
}
