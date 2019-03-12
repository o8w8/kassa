module.exports = {
    block: 'page',
    title: 'Yandex.Kassa Joinups',
    favicon: '/favicon.ico',
    lang: 'ru',
    head: [
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'test.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'test.min.js' }],

    mix: {
        block: 'theme',
        mods: { color: 'kassa',
                space: 'default',
                size: 'default',
                gap: 'medium',
                font: 'Yandex-Sans-Text',
            }
    },
    content: [
       {
			block: 'tpl-layout',
			mods: {structure: '20-60-20'},
			content: [
      			{
      				elem: 'section'
                },
	            {
                    elem: 'section',
                    content: [
                        {
                            elem: 'container',
                            content: [
                                {
                                    block:'brand-logo',
                                    mix: {block: 'decorator', mods: { 'indent-t': 'xxxxl', 'indent-b': 'xxxl' , 'indent-r': 'xxxxl', 'indent-l': 'xxxxl' }},
                                    attrs: {
                                  //src: './Yandex_Kassa_logo.png',
                                        style: 'background-image: url(./Yandex_Kassa_logo.png);'
                                        + 'display: block;'
                                        + 'margin-left: auto;'
                                        + 'margin-right: auto;'
                                        + 'width: 262px;'
                                        + 'height: 72px;',
                                    },
                                },
                                {
                                    block: 'bg-kassa',
                                    mix: {block: 'decorator', mods: { 'indent-t': 'xxxl'},},
                                    content: [
                                        {
                                            block: 'text',
                                            mix: {block: 'decorator', mods: { 'indent-t': 'xxxxxl'}},
    			                            mods: { size: 'xxxl', view: 'primary', weight: 'bold', align: 'left' },
                                            attr: 'margin-top: 60px;',
                                            content: 'Подключение Кассы',
    		                            },

                                        {
                                            block: 'text',
                                            mix: {block: 'decorator', mods: { 'indent-t': 'xxxxl', 'indent-b': 'xs' }},
                                            mods: { size: 'm', view: 'primary', weight: 'normal', align: 'left' },
                                            content: 'Выберите аккаунт',
                                        },

                                        {
                                           block: 'tpl-grid',
                                           mix: {block: 'decorator', mods: {'indent-t': 'l'}},
                                           mods: { columns: '12', 'col-gap': 'third', 'row-gap': 'half' },
                                           content: [
                                               {
                                                   elem: 'fraction',
                                                   elemMods: { col: '6' },
                                                   content: [
                                                       {
                                                           block: 'pt-icon-plus',
                                                           mods: {'vertical-align' : 'center'},
                                                           mix: {block: 'user-account'},
                                                           attrs: {
                                                               style:
                                                               'height: 70px;'},
                                                           content: [
                                                               {
                                                                   elem: 'icon',
                                                                   content: {
                                                                       block:'image',
                                                                       mix: {block: 'decorator', mods: {'indent-l': 'l', 'indent-t': 'm', 'indent-b': 'm'}},
                                                                       url: './user-acc.png'
                                                                   }
                                                               },
                                                               {
                                                                   elem: 'block',
                                                                   content: [
                                                                       {
                                                                           block: 'text',
                                                                           mix: {block: 'decorator', mods: {'indent-l': 's' }},
                                                                           mods: {'size' : 's', 'view':'default','weight': 'bold', 'align' :'left'},
                                                                           attrs: {
                                                                               style: 'overflow: hidden;'
                                                                               + 'position:relative'
                                                                           },

                                                                           content: 'Мария Петрова'
                                                                       },
                                                                       {
                                                                           block: 'text',
                                                                           mix: {block: 'decorator', mods: {'indent-l': 's'}},
                                                                           mods: {'size' : 's', 'view':'secondary','weight': 'normal', 'align' :'left', 'display': 'inline-block'},

                                                                           content: 'mpetrova@yandex.ru',
                                                                       }
                                                                   ]
                                                               }
                                                           ],
                                                       },
                                                   ],
                                               },
                                               {
                                                   elem: 'fraction',
                                                   elemMods: { col: '6' },
                                                   content: [
                                                       {
                                                           block: 'pt-icon-plus',
                                                           mods: {'vertical-align' : 'center'},
                                                           mix: {block: 'add-user'},
                                                           content: [
                                                               {
                                                                   elem: 'icon',
                                                                   content: {
                                                                       block: 'image',
                                                                       mix: {block: 'decorator', mods: {'indent-l': 'l', 'indent-t': 'm', 'indent-b': 'm'}},
                                                                       url: './icon-add.svg',
                                                                   }
                                                               },
                                                               {
                                                                   elem: 'block',
                                                                   content: [
                                                                       {
                                                                           block: 'text',
                                                                           mix: {block: 'decorator', mods: {'indent-l': 's'}},
                                                                           mods: {'size' : 's', 'weight': 'bold', 'align' :'left',},
                                                                           content: 'Создать новый →'
                                                                       },

                                                                   ]
                                                               }
                                                           ],
                                                       },
                                                   ],
                                               },
                                           ],
                                       },

                                        {
                                            block: 'tpl-grid',
                                			mods: { columns: '12', 'col-gap': 'third', 'row-gap': 'half' },
                                			content: [
                                                {
                                                    elem: 'fraction',
                                                    elemMods: { col: '6' },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mix: { block: 'decorator', mods: { 'indent-t': 'xxxl', 'indent-b': 'xxxl'}},
                                                            mods: {'align':'left', 'display': 'block', 'vertical-align' : 'center'},
                                                            attrs: {
                                                                style: 'line-height: 48px'
                                                            },

                                                            content: 'Где зарегистрирована организация',

                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'fraction',
                                                    elemMods: { col: '6' },
                                                    content: [
                                                        {
                                                            block: 'tag-selected',
                                                            mods: {active: false},

                                                            mix: [

                                                                { block: 'decorator', mods: { 'indent-t': 'xxxl','indent-b': 'xxxl'} },
                                                            ],
			                                                content: [
                                                                {
                                                                block: 'text',
                                                                mods: {size: 'm'},
                                                                content: 'В России',
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            block: 'tag-selected',
                                                            mods: {active: true},

                                                            mix: [

                                                                { block: 'decorator', mods: { 'indent-t': 'xxxl', 'indent-b': 'xxxl'} },
                                                            ],
                                                            content: [
                                                                {
                                                                    block: 'text',

                                                                    mods: {'size': 'm', 'view': 'link' },
                                                                    content: 'За рубежом',
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },

                                            ],
                                        },
                                        {
                                            block: 'icon-text',
                                            attrs: {
                                                style: 'display: flex; flex-direction: row;'
                                            },
                                            content: [
                                                {
                                                    block:'text',
                                                    mods: { 'size': 's', 'view':'primary', 'weight':'bold'},
                                                    mix: [
                                                        { block: 'decorator', mods: { 'indent-r': 'xs'} },
                                                    ],
                                                    content: 'Название организации или ИНН'
                                                },
                                                {
                                                elem: 'icon',
                                                elemMods: {'view':'link'},
                                                content: [
                                                    {
                                                        block: 'image',
                                                        mods: { 'size': 's', 'view': 'primary' },
                                                        url: './icon-q.svg',

                                                    }

                                                    ]
                                                }
                                            ]
                                        },

                                        {
                                            tag: 'input',
                                            block: 'kassa-input',
                                            mods: {
                                                theme: 'simple',
                                                width: 'available'
                                            },
                                            attrs: {
                                                placeholder: 'Найдите свою организацию по ИНН или названию',
                                            },
                                            mix: [
                                                {block: 'decorator', mods: { 'indent-t': 'xs'}},

                                            ]

                                    },
                                    {
                                        block: 'kassa-button',
                                        mix: {block: 'decorator', mods: { 'indent-t': 'xxxxxxl'}},
                                        content: [
                                            {
                                                block: 'text',
                                                mods: {'size': 'm', 'display': 'inline-block', 'view': 'disable', 'align': 'center'},
                                                content:'Подключить',
                                            },
                                        ]
                                    },

                                    {
                                        block: 'text',
                                        attrs: {
                                            style: 'display: flex; flex-direction: row;'
                                        },
                                        mix: [ {block: 'decorator', mods: { 'indent-t': 'l', 'indent-b': 'xxxxxl'}}, ],
                                        content: [
                                            {
                                                block: 'text',
                                                mods: {'size': 's', 'view': 'secondary'},
                                                content: ' Вы принимаете ' + '',},
                                             {
                                                 block: 'text',
                                                 mods: {'size': 's', 'view': 'link'},
                                                 content: '\u00A0условия использования личного кабинета',},
                                                    ],
                                    },

                                    ]
                                },

                                {
                                    block: 'tpl-grid',
                                    mix: {block: 'decorator', mods: {'indent-t': 'xxxxl'}},
                                    mods: { columns: '12', 'col-gap': 'third', 'row-gap': 'half' },

                                    content: [
                                        {
                                            elem: 'fraction',
                                            elemMods: { col: '6' },
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {'size': 's', 'display': 'inline-block', 'view': 'secondary', 'align': 'left'},
                                                    content: '© 2019, НКО «Яндекс.Деньги»',

                                                },
                                                {
                                                    block: 'text',
                                                    mods: {'size': 's', 'display': 'inline-block', 'view': 'link', 'align': 'left'},
                                                    mix: {block: 'decorator', mods: {'indent-l': 'm'}},
                                                    content: 'English',
                                                }, ],
                                        },
                                        {
                                            elem: 'fraction',
                                            elemMods: { col: '6' },
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: {'size': 's', 'display': 'block', 'view': 'link', 'align': 'right'},
                                                    content: 'Помощь →',

                                                },

                                            ],

                                        },
                                    ],
                                }
                            ]
                        },

                    ]
                },
      			{
      				elem: 'section'
      			}
            ],
        }
    ],
};

//{} - объект {key: value}
//[] - массив [a, s, d, f, g]
