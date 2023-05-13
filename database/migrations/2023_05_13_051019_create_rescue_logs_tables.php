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
        Schema::create('rescue_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
$table->foreignId('vehicle_id')->constrained('vehicles');
$table->string('lat');
$table->string('lng');
$table->foreignId('rescuer_id')->constrained('rescuers');
$table->foreignId('rescue_service_id')->constrained('rescue_services');
$table->string('action');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('rescue_logs', function (Blueprint $table) {
            Schema::dropIfExists('rescue_logs');
        });
    }
};
