<?php
/**
 * @file
 * Returns the HTML for the Old Video CTools content type plugin.
 */
?>

<div data-ng-controller="MyModuleOldVideoController">
  <h2 data-ng-show="showMessage" data-ng-cloak><?php print t('This video is out of date!'); ?></h2>
</div>