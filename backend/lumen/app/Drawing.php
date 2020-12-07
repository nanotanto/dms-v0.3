<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
 

class Drawing extends Model
{
	protected $connection = 'mysql4';

	protected $table = "drawings";
	protected $fillable = [	'name', 
							'part_no', 
							'part_name',
							'rev_mark',
							'rev_record',
							'priority',
							'location',
							'bambi',
							'page'
						];
}
