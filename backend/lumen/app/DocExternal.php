<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class DocExternal extends Model
{
    protected $connection = 'mysql2';
    
    protected $fillable = ['no', 'name', 'effective_date', 'rev_no', 'ctg_doc_id','file'];
    
    protected $table = "doc_externals";
    public $primaryKey = "id";
    public $incrementing = false;
//    public $timestamps = false;

    
}
