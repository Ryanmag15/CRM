<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;


class AuthController extends Controller
{
    public function login(Request $request)
    {
        $validacao = validator($request->all(), [
            'name' => 'required',
            'password' => 'required',
        ]);
        
        if ($validacao->fails()) {
            
            return response()->json(['erros' => $validacao->errors()], 400);
        }
        if (auth()->attempt(['name' => $request->name, 'password' => $request->password])) {
            // $request->session()->regenerate();
            return response()->json(['name' => auth()->user()]);
        }

        return response()->json(['erros' => ['login' => 'Usuário ou senha inválidos']], 406);
    }
}
