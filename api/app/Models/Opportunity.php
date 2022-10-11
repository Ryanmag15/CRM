<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Opportunity extends Model
{
    use HasFactory;

    protected $fillable = [

        'account_id',
        'nome',
        'descricao',
        'estagioNome',
        'estagioClassificacao',
        'quantia',
        'probabilidade',
        'rendaEsperada',
        'totalOportunidades',
        'dataFechamento',
        'estaFechado',
        'estaGanho',
        'categoriaPrevisao',
        'nomeCategoriaPrevisao',
        'itemLinhaOportunidade',
        'dataAlteracaoUltimoEstagio',
        'anoFiscal',
        'trimestreFiscal',
        'beneficioEconomico',
        'motivoPerda',
        'cap',
        'dataExecucao',
        'dataConclusaoTriagem',
        'dataRecebimentoDocumentacao',
        'deliberacao',
        'documentacaoRecebida',
        'escopo',
        'forma',
        'formato',
        'honorarioProLabore',
        'honorarioExito',
        'incluidaNaProgramacao',
        'numeroProcessoJudicial',
        'origemOportunidade',
        'prazoExterno',
        'prazoInterno',
        'refinamento',
        'triagemConcluida',
        'dataApresentacao',
        'observacao',
        'seguimento',
    ];

    public function account(){
        return $this->belongsTo(Account::class, 'account_id');
    }
}
