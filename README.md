# website
Boston University Machine Intelligence Community website!

Todo:
- Add team information
- Add exec board profiles. Need to think of a good way for displaying info.
- Add sponsor logos
- Add advisory board
- Add project information
- Add news
- Add section pictures
- Breakpoints
- test on mobile and other devices

## Deploy instructions

0. Install Homebrew (For OSX)

`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

1. Install npm

`brew install node`

2. Install babel

`npm install --save-dev babel-cli`
`npm install babel-preset-env --save-dev`

3. Transpile

`babel . --out-dir dist --ignore node_modules`

4. Open index.html in browsers.
