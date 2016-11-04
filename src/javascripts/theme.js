$(function()
{
    /* global PurpleMine */
    "use strict";
    new PurpleMine.SidebarToggler();
    new PurpleMine.HistoryTabs();
    new PurpleMine.MenuCollapse();
    new PurpleMine.IUMine();


	$('body.controller-projects #content .splitcontentleft ul').first().addClass('sub-projects');

	$('.sub-projects li').html( $('.sub-projects li').html().replace('a>, ','a>') );
});



