([
	{
		shouldDeps: [
			{ block: 'demo', elem: 'plug-card' },
			{ block: 'demo', elem: 'plug-content' },
			{ block: 'demo', elem: 'plug-illustration' },
			{ block: 'demo', elem: 'plug-description' },
			{ block: 'demo', elem: 'plug-action' },
			{ block: 'demo', elem: 'plug-soclink', elemMods: { icon: ['telegram', 'twitter'] } },
			{ block: 'demo', elem: 'plug-button' },
			
			{ block: 'pt-card'},
			{ block: 'pt-card', elem: 'content', elemMods: { 'space-a': 'xxl', 'space-t': 'xxxl' } },
			{ block: 'pt-card', elem: 'image' },
			{ block: 'pt-card', elem: 'footer', elemMods: { 'space-a': 'xxl', 'space-b': 'xxxl', 'align': 'between' } },
			
			{ block: 'decorator', mods: { 'indent-b': 'xxl' } },
			
			{ block: 'image' },
			
			{ block: 'text', mods: { font: 'mono', size: 'xxl', weight: 'bold', style: 'italic', display: 'inline' }},
			
			{ block: 'button', mods: { theme: 'promo', 'size': 'xl', type: 'link', view: 'action', font: 'mono', weight: 'bold', shadow: 'action' } }
		]
	}
])
