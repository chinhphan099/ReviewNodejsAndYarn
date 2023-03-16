import logo from './images/favicon.png'
export default function domHandler() {
  const link = `<link rel="shortcut icon" href="${logo}" type="image/x-icon">`
  document.querySelector('head').insertAdjacentHTML('beforeend', link)
}
