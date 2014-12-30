<?php
/**
 * @file old_video.inc
 * Custom pane for the Video Node content type plugin.
 */

$plugin = array(
  'title' => t('Old Video Warning'),
  'description' => t('Displays a warning message when the current video is out of date.'),
  'single' => TRUE,
  'render callback' => 'old_video_content_type_render',
  'required context' => new ctools_context_required(t('Node'), 'node'),
  'category' => t('My Module'),
);

function old_video_content_type_render($subtype, $conf, $args, $context) {
  $settings = array(
    'nid' => $context->data->nid,
    'changed' => $context->data->changed,
  );
  drupal_add_js(array('MyModuleOldVideo' => $settings), array('type' => 'setting'));
  drupal_add_js(drupal_get_path('module', 'mymodule') . '/plugins/content_types/old_video.js');

  $block = new stdClass();
  $block->content = theme('mymodule_old_video', array('node' => $context->data));
  return $block;
}
