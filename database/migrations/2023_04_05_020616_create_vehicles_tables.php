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
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('vehicle_brand_id')->constrained('vehicle_brands');
            $table->string('model');
            $table->string('year');
            $table->foreignId('vehicle_type_id')->constrained('vehicle_types');
            $table->foreignId('assigned_to')->nullable()->constrained('users');
            $table->string('plate_number');
            $table->string('color');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('vehicles', function (Blueprint $table) {
            Schema::dropIfExists('vehicles');
        });
    }
};
