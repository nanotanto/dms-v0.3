<?php

namespace App\Http\Controllers;

use App\Requirement;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RequirementController extends Controller
{
    public function index(){
        $Req = Requirement::all();
        return response()->json($Req);
    }
}