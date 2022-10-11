<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Cnpj;

class CnpjController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cnpj = Cnpj::all();
        return $cnpj;
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
        
        $cnpj = new Cnpj();

        $cnpj->nome = $request->nome;
        $cnpj->nomeFantasia = $request->nomeFantasia;
        $cnpj->razaoSocial = $request->razaoSocial;
   
        $cnpj->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $cnpj = Cnpj::find($id);
        return $cnpj;
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
        $cnpj = Cnpj::findOrFail($request->id);

        $cnpj->nome = $request->nome;
        $cnpj->nomeFantasia = $request->nomeFantasia;
        $cnpj->razaoSocial = $request->razaoSocial;
   
        $cnpj->save();

        return $cnpj;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $cnpj = Cnpj::destroy($id);
        return $cnpj;
    }
}
