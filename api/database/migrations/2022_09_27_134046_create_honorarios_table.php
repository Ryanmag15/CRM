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
        Schema::create('honorarios', function (Blueprint $table) {

            $table->id();
            $table->foreignId('account_id')->constrained();
            $table->string('nome');
            $table->string('beneficioEconomico');
            $table->string('cap');
            $table->string('centroDeCustos');
            $table->string('competenciaAproveitamento');
            $table->string('contrato');
            $table->date('dataConfirmacao');
            $table->date('dataEnvio');
            $table->date('dataPagamento');
            $table->string('dataSolicitacao');
            $table->string('descricao');
            $table->string('empresa');
            $table->string('formaAproveitamento');
            $table->string('gatilho');
            $table->string('honorarioContratual');
            $table->string('honorarioValorNf');
            $table->string('nCompensacao');
            $table->string('nNF');
            $table->string('parcialIntegral');
            $table->string('proLaboraExito');
            $table->string('status');
            $table->date('vencimento');

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
        Schema::dropIfExists('honorarios');
    }
};
