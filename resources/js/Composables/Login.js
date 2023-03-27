import { useForm } from "@inertiajs/vue3";

export function useLogin() {
    const form = useForm({
        email: null,
        password: null,
        remember: false,
    });

    const login = async () => {
        form.post(route("login"), {
            onSuccess: (data) => {},
        });
    };

    return {
        form,
        login,
    };
}
