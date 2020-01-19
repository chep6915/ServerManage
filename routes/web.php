<?php
set_time_limit(0);  //设定执行时间无限
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//extension=php_fileinfo.dll
//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/', 'Controller@index');
Route::get('/test', 'Controller@test');

//Route::get('/practice/1', 'practice\Less-1');
Route::get('practice', function () {
//    return view('/practice/Less-1/index');
    return File::get(public_path() . '/practice/index.html');
});

//检查网站状态是否200请将清单放置于public/data/url.txt
Route::any('/checkalive', 'Controller@checkAlive');

//日志分析_旧
//Route::get('/analyselog',function(){
//    return view('/analyseLog/index');
//});

//本地日誌分析上傳mysql
Route::get('/analyselog','WebLogController@analyseLog');

//日志分析_新
Route::get('/analyselog_new',function(){
    return view('/analyseLog_new/index');
});
Route::post('/checkrealspider','WebLogController@checkrealspider');

Route::post('/analyselog','WebLogController@analyseLog');

