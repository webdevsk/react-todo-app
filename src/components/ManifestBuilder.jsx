import { useEffect } from "react";
import reactManifest from "react-manifest"
export default function ManifestBuilder() {
    useEffect(() => {
        const manifestDetails = {
            "lang": "en-us",
            "start_url": "/",
            "name": "React TODO App",
            "short_name": "TODO App",
            "display": "standalone",
            "orientation": "any",
            "theme_color": "#ffc107",
            "background_color": "#ffc107",
            "icons": [
                {
                    "src": "/images/checklist-144x144.png",
                    "sizes": "144x144"
                },
                {
                    "src": "/images/checklist-256x256.png",
                    "sizes": "256x256"
                },
                {
                    "src": "/images/checklist-512x512.png",
                    "sizes": "512x512"
                }
            ],
        }
        
        reactManifest.update(manifestDetails, "#manifest-placeholder");
    }, [])
}
