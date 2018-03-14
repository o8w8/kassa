module.exports = {
	block: 'page',
	title: 'BEM Starter Kit',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'bem-starter-kit.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'bem-starter-kit.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'default', space: 'default', size: 'default', gap: 'small', menu: 'default' }
	},
	content: [

		{
			block: 'tpl-layout',
			mix: { block: 'decorator',mods: { 'space-v': 'xxxxxxl' } },
			content: [

				/* История */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.history'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: 'pt-list'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /История */

				/* Платежи */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (card)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (customer information)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (shipping method)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (payment method)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: 'pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (success)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.payment (fail)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Платежи */

				/* Витрина */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.витрина (default)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.витрина (more)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-form'
														}
													]
												}
											]
										},
									]
								}
							]
						}
					]
				},
				/* /Витрина */

				/* Медиа */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.media'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.product'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.card'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Медиа */

				/* Музыка */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.playlist'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-table'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.album'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.song'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-card'
														}
													]
												}
											]
										},
									]
								}
							]
						}
					]
				},
				/* /Музыка */

				/* Друзья */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.friendlist'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.actions'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Друзья */

				/* Событие */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.event'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-card'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.place'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-card'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Событие */

				/* Статьи */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.articles'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.article'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-card'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.cover'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-card'
														}
													]
												}
											]
										},
									]
								}
							]
						}
					]
				},
				/* /Статьи */

				/* Комментарии */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.answer'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-icon-plus'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.comment'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-icon-plus'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.comments'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
									]
								}
							]
						}
					]
				},
				/* /Комментарии */

				/* Информер */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.informer (success)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-informer'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.informer (warning)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-informer'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.informer (alert)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-informer'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Информер */

				/* Коммерческая */
				{
					elem: 'section',
					mix: { block: 'decorator',mods: { 'indent-b': 'xxxxxxl' } },
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.ecommerce (category list)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.ecommerce (category)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.ecommerce (product)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-card'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				},
				/* /Коммерцеская */

				/* Авторизация */
				{
					elem: 'section',
					content: [
						{
							elem: 'container',
							elemMods: { align: 'center' },
							attrs: {
								'style': 'width: 936px;'
							},
							content: [
								{
									block: 'tpl-grid',
									mods: { columns: '12', 'col-gap': 'half', 'row-gap': 'full' },
									content: [
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.auth (sign-in)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.auth (sign-up)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-list'
														}
													]
												}
											]
										},
										{
											elem: 'fraction',
											elemMods: { col: '4'},
											content: [
												{
													block: 'unit',
													content: [
														{
															block: 'text',
															mods: { view: 'inverse', 'size': 'm' },
															mix: { block: 'decorator', mods: { 'indent-b': 'xxs' } },
															content: '.auth (forgot)'
														},
														{
															block: 'text',
															mods: { view: 'alert', 'size': 'm' },
															content: '.pt-card'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
				/* /Авторизация */

			]
		}
	]
};
