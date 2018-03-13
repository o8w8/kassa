([
	{
		shouldDeps: [
			{ block: 'theme', mods: { color: 'default', space: 'default', size: 'default', gap: [ 'large', 'medium', 'small' ], menu: 'default', breakpoint: 'default',   } },


			{ block: 'tpl-grid', mods: { 'col-gap': ['full', 'half', 'none', 'third', 'two-thirds'],
										 'columns': ['10', '12'],
										 'ratio': ['1-1-1-1-1-1', '1-1-1-1-1', '1-1-1-1', '1-1-1', '1-1'],
										 'row-gap': ['full', 'half', 'none', 'third', 'two-thirds'] } },
			{ block: 'tpl-grid', elem: 'fraction', mods: { col: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
														's-col': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
														'm-col': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
														'row': ['1', '2', '3', '4'],
														'l-col': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
														'xl-col': ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] } },


			{ block: 'tpl-layout', mods: { structure: ['10-90', '20-60-20', '30-70', '50-50', '70-30', '90-10', 'fold-100', 'fold-25-50-25', 'fold-30-70', 'fold-50-50', 'fold-70-30', 'unfold-100', 'unfold-25-50-25', 'unfold-30-70', 'unfold-50-50', 'unfold-70-30'] } },
			{ block: 'tpl-layout', elem: 'container', mods: { align: 'center',
															  size: ['full', 'm', 's', 'xs'] } },
			{ block: 'tpl-layout', elem: 'content' },
			{ block: 'tpl-layout', elem: 'heading' },
			{ block: 'tpl-layout', elem: 'panel' },
			{ block: 'tpl-layout', elem: 'section' },


			{ block: 'pt-avatar' },
			{ block: 'pt-avatar', elem: 'photo', mods: { size: ['xs', 's', 'm', 'l'] } },



			{ block: 'pt-badge', mods: { view: ['alert', 'default', 'inverse', 'success', 'warning'] } },



			{ block: 'pt-card', mods: { border: ['all'],
										shadow: ['cloud'],
										view: ['default', 'inverse'] } },
			{ block: 'pt-card', elem: 'content', mods: { 'space-a': ['xs', 's', 'm', 'l', 'xl', 'xxl'],
														 'space-b': ['xs', 's', 'm', 'l', 'xl', 'xxl'],
														 'space-h': ['xs', 's', 'm', 'l', 'xl', 'xxl'],
														 'space-l': ['xs', 's', 'm', 'l', 'xl', 'xxl'],
														 'space-r': ['xs', 's', 'm', 'l', 'xl', 'xxl'],
														 'space-t': ['xs', 's', 'm', 'l', 'xl', 'xxl'],
														 'space-v': ['xs', 's', 'm', 'l', 'xl', 'xxl'] } },
			{ block: 'pt-card', elem: 'footer' },
			{ block: 'pt-card', elem: 'footer', mods: { 'align': ['between'],
														'space-a': ['xs', 's', 'm', 'l', 'xl', 'xxl'],
														'space-b': ['xs', 's', 'm', 'l', 'xl', 'xxl'],
														'space-h': ['xs', 's', 'm', 'l', 'xl', 'xxl'],
														'space-v': ['xs', 's', 'm', 'l', 'xl', 'xxl'] } },
			{ block: 'pt-card', elem: 'header', mods: { 'space-a': ['xs', 's', 'm', 'l', 'xl', 'xxl'],
														'space-h': ['xs', 's', 'm', 'l', 'xl', 'xxl'],
														'space-v': ['xs', 's', 'm', 'l', 'xl', 'xxl'] } },
			{ block: 'pt-card', elem: 'image', mods: { 'shadow': ['bottom-default', 'bottom-inverse', 'top-default', 'top-inverse'],
													   'size': ['cover'] } },
			{ block: 'pt-card', elem: 'item' },
			{ block: 'pt-card', elem: 'play' },



			{ block: 'pt-dialog', mods: { align: ['action'],
										  border: ['all'],
										  view: ['default', 'inverse', 'ghost'] } },
			{ block: 'pt-dialog', elem: 'action' },
			{ block: 'pt-dialog', elem: 'content' },



			{ block: 'pt-flex', mods: { border: 'all',
										shadow: 'cloud',
									   'space-a': ['xs', 's', 'm', 'l'],
									   'space-h': ['xs', 's', 'm', 'l'],
									   'space-v': ['xs', 's', 'm', 'l'],
									   'status': ['alert', 'default', 'success', 'warning'],
									   'view': 'stripe' } },
			{ block: 'pt-flex', elem: 'col', mods: { align: ['center', 'right'],
														 width: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100'] } },



			{ block: 'pt-form', mods: { border: 'all',
										shadow: 'cloud',
										view: ['default', 'ghost', 'inverse'] } },
			{ block: 'pt-form', elem: 'event' },
			{ block: 'pt-form', elem: 'item', mods: { border: ['all', 'bottom', 'top'],
													  distribute: ['between', 'default'],
													 'indent-a': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-b': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-h': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-l': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-r': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-t': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-v': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'space-a': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'space-b': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'space-h': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'space-l': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'space-r': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'space-t': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'space-v': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'type': 'action' } },
			{ block: 'pt-form', elem: 'label', mods: { width: ['default', 'inverse'] } },



			{ block: 'pt-icon-plus', mods: { distribute: ['between', 'default'],
											 'vertical-align': ['center', 'top', 'bottom'],
											 indent: ['l', 'm', 's', 'xs', 'xxs'] } },
			{ block: 'pt-icon-plus', elem: 'block' },
			{ block: 'pt-icon-plus', elem: 'icon', mods: { 'indent-right': ['l', 'm', 's', 'xs', 'xxs'],
														   'indent-left': ['l', 'm', 's', 'xs', 'xxs'] } },



			{ block: 'pt-informer', mods: { border: 'all', view: ['alert', 'normal', 'success', 'warning'] } },
			{ block: 'pt-informer', elem: 'action', mods: { 'space-a': ['l', 'm', 's', 'xl', 'xxl'],
															'space-b': ['l', 'm', 's', 'xl', 'xxl'],
															'space-h': ['l', 'm', 's', 'xl', 'xxl'],
															'space-v': ['l', 'm', 's', 'xl', 'xxl'] } },
			{ block: 'pt-informer', elem: 'col' },
			{ block: 'pt-informer', elem: 'content', mods: { align: 'center',
															 distribute: ['between', 'default'],
															'space-a': ['l', 'm', 's', 'xl', 'xxl'],
															'space-h': ['l', 'm', 's', 'xl', 'xxl'],
															'space-v': ['l', 'm', 's', 'xl', 'xxl'] } },



			{ block: 'pt-list', mods: { border: 'all', shadow: 'cloud', view: ['default', 'ghost', 'inverse'] } },
			{ block: 'pt-list', elem: 'item', mods: { border: ['bottom', 'left', 'right', 'top'],
													  distribute: ['between', 'default'],
													 'indent-a': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-b': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-h': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-l': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-t': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-r': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'indent-v': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl'],
													 'space-a': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
													 'space-b': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
													 'space-h': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
													 'space-l': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
													 'space-r': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
													 'space-t': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'],
													 'space-v': ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs'] } },



			{ block: 'pt-surface' },
			{ block: 'pt-surface', elem: 'close', mods: { view: ['desktop', 'mobile'] } },
			{ block: 'pt-surface', elem: 'content', mods: { size: ['full', 'm', 's', 'xs'],
														   'space-a': ['l', 'm', 's', 'xl'],
														   'space-b': ['l', 'm', 's', 'xl'],
														   'space-h': ['l', 'm', 's', 'xl'],
														   'space-l': ['l', 'm', 's', 'xl'],
														   'space-r': ['l', 'm', 's', 'xl'],
														   'space-t': ['l', 'm', 's', 'xl'],
														   'space-v': ['l', 'm', 's', 'xl'],
															view: ['default', 'inverse'] } },
			{ block: 'pt-surface', elem: 'window' },
			{ block: 'pt-surface', elem: 'window', mods: { view: ['tone', 'soft'] } },



			{ block: 'pt-table', mods: { border: 'all',
										'space-a': ['l', 'm', 's', 'xs'],
										'space-h': ['l', 'm', 's', 'xs'],
										'space-v': ['l', 'm', 's', 'xs'],
										stripe: ['even', 'odd'],
										view: ['default', 'ghost', 'inverse'] } },
			{ block: 'pt-table', elem: 'col', mods: { align: 'right',
													  width: ['5', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80', '85', '90', '95', '100'] } },
			{ block: 'pt-table', elem: 'row', mods: { border: ['bottom', 'top'],
													  status: ['default', 'error', 'success', 'warning'],
													  view: 'head' } },




			{ block: 'text', mods: { align: ['center', 'left', 'right'],
									 decoration: 'underline',
									 display: ['block', 'inline', 'inline-block'],
									 indent: ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxs', 'xxxl', 'xxxs', 'xxxxl'],
									 overflow: ['one-line', 'two-line'],
									 size: ['l', 'm', 's', 'xl', 'xs', 'xxl', 'xxxl', 'xxxxl'],
									 spacing: ['m', 's', 'xs'],
									 style: 'italic',
									 transform: 'uppercase',
									 type: ['blockquote', 'h1', 'h2', 'h3', 'p'],
									 view: ['alert', 'brand', 'disable', 'ghost', 'income', 'inverse', 'letter', 'link-minor', 'link', 'personal', 'promo', 'primary', 'secondary', 'success'],
									 weight: ['bold', 'light', 'regular', 'semibold', 'thin'] } },


			{ block: 'icon', mods: { 'add-1': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'add-2': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'add-user': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'album': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'allert-1': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'allert-2': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'arrow-down': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'arrow-down-2': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'arrow-left': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'arrow-right': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'arrow-up': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'arrow-up-2': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'attention': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'back': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'blog': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'check': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'cheque': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'close': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'comment': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'crop': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'delete-3': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'devices': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'double-arrow-down': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'double-arrow-up': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'enter': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'export': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'fave-1': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'front': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'globe': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'hamburger': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'help': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'list': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'lock': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'mail-1': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'marker': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'next': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'output': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'pause': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'phone-1': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'photo': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'picture': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'play': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'playlist': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'previous': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'refresh': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'repeat': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'repeat-song': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'save': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'shuffle': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'search': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'statistic': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'time': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'track': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'trash': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'user': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'volume': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'],
									 'wait-2': ['m-action', 'm-inverse', 'm-link', 'm-primary', 's-action', 's-disable', 's-ghost', 's-inverse', 's-link', 's-primary', 's-secondary'] } },



			{ block: 'decorator', mods: { 'space-a': ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl'],
										  'space-v': ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'space-h': ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'space-t': ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'space-r': ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'space-b': ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'space-l': ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'indent-a': ['auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'indent-v': ['auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'indent-h': ['auto', 'xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'indent-t': ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'indent-r': ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'indent-b': ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'],
										  'indent-l': ['xxxs', 'xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl', 'xxxxl', 'xxxxxl', 'xxxxxxl'] } },



			{ block: 'brand-logo', mods: { size: ['xxs', 'xs', 's', 'm', 'l', 'xl'],
										   view: ['bape', 'beeline', 'fallon', 'itunes', 'megafon', 'monument-valley-2', 'monument-valley', 'mts', 'ok', 'tele2', 'ustwo', 'vk', 'yota'] } }
		]
	}
])
