block('demo').elem('plug').mix()('pt-card');

block('demo').elem('plug')(
	content()(function(n, ctx) {
		return [
		// {
		// 	elem: 'plug-header',
		// 	content: [
		// 	{
		// 		elem: 'plug-bem-logo',
		// 		content: {
		// 			html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 50"><g fill-rule="evenodd"><rect width="49" height="23"/><rect width="49" height="14" x="54"/><rect width="14" height="50" x="108"/><rect width="14" height="50" x="126"/><rect width="14" height="50" x="144"/><rect width="49" height="14" x="54" y="18"/><rect width="49" height="14" x="54" y="36"/><rect width="49" height="23" y="27"/></g></svg>'
		// 		}
		// 	},
		// 	{
		// 		elem: 'plug-slogan',
		// 		tag: 'h1',
		// 		content: 'Масштабируемая дизайн-система на основе БЭМ'
		// 	}]
		// },
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
							url: '../../assets/i/bear.svg'
						}
					},
					{
						elem: 'plug-description',
						mix: { block: 'text', mods: { font: 'mono', size: 'xxl', weight: 'bold' } },
						content: 'Scalable design system based on BEM'
					},
				]
			},
			{
				elem: 'plug-action',
				mix: { block: 'pt-card', elem: 'footer', elemMods: {'space-a': 'xxl', 'space-b': 'xxxl', 'align': 'between' } },
				content: [
					{
						block: 'button',
						mods: { theme: 'promo', 'size': 'xl', type: 'link', view: 'action', font: 'mono', weight: 'bold' },
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
						attrs: { 'href': 'https://t.me/dotmus'}
					},
					{
						elem: 'plug-soclink',
						elemMods: { icon: 'twitter'},
						tag: 'a',
						attrs: { 'href': 'https://twitter.com/bem_design'}
					}
				]
			}
		]
	})
);
