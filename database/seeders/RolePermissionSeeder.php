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
        $roles = [
            'OrgAdmin' => [
                'access service',
                'create service',
                'store service',
                'edit service',
                'update service',
                'destroy service',
                'show service',
            ],
            'Admin' => [
                'access service',
                'create service',
                'store service',
                'edit service',
                'update service',
                'destroy service',
                'show service',

                'access user',
                'create user',
                'store user',
                'edit user',
                'update user',
                'destroy user',
                'show user',

                'access venue',
                'create venue',
                'store venue',
                'edit venue',
                'update venue',
                'destroy venue',
                'show venue',

                'access class',
                'create class',
                'store class',
                'edit class',
                'update class',
                'destroy class',
                'show class',

                'access student',
                'create student',
                'store student',
                'edit student',
                'update student',
                'destroy student',
                'show student',

            ],
            'Coach' => [
                'access user',
                'create user',
                'store user',
                'edit user',
                'update user',
                'destroy user',
                'show user',
            ],
            'Staff' => [
                'access user',
                'create user',
                'store user',
                'edit user',
                'update user',
                'destroy user',
                'show user',
            ],
            'Client' => [
                'access user',
                'create user',
                'store user',
                'edit user',
                'update user',
                'destroy user',
                'show user',
            ],
            'Student' => [
                'access user',
                'create user',
                'store user',
                'edit user',
                'update user',
                'destroy user',
                'show user',
            ],
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
        $user->assignRole('Admin'); // SUPER ADMIN
    }
}
