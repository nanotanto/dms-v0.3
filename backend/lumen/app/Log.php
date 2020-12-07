<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Log extends Model
{
    protected $connection = 'mysql2';

    public $timestamps = false;
    protected $table = "logs";
    protected $fillable = ['doc_id', 
                          'user_name'
                        ];
    

}
