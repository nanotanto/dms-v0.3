<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Quality extends Model
{
    protected $connection = 'mysql';
    
    protected $fillable = ['no', 'name', 'rev', 'year', 'file1', 'file2'];
    
    protected $table = "quality";
    public $primaryKey = "id";
//    public $timestamps = false;
    
}
