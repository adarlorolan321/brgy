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
        Schema::create('blowbagets', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained('users');
            $table->foreignId('vehicle_id')->nullable()->constrained('vehicles');
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
     */
    public function down(): void
    {
        Schema::dropIfExists('blowbagets');
    }
};
