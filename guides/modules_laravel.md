# Laravel Modules

With Microweber you also get the amazing Laravel framework.
Whether you're looking for a way to learn Laravel or you're already loving it, this page is for you.

We have plans for automating the process a bit but for now you can follow these easy steps to get started with a more Laravel-style module creation.

Let's create our first module in no time! We'll call it `myposts` and it will show a simple list of website content.

## 1. Module Declaration
Create these files in your local copy:

**userfiles/modules/myposts/config.php**
```
<?php $config = App\Modules\MyPosts::$config;
```
This script sets the metadata for your module like name, author, database tables that Microweber needs to create, etc.

**userfiles/modules/myposts/index.php**
```
<?php echo (new App\Modules\MyPosts)->render();
```
This script renders the module front-end.

**userfiles/modules/myposts/admin.php**
```
<?php echo (new App\Modules\MyPosts)->admin();
```
This script renders the module admin page.

That's (almost) all the work you'll ever have to do in `userfiles` for your module again. We'll use autoloading to store our module code more conviniently.
Note that we still don't have this `App\Modules\MyPosts` class. Now let's create it.

## 2. Module Class

Our module class will contain the "entry points" (admin, front-end) of the module as well as its meta data.

**app/Modules/MyPosts.php**
```
<?php namespace App\Modules;
use Content;
class MyPosts {
	static $config = array(
		'name'		=> 'My Posts',
		'author'	=> 'Ash',
		'ui'		=> true,
		'ui_admin'	=> true,
		'categories'=> 'general',
		'position'	=> 100,
		'version'	=> 0.1
		);
	public function render()
	{
		$data = Content::all();
		return view('modules.myposts', compact('data'));
	}
	public function admin() {
		return view('modules.myposts_admin');
	}
}
```

Some important notes:
* `Content` is the Microweber Eloquent model you can use to work with the website content storage.
* The static array `$config` is loaded in the `config.php` instead of hard-coding it in place.
* The `render` method is called each time that module is shown on the front-end.
* The `admin` method is called when the module is opened in the admin panel.

## 3. Module Views

Of course, our new module will usually have to return some response. You can make things as easy as possible with Laravel's Blade template engine.
Let's create some sample Views:

**resources/views/modules/myposts.blade.php**
```
<ul>
@foreach($data as $item)
	<li>{{ $item->title }}</li>
@endforeach
</ul>
```
This view prints a list of content titles. The `data` variable is passed as a second argument to the `view()` helper in the `render` method of our module class.

Of course, your views can be plain PHP files if you don't need a template engine.
**resources/views/modules/myposts_admin.php**
```
Welcome to the admin, <b><?php echo Auth::user()->email; ?></b>!
```

## 4. Voila

Now open your website admin panel and click on Extensions -> Reload modules (next to the module types dropdown). Once the modules have been reloaded you'll see `My Posts` in the list and clicking on it will take you to its admin view.
You will also be able to drag/drop it on any page of your website from the live-edit mode.