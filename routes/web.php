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

Route::get('/', function () {
//    \Illuminate\Support\Facades\Auth::logout();
    return view('layouts.app');
});

Route::get('/auth/user', function () {
    return \Illuminate\Support\Facades\Auth::user() ?? null;
});

Auth::routes();

Route::get('/home', 'HomeController@index')
     ->name('home');

Route::post('/post/create','PostController@store');
Route::get('/post','PostController@index');
