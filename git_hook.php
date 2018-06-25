<?php

if (isset( $_POST['payload']) ) {
    shell_exec( 'cd '.__DIR__.' && git reset --hard HEAD && git pull' );
}