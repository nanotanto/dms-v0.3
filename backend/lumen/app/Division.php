<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Division extends Model
{
    protected $connection = 'mysql2';
    
    //protected $fillable = ['id', 'name'];
    
    protected $table = "divisions";
    //public $primaryKey = "id";
//    public $timestamps = false;

    public function department()
    {
        return $this->hasMany(Department::class);
    }
    
}
