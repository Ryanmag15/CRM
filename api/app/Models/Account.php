<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'nome', 
        'tipo', 
        'razaoSocial',
        'siteWeb',
        'descricao',
        'telefone',
        'statusConta',
        'setor',
        'segmentoAtuacao',
        'naturezaJuridica',
        'cnpj',
        'capital',
        'auditoriaIndependente',
        'funcionarios',
        'marcas',
        'receitaAnual',
        'principaisProdutos',
        'metaAnuais',
        'socAnual',
        'regimeEspecial',
        'outrasRelevantes',
        'observacaoRegimeEspecial',
        'origemConta',
        'projeto',
        'principalNecessidade',
        'demandasJuridicas',
        'estrategiaCliente',
        'rua',
        'cidade',
        'cep',
        'estado',
        'pais',
        
    ];

    // public function contacts(){
    //     return $this->hasMany(Contact::class, 'account_id', 'id');
    // }

    public function getOpportunities() {
        return Opportunity::with('account')->get();
    }

    public function getContacts() {
        return Contact::with('account')->get();
    }
   
}

