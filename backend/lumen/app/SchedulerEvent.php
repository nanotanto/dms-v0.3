<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

class SchedulerEvent extends Model
{   
    protected $connection = 'mysql';

    protected $table = "scheduler_events";
    public $primaryKey = "event_id";
    public $timestamps = false;
}
