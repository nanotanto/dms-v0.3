<?php
namespace App\Http\Controllers;
use App\SchedulerEvent;
use Dhtmlx\Connector\SchedulerConnector;

class SchedulerController extends Controller
{
    public function data() {
        $connector = new SchedulerConnector(null, "PHPLaravel");
        $connector->configure(new SchedulerEvent(), "event_id", "start_date, end_date, event_name");
        $connector->render();
    }

    public function datajson(){
        $Doc = SchedulerEvent::select('event_id as id', 'start_date', 'end_date', 'event_name as text')->get();       
        $Docs = ['data' => $Doc] ;
        return response()->json($Docs);
    }

    public function createEvent(Request $request){
        $Doc = SchedulerEvent::create($request->all());
        return response()->json($Doc);
    }
}
