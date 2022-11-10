<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lead extends Model
{
    use HasFactory;

    protected $fillable = [

       'tratamento',
       'primeiroNome',
       'ultimoNome',
       'nomeDoMeio',
       'sufixo',
       'titulo',
       'nomeConta',
       'rua',
       'cidade',
       'estado',
       'cep',
       'pais',
       'telefone',
       'celular',
       'email',
       'website',
       'descricao',
       'status',
       'industria',
       'faturamento',
       'funcionarios',
       'origemLead',

    ];
}
