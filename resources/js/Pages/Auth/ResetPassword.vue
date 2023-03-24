<script setup>
import { useForm, router } from '@inertiajs/vue3';
import { ref } from 'vue'

const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.update'), {
        onSuccess: () => {
            // router.get('/login');
        },
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};

const isPassword = ref({ password: true, password_confirmation: true });

</script>

<template>
    <!-- Content -->
    <div class="container-xxl">
        <div class="authentication-wrapper authentication-basic container-p-y">
            <div class="authentication-inner py-4">
            <!-- Reset Password -->
            <div class="card">
                <div class="card-body">

                <!-- Logo -->
                <div class="app-brand justify-content-center mb-4 mt-2">
                    <a href="index.html" class="app-brand-link gap-2">
                        <span class="app-brand-logo demo">
                            <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                                fill="#7367F0"
                            />
                            <path
                                opacity="0.06"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                                fill="#161616"
                            />
                            <path
                                opacity="0.06"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                                fill="#161616"
                            />
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                                fill="#7367F0"
                            />
                            </svg>
                        </span>
                        <span class="app-brand-text demo text-body fw-bold ms-1">Sportsaas</span>
                    </a>
                </div>
                <!-- /Logo -->

                <h4 class="mb-1 pt-2">Reset Password 🔒</h4>
                <p class="mb-4">for <span class="fw-bold">{{ form.email }}</span></p>
                    <form @submit.prevent="submit()">
                        <div class="mb-3 form-password-toggle">
                            <div class="form-group mb-3">
                                <label for="name">New Password <span class="required">*</span></label>
                                <div class="input-group input-group-merge">
                                    <input
                                        :type="isPassword.password?'password':'text'"
                                        id="password"
                                        class="form-control"
                                        :class="{
                                            'is-invalid': form.errors.password,
                                        }"
                                        v-model="form.password"
                                        @input="form.clearErrors('password')"
                                    />
                                    <span @click="isPassword.password = !isPassword.password" class="input-group-text cursor-pointer"><i  :class="isPassword.password ? 'ti ti-eye-off' : 'ti ti-eye'"></i></span>
                                </div>
                                <div class="custom-invalid-feedback" v-if="form.errors.password">
                                    {{ form.errors.password }}
                                </div>
                                <div class="custom-invalid-feedback" v-if="form.errors.email">
                                    {{ form.errors.email }}
                                </div>
                            </div>
                        </div>
                        <div class="mb-3 form-password-toggle">
                            <div class="form-group mb-3">
                                <label for="name">Confirm Password <span class="required">*</span></label>
                                <div class="input-group input-group-merge">
                                    <input
                                        :type="isPassword.password_confirmation?'password':'text'"
                                        id="password_confirmation"
                                        class="form-control"
                                        :class="{
                                            'is-invalid': form.errors.password_confirmation,
                                        }"
                                        v-model="form.password_confirmation"
                                        @input="form.clearErrors('password_confirmation')"
                                    />
                                    <span @click="isPassword.password_confirmation = !isPassword.password_confirmation" class="input-group-text cursor-pointer"><i  :class="isPassword.password_confirmation ? 'ti ti-eye-off' : 'ti ti-eye'"></i></span>
                                </div>
                                <div class="custom-invalid-feedback" v-if="form.errors.password_confirmation">
                                    {{ form.errors.password_confirmation }}
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary d-grid w-100 mb-3">Set new password</button>
                        <div class="text-center">
                        <inertia-link :href="route('login')">
                            <i class="ti ti-chevron-left scaleX-n1-rtl"></i>
                            Back to login
                        </inertia-link>
                        </div>
                    </form>
                </div>
            </div>
            <!-- /Reset Password -->
            </div>
        </div>
    </div>

    <!-- / Content -->
</template>
