<?php

namespace App\Http\Controllers;

use App\Section;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SectionController extends Controller
{
    public function index(){
        $Sec = Section::select('name as value', 'id')->get();
        return response()->json($Sec);
    }

    public function sec($id){
        $Sec = Section::where("department_id", "=", "$id")
        ->select('name as value', 'id')->get();
        return response()->json($Sec);
    }
}