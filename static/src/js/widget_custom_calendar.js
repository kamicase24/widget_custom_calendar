odoo.define('widget_custom_calendar.widget_custom_calendar', function(require){
    "use strict";

    var core = require('web.core')
    var Widget = require('web.AbstractAction');
    var ajax = require('web.ajax');
    var ControlPanelMixin = require('web.ControlPanelMixin')
    var rpc = require('web.rpc')

    var CustomCalendarWidget = Widget.extend(ControlPanelMixin, {
        template: 'CustomCalendarWidget',
        init: function(parent, vals){
            this._super(parent)
            var self = this
            this.order_lines = []

            $.ajax({
                url: '/custom_calendar',
                type: 'POST',
                data: false,
                success: function(lines){
                    lines = JSON.parse(lines)
                    self.order_lines = lines[0]
                }
            })
        },
        start: function(){
            this._super()
            var self = this
            setTimeout(function(){
                self.render_calendar()
            }, 1000)
        },
        render_calendar: function(product=[]){
            
            var self = this
            var calendarEl = this.$el.find('#calendar')[0]
            $(calendarEl).empty()
            this.rented_products = []

            self.order_lines.forEach(function(l){
                self.rented_products.push({
                    title: l.product_name,
                    start: moment(l.jnq_delivery_date).format('YYYY-MM-DD'),
                    end: moment(l.jnq_return_date).add(1, 'days').format('YYYY-MM-DD')
                })
            })

            var calendar = new FullCalendar.Calendar(calendarEl, {
                plugins: [ 'interaction', 'dayGrid' ],
                locale: 'es',
                defaultDate: moment().format('YYYY-MM-DD'),
                editable: false,
                eventLimit: true,
                events: [], // some values
                height: "parent",
                eventClick: function(info){
                    console.log("do something", info)
                },
            })
            calendar.render()
        },
        renderElement: function(){
            return this._super()
        }
    })

    core.action_registry.add('custom-calendar-widget', CustomCalendarWidget)
})