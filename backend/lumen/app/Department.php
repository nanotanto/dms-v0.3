<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Department extends Model
{
    protected $connection = 'mysql2';
    
    //protected $fillable = ['id', 'division_id', 'name'];
    
    protected $table = "departments";
    //public $primaryKey = "id";
//    public $timestamps = false;

    public function division()
    {
        return $this->belongsTo(Division::class);
    }

    public function section()
    {
        return $this->hasMany(Section::class);
    }

    
}
