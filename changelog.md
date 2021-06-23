# Changelog
A log of changes for the project in this repository

## [1.0.0] - 2021-04-18
### Added
- Project itself
- Basic models for products and categories
- Component to display your shopping cart
- Component to display available product
- First component, just for it to be there
- Services that provide data about cart and product list

## [1.0.1] - 2021-04-18
### Added
- Bootstrap as an official UI library of the project
- Cart item as a separate component
- Cart now displays number of items in it as well as total value of all items

### Changed
- Separated project into proper modules
- FirstComponent is not displayed anymore because it was bothering me
- Styles were moved to bootstrap
- Added unique identifier for products

## [1.0.2] - 2021-05-04
### Added
- Ability to add items to cart as well as remove the
- Title for main page

### Changed
- Cart items now also display quantity of said items in cart

## [1.0.2.1] - 2021-05-12
### Changed
- Fixed highlighting directive imports and actions


## [1.0.2.2] - 2021-05-23
### Added
- Editorconfig with style rules for the project

### Changed
- Fixed problem when removing last item from cart would cause error because of empty array reduction


## [1.0.3.0] - 2021-05-23
### Added
- New cart methods
- Increase/decrease item quantity buttons for cart items
- Some new services for providing in FirstComponent

### Changed
- Name of most cart service methods
- Returned FirsComponent to display


## [1.0.3.1] - 2021-05-25
### Added
- More new services
- Id generator
- Directive that adds and removes black border on parent element


## [1.0.4.0] - 2021-05-25
### Added
- Pipe for sorting an array of cart items

### Changed
- Fixed adding items to cart
- Added sorting to cart items, as of this moment only static, by price


## [1.0.4.1]  2021-05-30
### Changed
- Refactored basic exports and imports in modules
- Removed comments
- Some formatting in modules

## [1.0.4.2] 2021-05-30
### Changed
- Fixed orderBy pipe to sort objects properly
- Added sorting selector for cart
- Removed unnecessary console logs
- Properly set orderBy pipe to be used in cart display for sorting cart items


## [1.0.5.0] 2021-06-08
### Changed
- Refactored component and service exports and imports

## [1.0.5.1] 2021-06-08
### Added
- Routing for the application
- App administration module
- Page for orders display
### Changed
- Minor template and imports/exports refactoring


## [1.0.5.2] 2021-06-09
### Added
- Guards for administration and checkout
- Forbidden url page
- Not found URL page
- User model and possible roles
### Changed
- Added decorator to Local Storage Service
- Fixed cart data initialization

## [1.0.5.3] 2021-06-09
### Added 
- Product resolver for product editing


## [1.0.5.4] 2021-06-09
### Added
- CanDeactivate guard for edit


## [1.0.6.0] 2021-06-21
### Added
- Add mock server for http requests
- Add database for mock server and populated it with data
- Http timing interceptor that logs time spent on HTTP requests
### Changed
- Products service now gets data from server 


## [1.0.6.1] 2021-06-23
### Changed
- Broke everything by changing cart to work with mock backend

