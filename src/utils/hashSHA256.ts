export const hashSHA256 = async (text: string) => {
    const buffer = new TextEncoder().encode(text);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', buffer);
    return Array.from(new Uint8Array(hashBuffer))
        .map((item) => item.toString(16).padStart(2, '0'))
        .join('');
};
