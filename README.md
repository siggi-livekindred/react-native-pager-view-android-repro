# Bug Repro
* Reproduce issue where react-native-pager-view becomes unresponsive after removing items


## Steps to repro

* npm install
* npm run android

* Observe how "Remove N" buttons are responsive
* Remove any item
* Observe how "Remove N" button is no longer responsive

## "Workaround"
* Swipe right (not left) and observe how buttons become responsive again


## Example
<video src="./docs/react-native-pager.mp4" />
