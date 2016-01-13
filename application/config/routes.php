<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|	example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|	http://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There area two reserved routes:
|
|	$route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|	$route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router what URI segments to use if those provided
| in the URL cannot be matched to a valid route.
|
*/

/// admin routes

$route['admin'] = "admin/admin/index";
$route['admin/index'] = "admin/admin/index";
$route['admin/login'] = "admin/login/index";
$route['logout'] = "admin/login/logout";



/// admin pages

$route['admin/managepages'] = "admin/page/index";
$route['admin/managepages/(:any)'] = "admin/page/$1";
$route['admin/managepages/(:any)/(:any)/(:any)'] = "admin/page/$1/$2/$3";


/// admin services

$route['admin/manageservices'] = "admin/manageservices/index";
$route['admin/manageservices/(:any)'] = "admin/manageservices/$1";
$route['admin/manageservices/(:any)/(:any)/(:any)'] = "admin/manageservices/$1/$2/$3";




/// admin Clients

$route['admin/manageclients'] = "admin/admin_clients/index";
$route['admin/manageclients/(:any)'] = "admin/admin_clients/$1";
$route['admin/manageclients/(:any)/(:any)/(:any)'] = "admin/admin_clients/$1/$2/$3";


/// admin Flyers

$route['admin/manageflyers'] = "admin/manageflyers/index";
$route['admin/manageflyers/(:any)'] = "admin/manageflyers/$1";
$route['admin/manageflyers/(:any)/(:any)/(:any)'] = "admin/manageflyers/$1/$2/$3";


//frontend routes
////////////////////////////////////////////////////////

$route['index/(:any)'] = "frontend/index/$1";


// general routes {keep this section always at last}
$route['default_controller'] = "frontend/index";
$route['(:any)'] = "frontend/index";

/* End of file routes.php */
/* Location: ./application/config/routes.php */

$route['404_override'] = 'error';


/* End of file routes.php */
/* Location: ./application/config/routes.php */

