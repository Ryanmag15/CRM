<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Account;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $account = Account::all();
        return $account;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $account = new Account();

        $account->nome = $request->nome;
        $account->tipo = $request->tipo;
        $account->rua = $request->rua;
        $account->cidade = $request->cidade;
        $account->cep = $request->cep;
        $account->estado = $request->estado;
        $account->pais = $request->pais;
        $account->siteWeb = $request->siteWeb;
        $account->setor = $request->setor;
        $account->receitaAnual = $request->receitaAnual;
        $account->funcionarios = $request->funcionarios;
        $account->descricao = $request->descricao;
        $account->auditoriaIndependente = $request->auditoriaIndependente;
        $account->cnpj = $request->cnpj;
        $account->capital = $request->capital;
        $account->dataEncerramento = $request->dataEncerramento;
        $account->demandasJuridicas = $request->demandasJuridicas;
        $account->estrategiaCliente = $request->estrategiaCliente;
        $account->marcas = $request->marcas;
        $account->metaAnuais = $request->metaAnuais;
        $account->naturezaJuridica = $request->naturezaJuridica;
        $account->observacaoRegimeEspecial = $request->observacaoRegimeEspecial;
        $account->origemConta = $request->origemConta;
        $account->outrasRelevantes = $request->outrasRelevantes;
        $account->principaisProdutos = $request->principaisProdutos;
        $account->principalNecessidade = $request->principalNecessidade;
        $account->regimeEspecial = $request->regimeEspecial;
        $account->segmentoAtuacao = $request->segmentoAtuacao;
        $account->socAnual = $request->socAnual;
        $account->statusConta = $request->statusConta;
        $account->razaoSocial = $request->razaoSocial;
        $account->quantidadeOportunidadesGanhas = $request->quantidadeOportunidadesGanhas;
        $account->dataFundacao = $request->dataFundacao;
        $account->projeto = $request->projeto;
        
        $account->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $account = Account::find($id);
        return $account;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $account = Account::findOrFail($request->id);
        
        $account->nome = $request->nome;
        $account->tipo = $request->tipo;
        $account->rua = $request->rua;
        $account->cidade = $request->cidade;
        $account->cep = $request->cep;
        $account->estado = $request->estado;
        $account->pais = $request->pais;
        $account->siteWeb = $request->siteWeb;
        $account->setor = $request->setor;
        $account->receitaAnual = $request->receitaAnual;
        $account->funcionarios = $request->funcionarios;
        $account->descricao = $request->descricao;
        $account->auditoriaIndependente = $request->auditoriaIndependente;
        $account->cnpj = $request->cnpj;
        $account->capital = $request->capital;
        $account->dataEncerramento = $request->dataEncerramento;
        $account->demandasJuridicas = $request->demandasJuridicas;
        $account->estrategiaCliente = $request->estrategiaCliente;
        $account->marcas = $request->marcas;
        $account->metaAnuais = $request->metaAnuais;
        $account->naturezaJuridica = $request->naturezaJuridica;
        $account->observacaoRegimeEspecial = $request->observacaoRegimeEspecial;
        $account->origemConta = $request->origemConta;
        $account->outrasRelevantes = $request->outrasRelevantes;
        $account->principaisProdutos = $request->principaisProdutos;
        $account->principalNecessidade = $request->principalNecessidade;
        $account->regimeEspecial = $request->regimeEspecial;
        $account->segmentoAtuacao = $request->segmentoAtuacao;
        $account->socAnual = $request->socAnual;
        $account->statusConta = $request->statusConta;
        $account->razaoSocial = $request->razaoSocial;
        $account->quantidadeOportunidadesGanhas = $request->quantidadeOportunidadesGanhas;
        $account->dataFundacao = $request->dataFundacao;
        $account->projeto = $request->projeto;
        
        $account->save();
        
        return $account;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $account = Account::destroy($id);
        return $account;
    }
}
