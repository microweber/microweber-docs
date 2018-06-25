# Framework Models

## BaseModel

Parent class of all core models listed here.

Defines the `validateAndFill` helper which you can utilize in your controller logic to achieve common tasks in one line:
```
$model->validateAndFill(array('field' => 'value'));
```
The validator uses the protected `$rules` field.
Working with the validator is described in detail [here](https://laravel.com/docs/master/validation).

The base model also adds the `BaseModelObserver` on boot.

## BaseModelObserver

Clears content cache on `saved`, `saving`, `updated`, `deleted`, `restored` and `created`.
Model events are described in more detail [here](https://laravel.com/docs/master/eloquent#events).

## Cart

Model for the [`cart`](sql_schema.md#cart-table) table.
Used to store user cart contents.

## Categories

Model for the [`categories`](sql_schema.md#categories-table).

## Comments

Model for the `comments` table.

## Content

Model for the `content` table.
Used to store posts, products and other types of website content.

Defines relationships for `notifications`, `comments` and `data_fields` (corresponding to the `ContentData` model).

```
// Find content with ID = 42
$content = Content::find(42);
// Take five latest comments on given content
$newComments = $content->comments()
                       ->orderBy('created_at', 'desc')
                       ->take(5)
                       ->get();
``` 

## DataFields

Model for the `content_data` table. Used for key/value storage of content metadata.

## ContentData

Model that extends `DataFields` to be used when working with the `content` rel type specifically.

## ContentFields

Model for the `content_fields` table. Used for key/value storage of content fields.

## Field

Model for the [`custom_fields`](sql_schema.md#custom-fields-table) table. Used to store general purpose custom field data.

Defines the `values` relation which points to `FieldValue`.

## FieldValue

Model for the `custom_fields_values` table. Used to store custom field data.

## Media

Model for the [`media`](sql_schema.md#media-table) table. Used to store image, video and other media information.

## Menu

Model for the `menus` table. Used to store navigation menu data.

## Module

Model for the `modules` table. Used to store information about installed Microweber modules.

Defines the `notifications` relation.

## Notifications

Model for the `notifications` table. Used to store notification data.

## Option

Model for the [`options`](sql_schema.md#options-table) table.

## Order

Model for the `cart_orders` table. Used to store information about customer orders from the shop.

## Shipping

Model for the `cart_shipping` table. Used to store shipping details for orders from the shop.

## SystemLogger

Model for the `log` table. Used to store arbitrary system messages intended for diagnostics and keeping action history.

## User

Model for the `users` table. Used to store information about website users.