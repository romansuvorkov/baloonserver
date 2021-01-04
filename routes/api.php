<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::resource('child', 'App\Http\Controllers\ChildController');

// Route::resource('bouqet', 'App\Http\Controllers\BouqetController');

// Route::resource('business', 'App\Http\Controllers\BusinessController');

// Route::resource('wedding', 'App\Http\Controllers\WeddingController');

// Route::resource('birthday', 'App\Http\Controllers\BirthdayController');

Route::get('{model}', 'App\Http\Controllers\TestController@index');

Route::get('{model}/{id}', 'App\Http\Controllers\TestController@lazyLoad');
