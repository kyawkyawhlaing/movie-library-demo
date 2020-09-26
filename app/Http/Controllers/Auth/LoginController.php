<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function vuelogin(Request $request)
    {
        $validate = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(Auth::user(), 200);
        } else {
            return response()->json([
                'status'    =>  'Could not login.'
            ]);
        }
    }
    public function logout()
    {
        Auth::logout();
    }
}
