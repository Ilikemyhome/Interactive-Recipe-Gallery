# Interactive-Recipe-Gallery

A simple React component that displays recipe images and lets users navigate through them using Next and Previous buttons. Built with Vite and React state.

## Features
Shows images + descriptions from a predefined list

Uses useState to track the current index

Navigation buttons with boundary checks

Easy to integrate into a larger dashboard

##  Setup
      bash
      npm create vite@latest gallery-app -- --template react
      cd gallery-app
      npm install
      npm run dev

## Test Cases

### Normal
Loads first image → First image + description appear (index = 0)

Next button → Moves to next image (index + 1)

Previous button → Moves back one image (index - 1)

### Edge
Previous at first image → Button disabled, index stays 0

Next at last image → Button disabled, index stays at last index

Only one image in list → Both buttons disabled, image still displays
