import { Block } from 'utils';

export class ServerBadRequest extends Block {
  static componentName = 'ServerBadRequest';

  render() {
    return `
    <div class='error-page-wrapper'>
        <div class='error-block'>
            <h1 class='error-title'>400</h1>
            <p>Не туда попали</p>
            <button onclick="window.renderPage('homePage')" class='cursor-pointer'>Назад
            к чатам</button>
        </div>
    </div>
    `;
  }
}
