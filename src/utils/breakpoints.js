//TODO: Add this together with the breakpoints from full-with-image

import {css} from 'styled-components'

// breakpoints with min and max values
const sizes = {
	phone: [false, 768],
	tablet: [769, 1024],
	desktop: [1025, false]
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
