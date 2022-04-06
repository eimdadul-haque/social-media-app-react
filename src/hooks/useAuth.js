
export function useAuth() {
    const auth = localStorage.getItem("token") !== null ? true : false;
    return auth
}
