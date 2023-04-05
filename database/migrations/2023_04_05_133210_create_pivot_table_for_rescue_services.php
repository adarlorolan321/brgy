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
        Schema::create('rescuer_service', function (Blueprint $table) {
            $table->foreignId('service_id')->constrained('rescue_services')->cascadeOnDelete();
            $table->foreignId('rescuer_id')->constrained('rescuers')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rescuer_service');
    }
};
