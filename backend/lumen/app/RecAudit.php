<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class RecAudit extends Model
{
    protected $connection = 'mysql2';
    
    protected $fillable = ['auditor_id', 'no', 'date', 'department_id', 'requirement_id', 'klausul_id', 'ctg_finding_id', 'description', 'received', 'status_id', 'file', 'status_verification'];
    
    protected $table = "rec_audits";
    public $primaryKey = "id";
//    public $timestamps = false;
    
}
