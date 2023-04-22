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
        Schema::table('repairs', function (Blueprint $table) {
            if (!Schema::hasColumn('repairs', 'vehicle_id')) {
                $table->foreignId('vehicle_id')->nullable()->constrained('vehicles');
            }

            if (!Schema::hasColumn('repairs', 'total_amount')) {
                $table->decimal('total_amount', 20, 2)->default(0);
            }

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('repairs', function (Blueprint $table) {
            //
        });
    }
};
