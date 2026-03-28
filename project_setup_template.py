import os
import subprocess
import json
import sys

# Define content templates

AGENTS_MD_CONTENT = r"""# System Instructions: Antigravity

## 1. Role & Persona

**Identity:** You are a **Senior Frontend Architect and UI/UX Designer** specializing in high-performance, visualization-heavy web applications. You have deep expertise in **Next.js (App Router)**, **React**, **Tailwind CSS**, and **WebGL (Three.js/R3F)**.

**Dynamic:** Act as my **Lead Engineer**. I am the Product Owner; you are here to translate business requirements into a stunning, production-grade user interface.

**Tone:** Creative, technical, and quality-obsessed.

*   **Aesthetics First:** We are building a "luxury" product. Mediocre design is a failure condition.
*   **Code Quality:** Enforce strict TypeScript, component reusability, and clean architecture.
*   **Performance:** The app must feel instant. Optimize for Core Web Vitals.

## 2. Project Architecture

You are building a Modern Next.js Application in the current directory.

```text
/ (root)
├── app/                    # Next.js App Router (Pages & Layouts)
│   ├── (marketing)/        # Landing page, about, mostly static
│   ├── (app)/              # Dashboard, report view (authenticated)
│   ├── api/                # API Routes (if needed for proxying)
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles (Tailwind directives)
│
├── components/             # React Components
│   ├── ui/                 # Primitive components (Buttons, Inputs - atomic)
│   ├── features/           # Complex feature-specific components (e.g., ReportViewer)
│   ├── layout/             # Structural components (Nav, Footer)
│   └── visualizations/     # R3F/Three.js scenes (Map3D, DataPillar)
│
├── lib/                    # Core Logic & Utilities
│   ├── utils.ts            # Class merging, formatting helpers
│   ├── api.ts              # Fetch wrappers
│   └── types.ts            # Shared TypeScript definitions
│
├── public/                 # Static Assets (Images, Fonts, Models)
├── hooks/                  # Custom React Hooks
├── styles/                 # Additional CSS modules (rarely used, prefer Tailwind)
│
├── next.config.js          # Next.js Configuration
├── tailwind.config.ts      # Tailwind Configuration
└── tsconfig.json           # TypeScript Configuration
```

## 3. Operational Directives

### A. Design System & Aesthetics (CRITICAL)
*   **Framework:** Use **Tailwind CSS** for all styling.
*   **Vibe:** "Westworld Tablet UI", "Bloomberg Terminal for Land". Dark mode, neon accents (Cyan/Amber), glassmorphism, thin borders.
*   **Visual Metaphor:** "The MRI for Real Estate". Use wireframes, point clouds, and data pillars.
*   **Typography:** Professional sans-serif (Inter, Outfit, or similar).
*   **Motion:** Use `framer-motion` for UI transitions. Use `react-three-fiber` for the hero visualizations (Lidar sweep, Data Pillar).

### B. Coding Standards
*   **Strict Types:** No `any`. Define interfaces in `lib/types.ts` or co-located with components.
*   **React Server Components (RSC):** Default to Server Components. Use `"use client"` only when interactivity is required (state, effects).
*   **Component Structure:**
    *   Props interface exported.
    *   Named function components.
    *   Co-locate sub-components if they are strictly implementation details.

### C. Implementation Workflow
1.  **Plan:** Check `docs/Landing_page_plan.md` for specific visual requirements before coding.
2.  **Scaffold:** Create the component interface.
3.  **Style:** Apply base Tailwind classes. Use `clsx` and `tailwind-merge` for conditional styling.
4.  **Refine:** Add interactions, hover states, and animations.
5.  **Verify:** Check responsiveness (Mobile vs Desktop) and Accessibility (A11y).

## 4. Tech Stack Priorities
*   **Routing:** Next.js 14+ App Router.
*   **Styling:** Tailwind CSS.
*   **Animations:** Framer Motion.
*   **3D/WebGL:** React Three Fiber (@react-three/fiber), Drei (@react-three/drei).
*   **Maps:** Google Photorealistic 3D Tiles (via Cesium or deck.gl components) or Mapbox.
*   **State:** React Context for global UI state, Zustand for complex store.
"""

def utils_ts_content():
    return """import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
"""

import os
import subprocess
import json
import sys
import shutil

# ... (AGENTS_MD_CONTENT and utils_ts_content remain unchanged)

# Define content templates (AGENTS_MD_CONTENT and utils_ts_content are already defined in the file, we assume we are replacing the logic)

def setup_project():
    print("🚀 Initializing TerraCheck Web Frontend...")

    # 1. Initialize Next.js App if not present
    if not os.path.exists("package.json"):
        print("📦 Scaffolding Next.js app (Step 1/4)...")
        # Initialize Next.js in a temporary directory to avoid non-empty dir errors
        temp_dir = "temp_next_app"
        
        try:
            subprocess.run([
                "npx", "--yes", "create-next-app@latest", temp_dir,
                "--typescript",
                "--tailwind",
                "--eslint",
                "--app",
                "--no-src-dir", # We want 'app' at the root as per blueprint
                "--import-alias", "@/*",
                "--use-npm"
            ], check=True, input="No\nNo\n", text=True)
            
            print("  Moving files from temporary directory to root...")
            # Move files from temp_dir to .
            for item in os.listdir(temp_dir):
                s = os.path.join(temp_dir, item)
                d = os.path.join(".", item)
                if os.path.exists(d):
                    if os.path.isdir(d):
                        print(f"  [MERGE] Directory {d} already exists, merging...")
                        # Simple merge: copying tree over execution
                        # shutil.copytree(s, d, dirs_exist_ok=True)
                        # But create-next-app creates deep structures. 
                        # Ideally, we remove the detailed target if it's just a generated file, 
                        # but for docs/ we want to keep it.
                        # Since create-next-app creates 'app', 'public', etc.
                        # We can use shutil.copytree with dirs_exist_ok=True
                        shutil.copytree(s, d, dirs_exist_ok=True)
                        shutil.rmtree(s)
                    else:
                        print(f"  [OVERWRITE] {d}")
                        os.remove(d)
                        shutil.move(s, d)
                else:
                    shutil.move(s, d)
            
            os.rmdir(temp_dir)
            
        except subprocess.CalledProcessError:
            print("❌ Failed to create Next.js app. Please check your environment.")
            if os.path.exists(temp_dir):
                shutil.rmtree(temp_dir)
            sys.exit(1)
            
    else:
        print("ℹ️  package.json already exists. Skipping 'create-next-app'.")

    # 2. Install Additional Dependencies
    print("📦 Installing visualization libraries (Step 2/4)...")
    try:
        subprocess.run([
            "npm", "install", 
            "three", "@types/three", 
            "@react-three/fiber", "@react-three/drei", 
            "framer-motion", 
            "clsx", "tailwind-merge", "lucide-react"
        ], check=True)
    except subprocess.CalledProcessError:
        print("⚠️ Warning: Failed to install additional dependencies.")

    # 3. Create Directory Structure
    print("📂 Creating directory structure (Step 3/4)...")
    dirs_to_create = [
        "components/ui",
        "components/features",
        "components/layout",
        "components/visualizations",
        "lib",
        "hooks",
        "public/models",
        "app/(marketing)",
        "app/(app)",
    ]
    
    for d in dirs_to_create:
        os.makedirs(d, exist_ok=True)
        print(f"  [DIR] {d}")

    # 4. Write Project Files
    print("📝 Writing project files (Step 4/4)...")
    
    # Update AGENTS.md
    with open("AGENTS.md", "w") as f:
        f.write(AGENTS_MD_CONTENT)
    print("  [FILE] AGENTS.md")

    # Create lib/utils.ts (standard helper for tailwind)
    if not os.path.exists("lib/utils.ts"):
        with open("lib/utils.ts", "w") as f:
            f.write(utils_ts_content())
        print("  [FILE] lib/utils.ts")

    print("\n✅ Setup Complete!")
    print("\n👉 To start the development server:")
    print("   npm run dev")

if __name__ == "__main__":
    setup_project()