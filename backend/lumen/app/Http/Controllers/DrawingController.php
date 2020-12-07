<?php

namespace App\Http\Controllers;
use DB;
use PDO;
use App\Drawing;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DrawingController extends Controller
{

    public function index(Request $request){
        $data = Drawing::orderBy('name', 'asc'); 
        $filter = $request->input('filter', false);
        $sort = $request->input('sort', false);

        //filtering
        if ($filter)
        foreach($filter as $key => $value){
            $data = $data->where($key, "like", "%$value%");
        }
        
        //sorting
        if ($sort)
        foreach($sort as $key => $value){
            $data = $data->orderBy($key, $value);
        }
        
        $total = $data->count();
        $start = $request->input('start', 0);
        $count = $request->input('count', 15);
        
        $data  = $data->limit($count)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }
}
