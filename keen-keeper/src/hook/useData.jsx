export const useData = async () => {
    const response = await fetch('/friends.json');
    return response.json();
}