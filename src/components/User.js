export const currentUser = localStorage.userId;

export function useUser() {
  if (currentUser) {
    return currentUser;
  }
}
