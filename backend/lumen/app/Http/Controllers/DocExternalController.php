<?php

namespace App\Http\Controllers;
use DB;
use App\DocExternal;
use App\CtgDoc;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class DocExternalController extends Controller
{
    public function index(){
        
        $Docs = DocExternal::select('doc_externals.id','doc_externals.no', 'doc_externals.name', 'doc_externals.rev_no', 'doc_externals.file','ctg_docs.name as category')
                ->leftJoin('ctg_docs', 'doc_externals.ctg_doc_id', '=', 'ctg_docs.id')
                ->whereBetween('ctg_doc_id', [1, 3])
                ->orderBy('ctg_doc_id','=','asc')
                ->get();       

        return response()->json($Docs);
    }

    public function ygk_yqs(){
        
        $Docs = DocExternal::select('doc_externals.id','doc_externals.no', 'doc_externals.name', 'doc_externals.rev_no', 'doc_externals.file','ctg_docs.name as category')
                ->leftJoin('ctg_docs', 'doc_externals.ctg_doc_id', '=', 'ctg_docs.id')
                ->whereBetween('ctg_doc_id', [4, 5])
                ->orderBy('ctg_doc_id','=','asc')
                ->get();       

        return response()->json($Docs);
    }

    public function category($id){
        $Docs = DocExternal::select('doc_externals.no', 'doc_externals.name', 'doc_externals.rev_no', 'doc_externals.file','ctg_docs.name as category')
                ->leftJoin('ctg_docs', 'doc_externals.ctg_doc_id', '=', 'ctg_docs.id')
                ->where('ctg_doc_id', '=', $id)
                ->get();       

        return response()->json($Docs);
    }

    public function list_category(){
        $Docs = CtgDoc::select('id', 'name', 'deskripsi')                
                ->get();       

        return response()->json($Docs);
        
    }

    public function getData($id){
        $doc  = DocExternal::find($id);

        return response()->json($doc); 
    }

    public function ctg(){
        $Ctg = CtgDoc::select('name as value', 'id')->get();
        return response()->json($Ctg);
    }

    public function saveDocEx(Request $request){
        $doc = new DocExternal();
        $doc->fill($request->all());
        $doc->save();
    }

    public function saveDocExEdt(Request $request){
        $doc = DocExternal::find($request->input("id"));
        $doc->fill($request->all());
        $doc->save();

        return response()->json(["status" => "ok"]);
    }

    public function saveDocExHis($id){
        $result = DB::connection('mysql2')
                    ->insert("insert into dochis_externals
                            (doc_external_id, no, name, effective_date, rev_no, ctg_doc_id, file)
							select id, no, name, effective_date, rev_no, ctg_doc_id, file
                            FROM doc_externals WHERE id = $id"
                    );

        return response()->json(["status" => "ok his"]);
    }

    public function getNo($id){
        $doc  = DocExternal::where('no', $id)->get();

        return response()->json($doc); 
    }

}
