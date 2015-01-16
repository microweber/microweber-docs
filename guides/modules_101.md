# Modules 101

Microweber modules are PHP scripts that can be placed on the website. They are executed in a sandboxed environment, but can access Microweber, Laravel and any custom dependency's functionality.
Modules help developers make easy modifications and add functionality to user pages.

## Presentation
In most cases, modules are "blocks" that users drag and drop wherever they need them on their website. Galleries, menus, displaying a post, listing posts in given category, contact forms, etc. are examples of such modules.

Modules don't have to depend on the website's content or design and can have their own presentation layer.

## File Structure
Each module is contained within its own folder in `userfiles/modules`.
In order for new modules to be available, you have to open the modules administration page in the back-end and click `Reload Modules`.

## Existing Codebase
Microweber comes bundled with a handful of preinstalled modules that you can examine and extend.
We encourage learning and teaching principles of elegant high quality code.