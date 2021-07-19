import { RichText, useBlockProps } from '@wordpress/block-editor';
import BorderStyleControl from '../border-style-control';

const { registerBlockType } = wp.blocks;
const { InspectorControls, PanelColorSettings, getColorClassName, withColors } = wp.blockEditor;
const { Fragment } = wp.element;
const {
    //Toolbar,
    //Button,
    //Tooltip,
	PanelBody,
    PanelRow,
    //FormToggle,
} = wp.components;

const { __ } = wp.i18n;
 
const BlockWithColorSettings = (props) => {
	const { borderColor, setBorderColor, textColor, setTextColor, backgroundColor, setBackgroundColor, setAttributes } = props;  // Props received from withColors

	//get attributes (except for the color ones) out of the attributes sent in
	let blockText = props.attributes.blockText;
	let borderWidth = props.attributes.borderWidth;
	let borderStyle = props.attributes.borderStyle;

	let divClass = '';
	let divStyles = {borderWidth: borderWidth + 'px', borderStyle: borderStyle };
	//let divStyles = {};

	if (borderColor != undefined) {
		if (borderColor.class != undefined) {
			divClass = borderColor.class;
		} else {
			divStyles.borderColor = borderColor.color;
		}
	}

	if (textColor != undefined) {
		if (textColor.class != undefined) {
			divClass += ' ' + textColor.class;
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

	//console.log("divClass is:", divClass);
	//console.log("PanelColorSettings is:", PanelColorSettings);
	return(
		<Fragment>
			<InspectorControls>
				<PanelBody title="Border">
					<PanelRow>
						<BorderStyleControl
							label={__('Style')}
							value = { borderStyle }
							onChange = { (borderStyle) => {console.log("New border style: " + borderStyle); setAttributes( { borderStyle })} }
						/>
					</PanelRow>		
					<PanelRow>
						...border size...
					</PanelRow>
					<PanelRow>
						<PanelColorSettings 
							title={__('Color')}
							colorSettings={[
								{
									value: borderColor.color,
									onChange: setBorderColor,
									label: __('Color')
								}
							]}
						/>
					</PanelRow>			
				</PanelBody>

				<PanelColorSettings 
					title={__('Text and Background')}
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
			<div {...useBlockProps() } className={divClass} style={divStyles} >
				<RichText
					className="block__text"
					//keepPlaceholderOnFocus
					onChange={ ( blockText ) => setAttributes( { blockText } ) }
					placeholder={ __( 'Enter your text here...', 'wholesome-plugin' ) }
					tagName="span"
					value={ blockText }
				/>
			</div>
		</Fragment>
	);
}
 
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
			default: 10
		}
	},
	//edit: BlockWithColorSettings,
	edit: withColors({borderColor: 'border-color', textColor: 'color', backgroundColor: 'background-color'})(BlockWithColorSettings),
	save: (props) => { 
    	const { borderColor, customBorderColor, textColor, customTextColor, backgroundColor, customBackgroundColor, blockText, borderStyle, borderWidth } = props.attributes;
    	let divClass = '';
    	let divStyles = {borderWidth : borderWidth + 'px', borderStyle: borderStyle};
		//let divStyles = {};

		console.log("on save borderStyle is: " + borderStyle);

		if (borderColor != undefined) {
    		divClass = getColorClassName('border-color', borderColor);
    	}
    	if (customBorderColor != undefined) {
    		divStyles.borderColor = customBorderColor;
    	}

    	if (textColor != undefined) {
    		divClass += ' ' + getColorClassName('color', textColor);
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
    			{ blockText }
    		</div>
    	);
    }
});