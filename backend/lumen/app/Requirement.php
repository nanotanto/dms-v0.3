<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Requirement extends Model
{
    protected $connection = 'mysql2';
    
    protected $table = "requirements";

    
}
