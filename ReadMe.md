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
# JSmol settings
The JSmol settings are in the file `JSmol_Settings.js`. Most of the settings 
should not be touched. However, you will have to set the following two 
appropriately for the relative location on the server this is installed on. 
Below are the defaults:
```javascript
j2sPath: "../../Applets/JSmol/j2s",
serverURL: "../../Applets/JSmol/php/jsmol.php",
```
# Links to set or verify
1. Contents of "hosted-by" div in `VSEPR_Header.html`
```
    <div id="hosted-by">
        Hosted by <a href="https://uwosh.edu/Chemistry">UW Oshkosh Chemistry</a>
    </div>
```
2. Link to Lewis Structure tutorial in `VSEPR_Intro.shtml` ~ line 16
```
   <a href="../../Lewis_Tutorial/Lewis.shtml" target="noframes">Lewis
Structure</a>
```
3. Link to Lewis Structure tutorial in `VSEPR_model.shtml` ~ line 28
```
   <a href="../../Lewis_Tutorial/Lewis.shtml" target="noframes">Lewis
Structure</a>
```
# Before release of an update
1. Change the last updated date in the file `Last_mod_date`.