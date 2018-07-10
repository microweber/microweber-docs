<?php
//exec( 'cd '.__DIR__.' && git clean -f && git reset --hard HEAD && git pull' );
//if (isset( $_POST['payload']) ) {
  // exec( 'cd '.__DIR__.' && git clean -f && git reset --hard HEAD && git fetch && git pull' );
     passthru('git pull' );
//}