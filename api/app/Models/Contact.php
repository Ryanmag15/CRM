<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'account_id',
        'tratamento',
        'primeiroNome',
        'ultimoNome',
        'nomeDoMeio',
        'sufixo',
        'outraRua',
        'outraCidade',
        'outroEstado',
        'outroCep',
        'outroPais',
        'rua',
        'cidade',
        'estado',
        'cep',
        'pais',
        'telefone',
        'celular',
        'telefoneCasa',
        'email',
        'titulo',
        'departamento',
        'origemContato',
        'recebeInformativo',
        'unidade',
        'linkedin',
    ];

    public function account()
    {
        return $this->belongsTo(Account::class, 'account_id', 'id');
    }

}
