block('demo').elem('nav')(
	content()(function(n, ctx) {
		return [
		{
			block: 'demo',
			elem: 'menu-close',
			elemMods: { state: 'hidden' },
			mix: { block: 'pt-surface', elem: 'close' }
		},
		{
			elem: 'nav-list',
			content: [
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'demoMenuModal', 'data-section': 'tools' },
				mix: [{ block: 'text', mods: { size: 'xl', transform: 'uppercase', view: 'primary', spacing: 'xs', font: 'mono' } }, { block: 'link', url: '#' }, { block: 'pt-surface', elem: 'action' }],
				content: 'Tools'
			},
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'demoMenuModal', 'data-section': 'documents' },
				mix: [{ block: 'text', mods: { size: 'xl', transform: 'uppercase', view: 'primary', spacing: 'xs', font: 'mono'  } }, { block: 'link', url: '#' }, { block: 'pt-surface', elem: 'action' }],
				content: 'Docs'
			},
			{
				elem: 'nav-item',
				attrs: { 'data-name': 'demoMenuModal', 'data-section': 'projects' },
				mix: [{ block: 'text', mods: { size: 'xl', transform: 'uppercase', view: 'primary', spacing: 'xs', font: 'mono' } }, { block: 'link', url: '#' }, { block: 'pt-surface', elem: 'action' }],
				content: 'Projects'
			}]
		}]
	})
);
