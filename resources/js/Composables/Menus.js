import { ref } from "vue";

export function useMenu() {
    const menus = [
        {
            label: "Dashboard",
            route: "welcome",
            icon: "ti ti-users",
            only: ["data", "params"],
        },
        {
            label: "Vehicle Types",
            route: "vehicle_types.index",
            icon: "ti ti-users",
            only: ["data", "params"],
        },
        {
            label: "Vehicle Brands",
            route: "vehicle_brands.index",
            icon: "ti ti-users",
            only: ["data", "params"],
        },
        {
            label: "Rescue Services`",
            route: "rescue_services.index",
            icon: "ti ti-users",
            only: ["data", "params"],
        },

        // {
        //     label: "Settings",
        //     route: "settings.*",
        //     icon: "ti ti-settings",
        //     sub_menu: [
        //         { label: "Services", route: "settings.services.index", icon: "ti ti-smart-home", only: ["data", "params"] },
        //         { label: "Venues", route: "settings.venues.index", icon: "ti ti-home", only: ["data", "params"] },
        //         // {
        //         //     label: "Embed Codes",
        //         //     route: "user.parent.index",
        //         //     icon: "ti ti-users",
        //         // },
        //         // {
        //         //     label: "Locations",
        //         //     route: "user.parent.index",
        //         //     icon: "ti ti-users",
        //         // },
        //         // {
        //         //     label: "Services",
        //         //     route: "user.parent.index",
        //         //     icon: "ti ti-users",
        //         // },
        //         // {
        //         //     label: "Coupons",
        //         //     route: "user.parent.index",
        //         //     icon: "ti ti-users",
        //         // },
        //     ],
        // },
        // // {
        // //     label: 'User', route: 'users.*', icon: 'ti ti-users',
        // //     sub_menu: [
        // //         {label: 'Coach', route: 'user.coach', icon: 'ti ti-users'},
        // //         {label: 'Staff', route: 'user.staff', icon: 'ti ti-users'},
        // //         {label: 'Parent', route: 'user.parent', icon: 'ti ti-users'},
        // //         {label: 'Student', route: 'user.student', icon: 'ti ti-users'},
        // //     ]
        // // },
    ];

    return {
        menus,
    };
}
