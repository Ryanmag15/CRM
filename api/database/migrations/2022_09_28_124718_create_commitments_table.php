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
        Schema::create('commitments', function (Blueprint $table) {
            $table->id();
            $table->foreignId('contact_id')->constrained();
            $table->string('assunto')->nullable();
            $table->string('descricao')->nullable();
            $table->date('dataInicio')->nullable();
            $table->date('horaInicio')->nullable();
            $table->date('dataFim')->nullable();
            $table->date('horaFim')->nullable();
            $table->string('local')->nullable();
            $table->string('contato')->nullable();
            $table->string('relativo')->nullable();

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
        Schema::dropIfExists('commitments');
    }
};
