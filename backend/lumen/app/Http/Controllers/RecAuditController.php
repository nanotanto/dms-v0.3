<?php

namespace App\Http\Controllers;
use DB;
use App\RecAudit;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RecAuditController extends Controller
{
    public function internal(){
        $Audit = RecAudit::select('rec_audits.no','auditors.name as type','rec_audits.date',
                'departments.name as department','klausuls.name as clause',
                'ctg_findings.name as category','rec_audits.received',
                'statuses.name as status', 'rec_audits.file')
                ->leftJoin('auditors', 'rec_audits.auditor_id', '=', 'auditors.id')
                ->leftJoin('departments', 'rec_audits.department_id', '=', 'departments.id')
                ->leftJoin('klausuls', 'rec_audits.klausul_id', '=', 'klausuls.id')
                ->leftJoin('ctg_findings', 'rec_audits.ctg_finding_id', '=', 'ctg_findings.id')
                ->leftJoin('statuses', 'rec_audits.status_id', '=', 'statuses.id')
                ->where('rec_audits.auditor_id','=','1')
                ->get();   
        return response()->json($Audit);
    }

    public function external(){
        $Audit = RecAudit::select('rec_audits.no','auditors.name as type','rec_audits.date',
                'departments.name as department','klausuls.name as clause',
                'ctg_findings.name as category','rec_audits.received',
                'statuses.name as status', 'rec_audits.file')
                ->leftJoin('auditors', 'rec_audits.auditor_id', '=', 'auditors.id')
                ->leftJoin('departments', 'rec_audits.department_id', '=', 'departments.id')
                ->leftJoin('klausuls', 'rec_audits.klausul_id', '=', 'klausuls.id')
                ->leftJoin('ctg_findings', 'rec_audits.ctg_finding_id', '=', 'ctg_findings.id')
                ->leftJoin('statuses', 'rec_audits.status_id', '=', 'statuses.id')
                ->where('rec_audits.auditor_id','=','2')
                ->get();   
        return response()->json($Audit);
    }
}