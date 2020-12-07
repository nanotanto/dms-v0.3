<?php

namespace App\Http\Controllers;

use App\Dochis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class DochisController extends Controller
{

    public function getDochis($id){
        $doc  = Dochis::where("doc_id", "=", "$id")
                ->orderBy('effective_date', 'desc') 
                ->get();

        return response()->json($doc); 
    }



    
}
