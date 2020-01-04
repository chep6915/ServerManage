<?php

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

//Route::get('/', function () {
//    return view('welcome');
//});

Route::get('/', 'Controller@index');

//Route::get('/practice/1', 'practice\Less-1');
Route::get('practice', function () {
//    return view('/practice/Less-1/index');
    return File::get(public_path() . '/practice/index.html');
});

Route::any('/checkAlive', 'Controller@checkAlive');

