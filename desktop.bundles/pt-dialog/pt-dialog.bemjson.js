module.exports = {
	block: 'page',
	title: 'BEM Patterns: pt-dialog',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'pt-dialog.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'pt-dialog.min.js' }],
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
				'pt-dialog']
			},
			// {
			// 	block: 'text',
			// 	mods: { size: 'm' },
			// 	mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
			// 	content: 'description'
			// },
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
							attrs: { href: '#view' },
							mods: { size: 'm', view: 'link' },
							content: 'view'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'default / ghost / inverse'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Фон блока'
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
							attrs: { href: '#shadow' },
							mods: { size: 'm', view: 'link' },
							content: 'shadow'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'cloud'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Тень'
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
							attrs: { href: '#border' },
							mods: { size: 'm', view: 'link' },
							content: 'border'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'all'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Бордер'
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
							attrs: { href: '#align' },
							mods: { size: 'm', view: 'link' },
							content: 'align'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'center'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Выравнивание по центру блока'
						}]
					}]
				}]
			},

			// PT-DIALOG MODIFICATORS ---> //
			{
				block: 'text',
				attrs: { id: 'view' },
				mods: { size: 'xxl', weight: 'bold', type: 'h2' },
				content: 'View'
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
						content: 'block: \'pt-dialog\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { view: \'ghost\' },'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'content: []'
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
			{
				block: 'text',
				attrs: { id: 'shadow' },
				mods: { size: 'xxl', weight: 'bold', type: 'h2' },
				content: 'Shadow'
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
						content: 'block: \'pt-dialog\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { shadow: \'cloud\' },'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'content: []'
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
			{
				block: 'text',
				attrs: { id: 'border' },
				mods: { size: 'xxl', weight: 'bold', type: 'h2' },
				content: 'Border'
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
						content: 'block: \'pt-dialog\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { border: \'all\' },'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'content: []'
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
			{
				block: 'text',
				attrs: { id: 'align' },
				mods: { size: 'xxl', weight: 'bold', type: 'h2' },
				content: 'Align'
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
						content: 'block: \'pt-dialog\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { align: \'center\' },'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'content: []'
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
			// <--- PT-DIALOG MODIFICATORS //
			]
		},
		{
			elem: 'footer'
		}]
	}]
};