import resetDarkMode from './module/resetDarkMode.js'
import addDarkMode from './module/addDarkMode.js'

// Находим переключатель тем
const btnDarkMode = document.querySelector('.dark-mode-btn')

// 1. Проверка тёмной темы на уровне системных настроек

if( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ) {
	addDarkMode()
}

// 2. Проверка тёмной темы в localStorage
if( localStorage.getItem('darkMode') === 'dark' ) {
	addDarkMode()
} else if( localStorage.getItem('darkMode') === 'light' ){
	resetDarkMode()
}

// Если меняются системные настройки, меняем тему

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
	const newColorScheme = event.matches
													? 'dark'
													: 'light'

	if(newColorScheme === 'dark') {
		addDarkMode()
		localStorage.setItem('darkMode', 'dark')
	} else {
		resetDarkMode()
		localStorage.setItem('darkMode', 'light')
	}
})

// Включение ночного режима по кнапке

btnDarkMode.addEventListener('click', () => {
	btnDarkMode.classList.toggle('dark-mode-btn--active')
	const isDark = document.body.classList.toggle('dark')

	isDark
		? localStorage.setItem('darkMode', 'dark')
		: localStorage.setItem('darkMode', 'light')
})

export {
	btnDarkMode
}