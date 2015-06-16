# Virtual Machine Images

All images are suitable for both production and development.

The image includes Debian 8, as well the following software configured and installed:
* nginx
* HHVM
* git
* MySQL
* SQLite
* Microweber

The default password is `microweber`. There is a `microweber` user for MySQL and SSH access. The web root is located at `/home/microweber/microweber`.

Note: HHVM is configured to use the `www-data` group

### VDI
Oracle VirtualBox image.

[Download](http://vm.microweber.com/microweber_v103.vdi)

### ISO
The raw disk image.

[Download](http://vm.micdroweber.com/microweber_v103.iso)