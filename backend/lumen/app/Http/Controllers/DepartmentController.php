<?php

namespace App\Http\Controllers;

use App\Department;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    public function dept(){
        $Dept = Department::select('id', 'name as value')->get();
        return response()->json($Dept);
    }
}