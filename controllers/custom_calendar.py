# -*- coding: utf-8 -*-
import json
import base64
import logging
import werkzeug.utils
from datetime import datetime
from datetime import datetime as dt
from odoo import http, tools, _
from odoo.http import request
from odoo.addons.website.controllers.main import QueryURL
from odoo.exceptions import ValidationError
from .BaseDataTables import BaseDataTables
log = logging.getLogger(__name__)


class ProductRentFrontCalendar(http.Controller):


    @http.route('/custom_calendar', type='http', auth='user', method=['POST'], website=False, csrf=False)
    def custom_calendar(self, **kw):
        result = []

        # fill result with data

        return json.dumps(result)

