import Edit from './edit';								//import our Edit from a separate file
import save from './save';								//import our save function 

const { withColors } = wp.blockEditor;					//used to do some sort of fancy auto manipulation of color attributes with <PanelColorSettings ...>
const { registerBlockType } = wp.blocks;				//required for the main registration of the plugin below
const { __ } = wp.i18n;									//something to do with internationalization of text

registerBlockType('abeardsley/colorsettings', {
	title: __('Color Settings Demo - in editor!'),		//this is the name that will show up in the wordpress post editor
	icon: 'carrot',										//icon from https://developer.wordpress.org/resource/dashicons/
	category: 'vivid-360',								//Custom category in editor list (matches category added in plugin.php)

	// Make it easier to discover a block with 			//How to satisfy this?:  "Components will need to be tagged to help users search for “shared” components"
	// keyword aliases. These can be localised 
	//so your keywords work across locales.
	keywords: [ __( 'shared' ), __( 'consumer' ), __( 'hcp' ),  __( 'payor' )],

	attributes: {										//JS object containing all the attributes that this will save to database
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