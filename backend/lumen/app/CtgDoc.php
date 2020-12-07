<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class CtgDoc extends Model
{
    protected $connection = 'mysql2';
    
    protected $fillable = ['id', 'name', 'deskripsi'];
    
    protected $table = "ctg_docs";
    public $primaryKey = "id";
//    public $timestamps = false;

    
}
