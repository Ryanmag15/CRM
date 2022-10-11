<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contract;


class ContractController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $contract = Contract::all();
        return $contract;
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
        $contract = new Contract();

        $contract->expiracao = $request->expiracao;
        $contract->dataInicio = $request->dataInicio;
        $contract->dataFim = $request->dataFim;
        $contract->rua = $request->rua;
        $contract->cidade = $request->cidade;
        $contract->estado = $request->estado;
        $contract->cep = $request->cep;
        $contract->pais = $request->pais;
        $contract->termoContrato = $request->termoContrato;
        $contract->status = $request->status;
        $contract->dataAssinaturaEmpresa = $request->dataAssinaturaEmpresa;
        $contract->tituloAssinadoCliente = $request->tituloAssinadoCliente;
        $contract->dataAssinaturaCliente = $request->dataAssinaturaCliente;
        $contract->termosEspeciais = $request->termosEspeciais;
        $contract->nome = $request->nome;
        $contract->numeroContrato = $request->numeroContrato;
        $contract->dataProposta = $request->dataProposta;
        $contract->numeroContratoCCA = $request->numeroContratoCCA;

        $contract->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $contract = Contract::find($id);
        return $contract;
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
        $contract = Contract::findOrFail($request->id);

        $contract->expiracao = $request->expiracao;
        $contract->dataInicio = $request->dataInicio;
        $contract->dataFim = $request->dataFim;
        $contract->rua = $request->rua;
        $contract->cidade = $request->cidade;
        $contract->estado = $request->estado;
        $contract->cep = $request->cep;
        $contract->pais = $request->pais;
        $contract->termoContrato = $request->termoContrato;
        $contract->status = $request->status;
        $contract->dataAssinaturaEmpresa = $request->dataAssinaturaEmpresa;
        $contract->tituloAssinadoCliente = $request->tituloAssinadoCliente;
        $contract->dataAssinaturaCliente = $request->dataAssinaturaCliente;
        $contract->termosEspeciais = $request->termosEspeciais;
        $contract->nome = $request->nome;
        $contract->numeroContrato = $request->numeroContrato;
        $contract->dataProposta = $request->dataProposta;
        $contract->numeroContratoCCA = $request->numeroContratoCCA;

        $contract->save();

        return $contract;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contract = Contract::destroy($id);
        return $contract;
    }
}
