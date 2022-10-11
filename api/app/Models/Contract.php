<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'account_id',
        'expiracao',
        'dataInicio',
        'dataFim',
        'rua',
        'cidade',
        'estado',
        'cep',
        'pais',
        'termoContrato',
        'status',
        'dataAssinaturaEmpresa',
        'tituloAssinadoCliente',
        'dataAssinaturaCliente',
        'termosEspeciais',
        'descricao',
        'nome',
        'numeroContrato',
        'dataProposta',
        'numeroContratoCCA',
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }

}
