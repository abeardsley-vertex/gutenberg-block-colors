const { registerBlockType } = wp.blocks;
const { InspectorControls, PanelColorSettings, getColorClassName, withColors } = wp.blockEditor;
const { Fragment } = wp.element;
const { __ } = wp.i18n;
 
const BlockWithColorSettings = (props) => {
	const { textColor, setTextColor } = props;  // Props received from withColors

	let divClass;
	let divStyles = {};
	if (textColor != undefined) {
		if (textColor.class != undefined) {
			divClass = textColor.class;
		} else {
			divStyles.color = textColor.color;
		}
	}

	return(
		<Fragment>
			<InspectorControls>
				<PanelColorSettings 
					title={__('Color settings')}
					colorSettings={[
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __('Text color')
						},
					]}
				/>
			</InspectorControls>
			<div className={divClass} style={divStyles}>
				This is default text
			</div>
		</Fragment>
	);
}
 
registerBlockType('awp/colorsettings', {
	title: __('Color Settings Demo!'),
	icon: 'carrot',
	category: 'common',	
	attributes: {
		textColor: {
			type: 'string'
		},
		customTextColor: {
			type: 'string'
		},
	},
	//edit: BlockWithColorSettings,
	edit: withColors({textColor: 'color'})(BlockWithColorSettings),
	save: (props) => { 
    	const { textColor, customTextColor } = props.attributes;
    	let divClass;
    	let divStyles = {};
    	if (textColor != undefined) {
    		divClass = getColorClassName('color', textColor);
    	}
    	if (customTextColor != undefined) {
    		divStyles.color = customTextColor;
    	}
    	return(
    		<div className={divClass} style={divStyles}>
    			PanelColorSettings Demo
    		</div>
    	);
    }
});