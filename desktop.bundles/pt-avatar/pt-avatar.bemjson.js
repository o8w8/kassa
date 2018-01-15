module.exports = {
	block: 'page',
	title: 'BEM Patterns: pt-avatar',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'pt-avatar.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'pt-avatar.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default' }
	},
	content: [
	{
		block: 'demo',
		mix: [
			{ block: 'b-page', elem: 'content' },
			{ block: 'theme' }
		],
		content: [
		{
			elem: 'content',
			elemMods: { size: 's' },
			content: [
			{
				block: 'demo',
				elem: 'logo'
			},
			{
				block: 'text',
				mods: { size: 'xxxxl', weight: 'bold', view: 'secondary' },
				mix: [{ block: 'decorator', mods: { 'indent-b': 'xxxxxl' } }, { block: 'demo', elem: 'title' }],
				content: [
				{
					tag: 'a',
					attrs: { href: '/patterns/patterns.html' },
					block: 'text',
					mods: { 'display': 'inline-block', view: 'link' },
					mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
					content: 'Patterns/'
				},
				'pt-avatar']
			},
			// {
			// 	block: 'text',
			// 	mods: { size: 'm' },
			// 	mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
			// 	content: 'description'
			// },
			{
				block: 'text',
				mods: { size: 'l', weight: 'bold', type: 'h3' },
				mix: { block: 'decorator', mods: { 'space-b': 'l' } },
				content: '__photo'
			},
			{
				block: 'pt-table',
				mods: { view: 'default', 'space-a': 's', stripe: 'even' },
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
				content: [
				{
					elem: 'row',
					elemMods: { 'view': 'head' },
					content: [
					{
						elem: 'col',
						elemMods: { width: '30' },
						content: [
						{
							block: 'text',
							mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
							content: 'Модификатор'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
							content: 'Значение'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
							content: 'Описание'
						}]
					}]
				},
				{
					elem: 'row',
					content: [
					{
						elem: 'col',
						elemMods: { width: '30' },
						content: [
						{
							block: 'text',
							tag: 'a',
							attrs: { href: '#photo_size' },
							mods: { size: 'm', view: 'link' },
							content: 'size'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 's / m / l'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Размер'
						}]
					}]
				}]
			},

			// PT-AVATAR__PHOTO MODIFICATORS ---> //
			{
				block: 'text',
				attrs: { id: 'photo_size' },
				mods: { size: 'xxl', weight: 'bold', type: 'h2' },
				content: 'Size'
			},
			{
				block: 'example',
				content: [
				{
					elem: 'col',
					elemMods: { type: 'code' },
					content: [
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						content: '{'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'block: \'pt-avatar\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'content: ['
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: '{'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elem: \'photo\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { size: \'s\' },'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'content: []'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: '}]'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						content: '}'
					}]
				},
				{
					elem: 'col',
					elemMods: { type: 'interface' },
					content: []
				}]
			},
			// <--- PT-AVATAR__PHOTO MODIFICATORS //
			]
		},
		{
			elem: 'footer'
		}]
	}]
};