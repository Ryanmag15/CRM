<?php

use App\Http\Controllers\api\AccountController;
use App\Http\Controllers\api\ContactController;
use App\Http\Controllers\api\OpportunityController;
use App\Http\Controllers\api\HonorarioController;
use App\Http\Controllers\api\TaskController;
use App\Http\Controllers\api\CommitmentController;
use App\Http\Controllers\api\ProductController;
use App\Http\Controllers\api\LeadController;
use App\Http\Controllers\api\ActivityController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\UserController;
use App\Http\Controllers\AuthController;


// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::apiResource('user', UserController::class);

Route::post('/login', [AuthController::class, 'login']);


Route::controller(UserController::class)->group(function() {
    Route::get('/users', 'index');
    Route::post('/user', 'store');
    Route::get('/user/{id}', 'show');
    Route::put('/user/{id}', 'update');
    Route::delete('/user/{id}', 'destroy');
});

Route::controller(AccountController::class)->group(function(){
    Route::get('/accounts', 'index');
    Route::post('/account', 'store');
    Route::get('/account/{id}', 'show' );
    Route::put('/account/{id}', 'update' );
    Route::delete('/account/{id}', 'destroy');
});

Route::controller(ContactController::class)->group(function(){
    Route::get('/contacts', 'index');
    Route::post('/contact', 'store');
    Route::get('/contact/{id}', 'show' );
    Route::put('/contact/{id}', 'update' );
    Route::delete('/contact/{id}', 'destroy');
});

Route::controller(OpportunityController::class)->group(function(){
    Route::get('/opportunities', 'index');
    Route::post('/opportunity', 'store');
    Route::get('/opportunity/{id}', 'show' );
    Route::put('/opportunity/{id}', 'update' );
    Route::delete('/opportunity/{id}', 'destroy');
});

Route::controller(HonorarioController::class)->group(function(){
    Route::get('/honorarios', 'index');
    Route::post('/honorario', 'store');
    Route::get('/honorario/{id}', 'show' );
    Route::put('/honorario/{id}', 'update' );
    Route::delete('/honorario/{id}', 'destroy');
});

Route::controller(TaskController::class)->group(function(){
    Route::get('/tasks', 'index');
    Route::post('/task', 'store');
    Route::get('/task/{id}', 'show' );
    Route::put('/task/{id}', 'update' );
    Route::delete('/task/{id}', 'destroy');
});

Route::controller(CommitmentController::class)->group(function(){
    Route::get('/commitments', 'index');
    Route::post('/commitment', 'store');
    Route::get('/commitment/{id}', 'show' );
    Route::put('/commitment/{id}', 'update' );
    Route::delete('/commitment/{id}', 'destroy');
});

Route::controller(ProductController::class)->group(function(){
    Route::get('/products', 'index');
    Route::post('/product', 'store');
    Route::get('/product/{id}', 'show' );
    Route::put('/product/{id}', 'update' );
    Route::delete('/product/{id}', 'destroy');
});

Route::controller(LeadController::class)->group(function(){
    Route::get('/leads', 'index');
    Route::post('/lead', 'store');
    Route::get('/lead/{id}', 'show' );
    Route::put('/lead/{id}', 'update' );
    Route::delete('/lead/{id}', 'destroy');
});

Route::controller(ActivityController::class)->group(function(){
    Route::get('/activities', 'index');
    Route::post('/activity', 'store');
    Route::get('/activity/{id}', 'show' );
    Route::put('/activity/{id}', 'update' );
    Route::delete('/activity/{id}', 'destroy');
});