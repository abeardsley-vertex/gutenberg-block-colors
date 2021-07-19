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
    //the "withColors" thing that we use to register this object creates these special things for us
	const { borderColor, setBorderColor, textColor, setTextColor, backgroundColor, setBackgroundColor, setAttributes } = props;  // Props received from withColors

	//the remaining attributes that are not a "color picker" need to be gotten from props.attributes
	let blockText = props.attributes.blockText;
	let borderWidth = props.attributes.borderWidth;
	let borderStyle = props.attributes.borderStyle;

	let divClass = '';                          //a string that will hold the list of CSS classes for any colors picked from a color picker's "theme colors"

	let divStyles = {                           //this object represents the element's "style" attribute and will end up as style="foo: bar" in HTML
        borderWidth: borderWidth + 'px', 
        borderStyle: borderStyle 
    };

    //For each of the colors we need to see if the user has picked either a 
    //"theme color" (borderColor.class) or gone into the custom color picker (borderColor.color)
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



                        {
                            /*
                                Each of the attributes of the <BorderStyleControl> below correspond to an argument in the border style control itself:

                                 export default function BorderStyleControl( { onChange, value, label } ) .....

                                "setAttributes" the "value" must be passed in and match the name of the attribute you're looking to modify
                                and it must be wrapped in curly braces "{}" to make it an object otherwise the value will not be saved to the WP database

                            */
                        }
						<BorderStyleControl
							label={__('Style')}
							value = { borderStyle }
							onChange = { (borderStyle) => { setAttributes( { borderStyle } ) } }
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

            {
                //I still have no idea what "...useBlockProps" really does...something about auto-expanding properties....
            }
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