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
        Schema::table('vehicle_drive_logs', function (Blueprint $table) {
            if (!Schema::hasColumn('vehicle_drive_logs', 'user_id')) {
                $table->foreignId('user_id')->nullable()->constrained('users');
            }

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('vehicle_drive_logs', function (Blueprint $table) {
            //
        });
    }
};
