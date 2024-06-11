import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('odv-button')
export class OdevoButton extends LitElement {
  static override styles = css`
    .button {
      display: block;
      background-color: red;
    }
  `;

  /** The button's theme variant. */
  @property({ reflect: true }) variant:
    | 'default'
    | 'primary'
    | 'success'
    | 'neutral'
    | 'warning'
    | 'danger'
    | 'text' = 'default';

  /** The button's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  override render() {
    return html` <button @click=${this.handleClick}>Edit</button> `;
  }

  private handleClick() {
    this.dispatchEvent(
      new CustomEvent<any>('edit', {
        detail: '',
      }),
    );
  }
}
