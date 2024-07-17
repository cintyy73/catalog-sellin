import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Button: ComponentStyleConfig = {
	baseStyle: {},
	sizes: {},
	variants: {
		primary: () => ({
			bg: '#2daae2',
			borderRadius: 'md',
			color: 'white',
			boxShadow: 'md',
			_hover: {
				bg: 'primary.600',
				color: 'white',
			},
			_disabled: {
				bg: 'primary.200',
			},
			_active: {
				bg: 'primary.600',
			},
		}),
	},
	defaultProps: {
		variant: 'primary',
	},
};
