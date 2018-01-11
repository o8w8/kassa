block('demo')(
	content()(function(n, ctx) {
		return [
			{
				elem: 'metrika'
			},
			{
				elem: 'plug'
			},
			{
				elem: 'menu'
			},
			{
				elem: 'nav'
			},
			ctx.content
		]
	})
);
