<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Honorario extends Model
{
    use HasFactory;

    
    protected $fillable = [
        
        'account_id',
        'nome',
        'beneficioEconomico',
        'cap',
        'centroDeCustos',
        'competenciaAproveitamento',
        'contrato',
        'dataConfirmacao',
        'dataEnvio',
        'dataPagamento',
        'dataSolicitacao',
        'descricao',
        'empresa',
        'formaAproveitamento',
        'gatilho',
        'honorarioContratual',
        'honorarioValorNf',
        'nCompensacao',
        'nNF',
        'parcialIntegral',
        'proLaboraExito',
        'status',
        'vencimento',
        
    ];


    public function account(){
        return $this->belongsTo(Account::class);
    }



}
