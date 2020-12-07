<?php

namespace App;
use Illuminate\Database\Eloquent\Model;
 

class FilmTree extends Model
{
	protected $connection = 'webix_lumen';

	protected $table = "films_tree";
	protected $fillable = [	'id', 
							'title', 
							'open',
							'parent'
						];
}
