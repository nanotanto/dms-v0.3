<?php

namespace App\Http\Controllers;

use App\Clause;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClauseController extends Controller
{
    public function index(){
        $Clause = Clause::all();
        return response()->json($Clause);
    }
}