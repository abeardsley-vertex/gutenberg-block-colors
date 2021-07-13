<?php
/**
 * Plugin Name: myguten 
 * Plugin URI: https://www.vertex.com
 * Description: myguten — is a test plugin for colors
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
