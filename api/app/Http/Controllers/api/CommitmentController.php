<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Commitment;


class CommitmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $commitment = Commitment::all();
        return $commitment;
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
        $commitment = new Commitment();

        $commitment->assunto = $request->assunto;
        $commitment->descricao = $request->descricao;
        $commitment->dataInicio = $request->dataInicio;
        $commitment->horaInicio = $request->horaInicio;
        $commitment->dataFim = $request->dataFim;
        $commitment->horaFim = $request->horaFim;
        $commitment->local = $request->local;
        $commitment->contato = $request->contato;
        $commitment->relativo = $request->relativo;

        $commitment->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $commitment = Commitment::find($id);
        return $commitment;
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
        $commitment = Commitment::findOrFail($request->id);
        
        $commitment->assunto = $request->assunto;
        $commitment->descricao = $request->descricao;
        $commitment->dataInicio = $request->dataInicio;
        $commitment->horaInicio = $request->horaInicio;
        $commitment->dataFim = $request->dataFim;
        $commitment->horaFim = $request->horaFim;
        $commitment->local = $request->local;
        $commitment->contato = $request->contato;
        $commitment->relativo = $request->relativo;

        $commitment->save();

        return $commitment;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $commitment = Commitment::destroy($id);
        return $commitment;
    }
}
