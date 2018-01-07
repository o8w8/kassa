block('demo').elem('footer').mix()({ block: 'decorator', mods: { 'space-a': 'l', 'indent-t': 'xxxxxxl' } });

block('demo').elem('footer')(
	content()(function(n, ctx) {
		return [
			{
				tag: 'a',
				attrs: { href: 'http://bem.info' },
				block: 'text',
				mods: { size: 'm', view: 'link' },
				content: '🤙'
			}
		]
	})
);