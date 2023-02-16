<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlowbagetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blowbagets', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('car_id')->unsigned();
            $table->foreign('car_id')->references('id')->on('cars');
            $table->bigInteger('created_by')->unsigned();
            $table->foreign('created_by')->references('id')->on('users');
            $table->integer('break')->default(0);
            $table->integer('lights')->default(0);
            $table->integer('oil')->default(0);
            $table->integer('water')->default(0);
            $table->integer('battery')->default(0);
            $table->integer('air')->default(0);
            $table->integer('gas')->default(0);
            $table->integer('engine')->default(0);
            $table->integer('tools')->default(0);
            $table->integer('self')->default(0);
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
        Schema::dropIfExists('blowbagets');
    }
}
