# Conan.io Website

## Getting Started

These instructions will get you a copy of the project up and running on your local staging and production machines and you will find some additional information about the setup of the website.

## Installation

```
git clone git@github.com:conan-io/website.git
```
## Additional Info

 Built using:
 - Bootstrap 4.0.0
 - Slick Slider

## Structure

Base folder `src/`
- css/ (custom css)
- img/ (images)
- js/ (scripts)
- scss/
- html files

## Development Instructions

- All the source files are located in `src/` folder, any update to the website should be done in this folder.
- To install the dependencies do: `$ npm install`
- After any change you do to any `HTML`, `SCSS`, or `JS` file in the `src/` folder, you can run `$ gulp` 
  to test the changes.
- If you want to use watch and let the gulp tasks run automatically, run `gulp watchAll`. Please note that the watch task will not run on addition new files (or deletion of files).
- Any new images will be added to `src/img`. After an image has been added, run `$ gulp imagesTask`
- Do not push any of the files generated by `gulp` or `gulp imagesTask` to the GitHub repo. They are
  generated by a CI's pipeline when the changes are merged to the repository branch.
- After the push to the `develop` branch the website by CI's pipeline is deployed to the development, test and QA environments.
- After the push to the `staging` branch the website by CI's pipeline is deployed to staging environment.
- After the push to the `master` branch the website by CI's pipeline is deployed to production environment.
-
