const { registerBlockType } = wp.blocks;
const { InspectorControls, PanelColorSettings, getColorClassName, withColors } = wp.blockEditor;
const { Fragment } = wp.element;
const { __ } = wp.i18n;
 
const BlockWithColorSettings = (props) => {
	const { textColor, setTextColor, backgroundColor, setBackgroundColor } = props;  // Props received from withColors

	let divClass = '';
	let divStyles = {};
	if (textColor != undefined) {
		if (textColor.class != undefined) {
			divClass = textColor.class;
		} else {
			divStyles.color = textColor.color;
		}
	}

	if (backgroundColor != undefined) {
		if (backgroundColor.class != undefined) {
			divClass += ' '+ backgroundColor.class;
		} else {
			divStyles.backgroundColor = backgroundColor.color;
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
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __('Background color')
						},
					]}
				/>
			</InspectorControls>
			<div className={divClass} style={divStyles}>
				This is static text
			</div>
		</Fragment>
	);
}
 
registerBlockType('awp/colorsettings', {
	title: __('Color Settings Demo - in editor!'),
	icon: 'carrot',
	category: 'common',	
	attributes: {
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
	},
	//edit: BlockWithColorSettings,
	edit: withColors({textColor: 'color', backgroundColor: 'background-color'})(BlockWithColorSettings),
	save: (props) => { 
    	const { textColor, customTextColor, backgroundColor, customBackgroundColor } = props.attributes;
    	let divClass = '';
    	let divStyles = {};

    	if (textColor != undefined) {
    		divClass = getColorClassName('color', textColor);
    	}
    	if (customTextColor != undefined) {
    		divStyles.color = customTextColor;
    	}

		if (backgroundColor != undefined) {
    		divClass += ' ' + getColorClassName('background-color', backgroundColor);
    	}
		if (customBackgroundColor != undefined) {
    		divStyles.backgroundColor = customBackgroundColor;
    	}

    	return(
    		<div className={divClass} style={divStyles}>
    			This is static text
    		</div>
    	);
    }
});