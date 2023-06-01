<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\User;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $permissions = [
            'access vehicle_type',
            'create vehicle_type',
            'store vehicle_type',
            'edit vehicle_type',
            'update vehicle_type',
            'destroy vehicle_type',
            'show vehicle_type',

            'access vehicle_brand',
            'create vehicle_brand',
            'store vehicle_brand',
            'edit vehicle_brand',
            'update vehicle_brand',
            'destroy vehicle_brand',
            'show vehicle_brand',

            'access rescue_service',
            'create rescue_service',
            'store rescue_service',
            'edit rescue_service',
            'update rescue_service',
            'destroy rescue_service',
            'show rescue_service',

            'access rescuer',
            'create rescuer',
            'store rescuer',
            'edit rescuer',
            'update rescuer',
            'destroy rescuer',
            'show rescuer',

            'access vehicle',
            'create vehicle',
            'store vehicle',
            'edit vehicle',
            'update vehicle',
            'destroy vehicle',
            'show vehicle',

            'access repair',
            'create repair',
            'store repair',
            'edit repair',
            'update repair',
            'destroy repair',
            'show repair',

            
            'access rescue_log',
            'create rescue_log',
            'store rescue_log',
            'edit rescue_log',
            'update rescue_log',
            'destroy rescue_log',
            'show rescue_log',

            
            'access insurance_claim',
            'create insurance_claim',
            'store insurance_claim',
            'edit insurance_claim',
            'update insurance_claim',
            'destroy insurance_claim',
            'show insurance_claim',

            'access tip',
            'create tip',
            'store tip',
            'edit tip',
            'update tip',
            'destroy tip',
            'show tip',
            
        ];
        $roles = [
            'Admin' => $permissions,
            "Private Driver" => $permissions,
            "Company Driver" => $permissions,
        ];

        foreach ($roles as $role => $permissions) {
            $db_role = Role::where('name', $role)->first();
            if (!$db_role) {
                // CREATE NEW ROLE
                $db_role = Role::create(['name' => $role]);
            }
            // ADD PERMISSION
            foreach ($permissions as $permission) {
                $new_permission = Permission::where('name', $permission)->first();
                if (!$new_permission) {
                    $new_permission = Permission::create([
                        'name' => $permission
                    ]);
                }
                if (!$db_role->hasPermissionTo($permission)) {
                    $db_role->givePermissionTo($permission);
                }
            }
        }
        // ASSIGN SUPER ADMIN ROLE
        $user = User::where('email', 'admin@admin.com')->first();
        if ($user) {
            $user->assignRole('Admin'); // SUPER ADMIN
        }
    }
}
