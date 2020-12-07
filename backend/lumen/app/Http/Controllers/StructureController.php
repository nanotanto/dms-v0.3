<?php

namespace App\Http\Controllers;

use App\Division;
use App\Department;
use App\Section;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StructureController extends Controller
{
    public function division(){
        $Divisions = Division::all();
        return response()->json($Divisions);
    }

    public function department(){
        $Departments = Department::all();  
        foreach ($Departments as $Department) {
            $result[] = [
                "id" => $Department->id,
                "division_id" => $Department->division_id,
                "division" => $Department->division->name,
                "department" => $Department->name
            ];
        }
        return response()->json($result);  
    }

    public function section(){
        $Sections = Section::all();
        foreach ($Sections as $Section) {
            $result[] = [
            "id" => $Section->id,
            "division_id" => $Section->Department->division_id,
            "division" => $Section->Department->division->name,
            "department_id" => $Section->department_id,
            "department" => $Section->Department->name,            
            "section" => $Section->name
        ];
        }
        return response()->json($result);
    }

    public function structureDiv(Request $request){
        $id = $request->input('parent', 0);
        if (!$id){
            $data = Division::all()->toArray();
            foreach ($data as $key => $value) {
                $data[$key]["id"] = "u".$value["id"];
                $data[$key]["webix_kids"] = true;
            }
        }
        else {
            $parent = str_replace("u", "", $id);
            $data = Department::where(["division_id" => $parent])->get();            
        }
        
            

        return response()->json([ "parent" => $id, "data" => $data ]);
    }

    public function structureDept(Request $request){
        $id = $request->input('parent', 0);
        if (!$id){
            $data = Department::all()->toArray();
            foreach ($data as $key => $value) {
                $data[$key]["id"] = "u".$value["id"];
                $data[$key]["webix_kids"] = true;
            }
        }
        else {
            $parent = str_replace("u", "", $id);
            $data = Section::where(["department_id" => $parent])->get();
        }

        return response()->json([ "parent" => $id, "data" => $data ]);
    }

    public function structureAll(){
        $data = Division::all(["id", "name"])->where("id", "!=", 1)->toArray();

        $result = [];
        foreach ($data as $value){
            $sub = Department::where("division_id", $value["id"])->get(["id", "name"])->toArray() ;
            foreach ($sub as $val){
                $sub2 = Section::where("department_id", $val["id"])->get(["id", "name as value"])->toArray() ;
                $result[] = [
                    "id" => "u".$value["id"],
                    "value" => $value["name"],
                    "open" => true,
                    "chapter" => "Division",
                    "data" => [
                        "id" => "u2".$val["id"],
                        "value" => $val["name"],
                        "open" => true,                     
                        "chapter" => "Department",
                        "data" => $sub2
                    ]
                ];
            }
        }

        return response()->json($result);
    }
    
}