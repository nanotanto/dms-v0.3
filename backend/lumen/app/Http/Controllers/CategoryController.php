<?php

namespace App\Http\Controllers;

use App\Category;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function ctg(){
        $Ctg = Category::select('name as value', 'id')->get();
        return response()->json($Ctg);
    }
}