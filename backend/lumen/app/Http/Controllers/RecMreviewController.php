<?php

namespace App\Http\Controllers;
use DB;
use App\RecMreview;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RecMreviewController extends Controller
{
    public function review(){
        $Review = RecMreview::select('no','name','rev','issued','file1','file2')                
                ->get();   
        return response()->json($Review);
    }
}