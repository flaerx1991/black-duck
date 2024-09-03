<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
* @package Black_Duck */

 $context = Timber\Timber::get_context();
 $context['post'] = new Timber\Post();
 $context['options'] = get_fields('option');
 $context['meta'] = get_field('meta_fields');
 $context['opengraph'] = get_field('open_graph_fields');
 $context['twitter'] = get_field('twitter_fields');
 $context['header']['class'] = 'full-black';
 Timber\Timber::render('view-post.twig', $context);
	 
