import Edit from './edit';
import save from './save';

const { withColors } = wp.blockEditor;
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('abeardsley/colorsettings', {
	title: __('Color Settings Demo - in editor!'),
	icon: 'carrot',
	category: 'common',	
	attributes: {
		borderColor: {
			type: 'string'
		},
		customBorderColor: {
			type: 'string'
		},
		textColor: {
			type: 'string'
		},
		customTextColor: {
			type: 'string'
		},
		backgroundColor: {
			type: 'string'
		},
		customBackgroundColor: {
			type: 'string'
		},
		blockText: {
			default: 'Default text to edit',
			type: 'string',
		},

		borderStyle: {
			type: 'string',
			default: 'none'
		},

		borderWidth: {
			type: 'integer',
			default: 0
		}
	},
	edit: withColors({borderColor: 'border-color', textColor: 'color', backgroundColor: 'background-color'})(Edit),
	save: props => save(props)
});