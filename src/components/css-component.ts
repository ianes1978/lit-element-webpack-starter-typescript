
import { LitElement, html, css } from 'lit-element';
import {globalStyle} from 'lit-css-global-scope'



class cssComponent extends LitElement {
  static get styles() {
    return [
      globalStyle,
      css`
      .btn-secondary{
        background-color: violet
      }
   
      `
    ];
  }
  static get properties() {
    return {
      myString: { type: String },
      myArray: { type: Array },
      myBool: { type: Boolean }
    };
  }
  myString:String;
  myArray:Array<string>;
  myBool:Boolean;


  constructor() {
    super();
    this.myString = 'Hello World';
    this.myArray = ['an', 'array', 'of', 'test', 'data'];
    this.myBool = true;

  }
  render() {
    return html`
    <h3>Webcomponent with external style (Bootstrap)</h3>
      <div class="card" >
        <div class="card-body">
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-secondary">Secondary (style scoped)</button>
      <button type="button" class="btn btn-danger">Danger</button>
      <button type="button" class="btn btn-warning">Warning</button>
      <button type="button" class="btn btn-info">Info</button>
      <button type="button" class="btn btn-light">Light</button>
      <button type="button" class="btn btn-dark">Dark</button>
      <ul>
        ${this.myArray.map(i => html`<li>${i}</li>`)}
      </ul>
      ${this.myBool ?
        html`<p>Render some HTML if myBool is true</p>` :
        html`<p>Render some other HTML if myBool is false</p>`}
  </div>
</div>

     
    `;
  }
}

customElements.define('css-component', cssComponent);