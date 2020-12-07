<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


class Doc extends Model
{
    protected $connection = 'mysql2';

    public $timestamps = true;
    protected $table = "docs";
    public $primaryKey = "id";
    public $incrementing = false;
    protected $fillable = ['no', 
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
