<?php

use App\Http\Controllers\AuthSanctumController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\PhotosController;
use App\Models\Categories;
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

//Devolver todas las categorias
Route::get('categories', [CategoriesController::class, 'index'])->name('categories');
Route::get('allphotos', [PhotosController::class, 'allphotos'])->name('allphotos');

//Registrar nuevo usuario
Route::post('register', [AuthSanctumController::class, 'register'])->name('register');

//Iniciar sesión
Route::post('loginapi', [AuthSanctumController::class, 'login'])->name('loginapi');


Route::middleware(['auth:sanctum'])->group(function(){
    //Cerrar Sesión
    Route::get('logout', [AuthSanctumController::class, 'logout'])->name('logout');

    //Fotos de Usuario
    Route::get('photos', [PhotosController::class, 'index'])->name('photos');

    //Agregar nueva Foto
    Route::post('/photos/create', [PhotosController::class, 'store'])->name('photos.create');

    //Activar Foto
    Route::post('/photos/active', [PhotosController::class, 'active'])->name('photos.active');
    
    //Desctivar Foto
    Route::post('/photos/deactive', [PhotosController::class, 'deactive'])->name('photos.deactive');

    //Eliminar foto
    Route::post('/photos/delete', [PhotosController::class, 'destroy'])->name('photos.delete');

});