<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $contact = Contact::all();
        // return $contact; 
        return Contact::with('account')->get();

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $contact = new Contact();

        $contact->account_id = $request->account_id;
        $contact->tratamento = $request->tratamento;
        $contact->primeiroNome = $request->primeiroNome;
        $contact->ultimoNome = $request->ultimoNome;
        $contact->nomeDoMeio = $request->nomeDoMeio;
        $contact->sufixo = $request->sufixo;
        $contact->outraRua = $request->outraRua;
        $contact->outraCidade = $request->outraCidade;
        $contact->outroEstado = $request->outroEstado;
        $contact->outroCep = $request->outroCep;
        $contact->outroPais = $request->outroPais;
        $contact->rua = $request->rua;
        $contact->cidade = $request->cidade;
        $contact->estado = $request->estado;
        $contact->cep = $request->cep;
        $contact->pais = $request->pais;
        $contact->telefone = $request->telefone;
        $contact->celular = $request->celular;
        $contact->telefoneCasa = $request->telefoneCasa;
        $contact->email = $request->email;
        $contact->titulo = $request->titulo;
        $contact->departamento = $request->departamento;
        $contact->origemContato = $request->origemContato;
        $contact->recebeInformativo = $request->recebeInformativo;
        $contact->unidade = $request->unidade;
        $contact->linkedin = $request->linkedin;

        $contact->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $contact = Contact::find($id);
        return $contact;
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
        $contact = Contact::findOrFail($request->id);

        $contact->account_id = $request->account_id;
        $contact->tratamento = $request->tratamento;
        $contact->primeiroNome = $request->primeiroNome;
        $contact->ultimoNome = $request->ultimoNome;
        $contact->nomeDoMeio = $request->nomeDoMeio;
        $contact->sufixo = $request->sufixo;
        $contact->outraRua = $request->outraRua;
        $contact->outraCidade = $request->outraCidade;
        $contact->outroEstado = $request->outroEstado;
        $contact->outroCep = $request->outroCep;
        $contact->outroPais = $request->outroPais;
        $contact->rua = $request->rua;
        $contact->cidade = $request->cidade;
        $contact->estado = $request->estado;
        $contact->cep = $request->cep;
        $contact->pais = $request->pais;
        $contact->telefone = $request->telefone;
        $contact->celular = $request->celular;
        $contact->telefoneCasa = $request->telefoneCasa;
        $contact->email = $request->email;
        $contact->titulo = $request->titulo;
        $contact->departamento = $request->departamento;
        $contact->origemContato = $request->origemContato;
        $contact->recebeInformativo = $request->recebeInformativo;
        $contact->unidade = $request->unidade;
        $contact->linkedin = $request->linkedin;

        $contact->save();

        return $contact;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $contact = Contact::destroy($id);
        return $contact;
    }
}
