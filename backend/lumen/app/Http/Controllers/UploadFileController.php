<?php namespace App\Http\Controllers;
//use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploadFileController extends Controller
{

    public function index(){
        return view('uploadfile');
    }

 public function showUploadFile()
 {
    ini_set('max_execution_time', 120);
    $destination = realpath('C:\xampp\htdocs\qhse\ISO9001\internal');

    if (isset($_FILES['upload'])){
        $file = $_FILES['upload'];
        
        $filename = $destination."/".preg_replace("|[\\\/]|", "", $file["name"]);
        $sname = md5($file["name"]);

        //check that file name is valid
        if ($filename !== "" && !file_exists($filename)){
            move_uploaded_file($file["tmp_name"], $filename);
            $res = array("status" => "Upload Success", "sname" => $sname);
        } else {
            $res = array("status" => "error");
        }

        echo json_encode($res);
    }
 }

public function deleteFile($name)
 {
 Storage::delete($name);
 return response()->json('success');
 }
public function getFileList(){
    $files = Storage::files('/');
 return response()->json($files);
}
public function viewFile($name){
$path = storage_path().DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR.$name;
return response()->make(file_get_contents($path), 200, [
 'Content-Type' => Storage::mimeType($name),
 'Content-Disposition' => 'inline; '.$name,
 ]);
}
}