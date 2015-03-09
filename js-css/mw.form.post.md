# mw.form.post

mw.form.post - posts a form via ajax

 
### Usage 
```
<script>
$(document).ready(function () {

    $('#my_form').submit(function () {
        var url =  mw.settings.api_url + 'anything';
        mw.form.post($(this), url, function () {
             alert(this);
        });
        return false;
    });
 
});
</script>
```