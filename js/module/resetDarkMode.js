import {
	btnDarkMode
} from '../main.js'

const resetDarkMode = () => {
	btnDarkMode.classList.remove('dark-mode-btn--active')
	document.body.classList.remove('dark')
}

export default resetDarkMode