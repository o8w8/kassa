block('demo').elem('menu')(
	content()(function(n, ctx) {
		return [
		{
			block: 'pt-surface',
			attrs: {
				id: 'demoMenuModal'
			},
			mods: { view: 'tone' },
			content: [
			{
				elem: 'window',
				content: [
				{
					elem: 'content',
					elemMods: { size: 'full', view: 'inverse', 'space-a': 'xl' },
					content: [
					// close btn in demo__nav.bemhtml.js
					{
						block: 'demo',
						elem: 'menu-sections-col',
						attrs: { 'data-section': 'tools', style: 'display: none;' },
						content: [
						{
							elem: 'menu-section',
							content: [
							{
								elem: 'menu-section-name',
								mix: [{ block: 'text', mods: { weight: 'bold', font: 'sans', view: 'inverse' } }, { block: 'decorator', mods: { 'indent-b': 'xl' } }],
								content: 'Tools'
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': '../themes/themes.html' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Themes'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										tag: 'a',
										attrs: {
											href: 'https://github.com/bemdesign/bem-themes',
											target: '_blank'
										},
										content: 'Library'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@miocene, @koloskof'
									}]
								}]
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': '../typo/typo.html' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Typography'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										tag: 'a',
										attrs: {
											href: 'https://github.com/bemdesign/bem-typo',
											target: '_blank'
										},
										content: 'Library'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@koloskof, @kirillback, @miocene'
									}]
								}]
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': '../icons/icons.html' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Icons'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										tag: 'a',
										attrs: {
											href: 'https://github.com/bemdesign/bem-icons',
											target: '_blank'
										},
										content: 'Library'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@kirillback, @miocene'
									}]
								}]
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': '../patterns/patterns.html' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Patterns'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										tag: 'a',
										attrs: {
											href: 'https://github.com/bemdesign/bem-patterns',
											target: '_blank'
										},
										content: 'Library'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@koloskof, @miocene'
									}]
								}]
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': '../layouts/layouts.html' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Layouts'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										tag: 'a',
										attrs: {
											href: 'https://github.com/bemdesign/bem-layouts',
											target: '_blank'
										},
										content: 'Library'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@kirillback, @codensleep'
									}]
								}]
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': '../animations/animations.html' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Animations'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										tag: 'a',
										attrs: {
											href: 'https://github.com/bemdesign/bem-animations',
											target: '_blank'
										},
										content: 'Library'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@miocene'
									}]
								}]
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': '../illustrations/illustrations.html' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Illustrations'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										tag: 'a',
										attrs: {
											href: 'https://github.com/bemdesign/bem-illustrations',
											target: '_blank'
										},
										content: 'Library'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@lerazhelezova'
									}]
								}]
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': '../vectors/vectors.html' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Vectors'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										tag: 'a',
										attrs: {
											href: 'https://github.com/bemdesign/bem-vectors',
											target: '_blank'
										},
										content: 'Library'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@dandycolor'
									}]
								}]
							}]
						}]
					},
					{
						block: 'demo',
						elem: 'menu-sections-col',
						attrs: { 'data-section': 'documents', style: 'display: none;' },
						content: [
						{
							elem: 'menu-section',
							content: [
							{
								elem: 'menu-section-name',
								mix: [{ block: 'text', mods: { weight: 'bold', font: 'sans', view: 'inverse' } }, { block: 'decorator', mods: { 'indent-b': 'xl' } }],
								content: 'Docs'
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': 'https://habrahabr.ru/company/yamoney/blog/341028/' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Prototyping process'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: 'Russian version'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@koloskof'
									}]
								}]
							},
							// {
							// 	elem: 'menu-item',
							// 	content: [
							// 	{
							// 		elem: 'menu-item-row',
							// 		content: [
							// 		{
							// 			block: 'text',
							// 			mods: { view: 'inverse', size: 'l', font: 'sans' },
							// 			tag: 'a',
							// 			attrs: { 'href': '../opensource/opensource.html' },
							// 			mix: { block: 'demo', elem: 'menu-item-link' },
							// 			content: 'Join BEM Design'
							// 		},
							// 		{
							// 			block: 'text',
							// 			mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
							// 			content: 'Russian version'
							// 		}]
							// 	},
							// 	{
							// 		elem: 'menu-item-row',
							// 		content: [
							// 		{
							// 			block: 'text',
							// 			mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
							// 			content: '@miocene, @koloskof'
							// 		}]
							// 	}]
							// },
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': '../article-icons/article-icons.html' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'How to design icons'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: 'Russian version'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@kirillback'
									}]
								}]
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': 'https://@koloskof.github.io/bemxjstdemo/' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Templates'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: 'Russian version'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@miripiruni'
									}]
								}]
							}]
						}]
					},
					{
						block: 'demo',
						elem: 'menu-sections-col',
						attrs: { 'data-section': 'projects', style: 'display: none;' },
						content: [
						{
							elem: 'menu-section',
							content: [
							{
								elem: 'menu-section-name',
								mix: [{ block: 'text', mods: { weight: 'bold', font: 'sans', view: 'inverse' } }, { block: 'decorator', mods: { 'indent-b': 'xl' } }],
								content: 'Projects'
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': 'https://dribbble.com/shots/2984399-Maybach-6-Vision' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Maybach 6 Vision'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: 'Dribbble'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@codensleep'
									}]
								}]
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': 'https://dribbble.com/shots/2947385-Interview-magazine-Desiigner' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Interview magazine'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: 'Dribbble'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@koloskof'
									}]
								}]
							},
							{
								elem: 'menu-item',
								content: [
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { view: 'inverse', size: 'l', font: 'sans' },
										tag: 'a',
										attrs: { 'href': 'https://dribbble.com/julia_miocene' },
										mix: { block: 'demo', elem: 'menu-item-link' },
										content: 'Upcoming'
									},
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: 'Dribbble'
									}]
								},
								{
									elem: 'menu-item-row',
									content: [
									{
										block: 'text',
										mods: { 'view': 'inverse', 'size': 'm', font: 'sans' },
										content: '@miocene'
									}]
								}]
							}]
						}]
					}]
				}]
			}]
		},
		];
	})
);