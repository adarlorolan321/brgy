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
        Schema::table('rescuers', function (Blueprint $table) {
            if (!Schema::hasColumn('rescuers', 'province')) {
                $table->string('province')->nullable();
            }

            if (!Schema::hasColumn('rescuers', 'city')) {
                $table->string('city')->nullable();
            }

            if (!Schema::hasColumn('rescuers', 'gender')) {
                $table->string('gender')->nullable();
            }

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('rescuers', function (Blueprint $table) {
            //
        });
    }
};
