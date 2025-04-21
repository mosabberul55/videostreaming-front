export function useAuth() {
    const router = useRouter();
    const authStore = useAuthStore();

    const login = async (values: { email: string; password: string }) => {
        const { data, error } = await authStore.login(values);
        if (error && error.value) {
            if (error.value.data.statusCode === 422) {
                return { errors: error.value.data.message };
            } else {
                return { errors: { email: [error.value.data.message] } };
            }
        } else {

            await router.push('/');
            return { data };
        }
    };

    return {
        login
    };
}