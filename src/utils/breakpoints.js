//TODO: Add this together with the breakpoints from full-with-image

import {css} from 'styled-components'

// breakpoints with min and max values
const sizes = {
	phone: [false, 430],
	tablet: [431, 768],
	desktop: [769, false]
}

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {

	acc[label] = (...args) => css`
		/*@media screen and (max-width: ${sizes[label][1] / 16}em) {*/
    @media screen
      /*and (max-width: ${sizes[label][1] / 16}em) */
      ${sizes[label][0] ? `and (min-width:${sizes[label][0] / 16}em)` : ""}
      ${sizes[label][1] ? `and (max-width:${sizes[label][1] / 16}em)` : ""}
    {
			${css(...args)}
		}
	`

	return acc
}, {})