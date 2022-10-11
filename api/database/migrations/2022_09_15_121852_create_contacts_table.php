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
        Schema::create('contacts', function (Blueprint $table) {
            
            $table->id();
            $table->foreignId('account_id')->constrained();
            $table->string('tratamento')->nullable();
            $table->string('primeiroNome')->nullable();
            $table->string('ultimoNome')->nullable();
            $table->string('nomeDoMeio')->nullable();
            $table->string('sufixo')->nullable();
            $table->string('outraRua')->nullable();
            $table->string('outraCidade')->nullable();
            $table->string('outroEstado')->nullable();
            $table->string('outroCep')->nullable();
            $table->string('outroPais')->nullable();
            $table->string('rua')->nullable();
            $table->string('cidade')->nullable();
            $table->string('estado')->nullable();
            $table->string('cep')->nullable();
            $table->string('pais')->nullable();
            $table->string('telefone')->nullable();
            $table->string('celular')->nullable();
            $table->string('telefoneCasa')->nullable();
            $table->string('email')->nullable();
            $table->string('titulo')->nullable();
            $table->string('departamento')->nullable();
            $table->string('origemContato')->nullable();
            $table->string('recebeInformativo')->nullable();
            $table->string('unidade')->nullable();
            $table->string('linkedin')->nullable();
    
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
        Schema::dropIfExists('contacts');
    }
};
