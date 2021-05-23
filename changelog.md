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
