<?php
/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$app->get('/', function () use ($app) {
   return $app->version();
});

//Data document internal & window detail
$app->get('/doc', "DocController@index");
$app->get('/level/{id}','DocController@level');
$app->get('/opt_dept/{id}','DocController@opt_dept');
$app->get('/dept', "DepartmentController@dept");
$app->get('/showRegNow', 'DocController@showRegNow');
$app->get('/getNoDoc/{id}', 'DocController@getNoDoc');
$app->get('/getDocDept', 'DocController@getDocDept');
$app->get('/getDocSec', 'DocController@getDocSec');

$app->get('/form/data/{id}', 'DocController@getData');
$app->get('/sec/index', "SectionController@index");
$app->get('/sec/{id}', "SectionController@sec");
$app->get('/ctg', "CategoryController@ctg");
$app->get('/ref', "DocController@ref");
$app->get('/getDochis/{id}', "DochisController@getDochis");
$app->get('/log/{id}', 'LogController@log');
$app->post('/saveLog', 'LogController@saveLog');

$app->post('/saveDocIn', 'DocController@saveDocIn');
$app->put('/saveDocInEdt', 'DocController@saveDocInEdt');
$app->post('/saveDocInHis/{id}', 'DocController@saveDocInHis');



//Data document external, YGK & YQS, FMEA, SIPOCORR
$app->get('/category/{id}','DocExternalController@category');
$app->get('/doc_ex', "DocExternalController@index");
$app->get('/doc_ygk_yqs', "DocExternalController@ygk_yqs");
$app->get('/form/data/ex/{id}', 'DocExternalController@getData');
$app->get('/ctg_ex', "DocExternalController@ctg");
$app->get('/getNo/{id}', 'DocExternalController@getNo');

$app->post('/saveDocEx', 'DocExternalController@saveDocEx');
$app->put('/saveDocExEdt', 'DocExternalController@saveDocExEdt');
$app->post('/saveDocExHis/{id}', 'DocExternalController@saveDocExHis');

//Data drawing
$app->get('/drawing', "DrawingController@index");

//Data audit
$app->get('/audit_in', "RecAuditController@internal");
$app->get('/audit_ex', "RecAuditController@external");

//Data management review
$app->get('/review', "RecMreviewController@review");

//Data events
$app->post('/scheduler_data', "SchedulerController@data");
$app->get('/scheduler_datajson', "SchedulerController@datajson");

//Data Quality
$app->get('/quality', "QualityController@index");

$app->get('/datatree', "FilmTreeController@datatree");


//Structure
$app->get('/division', "StructureController@division");
$app->get('/department', "StructureController@department");
$app->get('/section', "StructureController@section");

$app->get('/structureDiv', 'StructureController@structureDiv');
$app->get('/structureDept', 'StructureController@structureDept');
$app->get('/structureAll', 'StructureController@structureAll');

//Requirement
$app->get('/requirement', "RequirementController@index");

//Clause
$app->get('/clause', "ClauseController@index");

//Type Audit
$app->get('/type', "TypeController@index");

//upload file
$app->get('/uploadfile','UploadFileController@index');
$app->post('/uploadfile','UploadFileController@showUploadFile');