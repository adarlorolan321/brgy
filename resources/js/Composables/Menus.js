import { ref } from "vue";

export function useMenu() {
    const menus = [
        {
            label: "Dashboard",
            route: "welcome",
            icon: "ti ti-dashboard",
            only: ["data", "params"],
        },
        {
            label: "Dryvers",
            route: "drivers.index",
            icon: "ti ti-user",
            only: ["data", "params"],
        },
        {
            label: "Vehicle",
            route: "vehicles.index",
            icon: "ti ti-car",
            sub_menu: [
                {
                    label: "Vehicle List",
                    route: "vehicles.index",
                    icon: "ti ti-car",
                    only: ["data", "params"],
                },
                {
                    label: "Vehicle Types",
                    route: "vehicle_types.index",
                    icon: "ti ti-car",
                    only: ["data", "params"],
                },
                {
                    label: "Vehicle Brands",
                    route: "vehicle_brands.index",
                    icon: "ti ti-tag",
                    only: ["data", "params"],
                },
            ]
        },
        {
            label: "Rescue",
            route: "rescuers.index",
            icon: "ti ti-truck",
            only: ["data", "params"],
            sub_menu: [
                {
                    label: "Rescuers",
                    route: "rescuers.index",
                    icon: "ti ti-truck",
                    only: ["data", "params"],
                },
                {
                    label: "Rescue Services",
                    route: "rescue_services.index",
                    icon: "ti ti-bandage",
                    only: ["data", "params"],
                },
            ]
        },
        {
            label: "Repair",
            route: "repair.index",
            icon: "ti ti-tool",
            only: ["data", "params"],
        },
        {
            label: "Tip",
            route: "tips.index",
            icon: "ti ti-help",
            only: ["data", "params"],
        },
    ];

    return {
        menus,
    };
}
