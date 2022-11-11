<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = [

        'account_id',
        'contact_id',
        'user_id',
        'dataAtividade',
        'assunto',
        'descricao',
            
    ];

    public function account(){
        return $this->belongsTo(Account::class, 'account_id');
    }
    
    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function contact(){
        return $this->belongsTo(Contact::class, 'contact_id');
    }

}
