# Troubleshooting

## Installation

### Starts and then hangs

This is a situation you can usually debug by inspecting the result of AJAX requests during web installation. However, there are common issues described below which can often fit your case, or you may provide solutions if you're unable to directly debug Microweber.

#### Reason: Permissions

If you're sure you've set the correct database details, start the installation and it just hangs at some point the first thing you should check is file permissions.

Many factors may have interfered with the preservation of the default permissions set in the repository, or they might just not work for your environment.

Checking if this is the case is usually straightforward. In the root of your installation run these commands:

`ls -al` to review the current permissions manually or `chgrp www-data -R ./ ; chmod g=rwx -R ./` after which retry installation.

Note: `www-data` in this example is a common group PHP uses to run Microweber. The group name may vary across environments and different setups, so you might want to check the group for your particular system.

Note: If you're running Windows it's significantly less likely a permission issue, so consider further research.

#### Reason: Storage

This happens way too often, so see if you have enough writeable storage available. Consider it a sanity check.

## Update

### From v1.4 to v1.5

### From v0.x to v1.0