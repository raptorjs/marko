module.exports = require('marko/widgets/legacy').defineComponent({
	template: require.resolve('./template.marko'),

	getTemplateData: function(state, input) {
		return {
			name: input.name,
            messageCount: input.messageCount
		};
	}
});