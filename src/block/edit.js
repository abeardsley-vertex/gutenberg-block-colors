import { RichText, useBlockProps } from '@wordpress/block-editor';
import BorderStyleControl from '../border-style-control';
import { RangeControl } from '@wordpress/components';
const { __ } = wp.i18n;

const { InspectorControls, PanelColorSettings } = wp.blockEditor;
const { Fragment } = wp.element;
const {
    //Toolbar,
    //Button,
    //Tooltip,
    PanelBody,
    PanelRow,
    //FormToggle,
} = wp.components;

const Edit = (props) =>
{
	const { borderColor, setBorderColor, textColor, setTextColor, backgroundColor, setBackgroundColor, setAttributes } = props;  // Props received from withColors

	//get attributes (except for the color ones) out of the attributes sent in
    //the ones above are there "Special" since this thing gets instantiates or whatever using "withColors"
	let blockText = props.attributes.blockText;
	let borderWidth = props.attributes.borderWidth;
	let borderStyle = props.attributes.borderStyle;

	let divClass = '';
	let divStyles = {borderWidth: borderWidth + 'px', borderStyle: borderStyle };

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
						<RangeControl
							label="Width"
							value={ borderWidth }
							onChange={ (borderWidth) => setAttributes({ borderWidth }) }
							min={ 0 }
							max={ 10 }
						/>
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

export default Edit;