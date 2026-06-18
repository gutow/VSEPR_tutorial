# Server Config info
1. This directory must have the option set to `IncludesNoExec`. With Apache2
   I was having trouble getting this recognized in the `.htaccess` file. It
   worked fine in the vhost config file in the list of options for this 
   directory in the `<Directory>..</Directory>` block.
2. Server or vhost must activate the `includes` mod.
3. Server or vhost must also include the following in its configuration:
``` 
        # Allow server-side includes
        AddType text/html .shtml
        AddOutputFilter INCLUDES .shtml
```
# Before release of an update
1. Change the last updated date in the file `Last_mod_date`.