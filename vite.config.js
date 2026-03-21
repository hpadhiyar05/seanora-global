import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],

    build: {
        chunkSizeWarningLimit: 600,
        reportCompressedSize: false,
        cssCodeSplit: true,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                passes: 2,
            },
            format: {
                comments: false,
            },
        },
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (
                        id.includes('node_modules/react/') ||
                        id.includes('node_modules/react-dom/') ||
                        id.includes('node_modules/scheduler/')
                    )
                        return 'vendor';

                    if (
                        id.includes('node_modules/react-router-dom/') ||
                        id.includes('node_modules/@remix-run/') ||
                        id.includes('node_modules/history/')
                    )
                        return 'router';

                    if (
                        id.includes('node_modules/framer-motion/') ||
                        id.includes('node_modules/motion-dom/') ||
                        id.includes('node_modules/motion-utils/')
                    )
                        return 'framer';

                    if (
                        id.includes('node_modules/@sanity/') ||
                        id.includes('node_modules/sanity/') ||
                        id.includes('node_modules/@portabletext/') ||
                        id.includes('node_modules/rxjs/') ||
                        id.includes('node_modules/get-it/') ||
                        id.includes('node_modules/event-source-polyfill/') ||
                        id.includes('node_modules/@dqbd/') ||
                        id.includes('node_modules/groq/')
                    )
                        return 'sanity';

                    if (id.includes('node_modules/lucide-react/')) return 'lucide';

                    if (id.includes('node_modules/')) return 'deps';
                },
            },
        },
    },
});
