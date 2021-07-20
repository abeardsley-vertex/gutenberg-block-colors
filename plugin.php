<?php
/**
 * Plugin Name: myguten  - in plugin list left
 * Plugin URI: https://www.vertex.com
 * Description: myguten — in plugin list descritpion area
 * Author: abeardsley
 * Author URI: https://www.vertex.com
 * Version: 1.0.0
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';


//Create a special Gurenberg category 
function my_blocks_plugin_block_categories( $categories ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'vivid-360',
                'title' => __( 'VIVID 360', 'mydomain' ),
                'icon'  => 'carrot',
            ),
        )
    );
}

add_filter( 'block_categories', 'my_blocks_plugin_block_categories', 10, 2 );

