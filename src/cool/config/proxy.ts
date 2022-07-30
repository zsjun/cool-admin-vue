export const proxy = {
	"/dev": {
		// target: "http://127.0.0.1:8001",
		// target: "http://192.168.50.135:8001",
		target: "http://192.168.1.100:8001",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/dev/, "")
	},

	"/prod": {
		target: "https://show.cool-admin.com",
		changeOrigin: true,
		rewrite: (path: string) => path.replace(/^\/prod/, "/api")
	}
};
