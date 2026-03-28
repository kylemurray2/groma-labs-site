Project TerraCheck: Landing Page & Visual Strategy

Goal: Establish immediate trust and scientific authority through a "high-tech/luxury" aesthetic.
Core Visual Metaphor: "The MRI for Real Estate."
Vibe: Dark mode, neon accents (cyan/amber), wireframes, architectural precision. Think Westworld tablet UI meets Bloomberg Terminal.

1. The Hero Animation (Video/Interactive)

This is the first thing the user sees. It loops or plays on load.

The "Deconstruction" Storyboard

Scene 1: The Context (Google Earth Fly-in)

Visual: Fast, cinematic zoom from low-earth orbit down to a specific neighborhood (e.g., Leyden, CO).

Style: Realistic satellite imagery (Google Photorealistic 3D Tiles).

Motion: Camera swoops down and locks onto a specific suburban cul-de-sac.

Scene 2: The "Lidar" Sweep (The Transition)

Action: A "scanning beam" of light sweeps across the screen from left to right.

Transformation: As the beam passes, the realistic satellite textures are stripped away.

Trees vanish or turn into translucent point clouds.

The realistic 3D houses transform into matte dark-grey architectural massings (untextured blocks) or glowing wireframes.

Why: This removes the "noise" of paint colors and landscaping, focusing the eye on the structure and the terrain.

Scene 3: The Underlying Truth (The DEM)

Action: The ground plane underneath the wireframe houses cross-fades into a high-contrast DEM (Digital Elevation Model).

Visual: Hillshade rendering. Steep slopes glow faint red. Drainage basins are shadowed deep blue.

Property Bounds: Neon white lines draw the specific parcel boundary on the ground, cutting through the terrain mesh.

Scene 4: The "Pixel" Reveal (Solving the Resolution Limit)

The Constraint: We only have ~1 pixel per house (Sentinel-1 resolution is ~5m x 20m).

The Visual Solution: Don't fake resolution. Visualize the Grid.

A semi-transparent, cyan "satellite grid" drops down from the sky and locks onto the terrain.

The specific grid cell covering the house highlights.

Instead of coloring the whole ground, we render a "Data Pillar": A vertical, glowing bar rising from the center of that pixel, right through the house model.

Metaphor: This is a precise measurement probe, not a blurry painting.

Scene 5: The Pulse (Time Series Visualization)

Action: The Data Pillar moves up and down.

Seasonal Breathing: The terrain mesh and the house model "breathe" slightly (exaggerated vertical scale) in sync with the bar.

UI Overlay: A floating 2D graph (the time series) appears next to the house, drawing the line in real-time sync with the breathing animation.

Text: "Seasonal Amplitude: ±12mm (High Clay Risk)" flashes in a tech font.

2. Webpage Layout & UX

A. The "Above the Fold" (Hero Section)

Background: The 3D animation described above (muted brightness).

Headline: "The Invisible Risk Beneath Your Feet."

Subhead: "Standard inspections check the structure. TerraCheck scans the land."

Call to Action: A large, high-contrast Search Bar.

Placeholder Text: "Enter address (e.g., 1234 Leyden Rock Dr...)"

Button: "Run Scan" (Glowing effect).

B. "The Gap" (The Education Section)

Design: Three vertical columns, icon-heavy.

Column 1: The House. (Icon: Roof). "You checked the roof, pipes, and foundation."

Column 2: The Blind Spot. (Icon: Question Mark over Ground). "But 40% of structural damage comes from soil movement, which isn't on the disclosure."

Column 3: The TerraCheck. (Icon: Radar Wave). "We use historical satellite radar to measure ground deformation down to the millimeter."

C. Interactive Demo (The Hook)

Concept: "See the unseen."

Widget: A "Before/After" slider image or a mini map viewer.

Content: A known sinking location (e.g., The Millennium Tower or a sliding hill in California).

Left Side: Standard Map (Looks normal).

Right Side: TerraCheck Velocity Map (Bright red hotspot).

Caption: "InSAR reveals movement years before cracks appear."

D. The Sample Report (The Deliverable)

Visual: A tilted, 3D perspective mockup of the PDF report on a tablet or printed.

Key Highlight: Zoom bubbles focusing on:

The "Green/Red" Stability Score.

The "Seasonal Heartbeat" graph.

The "Flood Factor" badge.

E. Footer / Trust Signals

Logos: "Built with data from:" [NASA Logo] [ESA Logo] [USGS Logo].

Creator Badge: "Developed by Geophysicists, not just developers."

3. Technical Stack for the Visuals

The 3D Animation (Web Implementation)

Framework: React Three Fiber (R3F). This allows us to render the 3D scene directly in the browser using WebGL.

Tiles: Google Photorealistic 3D Tiles API (via CesiumJS or deck.gl) for the realistic fly-in.

Shaders: Custom GLSL shaders to handle the "Lidar Sweep" effect (transitioning from texture to wireframe).

Performance: If R3F is too heavy for mobile, we pre-render the "perfect" animation as a high-bitrate video (MP4/WebM) and scroll-lock it.

The "Data Pillar" Visualization

This solves the resolution issue elegantly. By representing the InSAR scatterer as a geometric object (a sphere or bar) anchored to the property, we acknowledge the spatial resolution while making it look precise. It looks like a "sensor reading" rather than a "blurry map."

4. Copywriting Tone

Keywords: Precision, Invisible, Radar, Millimeter, Risk, Stability, Historical.

Voice: Authoritative but urgent. Less "academic abstract," more "financial risk assessment."

Taglines to test:

"Don't buy a moving target."

"See what the seller can't see."

"Geophysics, democratized."




Ideas:
include some statistics about homes and subsidence