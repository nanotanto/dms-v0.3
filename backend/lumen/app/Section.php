<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Section extends Model
{
    protected $connection = 'mysql2';
    
    protected $fillable = ['id', 'department_id', 'name'];
    
    protected $table = "sections";
    public $primaryKey = "id";
//    public $timestamps = false;

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
    
}
