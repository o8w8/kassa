block('demo')(
	content()(function(n, ctx) {
		return [
			{
				elem: 'counter'
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
