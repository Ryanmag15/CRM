<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cnpj extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'account_id',
        'nome',
        'nomeFantasia',
        'razaoSocial',
        
    ];

    public function account(){
        return $this->belongsTo(Account::class);
    }
}
