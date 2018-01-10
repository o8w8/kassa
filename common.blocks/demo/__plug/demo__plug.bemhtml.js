block('demo').elem('plug')(
	content()(function(n, ctx) {
		return [
		{
			elem: 'plug-card',
			mix: { block: 'pt-card'},
			content: [
			{
				elem: 'plug-content',
				mix: { block: 'pt-card', elem: 'content', elemMods: {'space-a': 'xxl', 'space-t': 'xxxl'} },
				content: [
				{
					elem: 'plug-illustration',
					mix: [
						{ block: 'pt-card', elem: 'image' },
						{ block: 'decorator', mods: {'indent-b': 'xxl'} }
					],
					content: {
						block: 'image',
						url: '/assets/i/bear.svg'
					}
				},
				{
					elem: 'plug-description',
					mix: { block: 'text', mods: { font: 'mono', size: 'xxl', weight: 'bold' } },
					content: 'Scalable design system based on BEM'
				}]
			},
			{
				elem: 'plug-action',
				mix: { block: 'pt-card', elem: 'footer', elemMods: {'space-a': 'xxl', 'space-b': 'xxxl', 'align': 'between' } },
				content: [
				{
					block: 'button',
					mods: { theme: 'promo', 'size': 'xl', type: 'link', view: 'action', font: 'mono', weight: 'bold', shadow: 'action' },
					url: 'https://github.com/bemdesign',
					mix: { block: 'demo', elem: 'plug-button' },
					text: [
						{ block: 'text', mods: { font: 'mono', style: 'italic', display: 'inline'}, content: 'Visit '},
						'Github'
					]
				},
				{
					elem: 'plug-soclink',
					elemMods: { icon: 'telegram'},
					tag: 'a',
					attrs: { 'href': 'https://t.me/bem_design'}
				},
				{
					elem: 'plug-soclink',
					elemMods: { icon: 'twitter'},
					tag: 'a',
					attrs: { 'href': 'https://twitter.com/bem_design'}
				}]
			}]
		}]
	})
);