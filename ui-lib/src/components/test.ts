import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('odv-test')
export class OdvTest extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }
    .card {
      box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);
      max-width: 160px;
    }
    .card-content {
      padding: 10px;
    }
  `;

  @property({ type: Object }) user?: any = {
    id: 0,
    fullName: 'Luis Aviles',
    role: 'Software Engineer',
  };

  override render() {
    if (this.user === undefined) {
      return '';
    }

    return html`
      <div class="card">
        <div class="card-content">
          <h4>${this.user.fullName}</h4>
          <p>${this.user.role}</p>
          <button @click=${this.handleEdit}>Edit</button>
        </div>
      </div>
    `;
  }

  private handleEdit() {
    this.dispatchEvent(
      new CustomEvent<any>('edit', {
        detail: this.user,
      }),
    );
  }
}
