module.exports = {
	block: 'page',
	title: 'BEM Patterns: pt-table',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'pt-table.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'pt-table.min.js' }],
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
			elemMods: { size: 'm' },
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
				'pt-table']
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
							content: 'Фона блока'
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
							content: 'Бордер блока'
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
							attrs: { href: '#stripe' },
							mods: { size: 'm', view: 'link' },
							content: 'stripe'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'even / odd'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Зебрирование таблицы'
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
							attrs: { href: '#inside-space' },
							mods: { size: 'm', view: 'link' },
							content: 'space-a / space-h / space-v'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'xs / s / m / l'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Внутренние отступы ячеек'
						}]
					}]
				}]
			},
			{
				block: 'text',
				mods: { size: 'l', weight: 'bold', type: 'h3' },
				mix: { block: 'decorator', mods: { 'space-b': 'l' } },
				content: '__row'
			},
			{
				block: 'pt-table',
				mods: { view: 'default', 'space-a': 's', stripe: 'even' },
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
							attrs: { href: '#row_border' },
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
							content: 'top / bottom'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Бордер строки'
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
							attrs: { href: '#row_view' },
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
							content: 'head'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Применение стилей шапки'
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
							attrs: { href: '#row_status' },
							mods: { size: 'm', view: 'link' },
							content: 'status'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'default / error / success / warning'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Отображение статуса цветной полоской слева'
						}]
					}]
				}]
			},
			{
				block: 'text',
				mods: { size: 'l', weight: 'bold', type: 'h3' },
				mix: { block: 'decorator', mods: { 'space-b': 'l' } },
				content: '__col'
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
							attrs: { href: '#col_align' },
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
							content: 'right'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Горизонтальное выравнивание внутри ячейки'
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
							attrs: { href: '#col_width' },
							mods: { size: 'm', view: 'link' },
							content: 'width'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: '5 - 100 с шагом 5'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Ширина ячейки'
						}]
					}]
				}]
			},

			// PT-TABLE MODIFICATORS ---> //
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
						content: 'block: \'pt-table\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { view: \'default\' },'
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
					content: {
						block: 'pt-table',
						mods: { view: 'default', 'space-a': 's' },
						content: [
						{
							elem: 'row',
							elemMods: { view: 'head' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'cat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'origin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'coat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'country'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'British'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United Kingdom'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Munchkin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Mutation'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: ''
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Maine Coon'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russian Blue'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russia'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scottish Fold'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scotland'
								}
							}]
						}]
					}
				}]
			},
			{
				block: 'text',
				attrs: { id: 'border' },
				mods: { size: 'xxl', weight: 'bold', type: 'h2' },
				content: 'Borders'
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
						content: 'block: \'pt-list\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { border: \'all\' }'
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
					content: {
						block: 'pt-table',
						mods: { border: 'all', 'space-a': 's' },
						content: [
						{
							elem: 'row',
							elemMods: { view: 'head' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'cat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'origin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'coat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'country'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'British'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United Kingdom'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Munchkin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Mutation'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: ''
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Maine Coon'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russian Blue'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russia'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scottish Fold'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scotland'
								}
							}]
						}]
					}
				}]
			},
			{
				block: 'text',
				attrs: { id: 'stripe' },
				mods: { size: 'xxl', weight: 'bold', type: 'h2' },
				content: 'Stripe'
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
						content: 'block: \'pt-table\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { stripe: \'even\' }'
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
					content: {
						block: 'pt-table',
						mods: { view: 'default', 'space-a': 's', stripe: 'even' },
						content: [
						{
							elem: 'row',
							elemMods: { view: 'head' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'cat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'origin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'coat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'country'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'British'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United Kingdom'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Munchkin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Mutation'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: ''
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Maine Coon'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russian Blue'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russia'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scottish Fold'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scotland'
								}
							}]
						}]
					}
				}]
			},
			{
				block: 'text',
				attrs: { id: 'inside-space' },
				mods: { size: 'xxl', weight: 'bold', type: 'h2' },
				content: 'Inside space'
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
						content: 'block: \'pt-table\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { \'space-h\': \'s\', \'space-v\': \'l\' }'
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
					content: {
						block: 'pt-table',
						mods: { view: 'default', 'space-h': 's', 'space-v': 'l' },
						content: [
						{
							elem: 'row',
							elemMods: { view: 'head' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'cat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'origin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'coat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'country'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'British'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United Kingdom'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Munchkin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Mutation'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: ''
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Maine Coon'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russian Blue'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russia'
								}
							}]
						},
						{
							elem: 'row',
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scottish Fold'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scotland'
								}
							}]
						}]
					}
				}]
			},
			// <--- PT-TABLE MODIFICATORS //

			// PT-TABLE__ROW MODIFICATORS ---> //
			{
				block: 'text',
				mods: { size: 'xxxl', weight: 'bold', type: 'h1' },
				mix: [{ block: 'decorator', mods: { 'space-t': 'xxxxxxl' } }],
				content: 'elem: \'row\''
			},
			// {
			// 	block: 'text',
			// 	mods: { size: 'm' },
			// 	mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
			// 	content: 'description'
			// },
			{
				block: 'text',
				attrs: { id: 'row_border' },
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
						content: 'block: \'pt-table\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { view: \'default\', \'space-a\': \'s\' },'
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
						content: 'elem: \'row\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { border: \'bottom\' },'
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
					content: {
						block: 'pt-table',
						mods: { view: 'default', 'space-a': 's' },
						content: [
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'British'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United Kingdom'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Munchkin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Mutation'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: ''
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Maine Coon'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russian Blue'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russia'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scottish Fold'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scotland'
								}
							}]
						}]
					}
				}]
			},
			{
				block: 'text',
				attrs: { id: 'row_view' },
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
						content: 'block: \'pt-table\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { view: \'default\', \'space-a\': \'s\' },'
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
						content: 'elem: \'row\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { view: \'head\' },'
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
					content: {
						block: 'pt-table',
						mods: { view: 'default', 'space-h': 's', 'space-v': 'l' },
						content: [
						{
							elem: 'row',
							elemMods: { view: 'head' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'cat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'origin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'coat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'country'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'British'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United Kingdom'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Munchkin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Mutation'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: ''
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Maine Coon'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russian Blue'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russia'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scottish Fold'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scotland'
								}
							}]
						}]
					}
				}]
			},
			{
				block: 'text',
				attrs: { id: 'row_status' },
				mods: { size: 'xxl', weight: 'bold', type: 'h2' },
				content: 'Status'
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
						content: 'block: \'pt-table\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { view: \'default\', \'space-a\': \'s\' },'
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
						content: 'elem: \'row\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { status: \'success\' },'
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
					content: {
						block: 'pt-table',
						mods: { view: 'default', 'space-h': 's', 'space-v': 'l' },
						content: [
						{
							elem: 'row',
							elemMods: { view: 'head' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'cat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'origin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'coat'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 's', view: 'ghost', transform: 'uppercase' },
									content: 'country'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { status: 'default' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'British'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United Kingdom'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { status: 'success' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Munchkin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Mutation'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: ''
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { status: 'warning' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Maine Coon'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { status: 'error' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russian Blue'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russia'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { status: 'error' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scottish Fold'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scotland'
								}
							}]
						}]
					}
				}]
			},
			// <--- PT-TABLE__ROW MODIFICATORS //

			// PT-TABLE__COL MODIFICATORS ---> //
			{
				block: 'text',
				mods: { size: 'xxxl', weight: 'bold', type: 'h1' },
				mix: [{ block: 'decorator', mods: { 'space-t': 'xxxxxxl' } }],
				content: 'elem: \'col\''
			},
			// {
			// 	block: 'text',
			// 	mods: { size: 'm' },
			// 	mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
			// 	content: 'description'
			// },
			{
				block: 'text',
				attrs: { id: 'col_align' },
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
						content: 'block: \'pt-table\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { view: \'default\', \'space-a\': \'s\' },'
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
						content: 'elem: \'row\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'content: ['
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: '{'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxxxl' } },
						content: 'elem: \'col\'',
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxxxl' } },
						content: 'elemMods: { align: \'right\' }',
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxxxl' } },
						content: 'content: []',
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: '}]'
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
					content: {
						block: 'pt-table',
						mods: { view: 'default', 'space-a': 's' },
						content: [
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'British'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35', align: 'right' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United Kingdom'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Munchkin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Mutation'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: ''
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35', align: 'right' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Maine Coon'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35', align: 'right' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russian Blue'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35', align: 'right' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russia'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scottish Fold'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35', align: 'right' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scotland'
								}
							}]
						}]
					}
				}]
			},
			{
				block: 'text',
				attrs: { id: 'col_width' },
				mods: { size: 'xxl', weight: 'bold', type: 'h2' },
				content: 'Width'
			},
			{
				block: 'example',
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
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
						content: 'block: \'pt-table\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { view: \'default\', \'space-a\': \'s\' },'
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
						content: 'elem: \'row\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'content: ['
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: '{'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxxxl' } },
						content: 'elem: \'col\'',
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxxxl' } },
						content: 'elemMods: { width: \'35\' }',
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxxxl' } },
						content: 'content: []',
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: '}]'
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
					content: {
						block: 'pt-table',
						mods: { view: 'default', 'space-a': 's' },
						content: [
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'British'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United Kingdom'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Munchkin'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Mutation'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: ''
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Maine Coon'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Long'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'United States'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russian Blue'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Russia'
								}
							}]
						},
						{
							elem: 'row',
							elemMods: { border: 'bottom' },
							content: [
							{
								elem: 'col',
								elemMods: { width: '30' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scottish Fold'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '20' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Natural'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '15' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Short'
								}
							},
							{
								elem: 'col',
								elemMods: { width: '35' },
								content: {
									block: 'text',
									mods: { size: 'm' },
									content: 'Scotland'
								}
							}]
						}]
					}
				}]
			}]
			// <--- PT-TABLE__COl MODIFICATORS //
		},
		{
			elem: 'footer'
		}]
	}]
};