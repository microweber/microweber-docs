# Events

## Using Events

Using events in Microweber is very easy. In fact, you only need one or two functions.

In order to listen for given event you can call:
```
event_bind($event, $listener);
```
Where `$event` is the name of the event (i.e `'mw.frontend'`) and `$listener` is a callback function (or a string containing the name of one) that will be run when that event occurs.

You can of course trigger your own events by calling this helper function:
```
event_trigger($event, $data);
```
Where `$event` is the name of the event and `$data` is any value you want to pass to a listener.

Below you can find events that are fired throughout Microweber that may prove useful during development.


## Controller events


### mw.front

Called in the beginning of the front-end lifecycle. A common place for bootstrap logic.


Example:
```php
event_bind('mw.front', function(){
   // load javascript or css on all frontend pages
    $url = module_url('comments');
    mw()->template->head($url . 'script.js');
    mw()->template->head($url . 'style.css');
});
``` 

### mw.live_edit

Called in the beginning of the front-end lifecycle if the user is in live edit.

Example:
```php
event_bind('mw.front', function(){
    $url = module_url('some_module');
    mw()->template->head($url . 'script.js');
});
``` 


### mw.admin

Called in the beginning of the back-end lifecycle when the user is requesting an admin page.


Example:
```php
event_bind('mw.admin', function(){
    $url = module_url('some_module');
    mw()->template->admin_head($url . 'admin.js');
});
``` 




## Content events
mw.content.save_edit
Example:
```php
event_bind('mw.content.save_edit', function($content){
    // do something with $content
});
```
     
 
``` 


## Other events



### mw.controller.index

Called in the beginning of the Microweber lifecycle.

### on_load

Called after the content for the requested page has been collected.

Callback parameters:
* `content` (array)

### site_header

Called when the `<head>` tag is being processed. You can return array of headers that will be appended to the website.

Callback parameters:
* `template` (string) - The name of the used template

### mw_robot_url_hit

Called when a robot meta URL is hit (for example robots.txt or an RSS feed is read).


### mw.admin.header

Called in the beginning of the back-end lifecycle when the header is being processed.

## Database

### mw.database.before_select

Called upon executing a `select` database query.

Callback parameters:
* `query` (string) - The prepared SQL query in lower case
* `bindings` (array) - The prepared query bindings
* `result` (&array) - Reference to the results (initially `null`) that will be returned if your callback returns `false`. Otherwise your changes will be overwritten (or merged with) after query execution.

### mw.database.select

Called after executing a `select` database query. You may alter the results returned to Microweber by altering the `results` array.

Callback parameters:
* `query` (string) - The prepared SQL query in lower case
* `bindings` (array) - The prepared query bindings
* `result` (&array) - Reference to the results returned from the query