<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRescuerRescueServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rescuer_rescue_services', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('rescuer_id')->unsigned();
            $table->foreign('rescuer_id')->references('id')->on('rescuers');
            $table->bigInteger('rescue_service_id')->unsigned();
            $table->foreign('rescue_service_id')->references('id')->on('rescue_services');
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
        Schema::dropIfExists('rescuer_rescue_services');
    }
}
