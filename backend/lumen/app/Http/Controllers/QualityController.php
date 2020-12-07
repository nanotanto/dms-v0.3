<?php

namespace App\Http\Controllers;
use DB;
use App\Quality;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class QualityController extends Controller
{
    public function index(){
        $Review = Quality::select('no','name','rev','year','file1','file2')                
                ->get();
        return response()->json($Review);
    }
}