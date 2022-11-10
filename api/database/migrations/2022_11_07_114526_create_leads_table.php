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
        Schema::create('leads', function (Blueprint $table) {
             
            $table->id();
            $table->string('tratamento')->nullable();
            $table->string('primeiroNome')->nullable();
            $table->string('ultimoNome')->nullable();
            $table->string('nomeDoMeio')->nullable();
            $table->string('sufixo')->nullable();
            $table->string('titulo')->nullable();
            $table->string('nomeConta')->nullable();
            $table->string('rua')->nullable();
            $table->string('cidade')->nullable();
            $table->string('estado')->nullable();
            $table->string('cep')->nullable();
            $table->string('pais')->nullable();
            $table->string('telefone')->nullable();
            $table->string('celular')->nullable();
            $table->string('email')->nullable();
            $table->string('website')->nullable();
            $table->string('descricao')->nullable();
            $table->string('status')->nullable();
            $table->string('industria')->nullable();
            $table->string('faturamento')->nullable();
            $table->string('funcionarios')->nullable();
            $table->string('origemLead')->nullable();
            $table->string('segmentoAtuacao')->nullable();
    
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
        Schema::dropIfExists('leads');
    }
};
