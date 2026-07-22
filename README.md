# MyFortescue | Fortescue Zero portal

This repository contains a self contained static portal for Fortescue Zero.

## Navigation

1. `index.html` is the Fortescue Zero landing page.
2. `performance-reporting.html` contains the reporting views.
3. `monthly-view/index.html` contains the July safety performance dashboard.

The remaining tiles are marked **In development** and open a Coming soon dialog.

## Run locally

Open the repository through a local web server. For example, from the repository root:

```powershell
python -m http.server 8000
```

Then open `http://127.0.0.1:8000/`.

All application files, styles, scripts and images are stored in this repository. No external fonts, scripts or image services are required.

## GitHub Pages

The workflow at `.github/workflows/pages.yml` publishes the repository as a static GitHub Pages site whenever `main` is updated. It can also be run manually from the Actions page.

## Content status

The July dashboard is an indicative management view. Source systems remain the authoritative record.
