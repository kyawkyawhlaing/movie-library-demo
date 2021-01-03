<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    public function login(Request $request)
    {
        $validate = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user  = Auth::user();
            $token = $user->createToken('laraval-7');
            return response()->json([
                'user' => $user,
                'token' => $token->plainTextToken
            ], 200);
        } else {
            return response()->json([
                'message'    =>  'Could not login.'
            ]);
        }
    }
    public function logout()
    {
        DB::table('personal_access_tokens')->truncate();
        Auth::logout();
    }
}
