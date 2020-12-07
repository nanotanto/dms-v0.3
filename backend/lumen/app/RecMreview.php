<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class RecMreview extends Model
{
    protected $connection = 'mysql2';
    
    protected $fillable = ['no', 'name', 'rev', 'issued', 'file1', 'file2'];
    
    protected $table = "rec_mreviews";
    public $primaryKey = "id";
//    public $timestamps = false;
    
}
