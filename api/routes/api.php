<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PersonajeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::controller(PersonajeController::class)->group(function (){
    Route::get('/personajes', 'index');
    Route::post('/personaje', 'store');
    Route::get('/personaje/{id}', 'show');
    Route::put('/personaje/{id}', 'update');
    Route::delete('/personaje/{id}', 'destroy');
});
