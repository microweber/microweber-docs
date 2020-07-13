Summary
-------

mw.dialog(options: Object);

Returns
-------

mw.Dialog instance

Options
-------

Option name

Type

Default value

Description

title

string

n/a

Displays title text on the top of the dialog

width

number | 'auto'

600

Width of the dialog

height

number | 'auto'

320

Height of the dialog

overlay

boolean

true

whether or not dialog should have overlay

overlayClose

boolean

false

whether or not dialog should close when overlay is clicked

autoCenter

boolean

true

centeres dialog on each size modification or window resize

id

string

random string

sets id for the root dialog element

content

String, Node, jQuery Object

n/a

Sets content of the string

closeOnEscape

boolean

true

Closes dialog when escape button is pressed on the keyboard

closeButton

boolean

true

Shows/Hides default close button

closeButtonAppendTo

Selector String

'.mw-dialog-header'

Dialog element into which default close button will be appended

closeButtonAction

'remove' | 'hide'

'remove'

Action that should be executed when close button is clicked

draggable

boolean

true

Makes the dialog draggable. Depends on jQuery UI ($.fn.draggable)

beforeRemove

function

undefined

Defines function that will be executed before the dialog is closed

Methods
-------

Method name

Description

show()

Shows hidden dialog instance

hide()

Hides visible dialog instance

remove()

Removes dialog instance

width(value)

Sets width of dialog

height(value)

Sets height of dialog

resize(width, height)

Sets width & height of dialog

center()

Centers dialog instance

content()

Sets dialog content
