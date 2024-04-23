tailwind.config = {
	theme: {
		fontFamily: {
			'sans': ['Inter', 'sans-serif'],
		},
		extend: {
			colors: {
				'green': 'hsl(75, 94%, 57%)',
				'off-black': 'hsl(0, 0%, 8%)',
				'dark-gray': 'hsl(0, 0%, 12%)',
				'gray': 'hsl(0, 0%, 20%)',
			},
			fontSize: {
				'2.5xl': ['1.75rem', {lineHeight: '2.5rem'}],
				'3.5xl': ['2rem', {lineHeight: '2.5rem'}],
			},
			lineHeight: {
				'7.5': '1.8rem'
			}
		}
	}
}