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
        Schema::create('contracts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('account_id')->constrained();
            $table->string('expiracao')->nullable();
            $table->date('dataInicio')->nullable();
            $table->date('dataFim')->nullable();
            $table->string('rua')->nullable();
            $table->string('cidade')->nullable();
            $table->string('estado')->nullable();
            $table->string('cep')->nullable();
            $table->string('pais')->nullable();
            $table->string('termoContrato')->nullable();
            $table->string('status')->nullable();
            $table->date('dataAssinaturaEmpresa')->nullable();
            $table->string('tituloAssinadoCliente')->nullable();
            $table->date('dataAssinaturaCliente')->nullable();
            $table->string('termosEspeciais')->nullable();
            $table->string('descricao')->nullable();
            $table->string('nome')->nullable();
            $table->string('numeroContrato')->nullable();
            $table->date('dataProposta')->nullable();
            $table->string('numeroContratoCCA')->nullable();
    
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
        Schema::dropIfExists('contracts');
    }
};
