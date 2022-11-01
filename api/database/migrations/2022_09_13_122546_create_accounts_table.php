<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->string('nome')->nullable();
            $table->string('tipo')->nullable();
            $table->string('rua')->nullable();
            $table->string('cidade')->nullable();
            $table->string('estado')->nullable();
            $table->string('cep')->nullable();
            $table->string('pais')->nullable();
            $table->string('siteWeb')->nullable();
            $table->string('setor')->nullable();
            $table->string('receitaAnual')->nullable();
            $table->string('funcionarios')->nullable();
            $table->string('descricao', 2000)->nullable();
            $table->string('auditoriaIndependente')->nullable();
            $table->string('cnpj')->nullable();
            $table->string('capital')->nullable();
            $table->string('dataEncerramento')->nullable();
            $table->string('demandasJuridicas')->nullable();
            $table->string('estrategiaCliente')->nullable();
            $table->string('marcas')->nullable();
            $table->string('metaAnuais')->nullable();
            $table->string('naturezaJuridica')->nullable();
            $table->string('observacaoRegimeEspecial')->nullable();
            $table->string('origemConta')->nullable();
            $table->string('outrasRelevantes')->nullable();
            $table->string('principaisProdutos', 1000)->nullable();
            $table->string('principalNecessidade')->nullable();
            $table->string('regimeEspecial')->nullable();
            $table->string('segmentoAtuacao')->nullable();
            $table->string('socAnual')->nullable();
            $table->string('statusConta')->nullable();
            $table->string('razaoSocial')->nullable();
            $table->string('quantidadeOportunidadesGanhas')->nullable();
            $table->string('dataFundacao')->nullable();
            $table->string('projeto')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounts');
    }
};
