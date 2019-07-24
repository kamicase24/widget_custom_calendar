# -*- coding: utf-8 -*-
{
    'name': "widget_custom_calendar",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "Jesus Rojas",
    'website': "http://www.github.com/kamicase24",

    'category': 'base',
    'version': '0.1',

    'depends': ['base'],

    'data': [
        'views/templates.xml',
    ],
    'xml': [
        'static/src/xml/widget_custom_calendar.xml',
    ],
}