import { extendTheme } from '@chakra-ui/react';

import { Button } from './components/Button';

export const theme = extendTheme({
	colors: {
		primary: {
			default: '#ff6f61',

			'50': '#e1e3f5',
			'100': '#c3c6ec',
			'200': '#a2a5e2',
			'300': '#7f82d8',
			'400': '#5d61cf',
			'500': '#2d377e',
			'600': '#262f68',
			'700': '#1f2653',
			'800': '#181c3e',
			'900': '#11132b',
			'950': '#0a0a1b',
		},

		secondary: {
			default: '#2d377e',

			'50': '#ffe8e5',
			'100': '#ffd0cc',
			'200': '#ffb1a9',
			'300': '#ff9387',
			'400': '#ff7565',
			'500': '#ff6f61',
			'600': '#cc584d',
			'700': '#99403a',
			'800': '#662926',
			'900': '#331513',
			'950': '#190a09',
		},
	},
	fonts: {
		heading: `'Outfit', sans-serif`,
		body: `'Plus Jakarta Sans', sans-serif`,
	},

	components: {
		Button,
	},
});
