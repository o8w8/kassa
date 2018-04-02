module.exports = {
	block: 'page',
	title: 'BEM Patterns: pt-list',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'pt-list.min.css' },
		{ elem: 'css', url: '/assets/ibm-type/css/ibm-type.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'pt-list.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'custom', space: 'default', size: 'default' }
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
				'pt-list']
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
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
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
							attrs: { href: '#backgrounds' },
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
							attrs: { href: '#borders' },
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
							content: 'Круговой бордер блока'
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
				}]
			},
			{
				block: 'text',
				mods: { size: 'l', weight: 'bold' },
				mix: { block: 'decorator', mods: { 'indent-b': 's' } },
				content: '__item'
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
							attrs: { href: '#item_borders' },
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
							content: 'top / bottom / right / left'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Бордер строк'
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
							attrs: { href: '#item_distribute' },
							mods: { size: 'm', view: 'link' },
							content: 'distribute'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'default / between'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Распределение контента по горизонтали'
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
							attrs: { href: '#item_inside-space' },
							mods: { size: 'm', view: 'link' },
							content: 'space-a / space-v / space-h / space-t / space-b / space-r / space-l'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'xxs / xs / s / m / l / xl / xxl'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Внутренние отступы'
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
							attrs: { href: '#item_outside-space' },
							mods: { size: 'm', view: 'link' },
							content: 'indent-a / indent-v / indent-h / indent-t / indent-b / indent-r / indent-l'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'xs / s / m / l / xl / xxl / xxxl'
						}]
					},
					{
						elem: 'col',
						elemMods: { width: '35' },
						content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							content: 'Внешние отступы'
						}]
					}]
				}]
			},

			// PT-LIST MODIFICATORS ---> //
			{
				block: 'text',
				attrs: { id: 'backgrounds' },
				mods: { size: 'xxl', weight: 'bold' },
				mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
				content: 'Backgrounds'
			},
			{
				block: 'wrap',
				attrs: { style: 'display: flex; align-items: flex-start;' },
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxx' } },
				content: [
				{
					elem: 'col',
					attrs: { style: 'width: 50%; flex-shrink: 0;' },
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
					attrs: { style: 'flex-grow: 1; background: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuLTMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iLTIwIiB5PSItMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS00Ij48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS00IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUVEV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFPSTJOVlYxb0hGVVVQcnR6WnlNa3psTnNOSVYwcUQ4TkpRMlRWalNodExwLzNkMDJicFpKTnRvaTZHVDI3czZZeWM0NE03djlvVTlGVUh3eDZwc1V4TCszZ0NBbzlRL2JQclF2bFFvbDJ0UWdLRDYwK0lOUTZJdW02NWs3TTVscHVySGVaZTU4ODUzdm5udnV1V2Z2QmVpNXFsaVdrUlFCRnBxdUxSY3k0bk9IajRnOUs1Q0VoNkFYQnFGWFVSMHJYYWxNQWpaUEMzZTFXOTlEd250ZjJkWGQvcCt0dDBZZEZTQnhIMkt6NXFnTGlJOEI4S2RWeTNZQmV2cVJIei9xV2g3Mll1aTNNVURFTDNxNDRXUFh3M00rZm8xcFp1UXM0dE9JQlZWVGFvaVhFSS9NeGZoR0RQc3hzTlpmb0UxcTY2cm81YUppbTNYZG9MRnc3MkgrbjIzQmFJWHpiY09uejVtZlBvVHZZVno3S3pVbDUrRlJ4RXVxa3A5Ry9BamlhMjE5dGh6ZzI1YWJrUkUvQnBEYzNwcXZwaEh2UkZ5czJ3ZXF2cCtrcmJXS0lYN25oRGJ6TE9JdGlNODM1OHBUd2RpcnFwUEZuTUYyeExjMVd2THlPd1RBaWJwYm12SEhjdnR0VTU3eTUrWHFOWnJMZTNsRS9QcThlVWoyZlhLZk9lM3BmT2p6aEpZdEIveWxsNVNERmNTRGlIK2hSa0gyNStMK3NkeEtFQU1aYWhybFNYOHVrcU1PV3kvalhXMm02TTlMREJjMzFCOUxGdXY2Z1ZLZy8wU3ppM0tBcjFrR3ExR01qVS9hTGJucTYvbFJ4YzRYZko5OGhUYXJnWCsrRGJNSkJTaVlNSWU5Q2sxWUF4RmtLRUFHM3hiWWFLbUREZ1l5RkswVUdZcGZvV1lYRytmQVBQSTZ0Sm5Od2I3Q2xQN0l5RitEK2JqT3RDcGtoejZDRnJJYS9JNnNGdE5sOGF1RlhHTVRQMzRzTndJL0poa2dFdG1EejE0eVNmYVJjVElCSW5tS1BFMzJreHl5RTJUdit0aEtiRVZlUERmVy9ieU1NMUttbTBYZE9iUzdvR0QvTXlwTVhGUFhyQ3dPdG9Zanl5bjdCVjI5L01aZnNWenBMRGRSdHVJWm5icFh6dmxmK2V2OE12WXIvR3FrNEgva1YvRzNjc2Rhekx1eVRNUHNiRmh6ZDFVYWJRYmpGdkRSbWNXSnhSM3pjZkhrVnc5R2ZwYkptZWV2OUYwOFdXOHVEa2FzbHdYNmF2bFdHVTZOUkt6MGcvU0h0Q3k5SjMwby9jYTl6WDNLZmMxOXpuM0JYUUtSTzh1ZDQ3N2hMbkFmYzEvRzltcnpHbHJmZXhaNUdMZG42WlpyckVvaEkyd1ZIaFp5d2piaFVXRXk4aWNNQ0dOQ1VkaUJscTNyK3hhZkw1NDlIUTVqSCthbisxeStMbFlCaWZ1eEF2Uk4vbFZWVk9sd2xDa2RWbTlOT0w1QkU0d2tRMlNNbERaVTk3aFg4NkVpbFUvbFVta1FVenRURTZteDFFRVBoN09tZHFCdEF2djhIZFdwYnJKUzZ0SmozbjBDV2RNNmJ1c056UlYzUzlLVFlocXZOaXFXbXVyb2lLZ1loc2hNam1oVGg5cHRXaHNGNzk3MGovU2JNcnNQRTFzdVI1ejdETUMrUC9Icyt5N2lqclFBbGh5QWdjY2piaGpQeWdmZUJUanpoTnF5MjhFZGtVaDhDK0RVOSt6MnYvb3llSDc5MU9uY3hIT3M1eTJBdFRjN25iL2Y3M1RXUGtEL3F3Qm5qWDhCb0o5OFZWQmcvbThBQUFCSlNVUkJWRGdSN1pPeERRQXdDTU9nZS83L0V3NmdmUUFVcEk3SkNCYURSVHdpeW9nQUlDaXpRMUVMU0FjWHNocFVEaHN4aTdIWEM4Tm5Kb09wS1pTbEdkSmp6MzZZN1hlSEY4ZHdDdmd3U1dsK0FBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8ZyBpZD0iXy0vLWNhbnZhcyIgZmlsbD0idXJsKCNwYXR0ZXJuLTMpIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTQiIHg9IjAiIHk9IjAiIHdpZHRoPSI4NDQiIGhlaWdodD0iMTg4MyI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\');' },
					mix: { block: 'decorator', mods: { 'space-a': 'l' } },
					content: {
						block: 'pt-list',
						mods: { view: 'default' },
						content: [
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 'xs' },
							content: [
							{
								block: 'text',
								mods: { size: 's', view: 'secondary', transform: 'uppercase' },
								content: 'Yesterday'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and give me money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'primary', align: 'right' },
								content: '- 1 000 ₽'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						}]
					}
				}]
			},
			{
				block: 'text',
				attrs: { id: 'borders' },
				mods: { size: 'xxl', weight: 'bold' },
				mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
				content: 'Borders'
			},
			{
				block: 'wrap',
				attrs: { style: 'display: flex; align-items: flex-start;' },
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
				content: [
				{
					elem: 'col',
					attrs: { style: 'width: 50%; flex-shrink: 0;' },
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
					attrs: { style: 'flex-grow: 1; background: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuLTMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iLTIwIiB5PSItMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS00Ij48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS00IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUVEV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFPSTJOVlYxb0hGVVVQcnR6WnlNa3psTnNOSVYwcUQ4TkpRMlRWalNodExwLzNkMDJicFpKTnRvaTZHVDI3czZZeWM0NE03djlvVTlGVUh3eDZwc1V4TCszZ0NBbzlRL2JQclF2bFFvbDJ0UWdLRDYwK0lOUTZJdW02NWs3TTVscHVySGVaZTU4ODUzdm5udnV1V2Z2QmVpNXFsaVdrUlFCRnBxdUxSY3k0bk9IajRnOUs1Q0VoNkFYQnFGWFVSMHJYYWxNQWpaUEMzZTFXOTlEd250ZjJkWGQvcCt0dDBZZEZTQnhIMkt6NXFnTGlJOEI4S2RWeTNZQmV2cVJIei9xV2g3Mll1aTNNVURFTDNxNDRXUFh3M00rZm8xcFp1UXM0dE9JQlZWVGFvaVhFSS9NeGZoR0RQc3hzTlpmb0UxcTY2cm81YUppbTNYZG9MRnc3MkgrbjIzQmFJWHpiY09uejVtZlBvVHZZVno3S3pVbDUrRlJ4RXVxa3A5Ry9BamlhMjE5dGh6ZzI1YWJrUkUvQnBEYzNwcXZwaEh2UkZ5czJ3ZXF2cCtrcmJXS0lYN25oRGJ6TE9JdGlNODM1OHBUd2RpcnFwUEZuTUYyeExjMVd2THlPd1RBaWJwYm12SEhjdnR0VTU3eTUrWHFOWnJMZTNsRS9QcThlVWoyZlhLZk9lM3BmT2p6aEpZdEIveWxsNVNERmNTRGlIK2hSa0gyNStMK3NkeEtFQU1aYWhybFNYOHVrcU1PV3kvalhXMm02TTlMREJjMzFCOUxGdXY2Z1ZLZy8wU3ppM0tBcjFrR3ExR01qVS9hTGJucTYvbFJ4YzRYZko5OGhUYXJnWCsrRGJNSkJTaVlNSWU5Q2sxWUF4RmtLRUFHM3hiWWFLbUREZ1l5RkswVUdZcGZvV1lYRytmQVBQSTZ0Sm5Od2I3Q2xQN0l5RitEK2JqT3RDcGtoejZDRnJJYS9JNnNGdE5sOGF1RlhHTVRQMzRzTndJL0poa2dFdG1EejE0eVNmYVJjVElCSW5tS1BFMzJreHl5RTJUdit0aEtiRVZlUERmVy9ieU1NMUttbTBYZE9iUzdvR0QvTXlwTVhGUFhyQ3dPdG9Zanl5bjdCVjI5L01aZnNWenBMRGRSdHVJWm5icFh6dmxmK2V2OE12WXIvR3FrNEgva1YvRzNjc2Rhekx1eVRNUHNiRmh6ZDFVYWJRYmpGdkRSbWNXSnhSM3pjZkhrVnc5R2ZwYkptZWV2OUYwOFdXOHVEa2FzbHdYNmF2bFdHVTZOUkt6MGcvU0h0Q3k5SjMwby9jYTl6WDNLZmMxOXpuM0JYUUtSTzh1ZDQ3N2hMbkFmYzEvRzltcnpHbHJmZXhaNUdMZG42WlpyckVvaEkyd1ZIaFp5d2piaFVXRXk4aWNNQ0dOQ1VkaUJscTNyK3hhZkw1NDlIUTVqSCthbisxeStMbFlCaWZ1eEF2Uk4vbFZWVk9sd2xDa2RWbTlOT0w1QkU0d2tRMlNNbERaVTk3aFg4NkVpbFUvbFVta1FVenRURTZteDFFRVBoN09tZHFCdEF2djhIZFdwYnJKUzZ0SmozbjBDV2RNNmJ1c056UlYzUzlLVFlocXZOaXFXbXVyb2lLZ1loc2hNam1oVGg5cHRXaHNGNzk3MGovU2JNcnNQRTFzdVI1ejdETUMrUC9Icyt5N2lqclFBbGh5QWdjY2piaGpQeWdmZUJUanpoTnF5MjhFZGtVaDhDK0RVOSt6MnYvb3llSDc5MU9uY3hIT3M1eTJBdFRjN25iL2Y3M1RXUGtEL3F3Qm5qWDhCb0o5OFZWQmcvbThBQUFCSlNVUkJWRGdSN1pPeERRQXdDTU9nZS83L0V3NmdmUUFVcEk3SkNCYURSVHdpeW9nQUlDaXpRMUVMU0FjWHNocFVEaHN4aTdIWEM4Tm5Kb09wS1pTbEdkSmp6MzZZN1hlSEY4ZHdDdmd3U1dsK0FBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8ZyBpZD0iXy0vLWNhbnZhcyIgZmlsbD0idXJsKCNwYXR0ZXJuLTMpIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTQiIHg9IjAiIHk9IjAiIHdpZHRoPSI4NDQiIGhlaWdodD0iMTg4MyI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\');' },
					mix: { block: 'decorator', mods: { 'space-a': 'l' } },
					content: {
						block: 'pt-list',
						mods: { border: 'all' },
						content: [
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 'xs' },
							content: [
							{
								block: 'text',
								mods: { size: 's', view: 'secondary', transform: 'uppercase' },
								content: 'Yesterday'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and give me money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'primary', align: 'right' },
								content: '- 1 000 ₽'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						}]
					}
				}]
			},
			{
				block: 'text',
				attrs: { id: 'shadow' },
				mods: { size: 'xxl', weight: 'bold' },
				mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
				content: 'Shadow'
			},
			{
				block: 'wrap',
				attrs: { style: 'display: flex; align-items: flex-start;' },
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
				content: [
				{
					elem: 'col',
					attrs: { style: 'width: 50%; flex-shrink: 0;' },
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
						content: 'mods: { shadow: \'cloud\' }'
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
					attrs: { style: 'flex-grow: 1; background: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuLTMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iLTIwIiB5PSItMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS00Ij48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS00IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUVEV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFPSTJOVlYxb0hGVVVQcnR6WnlNa3psTnNOSVYwcUQ4TkpRMlRWalNodExwLzNkMDJicFpKTnRvaTZHVDI3czZZeWM0NE03djlvVTlGVUh3eDZwc1V4TCszZ0NBbzlRL2JQclF2bFFvbDJ0UWdLRDYwK0lOUTZJdW02NWs3TTVscHVySGVaZTU4ODUzdm5udnV1V2Z2QmVpNXFsaVdrUlFCRnBxdUxSY3k0bk9IajRnOUs1Q0VoNkFYQnFGWFVSMHJYYWxNQWpaUEMzZTFXOTlEd250ZjJkWGQvcCt0dDBZZEZTQnhIMkt6NXFnTGlJOEI4S2RWeTNZQmV2cVJIei9xV2g3Mll1aTNNVURFTDNxNDRXUFh3M00rZm8xcFp1UXM0dE9JQlZWVGFvaVhFSS9NeGZoR0RQc3hzTlpmb0UxcTY2cm81YUppbTNYZG9MRnc3MkgrbjIzQmFJWHpiY09uejVtZlBvVHZZVno3S3pVbDUrRlJ4RXVxa3A5Ry9BamlhMjE5dGh6ZzI1YWJrUkUvQnBEYzNwcXZwaEh2UkZ5czJ3ZXF2cCtrcmJXS0lYN25oRGJ6TE9JdGlNODM1OHBUd2RpcnFwUEZuTUYyeExjMVd2THlPd1RBaWJwYm12SEhjdnR0VTU3eTUrWHFOWnJMZTNsRS9QcThlVWoyZlhLZk9lM3BmT2p6aEpZdEIveWxsNVNERmNTRGlIK2hSa0gyNStMK3NkeEtFQU1aYWhybFNYOHVrcU1PV3kvalhXMm02TTlMREJjMzFCOUxGdXY2Z1ZLZy8wU3ppM0tBcjFrR3ExR01qVS9hTGJucTYvbFJ4YzRYZko5OGhUYXJnWCsrRGJNSkJTaVlNSWU5Q2sxWUF4RmtLRUFHM3hiWWFLbUREZ1l5RkswVUdZcGZvV1lYRytmQVBQSTZ0Sm5Od2I3Q2xQN0l5RitEK2JqT3RDcGtoejZDRnJJYS9JNnNGdE5sOGF1RlhHTVRQMzRzTndJL0poa2dFdG1EejE0eVNmYVJjVElCSW5tS1BFMzJreHl5RTJUdit0aEtiRVZlUERmVy9ieU1NMUttbTBYZE9iUzdvR0QvTXlwTVhGUFhyQ3dPdG9Zanl5bjdCVjI5L01aZnNWenBMRGRSdHVJWm5icFh6dmxmK2V2OE12WXIvR3FrNEgva1YvRzNjc2Rhekx1eVRNUHNiRmh6ZDFVYWJRYmpGdkRSbWNXSnhSM3pjZkhrVnc5R2ZwYkptZWV2OUYwOFdXOHVEa2FzbHdYNmF2bFdHVTZOUkt6MGcvU0h0Q3k5SjMwby9jYTl6WDNLZmMxOXpuM0JYUUtSTzh1ZDQ3N2hMbkFmYzEvRzltcnpHbHJmZXhaNUdMZG42WlpyckVvaEkyd1ZIaFp5d2piaFVXRXk4aWNNQ0dOQ1VkaUJscTNyK3hhZkw1NDlIUTVqSCthbisxeStMbFlCaWZ1eEF2Uk4vbFZWVk9sd2xDa2RWbTlOT0w1QkU0d2tRMlNNbERaVTk3aFg4NkVpbFUvbFVta1FVenRURTZteDFFRVBoN09tZHFCdEF2djhIZFdwYnJKUzZ0SmozbjBDV2RNNmJ1c056UlYzUzlLVFlocXZOaXFXbXVyb2lLZ1loc2hNam1oVGg5cHRXaHNGNzk3MGovU2JNcnNQRTFzdVI1ejdETUMrUC9Icyt5N2lqclFBbGh5QWdjY2piaGpQeWdmZUJUanpoTnF5MjhFZGtVaDhDK0RVOSt6MnYvb3llSDc5MU9uY3hIT3M1eTJBdFRjN25iL2Y3M1RXUGtEL3F3Qm5qWDhCb0o5OFZWQmcvbThBQUFCSlNVUkJWRGdSN1pPeERRQXdDTU9nZS83L0V3NmdmUUFVcEk3SkNCYURSVHdpeW9nQUlDaXpRMUVMU0FjWHNocFVEaHN4aTdIWEM4Tm5Kb09wS1pTbEdkSmp6MzZZN1hlSEY4ZHdDdmd3U1dsK0FBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8ZyBpZD0iXy0vLWNhbnZhcyIgZmlsbD0idXJsKCNwYXR0ZXJuLTMpIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTQiIHg9IjAiIHk9IjAiIHdpZHRoPSI4NDQiIGhlaWdodD0iMTg4MyI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\');' },
					mix: { block: 'decorator', mods: { 'space-a': 'l' } },
					content: {
						block: 'pt-list',
						mods: { shadow: 'cloud', view: 'default' },
						content: [
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 'xs' },
							content: [
							{
								block: 'text',
								mods: { size: 's', view: 'secondary', transform: 'uppercase' },
								content: 'Yesterday'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and give me money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'primary', align: 'right' },
								content: '- 1 000 ₽'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						}]
					}
				}]
			},
			// <--- PT-LIST MODIFICATORS //

			// PT-LIST__ITEM MODIFICATORS ---> //
			{
				block: 'text',
				mods: { size: 'xxxl', weight: 'bold' },
				mix: [{ block: 'decorator', mods: { 'indent-b': 'xl' } }],
				content: 'elem: \'item\''
			},
			// {
			// 	block: 'text',
			// 	mods: { size: 'm' },
			// 	mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
			// 	content: 'description'
			// },
			{
				block: 'text',
				mods: { size: 'xxl', weight: 'bold' },
				attrs: { id: 'item_borders' },
				mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
				content: 'Borders'
			},
			{
				block: 'wrap',
				attrs: { style: 'display: flex; align-items: flex-start;' },
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
				content: [
				{
					elem: 'col',
					attrs: { style: 'width: 50%; flex-shrink: 0;' },
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
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { border: \'all\' },'
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
						content: 'elem: \'item\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { border: \'bottom\' }'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: '},'
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
						content: 'elem: \'item\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { border: \'bottom\' }'
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
					attrs: { style: 'flex-grow: 1; background: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuLTMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iLTIwIiB5PSItMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS00Ij48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS00IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUVEV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFPSTJOVlYxb0hGVVVQcnR6WnlNa3psTnNOSVYwcUQ4TkpRMlRWalNodExwLzNkMDJicFpKTnRvaTZHVDI3czZZeWM0NE03djlvVTlGVUh3eDZwc1V4TCszZ0NBbzlRL2JQclF2bFFvbDJ0UWdLRDYwK0lOUTZJdW02NWs3TTVscHVySGVaZTU4ODUzdm5udnV1V2Z2QmVpNXFsaVdrUlFCRnBxdUxSY3k0bk9IajRnOUs1Q0VoNkFYQnFGWFVSMHJYYWxNQWpaUEMzZTFXOTlEd250ZjJkWGQvcCt0dDBZZEZTQnhIMkt6NXFnTGlJOEI4S2RWeTNZQmV2cVJIei9xV2g3Mll1aTNNVURFTDNxNDRXUFh3M00rZm8xcFp1UXM0dE9JQlZWVGFvaVhFSS9NeGZoR0RQc3hzTlpmb0UxcTY2cm81YUppbTNYZG9MRnc3MkgrbjIzQmFJWHpiY09uejVtZlBvVHZZVno3S3pVbDUrRlJ4RXVxa3A5Ry9BamlhMjE5dGh6ZzI1YWJrUkUvQnBEYzNwcXZwaEh2UkZ5czJ3ZXF2cCtrcmJXS0lYN25oRGJ6TE9JdGlNODM1OHBUd2RpcnFwUEZuTUYyeExjMVd2THlPd1RBaWJwYm12SEhjdnR0VTU3eTUrWHFOWnJMZTNsRS9QcThlVWoyZlhLZk9lM3BmT2p6aEpZdEIveWxsNVNERmNTRGlIK2hSa0gyNStMK3NkeEtFQU1aYWhybFNYOHVrcU1PV3kvalhXMm02TTlMREJjMzFCOUxGdXY2Z1ZLZy8wU3ppM0tBcjFrR3ExR01qVS9hTGJucTYvbFJ4YzRYZko5OGhUYXJnWCsrRGJNSkJTaVlNSWU5Q2sxWUF4RmtLRUFHM3hiWWFLbUREZ1l5RkswVUdZcGZvV1lYRytmQVBQSTZ0Sm5Od2I3Q2xQN0l5RitEK2JqT3RDcGtoejZDRnJJYS9JNnNGdE5sOGF1RlhHTVRQMzRzTndJL0poa2dFdG1EejE0eVNmYVJjVElCSW5tS1BFMzJreHl5RTJUdit0aEtiRVZlUERmVy9ieU1NMUttbTBYZE9iUzdvR0QvTXlwTVhGUFhyQ3dPdG9Zanl5bjdCVjI5L01aZnNWenBMRGRSdHVJWm5icFh6dmxmK2V2OE12WXIvR3FrNEgva1YvRzNjc2Rhekx1eVRNUHNiRmh6ZDFVYWJRYmpGdkRSbWNXSnhSM3pjZkhrVnc5R2ZwYkptZWV2OUYwOFdXOHVEa2FzbHdYNmF2bFdHVTZOUkt6MGcvU0h0Q3k5SjMwby9jYTl6WDNLZmMxOXpuM0JYUUtSTzh1ZDQ3N2hMbkFmYzEvRzltcnpHbHJmZXhaNUdMZG42WlpyckVvaEkyd1ZIaFp5d2piaFVXRXk4aWNNQ0dOQ1VkaUJscTNyK3hhZkw1NDlIUTVqSCthbisxeStMbFlCaWZ1eEF2Uk4vbFZWVk9sd2xDa2RWbTlOT0w1QkU0d2tRMlNNbERaVTk3aFg4NkVpbFUvbFVta1FVenRURTZteDFFRVBoN09tZHFCdEF2djhIZFdwYnJKUzZ0SmozbjBDV2RNNmJ1c056UlYzUzlLVFlocXZOaXFXbXVyb2lLZ1loc2hNam1oVGg5cHRXaHNGNzk3MGovU2JNcnNQRTFzdVI1ejdETUMrUC9Icyt5N2lqclFBbGh5QWdjY2piaGpQeWdmZUJUanpoTnF5MjhFZGtVaDhDK0RVOSt6MnYvb3llSDc5MU9uY3hIT3M1eTJBdFRjN25iL2Y3M1RXUGtEL3F3Qm5qWDhCb0o5OFZWQmcvbThBQUFCSlNVUkJWRGdSN1pPeERRQXdDTU9nZS83L0V3NmdmUUFVcEk3SkNCYURSVHdpeW9nQUlDaXpRMUVMU0FjWHNocFVEaHN4aTdIWEM4Tm5Kb09wS1pTbEdkSmp6MzZZN1hlSEY4ZHdDdmd3U1dsK0FBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8ZyBpZD0iXy0vLWNhbnZhcyIgZmlsbD0idXJsKCNwYXR0ZXJuLTMpIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTQiIHg9IjAiIHk9IjAiIHdpZHRoPSI4NDQiIGhlaWdodD0iMTg4MyI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\');' },
					mix: { block: 'decorator', mods: { 'space-a': 'l' } },
					content: {
						block: 'pt-list',
						mods: { border: 'all', view: 'default' },
						content: [
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between', border: 'bottom' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between', border: 'bottom' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						}]
					}
				}]
			},
			{
				block: 'text',
				attrs: { id: 'item_distribute' },
				mods: { size: 'xxl', weight: 'bold' },
				mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
				content: 'Distribute'
			},
			{
				block: 'wrap',
				attrs: { style: 'display: flex; align-items: flex-start;' },
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
				content: [
				{
					elem: 'col',
					attrs: { style: 'width: 50%; flex-shrink: 0;' },
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
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { border: \'all\' },'
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
						content: 'elem: \'item\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { distribute: \'default\' }'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: '},'
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
						content: 'elem: \'item\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { distribute: \'between\' }'
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
					attrs: { style: 'flex-grow: 1; background: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuLTMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iLTIwIiB5PSItMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS00Ij48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS00IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUVEV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFPSTJOVlYxb0hGVVVQcnR6WnlNa3psTnNOSVYwcUQ4TkpRMlRWalNodExwLzNkMDJicFpKTnRvaTZHVDI3czZZeWM0NE03djlvVTlGVUh3eDZwc1V4TCszZ0NBbzlRL2JQclF2bFFvbDJ0UWdLRDYwK0lOUTZJdW02NWs3TTVscHVySGVaZTU4ODUzdm5udnV1V2Z2QmVpNXFsaVdrUlFCRnBxdUxSY3k0bk9IajRnOUs1Q0VoNkFYQnFGWFVSMHJYYWxNQWpaUEMzZTFXOTlEd250ZjJkWGQvcCt0dDBZZEZTQnhIMkt6NXFnTGlJOEI4S2RWeTNZQmV2cVJIei9xV2g3Mll1aTNNVURFTDNxNDRXUFh3M00rZm8xcFp1UXM0dE9JQlZWVGFvaVhFSS9NeGZoR0RQc3hzTlpmb0UxcTY2cm81YUppbTNYZG9MRnc3MkgrbjIzQmFJWHpiY09uejVtZlBvVHZZVno3S3pVbDUrRlJ4RXVxa3A5Ry9BamlhMjE5dGh6ZzI1YWJrUkUvQnBEYzNwcXZwaEh2UkZ5czJ3ZXF2cCtrcmJXS0lYN25oRGJ6TE9JdGlNODM1OHBUd2RpcnFwUEZuTUYyeExjMVd2THlPd1RBaWJwYm12SEhjdnR0VTU3eTUrWHFOWnJMZTNsRS9QcThlVWoyZlhLZk9lM3BmT2p6aEpZdEIveWxsNVNERmNTRGlIK2hSa0gyNStMK3NkeEtFQU1aYWhybFNYOHVrcU1PV3kvalhXMm02TTlMREJjMzFCOUxGdXY2Z1ZLZy8wU3ppM0tBcjFrR3ExR01qVS9hTGJucTYvbFJ4YzRYZko5OGhUYXJnWCsrRGJNSkJTaVlNSWU5Q2sxWUF4RmtLRUFHM3hiWWFLbUREZ1l5RkswVUdZcGZvV1lYRytmQVBQSTZ0Sm5Od2I3Q2xQN0l5RitEK2JqT3RDcGtoejZDRnJJYS9JNnNGdE5sOGF1RlhHTVRQMzRzTndJL0poa2dFdG1EejE0eVNmYVJjVElCSW5tS1BFMzJreHl5RTJUdit0aEtiRVZlUERmVy9ieU1NMUttbTBYZE9iUzdvR0QvTXlwTVhGUFhyQ3dPdG9Zanl5bjdCVjI5L01aZnNWenBMRGRSdHVJWm5icFh6dmxmK2V2OE12WXIvR3FrNEgva1YvRzNjc2Rhekx1eVRNUHNiRmh6ZDFVYWJRYmpGdkRSbWNXSnhSM3pjZkhrVnc5R2ZwYkptZWV2OUYwOFdXOHVEa2FzbHdYNmF2bFdHVTZOUkt6MGcvU0h0Q3k5SjMwby9jYTl6WDNLZmMxOXpuM0JYUUtSTzh1ZDQ3N2hMbkFmYzEvRzltcnpHbHJmZXhaNUdMZG42WlpyckVvaEkyd1ZIaFp5d2piaFVXRXk4aWNNQ0dOQ1VkaUJscTNyK3hhZkw1NDlIUTVqSCthbisxeStMbFlCaWZ1eEF2Uk4vbFZWVk9sd2xDa2RWbTlOT0w1QkU0d2tRMlNNbERaVTk3aFg4NkVpbFUvbFVta1FVenRURTZteDFFRVBoN09tZHFCdEF2djhIZFdwYnJKUzZ0SmozbjBDV2RNNmJ1c056UlYzUzlLVFlocXZOaXFXbXVyb2lLZ1loc2hNam1oVGg5cHRXaHNGNzk3MGovU2JNcnNQRTFzdVI1ejdETUMrUC9Icyt5N2lqclFBbGh5QWdjY2piaGpQeWdmZUJUanpoTnF5MjhFZGtVaDhDK0RVOSt6MnYvb3llSDc5MU9uY3hIT3M1eTJBdFRjN25iL2Y3M1RXUGtEL3F3Qm5qWDhCb0o5OFZWQmcvbThBQUFCSlNVUkJWRGdSN1pPeERRQXdDTU9nZS83L0V3NmdmUUFVcEk3SkNCYURSVHdpeW9nQUlDaXpRMUVMU0FjWHNocFVEaHN4aTdIWEM4Tm5Kb09wS1pTbEdkSmp6MzZZN1hlSEY4ZHdDdmd3U1dsK0FBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8ZyBpZD0iXy0vLWNhbnZhcyIgZmlsbD0idXJsKCNwYXR0ZXJuLTMpIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTQiIHg9IjAiIHk9IjAiIHdpZHRoPSI4NDQiIGhlaWdodD0iMTg4MyI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\');' },
					mix: { block: 'decorator', mods: { 'space-a': 'l' } },
					content: {
						block: 'pt-list',
						mods: { border: 'all', view: 'default' },
						content: [
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'default', border: 'bottom' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between', border: 'bottom' },
							attrs: { style: 'align-items: center;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						}]
					}
				}]
			},
			{
				block: 'text',
				attrs: { id: 'item_inside-space' },
				mods: { size: 'xxl', weight: 'bold' },
				mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
				content: 'Inside space'
			},
			{
				block: 'wrap',
				attrs: { style: 'display: flex; align-items: flex-start;' },
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' } },
				content: [
				{
					elem: 'col',
					attrs: { style: 'width: 50%; flex-shrink: 0;' },
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
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { border: \'all\' },'
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
						content: 'elem: \'item\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { \'space-a\': \'l\' }'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: '},'
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
						content: 'elem: \'item\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { \'space-h\': \'l\', \'space-v\': \'s\' }'
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
					attrs: { style: 'flex-grow: 1; background: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuLTMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iLTIwIiB5PSItMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS00Ij48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS00IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUVEV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFPSTJOVlYxb0hGVVVQcnR6WnlNa3psTnNOSVYwcUQ4TkpRMlRWalNodExwLzNkMDJicFpKTnRvaTZHVDI3czZZeWM0NE03djlvVTlGVUh3eDZwc1V4TCszZ0NBbzlRL2JQclF2bFFvbDJ0UWdLRDYwK0lOUTZJdW02NWs3TTVscHVySGVaZTU4ODUzdm5udnV1V2Z2QmVpNXFsaVdrUlFCRnBxdUxSY3k0bk9IajRnOUs1Q0VoNkFYQnFGWFVSMHJYYWxNQWpaUEMzZTFXOTlEd250ZjJkWGQvcCt0dDBZZEZTQnhIMkt6NXFnTGlJOEI4S2RWeTNZQmV2cVJIei9xV2g3Mll1aTNNVURFTDNxNDRXUFh3M00rZm8xcFp1UXM0dE9JQlZWVGFvaVhFSS9NeGZoR0RQc3hzTlpmb0UxcTY2cm81YUppbTNYZG9MRnc3MkgrbjIzQmFJWHpiY09uejVtZlBvVHZZVno3S3pVbDUrRlJ4RXVxa3A5Ry9BamlhMjE5dGh6ZzI1YWJrUkUvQnBEYzNwcXZwaEh2UkZ5czJ3ZXF2cCtrcmJXS0lYN25oRGJ6TE9JdGlNODM1OHBUd2RpcnFwUEZuTUYyeExjMVd2THlPd1RBaWJwYm12SEhjdnR0VTU3eTUrWHFOWnJMZTNsRS9QcThlVWoyZlhLZk9lM3BmT2p6aEpZdEIveWxsNVNERmNTRGlIK2hSa0gyNStMK3NkeEtFQU1aYWhybFNYOHVrcU1PV3kvalhXMm02TTlMREJjMzFCOUxGdXY2Z1ZLZy8wU3ppM0tBcjFrR3ExR01qVS9hTGJucTYvbFJ4YzRYZko5OGhUYXJnWCsrRGJNSkJTaVlNSWU5Q2sxWUF4RmtLRUFHM3hiWWFLbUREZ1l5RkswVUdZcGZvV1lYRytmQVBQSTZ0Sm5Od2I3Q2xQN0l5RitEK2JqT3RDcGtoejZDRnJJYS9JNnNGdE5sOGF1RlhHTVRQMzRzTndJL0poa2dFdG1EejE0eVNmYVJjVElCSW5tS1BFMzJreHl5RTJUdit0aEtiRVZlUERmVy9ieU1NMUttbTBYZE9iUzdvR0QvTXlwTVhGUFhyQ3dPdG9Zanl5bjdCVjI5L01aZnNWenBMRGRSdHVJWm5icFh6dmxmK2V2OE12WXIvR3FrNEgva1YvRzNjc2Rhekx1eVRNUHNiRmh6ZDFVYWJRYmpGdkRSbWNXSnhSM3pjZkhrVnc5R2ZwYkptZWV2OUYwOFdXOHVEa2FzbHdYNmF2bFdHVTZOUkt6MGcvU0h0Q3k5SjMwby9jYTl6WDNLZmMxOXpuM0JYUUtSTzh1ZDQ3N2hMbkFmYzEvRzltcnpHbHJmZXhaNUdMZG42WlpyckVvaEkyd1ZIaFp5d2piaFVXRXk4aWNNQ0dOQ1VkaUJscTNyK3hhZkw1NDlIUTVqSCthbisxeStMbFlCaWZ1eEF2Uk4vbFZWVk9sd2xDa2RWbTlOT0w1QkU0d2tRMlNNbERaVTk3aFg4NkVpbFUvbFVta1FVenRURTZteDFFRVBoN09tZHFCdEF2djhIZFdwYnJKUzZ0SmozbjBDV2RNNmJ1c056UlYzUzlLVFlocXZOaXFXbXVyb2lLZ1loc2hNam1oVGg5cHRXaHNGNzk3MGovU2JNcnNQRTFzdVI1ejdETUMrUC9Icyt5N2lqclFBbGh5QWdjY2piaGpQeWdmZUJUanpoTnF5MjhFZGtVaDhDK0RVOSt6MnYvb3llSDc5MU9uY3hIT3M1eTJBdFRjN25iL2Y3M1RXUGtEL3F3Qm5qWDhCb0o5OFZWQmcvbThBQUFCSlNVUkJWRGdSN1pPeERRQXdDTU9nZS83L0V3NmdmUUFVcEk3SkNCYURSVHdpeW9nQUlDaXpRMUVMU0FjWHNocFVEaHN4aTdIWEM4Tm5Kb09wS1pTbEdkSmp6MzZZN1hlSEY4ZHdDdmd3U1dsK0FBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8ZyBpZD0iXy0vLWNhbnZhcyIgZmlsbD0idXJsKCNwYXR0ZXJuLTMpIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTQiIHg9IjAiIHk9IjAiIHdpZHRoPSI4NDQiIGhlaWdodD0iMTg4MyI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\');' },
					mix: { block: 'decorator', mods: { 'space-a': 'l' } },
					content: {
						block: 'pt-list',
						mods: { border: 'all', view: 'default' },
						content: [
						{
							elem: 'item',
							elemMods: { 'space-a': 'l', 'distribute': 'between', border: 'bottom' },
							attrs: { style: 'align-items: center; background: lightpink;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'between', border: 'bottom' },
							attrs: { style: 'align-items: center; background: lightpink;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						}]
					}
				}]
			},
			{
				block: 'text',
				attrs: { id: 'item_outside-space' },
				mods: { size: 'xxl', weight: 'bold' },
				mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
				content: 'Outside space'
			},
			{
				block: 'wrap',
				attrs: { style: 'display: flex; align-items: flex-start;' },
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
				content: [
				{
					elem: 'col',
					attrs: { style: 'width: 50%; flex-shrink: 0;' },
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
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: 'mods: { border: \'all\' },'
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
						content: 'elem: \'item\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { \'indent-a\': \'l\' }'
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'ghost' },
						mix: { block: 'decorator', mods: { 'indent-l': 'l' } },
						content: '},'
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
						content: 'elem: \'item\','
					},
					{
						block: 'text',
						mods: { size: 'm', font: 'mono', view: 'primary' },
						mix: { block: 'decorator', mods: { 'indent-l': 'xxxl' } },
						content: 'elemMods: { \'indent-h\': \'l\', \'indent-v\': \'s\' }'
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
					attrs: { style: 'flex-grow: 1; background: url(\'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ4LjEgKDQ3MjUwKSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5Hcm91cDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PC9yZWN0PgogICAgICAgIDxwYXR0ZXJuIGlkPSJwYXR0ZXJuLTMiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgeD0iLTIwIiB5PSItMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZS00Ij48L3VzZT4KICAgICAgICA8L3BhdHRlcm4+CiAgICAgICAgPGltYWdlIGlkPSJpbWFnZS00IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUVEV2xEUTFCSlEwTWdVSEp2Wm1sc1pRQUFPSTJOVlYxb0hGVVVQcnR6WnlNa3psTnNOSVYwcUQ4TkpRMlRWalNodExwLzNkMDJicFpKTnRvaTZHVDI3czZZeWM0NE03djlvVTlGVUh3eDZwc1V4TCszZ0NBbzlRL2JQclF2bFFvbDJ0UWdLRDYwK0lOUTZJdW02NWs3TTVscHVySGVaZTU4ODUzdm5udnV1V2Z2QmVpNXFsaVdrUlFCRnBxdUxSY3k0bk9IajRnOUs1Q0VoNkFYQnFGWFVSMHJYYWxNQWpaUEMzZTFXOTlEd250ZjJkWGQvcCt0dDBZZEZTQnhIMkt6NXFnTGlJOEI4S2RWeTNZQmV2cVJIei9xV2g3Mll1aTNNVURFTDNxNDRXUFh3M00rZm8xcFp1UXM0dE9JQlZWVGFvaVhFSS9NeGZoR0RQc3hzTlpmb0UxcTY2cm81YUppbTNYZG9MRnc3MkgrbjIzQmFJWHpiY09uejVtZlBvVHZZVno3S3pVbDUrRlJ4RXVxa3A5Ry9BamlhMjE5dGh6ZzI1YWJrUkUvQnBEYzNwcXZwaEh2UkZ5czJ3ZXF2cCtrcmJXS0lYN25oRGJ6TE9JdGlNODM1OHBUd2RpcnFwUEZuTUYyeExjMVd2THlPd1RBaWJwYm12SEhjdnR0VTU3eTUrWHFOWnJMZTNsRS9QcThlVWoyZlhLZk9lM3BmT2p6aEpZdEIveWxsNVNERmNTRGlIK2hSa0gyNStMK3NkeEtFQU1aYWhybFNYOHVrcU1PV3kvalhXMm02TTlMREJjMzFCOUxGdXY2Z1ZLZy8wU3ppM0tBcjFrR3ExR01qVS9hTGJucTYvbFJ4YzRYZko5OGhUYXJnWCsrRGJNSkJTaVlNSWU5Q2sxWUF4RmtLRUFHM3hiWWFLbUREZ1l5RkswVUdZcGZvV1lYRytmQVBQSTZ0Sm5Od2I3Q2xQN0l5RitEK2JqT3RDcGtoejZDRnJJYS9JNnNGdE5sOGF1RlhHTVRQMzRzTndJL0poa2dFdG1EejE0eVNmYVJjVElCSW5tS1BFMzJreHl5RTJUdit0aEtiRVZlUERmVy9ieU1NMUttbTBYZE9iUzdvR0QvTXlwTVhGUFhyQ3dPdG9Zanl5bjdCVjI5L01aZnNWenBMRGRSdHVJWm5icFh6dmxmK2V2OE12WXIvR3FrNEgva1YvRzNjc2Rhekx1eVRNUHNiRmh6ZDFVYWJRYmpGdkRSbWNXSnhSM3pjZkhrVnc5R2ZwYkptZWV2OUYwOFdXOHVEa2FzbHdYNmF2bFdHVTZOUkt6MGcvU0h0Q3k5SjMwby9jYTl6WDNLZmMxOXpuM0JYUUtSTzh1ZDQ3N2hMbkFmYzEvRzltcnpHbHJmZXhaNUdMZG42WlpyckVvaEkyd1ZIaFp5d2piaFVXRXk4aWNNQ0dOQ1VkaUJscTNyK3hhZkw1NDlIUTVqSCthbisxeStMbFlCaWZ1eEF2Uk4vbFZWVk9sd2xDa2RWbTlOT0w1QkU0d2tRMlNNbERaVTk3aFg4NkVpbFUvbFVta1FVenRURTZteDFFRVBoN09tZHFCdEF2djhIZFdwYnJKUzZ0SmozbjBDV2RNNmJ1c056UlYzUzlLVFlocXZOaXFXbXVyb2lLZ1loc2hNam1oVGg5cHRXaHNGNzk3MGovU2JNcnNQRTFzdVI1ejdETUMrUC9Icyt5N2lqclFBbGh5QWdjY2piaGpQeWdmZUJUanpoTnF5MjhFZGtVaDhDK0RVOSt6MnYvb3llSDc5MU9uY3hIT3M1eTJBdFRjN25iL2Y3M1RXUGtEL3F3Qm5qWDhCb0o5OFZWQmcvbThBQUFCSlNVUkJWRGdSN1pPeERRQXdDTU9nZS83L0V3NmdmUUFVcEk3SkNCYURSVHdpeW9nQUlDaXpRMUVMU0FjWHNocFVEaHN4aTdIWEM4Tm5Kb09wS1pTbEdkSmp6MzZZN1hlSEY4ZHdDdmd3U1dsK0FBQUFBRWxGVGtTdVFtQ0MiPjwvaW1hZ2U+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iR3JvdXAiPgogICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+CiAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgaWQ9Ik1hc2siIGZpbGw9IiNEOEQ4RDgiIHhsaW5rOmhyZWY9IiNwYXRoLTEiPjwvdXNlPgogICAgICAgICAgICA8ZyBpZD0iXy0vLWNhbnZhcyIgZmlsbD0idXJsKCNwYXR0ZXJuLTMpIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUtMTQiIHg9IjAiIHk9IjAiIHdpZHRoPSI4NDQiIGhlaWdodD0iMTg4MyI+PC9yZWN0PgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=\');' },
					mix: { block: 'decorator', mods: { 'space-a': 'l' } },
					content: {
						block: 'pt-list',
						mods: { border: 'all', view: 'default' },
						content: [
						{
							elem: 'item',
							elemMods: { 'indent-a': 'l', 'distribute': 'default' },
							attrs: { style: 'align-items: center; background: lightpink;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						},
						{
							elem: 'item',
							elemMods: { 'indent-h': 'l', 'indent-v': 's', 'distribute': 'default' },
							attrs: { style: 'align-items: center; background: lightpink;' },
							content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center' },
								mix: { block: 'decorator', mods: { 'indent-r': 'l' } },
								content: [
								{
									elem: 'icon',
									elemMods: { 'indent-right': 's' },
									mix: { block: 'brand-logo', mods: { view: 'tele2', size: 'xs' } }
								},
								{
									elem: 'block',
									mix: { block: 'text', mods: { size: 'm' } },
									content: 'Shut up and take my money'
								}]
							},
							{
								block: 'text',
								mods: { size: 'm', view: 'income', align: 'right' },
								content: '+ 1 000 ₽'
							}]
						}]
					}
				}]
			}]
			// <--- PT-LIST__ITEM MODIFICATORS //
		},
		{
			elem: 'footer'
		}]
	}]
};