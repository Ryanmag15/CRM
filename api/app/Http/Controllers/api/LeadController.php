<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead;

class LeadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $lead = Lead::all();
        return $lead;
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
        $lead = new Lead();

        $lead->tratamento = $request->tratamento;
        $lead->primeiroNome = $request->primeiroNome;
        $lead->ultimoNome = $request->ultimoNome;
        $lead->nomeDoMeio = $request->nomeDoMeio;
        $lead->sufixo = $request->sufixo;
        $lead->titulo = $request->titulo;
        $lead->nomeConta = $request->nomeConta;
        $lead->rua = $request->rua;
        $lead->cidade = $request->cidade;
        $lead->estado = $request->estado;
        $lead->cep = $request->cep;
        $lead->pais = $request->pais;
        $lead->telefone = $request->telefone;
        $lead->celular = $request->celular;
        $lead->email = $request->email;
        $lead->website = $request->website;
        $lead->descricao = $request->descricao;
        $lead->status = $request->status;
        $lead->industria = $request->industria;
        $lead->faturamento = $request->faturamento;
        $lead->funcionarios = $request->funcionarios;
        $lead->origemLead = $request->origemLead;

        $lead->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $lead = Lead::find($id);
        return $lead;
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
        $lead = Lead::findOrFail($request->id);

        $lead->tratamento = $request->tratamento;
        $lead->primeiroNome = $request->primeiroNome;
        $lead->ultimoNome = $request->ultimoNome;
        $lead->nomeDoMeio = $request->nomeDoMeio;
        $lead->sufixo = $request->sufixo;
        $lead->titulo = $request->titulo;
        $lead->nomeConta = $request->nomeConta;
        $lead->rua = $request->rua;
        $lead->cidade = $request->cidade;
        $lead->estado = $request->estado;
        $lead->cep = $request->cep;
        $lead->pais = $request->pais;
        $lead->telefone = $request->telefone;
        $lead->celular = $request->celular;
        $lead->email = $request->email;
        $lead->website = $request->website;
        $lead->descricao = $request->descricao;
        $lead->status = $request->status;
        $lead->industria = $request->industria;
        $lead->faturamento = $request->faturamento;
        $lead->funcionarios = $request->funcionarios;
        $lead->origemLead = $request->origemLead;

        $lead->save();

        return $lead;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $lead = Lead::destroy($id);
        return $lead;
    }
}
