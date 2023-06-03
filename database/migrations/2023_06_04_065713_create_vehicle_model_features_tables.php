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
        Schema::create('vehicle_model_features', function (Blueprint $table) {
            $table->id();
            $table->foreignId('car_brand_id')->constrained('vehicle_brands');
            $table->foreignId('car_type_id')->constrained('vehicle_types');
            $table->string('model');
            $table->string('year');
            $table->string('color');
            $table->longText('image')->nullable();
            $table->string('full_name');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('vehicle_model_features', function (Blueprint $table) {
            Schema::dropIfExists('vehicle_model_features');
        });
    }
};
