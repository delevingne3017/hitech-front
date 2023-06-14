/** @type {import('next').NextConfig} */
const backEndUrl = "http://localhost:8000";
// const uploadUrl = process.env.NEXT_PUBLIC_UPL

module.exports = {
    rewrites: async () => {
        return [
            {
                source: "/api/:path*",
                destination: `${backEndUrl}/api/:path*`
            },
        ]
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

