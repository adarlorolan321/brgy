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
            if (!Schema::hasColumn('vehicles', 'odometer')) {
                $table->decimal('odometer', 20, 4)->nullable();
            }
            if (!Schema::hasColumn('vehicles', 'is_driving')) {
                $table->boolean('is_driving')->default(0);
            }
            if (!Schema::hasColumn('vehicles', 'uuid')) {
                $table->uuid('uuid')->nullable();
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('vehicles', function (Blueprint $table) {
            if (Schema::hasColumn('vehicles', 'is_driving')) {
                $table->dropColumn('is_driving');
            } 
            if (Schema::hasColumn('vehicles', 'uuid')) {
                $table->dropColumn('uuid');
            }
            if (Schema::hasColumn('vehicles', 'odometer')) {
                $table->dropColumn('odometer');
            }
        });
    }
};
