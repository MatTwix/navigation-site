<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\ClassroomsController as AdminClassroomsController;
use App\Http\Controllers\Admin\TeachersController as AdminTeachersController;
use App\Http\Controllers\Admin\SubjectsController as AdminSubjectsController;

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
    return view('welcome');
})->name('.');

Route::group(['prefix' => 'admin', 'as' => 'admin.'], function (){
    Route::view('/', 'admin.index')->name('index');
    Route::resource('/classrooms', AdminClassroomsController::class);
    Route::resource('/teachers', AdminTeachersController::class);
    Route::resource('/subjects', AdminSubjectsController::class);
});

Route::any('{any}', function () {
    return view('welcome');
})->where('any', '^(?!api).*$');