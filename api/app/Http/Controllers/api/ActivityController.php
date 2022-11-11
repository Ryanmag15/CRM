<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Activity::with('account','contact','user')->get();

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
        $activity = new Activity();

        $activity->account_id = $request->account_id;
        $activity->contact_id = $request->contact_id;
        $activity->user_id = $request->user_id;
        $activity->dataAtividade = $request->dataAtividade;
        $activity->assunto = $request->assunto;
        $activity->descricao = $request->descricao;

        $activity->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $activity = Activity::find($id);
        return $activity;
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
        $activity = Activity::findOrFail($request->id);

        $activity->account_id = $request->account_id;
        $activity->contact_id = $request->contact_id;
        $activity->user_id = $request->user_id;
        $activity->dataAtividade = $request->dataAtividade;
        $activity->assunto = $request->assunto;
        $activity->descricao = $request->descricao;

        $activity->save();

        return $activity;

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $activity = Activity::destroy($id);
        return $activity;
    }
}
