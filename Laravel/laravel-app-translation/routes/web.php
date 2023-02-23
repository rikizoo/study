<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TranslationController;

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
});

Route::get('/translation', [TranslationController::class, 'index'])->name('translation-index');
Route::post('/translation', [TranslationController::class, 'translation'])->name('translation-translation');
