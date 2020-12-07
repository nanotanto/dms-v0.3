<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Dochis extends Model
{
    protected $connection = 'mysql2';

    public $timestamps = true;
    protected $table = "dochis";
    protected $fillable = ['doc_id', 
                          'no', 
                          'name', 
                          'rev_no', 
                          'department_id',
                          'section_id',
                          'category_id',
                          'effective_date',
                          'rev_content',
                          'no_reference',
                          'remark',
                          'status_id',
                          'file1',
                          'file2'
                        ];
        
}
