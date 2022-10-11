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
        Schema::create('opportunities', function (Blueprint $table) {

            $table->id();
            $table->foreignId('account_id')->constrained();
            $table->string('nome')->nullable();
            $table->string('descricao')->nullable();
            $table->string('estagioNome')->nullable();
            $table->integer('estagioClassificacao')->nullable();
            $table->integer('quantia')->nullable();
            $table->integer('probabilidade')->nullable();
            $table->string('rendaEsperada')->nullable();
            $table->integer('totalOportunidades')->nullable();
            $table->string('dataFechamento')->nullable();
            $table->integer('estaFechado')->nullable();
            $table->integer('estaGanho')->nullable();
            $table->string('categoriaPrevisao')->nullable();
            $table->string('nomeCategoriaPrevisao')->nullable();
            $table->string('itemLinhaOportunidade')->nullable();
            $table->string('dataAlteracaoUltimoEstagio')->nullable();
            $table->string('anoFiscal')->nullable();
            $table->string('trimestreFiscal')->nullable();
            $table->string('beneficioEconomico')->nullable();
            $table->string('motivoPerda')->nullable();
            $table->string('cap')->nullable();
            $table->string('dataExecucao')->nullable();
            $table->string('dataConclusaoTriagem')->nullable();
            $table->string('dataRecebimentoDocumentacao')->nullable();
            $table->string('deliberacao')->nullable();
            $table->string('documentacaoRecebida')->nullable();
            $table->string('escopo')->nullable();
            $table->string('forma')->nullable();
            $table->string('formato')->nullable();
            $table->string('honorarioProLabore')->nullable();
            $table->string('honorarioExito')->nullable();
            $table->integer('incluidaNaProgramacao')->nullable();
            $table->string('numeroProcessoJudicial')->nullable();
            $table->string('origemOportunidade')->nullable();
            $table->string('prazoExterno')->nullable();
            $table->string('prazoInterno')->nullable();
            $table->string('refinamento')->nullable();
            $table->integer('triagemConcluida')->nullable();
            $table->date('dataApresentacao')->nullable();
            $table->string('observacao')->nullable();
            $table->string('seguimento')->nullable();
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
        Schema::dropIfExists('opportunities');
    }
};
