<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commitment extends Model
{
    use HasFactory;

    protected $fillable = [ 

        'contact_id',
        'assunto',
        'descricao',
        'dataInicio',
        'horaInicio',
        'dataFim',
        'horaFim',
        'local',
        'contato',
        'relativo',
        
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }

}
