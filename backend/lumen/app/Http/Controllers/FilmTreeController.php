<?php
namespace App\Http\Controllers;
use App\FilmTree;
use Dhtmlx\Connector\TreeConnector;


class FilmTreeController extends Controller
{

    public function datatree (){


        $data = new TreeConnector(null, "PHPLaravel"); // initializes the connector object
        $data->dynamic_loading(30);  // enables dynamic loading
        // loads data from the specified database table
        $data->render_table(new FilmTree(), "id", "title, open", "", "parent");
    }
}
