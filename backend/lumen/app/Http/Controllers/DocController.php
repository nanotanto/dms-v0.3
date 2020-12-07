<?php

namespace App\Http\Controllers;
use DB;
use PDO;
use App\Doc;
use App\Model\Dochis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Storage;


class DocController extends Controller
{
    public function index(Request $request){
        $data = Doc::where('category_id','!=',0); 
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
        $count = $request->input('count', 20);
        
        $data  = $data->limit($count)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }


    public function level(Request $request, $id){
        $data = Doc::where('category_id', '=', $id); 
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
        $count = $request->input('count', 20);
        
        $data  = $data->limit($count)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }

    public function opt_dept(Request $request, $id){
        $data = Doc::where('department_id', '=', $id); 
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
        $count = $request->input('count', 20);
        
        $data  = $data->limit($count)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }


    public function getData($id){
        $doc  = Doc::find($id);

        return response()->json($doc); 
    }


    public function saveData(Request $request){
        $doc = Doc::find($request->input("id"));
        $doc->fill($request->all());
        $doc->save();

        return response()->json(["status" => "ok"]);
    }


    public function saveDocInHis($id){
        $result = DB::connection('mysql2')
                    ->insert("insert into dochis
                            (doc_id, department_id, section_id, category_id, no, name, effective_date, rev_no, rev_content, no_reference, remark, file)
							select id, department_id, section_id, category_id, no, name, effective_date, rev_no, rev_content, no_reference, remark, file1
                            FROM docs WHERE id = $id"
                    );

        return response()->json(["status" => "ok his"]);
    }


    public function ref(){
        $Docs = Doc::select('no as value','id')->get();    

        return response()->json($Docs);
    }


    public function doUpload(Request $request){
        //in a real app you will move file to the persistent storage here
        $upload = $request->file('upload');
        $path = time()."-".$upload->getClientOriginalName();
        $upload->move("E:\storage", $path);

        return response()->json([
            "status" => "server",
            "value" =>  $path
        ]);
    }

 
    public function doc_date(Request $request, $id){
        $data = Doc::orderBy('effective_date', 'desc')->where('effective_date', 'like', "%$id%"); 
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
        $count = $request->input('count', 20);
        
        $data  = $data->limit($count)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }

    public function saveDocIn(Request $request){
        $doc = new Doc();
        $doc->fill($request->all());
        $doc->save();

    }

    public function saveDocInEdt(Request $request){
        $doc = Doc::find($request->input("id"));
        $doc->fill($request->all());
        $doc->save();

        return response()->json(["status" => "ok"]);
    }

    public function showRegNow(Request $request){ 
        $data = Doc::orderBy('category_id', 'asc')->where('created_at','LIKE',date('Y-m-d').'%'); 
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
        $count = $request->input('count', 20);
        
        $data  = $data->limit($count)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }

    public function getNoDoc($id){
        $doc  = Doc::where('no', $id)->get();

        return response()->json($doc); 
    }

    public function getDocDept(Request $request){
        
        $filter = $request->input('filter', false);
        $sort = $request->input('sort', false);
        $ctg = $request->input('ctg',false);
        $dept = $request->input('dept',false);
        $data = Doc::where('category_id','=',$ctg)
                    ->where('department_id','=',$dept);                   

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
        $count = $request->input('count', 20);
        
        $data  = $data->limit($count)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }

    public function getDocSec(Request $request){
        
        $filter = $request->input('filter', false);
        $sort = $request->input('sort', false);
        $ctg = $request->input('ctg',false);
        $dept = $request->input('dept',false);
        $sec = $request->input('sec',false);
        $data = Doc::where('category_id','=',$ctg)
                    ->where('department_id','=',$dept)
                    ->where('section_id','=',$sec);                   

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
        $count = $request->input('count', 20);
        
        $data  = $data->limit($count)->offset($start)->get();
        
        return response()->json([
            "total_count" => $total,
            "pos" =>  $start,
            "data" => $data
        ]);
    }

    
}
