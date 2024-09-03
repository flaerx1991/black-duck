<?php
/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
* @package Black_Duck */

 $context = Timber\Timber::get_context();
 $context['posts'] = new Timber\PostQuery();
 $context['options'] = get_fields('option');
 $context['header']['class'] = 'full-black';
 Timber\Timber::render('view-archive.twig', $context);
