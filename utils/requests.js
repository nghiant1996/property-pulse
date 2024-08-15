const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null
// lí do là liên quan tới việc deploy lên production, có thể env chưa available để access => request bên dưới sẽ trả về 
// hàm rỗng thay vì lỗi
async function fetchProperties() {
    try {
        // handle the case where the domain is not available yet
        if (!apiDomain) {
            return [];
        }

        const res = await fetch(`${apiDomain}/properties`)

        if (!res.ok) {
            throw new Error('Failed to fetch properties');
        }

        const properties = await res.json();

        return properties;
    } catch (error) {
        console.log(error);
    }
}

export { fetchProperties };