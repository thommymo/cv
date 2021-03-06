import {css} from 'styled-components'

// breakpoints with min and max values
export const sizes = {
	phone: [false, 430],
	tablet: [431, 768],
	desktop: [769, false]
}

//according image sizes that should be produced
export const imagesizes = {
	phone: 430,
	tablet: 768,
	desktop: 1000
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {

	acc[label] = (...args) => css`
    @media screen
      ${sizes[label][0] ? `and (min-width:${sizes[label][0] / 16}em)` : ""}
      ${sizes[label][1] ? `and (max-width:${sizes[label][1] / 16}em)` : ""}
    {
			${css(...args)}
		}
	`
	return acc
}, {})

export const print = {
	paper: (...args) => css`
		@media print {${css(...args)}}
`
}
