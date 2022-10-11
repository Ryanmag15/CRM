<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Opportunity;
use Illuminate\Http\Request;
use Illuminate\Support\Optional;

class OpportunityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Opportunity::with('account')->get();
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
        $opportunity = new Opportunity();

        $opportunity->account_id = $request->account_id;
        $opportunity->nome = $request->nome;
        $opportunity->descricao = $request->descricao;
        $opportunity->estagioClassificacao = $request->estagioClassificacao;
        $opportunity->quantia = $request->quantia;
        $opportunity->probabilidade = $request->probabilidade;
        $opportunity->rendaEsperada = $request->rendaEsperada;
        $opportunity->totalOportunidades = $request->totalOportunidades;
        $opportunity->dataFechamento = $request->dataFechamento;
        $opportunity->estaFechado = $request->estaFechado;
        $opportunity->estaGanho = $request->estaGanho;
        $opportunity->categoriaPrevisao = $request->categoriaPrevisao;
        $opportunity->nomeCategoriaPrevisao = $request->nomeCategoriaPrevisao;
        $opportunity->itemLinhaOportunidade = $request->itemLinhaOportunidade;
        $opportunity->dataAlteracaoUltimoEstagio = $request->dataAlteracaoUltimoEstagio;
        $opportunity->anoFiscal = $request->anoFiscal;
        $opportunity->trimestreFiscal = $request->trimestreFiscal;
        $opportunity->beneficioEconomico = $request->beneficioEconomico;
        $opportunity->motivoPerda = $request->motivoPerda;
        $opportunity->cap = $request->cap;
        $opportunity->dataExecucao = $request->dataExecucao;
        $opportunity->dataConclusaoTriagem = $request->dataConclusaoTriagem;
        $opportunity->dataRecebimentoDocumentacao = $request->dataRecebimentoDocumentacao;
        $opportunity->deliberacao = $request->deliberacao;
        $opportunity->documentacaoRecebida = $request->documentacaoRecebida;
        $opportunity->escopo = $request->escopo;
        $opportunity->forma = $request->forma;
        $opportunity->formato = $request->formato;
        $opportunity->honorarioProLabore = $request->honorarioProLabore;
        $opportunity->honorarioExito = $request->honorarioExito;
        $opportunity->incluidaNaProgramacao = $request->incluidaNaProgramacao;
        $opportunity->numeroProcessoJudicial = $request->numeroProcessoJudicial;
        $opportunity->origemOportunidade = $request->origemOportunidade;
        $opportunity->prazoExterno = $request->prazoExterno;
        $opportunity->prazoInterno = $request->prazoInterno;
        $opportunity->refinamento = $request->refinamento;
        $opportunity->triagemConcluida = $request->triagemConcluida;
        $opportunity->dataApresentacao = $request->dataApresentacao;
        $opportunity->observacao = $request->observacao;
        $opportunity->seguimento = $request->seguimento;

        $opportunity->save();
    }
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $opportunity = Opportunity::find($id);
        return $opportunity;
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
        $opportunity = Opportunity::findOrFail($request->id);

        $opportunity->account_id = $request->account_id;
        $opportunity->nome = $request->nome;
        $opportunity->descricao = $request->descricao;
        $opportunity->estagioClassificacao = $request->estagioClassificacao;
        $opportunity->quantia = $request->quantia;
        $opportunity->probabilidade = $request->probabilidade;
        $opportunity->rendaEsperada = $request->rendaEsperada;
        $opportunity->totalOportunidades = $request->totalOportunidades;
        $opportunity->dataFechamento = $request->dataFechamento;
        $opportunity->estaFechado = $request->estaFechado;
        $opportunity->estaGanho = $request->estaGanho;
        $opportunity->categoriaPrevisao = $request->categoriaPrevisao;
        $opportunity->nomeCategoriaPrevisao = $request->nomeCategoriaPrevisao;
        $opportunity->itemLinhaOportunidade = $request->itemLinhaOportunidade;
        $opportunity->dataAlteracaoUltimoEstagio = $request->dataAlteracaoUltimoEstagio;
        $opportunity->anoFiscal = $request->anoFiscal;
        $opportunity->trimestreFiscal = $request->trimestreFiscal;
        $opportunity->beneficioEconomico = $request->beneficioEconomico;
        $opportunity->motivoPerda = $request->motivoPerda;
        $opportunity->cap = $request->cap;
        $opportunity->dataExecucao = $request->dataExecucao;
        $opportunity->dataConclusaoTriagem = $request->dataConclusaoTriagem;
        $opportunity->dataRecebimentoDocumentacao = $request->dataRecebimentoDocumentacao;
        $opportunity->deliberacao = $request->deliberacao;
        $opportunity->documentacaoRecebida = $request->documentacaoRecebida;
        $opportunity->escopo = $request->escopo;
        $opportunity->forma = $request->forma;
        $opportunity->formato = $request->formato;
        $opportunity->honorarioProLabore = $request->honorarioProLabore;
        $opportunity->honorarioExito = $request->honorarioExito;
        $opportunity->incluidaNaProgramacao = $request->incluidaNaProgramacao;
        $opportunity->numeroProcessoJudicial = $request->numeroProcessoJudicial;
        $opportunity->origemOportunidade = $request->origemOportunidade;
        $opportunity->prazoExterno = $request->prazoExterno;
        $opportunity->prazoInterno = $request->prazoInterno;
        $opportunity->refinamento = $request->refinamento;
        $opportunity->triagemConcluida = $request->triagemConcluida;
        $opportunity->dataApresentacao = $request->dataApresentacao;
        $opportunity->observacao = $request->observacao;
        $opportunity->seguimento = $request->seguimento;

        $opportunity->save();

        return $opportunity;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $opportunity = Opportunity::destroy($id);
        return $opportunity;
    }

}
