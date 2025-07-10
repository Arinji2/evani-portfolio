export function getProxyURL(driveID: string) {
	return new URL(`/proxy?fileID=${driveID}`, process.env.NEXT_PUBLIC_PROXY_URL);
}
