#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
INPUT="${1:-$ROOT/public/hero-loop.mp4}"
OUTPUT="${2:-$ROOT/public/hero-loop.mp4}"
TMP="${OUTPUT%.mp4}.optimized.mp4"

if [[ ! -f "$INPUT" ]]; then
  echo "Missing input video: $INPUT"
  echo "Place your source file at public/hero-loop.mp4 and rerun:"
  echo "  npm run optimize:hero"
  exit 1
fi

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "ffmpeg is required but not installed."
  exit 1
fi

echo "Optimizing hero video..."
echo "Input:  $INPUT ($(du -h "$INPUT" | cut -f1))"

ffmpeg -y -i "$INPUT" \
  -an \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -profile:v main \
  -pix_fmt yuv420p \
  -movflags +faststart \
  -vf "scale='min(1920,iw)':-2" \
  "$TMP"

mv "$TMP" "$OUTPUT"

echo "Output: $OUTPUT ($(du -h "$OUTPUT" | cut -f1))"
echo "Done."
