<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('vehicles', function (Blueprint $table) {

            $table->string('chassis_number')->nullable();
            $table->string('engine_number')->nullable();
            $table->string('orcr_number')->nullable();
            $table->date('expiration_date')->nullable();
            $table->string('insurance_company')->nullable();
            $table->string('insurance_policy_number')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('vehicles', function (Blueprint $table) {
            //
        });
    }
};
