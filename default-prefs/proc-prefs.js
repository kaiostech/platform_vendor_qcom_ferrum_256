<!DOCTYPE html>
<html class="" lang="en">
<head prefix="og: http://ogp.me/ns#">
<meta charset="utf-8">
<meta content="IE=edge" http-equiv="X-UA-Compatible">
<meta content="object" property="og:type">
<meta content="GitLab" property="og:site_name">
<meta content="default-prefs/proc-prefs.js · 256_dev · KaiOS / platform_vendor_qcom_ferrum_256" property="og:title">
<meta content="KaiOS Technologies" property="og:description">
<meta content="https://git.kaiostech.com/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="og:image">
<meta content="https://git.kaiostech.com/KaiOS/platform_vendor_qcom_ferrum_256/blob/256_dev/default-prefs/proc-prefs.js" property="og:url">
<meta content="summary" property="twitter:card">
<meta content="default-prefs/proc-prefs.js · 256_dev · KaiOS / platform_vendor_qcom_ferrum_256" property="twitter:title">
<meta content="KaiOS Technologies" property="twitter:description">
<meta content="https://git.kaiostech.com/assets/gitlab_logo-7ae504fe4f68fdebb3c2034e36621930cd36ea87924c11ff65dbcb8ed50dca58.png" property="twitter:image">

<title>default-prefs/proc-prefs.js · 256_dev · KaiOS / platform_vendor_qcom_ferrum_256 · GitLab</title>
<meta content="KaiOS Technologies" name="description">
<link rel="shortcut icon" type="image/x-icon" href="/assets/favicon-075eba76312e8421991a0c1f89a89ee81678bcde72319dd3e8047e2a47cd3a42.ico" />
<link rel="stylesheet" media="all" href="/assets/application-a9a2dd7830d86db5390bab17909af7d560b2735c9eebcd549c78a20dbf95773e.css" />
<link rel="stylesheet" media="print" href="/assets/print-9c3a1eb4a2f45c9f3d7dd4de03f14c2e6b921e757168b595d7f161bbc320fc05.css" />
<script src="/assets/application-98bb2ecf566fa6fd22b4bc5307e77164e8e95151482096c4170c702f6db86f81.js"></script>
<meta name="csrf-param" content="authenticity_token" />
<meta name="csrf-token" content="8Y57YLTy6FE1R6ABFqiBKAcDPd9BX1h42yxVtCGswo85khYclLTYewwV95NnI/czs9uAVM2jdQbGpEa/Hf4kyw==" />
<meta content="origin-when-cross-origin" name="referrer">
<meta content="width=device-width, initial-scale=1, maximum-scale=1" name="viewport">
<meta content="#474D57" name="theme-color">
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-5a9cee0e8a51212e70b90c87c12f382c428870c0ff67d1eb034d884b78d2dae7.png" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-a6eec6aeb9da138e507593b464fdac213047e49d3093fc30e90d9a995df83ba3.png" sizes="76x76" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-iphone-retina-72e2aadf86513a56e050e7f0f2355deaa19cc17ed97bbe5147847f2748e5a3e3.png" sizes="120x120" />
<link rel="apple-touch-icon" type="image/x-icon" href="/assets/touch-icon-ipad-retina-8ebe416f5313483d9c1bc772b5bbe03ecad52a54eba443e5215a22caed2a16a2.png" sizes="152x152" />
<link color="rgb(226, 67, 41)" href="/assets/logo-d36b5212042cebc89b96df4bf6ac24e43db316143e89926c0db839ff694d2de4.svg" rel="mask-icon">
<meta content="/assets/msapplication-tile-1196ec67452f618d39cdd85e2e3a542f76574c071051ae7effbfde01710eb17d.png" name="msapplication-TileImage">
<meta content="#30353E" name="msapplication-TileColor">




</head>

<body class="ui_charcoal" data-group="" data-page="projects:blob:show" data-project="platform_vendor_qcom_ferrum_256">
<script>
//<![CDATA[
window.gon={};gon.api_version="v3";gon.default_avatar_url="https:\/\/git.kaiostech.com\/assets\/no_avatar-849f9c04a3a0d0cea2424ae97b27447dc64a7dbfae83c036c45b403392f0e8ba.png";gon.max_file_size=100;gon.relative_url_root="";gon.shortcuts_path="\/help\/shortcuts";gon.user_color_scheme="white";gon.award_menu_url="\/emojis";gon.current_user_id=37;
//]]>
</script>
<script>
  window.project_uploads_path = "/KaiOS/platform_vendor_qcom_ferrum_256/uploads";
  window.preview_markdown_path = "/KaiOS/platform_vendor_qcom_ferrum_256/preview_markdown";
</script>

<header class="navbar navbar-fixed-top navbar-gitlab with-horizontal-nav">
<a class="sr-only gl-accessibility" href="#content-body" tabindex="1">Skip to content</a>
<div class="container-fluid">
<div class="header-content">
<button aria-label="Toggle global navigation" class="side-nav-toggle" type="button">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-bars"></i>
</button>
<button class="navbar-toggle" type="button">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-ellipsis-v"></i>
</button>
<div class="navbar-collapse collapse">
<ul class="nav navbar-nav">
<li class="hidden-sm hidden-xs">
<div class="has-location-badge search search-form">
<form class="navbar-form" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><div class="search-input-container">
<div class="location-badge">This project</div>
<div class="search-input-wrap">
<div class="dropdown" data-url="/search/autocomplete">
<input type="search" name="search" id="search" placeholder="Search" class="search-input dropdown-menu-toggle no-outline js-search-dashboard-options" spellcheck="false" tabindex="1" autocomplete="off" data-toggle="dropdown" data-issues-path="https://git.kaiostech.com/dashboard/issues" data-mr-path="https://git.kaiostech.com/dashboard/merge_requests" />
<div class="dropdown-menu dropdown-select">
<div class="dropdown-content"><ul>
<li>
<a class="is-focused dropdown-menu-empty-link">
Loading...
</a>
</li>
</ul>
</div><div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
<i class="search-icon"></i>
<i class="clear-icon js-clear-input"></i>
</div>
</div>
</div>
<input type="hidden" name="group_id" id="group_id" class="js-search-group-options" />
<input type="hidden" name="project_id" id="search_project_id" value="2308" class="js-search-project-options" data-project-path="platform_vendor_qcom_ferrum_256" data-name="platform_vendor_qcom_ferrum_256" data-issues-path="/KaiOS/platform_vendor_qcom_ferrum_256/issues" data-mr-path="/KaiOS/platform_vendor_qcom_ferrum_256/merge_requests" />
<input type="hidden" name="search_code" id="search_code" value="true" />
<input type="hidden" name="repository_ref" id="repository_ref" value="256_dev" />

<div class="search-autocomplete-opts hide" data-autocomplete-path="/search/autocomplete" data-autocomplete-project-id="2308" data-autocomplete-project-ref="256_dev"></div>
</form></div>

</li>
<li class="visible-sm visible-xs">
<a title="Search" aria-label="Search" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/search"><i class="fa fa-search"></i>
</a></li>
<li>
<a title="Todos" aria-label="Todos" data-toggle="tooltip" data-placement="bottom" data-container="body" href="/dashboard/todos"><i class="fa fa-bell fa-fw"></i>
<span class="badge hidden todos-pending-count">
0
</span>
</a></li>
<li class="header-user dropdown">
<a class="header-user-dropdown-toggle" data-toggle="dropdown" href="/vsubrahm"><img width="26" height="26" class="header-user-avatar" src="https://secure.gravatar.com/avatar/749c17bfc78181354e3d2a33109675a9?s=52&amp;d=identicon" alt="749c17bfc78181354e3d2a33109675a9?s=52&amp;d=identicon" />
<i class="fa fa-caret-down"></i>
</a><div class="dropdown-menu-nav dropdown-menu-align-right">
<ul>
<li>
<a class="profile-link" aria-label="Profile" data-user="vsubrahm" href="/vsubrahm">Profile</a>
</li>
<li>
<a aria-label="Profile Settings" href="/profile">Profile Settings</a>
</li>
<li>
<a aria-label="Help" href="/help">Help</a>
</li>
<li class="divider"></li>
<li>
<a class="sign-out-link" aria-label="Sign out" rel="nofollow" data-method="delete" href="/users/sign_out">Sign out</a>
</li>
</ul>
</div>
</li>
</ul>
</div>
<h1 class="title"><a href="/KaiOS">KaiOS</a> / <a class="project-item-select-holder" href="/KaiOS/platform_vendor_qcom_ferrum_256">platform_vendor_qcom_ferrum_256</a><button name="button" type="button" class="dropdown-toggle-caret js-projects-dropdown-toggle" aria-label="Toggle switch project dropdown" data-target=".js-dropdown-menu-projects" data-toggle="dropdown"><i class="fa fa-chevron-down"></i></button></h1>
<div class="header-logo">
<a class="home" title="Dashboard" id="logo" href="/"><img src="/uploads/appearance/header_logo/1/KaiOS_logo_2x.png" alt="Kaios logo 2x" />
</a></div>
<div class="js-dropdown-menu-projects">
<div class="dropdown-menu dropdown-select dropdown-menu-projects">
<div class="dropdown-title"><span>Go to a project</span><button class="dropdown-title-button dropdown-menu-close" aria-label="Close" type="button"><i class="fa fa-times dropdown-menu-close-icon"></i></button></div>
<div class="dropdown-input"><input type="search" id="" class="dropdown-input-field" placeholder="Search your projects" autocomplete="off" /><i class="fa fa-search dropdown-input-search"></i><i role="button" class="fa fa-times dropdown-input-clear js-dropdown-input-clear"></i></div>
<div class="dropdown-content"></div>
<div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
</div>

</div>
</div>
</header>

<script>
  var findFileURL = "/KaiOS/platform_vendor_qcom_ferrum_256/find_file/256_dev";
</script>

<div class="page-with-sidebar">
<div class="sidebar-wrapper nicescroll">
<div class="sidebar-action-buttons">
<div class="nav-header-btn toggle-nav-collapse" title="Open/Close">
<span class="sr-only">Toggle navigation</span>
<i class="fa fa-bars"></i>
</div>
<div class="nav-header-btn pin-nav-btn has-tooltip  js-nav-pin" data-container="body" data-placement="right" title="Pin Navigation">
<span class="sr-only">Toggle navigation pinning</span>
<i class="fa fa-fw fa-thumb-tack"></i>
</div>
</div>
<div class="nav-sidebar">
<div class="sidebar-header">Across GitLab</div>
<ul class="nav">
<li class="active home"><a title="Projects" class="dashboard-shortcuts-projects" href="/dashboard/projects"><span>
Projects
</span>
</a></li><li class=""><a class="dashboard-shortcuts-activity" title="Activity" href="/dashboard/activity"><span>
Activity
</span>
</a></li><li class=""><a title="Groups" href="/dashboard/groups"><span>
Groups
</span>
</a></li><li class=""><a title="Milestones" href="/dashboard/milestones"><span>
Milestones
</span>
</a></li><li class=""><a title="Issues" class="dashboard-shortcuts-issues" href="/dashboard/issues?assignee_id=37"><span>
Issues
<span class="count">0</span>
</span>
</a></li><li class=""><a title="Merge Requests" class="dashboard-shortcuts-merge_requests" href="/dashboard/merge_requests?assignee_id=37"><span>
Merge Requests
<span class="count">0</span>
</span>
</a></li><li class=""><a title="Snippets" href="/dashboard/snippets"><span>
Snippets
</span>
</a></li></ul>
</div>

</div>
<div class="layout-nav">
<div class="container-fluid">
<div class="controls">
<div class="dropdown project-settings-dropdown">
<a class="dropdown-new btn btn-default" data-toggle="dropdown" href="#" id="project-settings-button">
<i class="fa fa-cog"></i>
<i class="fa fa-caret-down"></i>
</a>
<ul class="dropdown-menu dropdown-menu-align-right">
<li class=""><a title="Members" class="team-tab tab" href="/KaiOS/platform_vendor_qcom_ferrum_256/project_members"><span>
Members
</span>
</a></li>
</ul>
</div>
</div>
<div class="nav-control scrolling-tabs-container">
<div class="fade-left">
<i class="fa fa-angle-left"></i>
</div>
<div class="fade-right">
<i class="fa fa-angle-right"></i>
</div>
<ul class="nav-links scrolling-tabs">
<li class="home"><a title="Project" class="shortcuts-project" href="/KaiOS/platform_vendor_qcom_ferrum_256"><span>
Project
</span>
</a></li><li class=""><a title="Activity" class="shortcuts-project-activity" href="/KaiOS/platform_vendor_qcom_ferrum_256/activity"><span>
Activity
</span>
</a></li><li class="active"><a title="Repository" class="shortcuts-tree" href="/KaiOS/platform_vendor_qcom_ferrum_256/tree/256_dev"><span>
Repository
</span>
</a></li><li class=""><a title="Pipelines" class="shortcuts-pipelines" href="/KaiOS/platform_vendor_qcom_ferrum_256/pipelines"><span>
Pipelines
</span>
</a></li><li class=""><a title="Graphs" class="shortcuts-graphs" href="/KaiOS/platform_vendor_qcom_ferrum_256/graphs/256_dev"><span>
Graphs
</span>
</a></li><li class=""><a title="Issues" class="shortcuts-issues" href="/KaiOS/platform_vendor_qcom_ferrum_256/issues"><span>
Issues
<span class="badge count issue_counter">0</span>
</span>
</a></li><li class=""><a title="Merge Requests" class="shortcuts-merge_requests" href="/KaiOS/platform_vendor_qcom_ferrum_256/merge_requests"><span>
Merge Requests
<span class="badge count merge_counter">2</span>
</span>
</a></li><li class=""><a title="Wiki" class="shortcuts-wiki" href="/KaiOS/platform_vendor_qcom_ferrum_256/wikis/home"><span>
Wiki
</span>
</a></li><li class="hidden">
<a title="Network" class="shortcuts-network" href="/KaiOS/platform_vendor_qcom_ferrum_256/network/256_dev">Network
</a></li>
<li class="hidden">
<a class="shortcuts-new-issue" href="/KaiOS/platform_vendor_qcom_ferrum_256/issues/new">Create a new issue
</a></li>
<li class="hidden">
<a title="Builds" class="shortcuts-builds" href="/KaiOS/platform_vendor_qcom_ferrum_256/builds">Builds
</a></li>
<li class="hidden">
<a title="Commits" class="shortcuts-commits" href="/KaiOS/platform_vendor_qcom_ferrum_256/commits/256_dev">Commits
</a></li>
<li class="hidden">
<a title="Issue Boards" class="shortcuts-issue-boards" href="/KaiOS/platform_vendor_qcom_ferrum_256/boards">Issue Boards</a>
</li>
</ul>
</div>

</div>
</div>
<div class="content-wrapper page-with-layout-nav">
<div class="scrolling-tabs-container sub-nav-scroll">
<div class="fade-left">
<i class="fa fa-angle-left"></i>
</div>
<div class="fade-right">
<i class="fa fa-angle-right"></i>
</div>

<div class="nav-links sub-nav scrolling-tabs">
<ul class="container-fluid container-limited">
<li class="active"><a href="/KaiOS/platform_vendor_qcom_ferrum_256/tree/256_dev">Files
</a></li><li class=""><a href="/KaiOS/platform_vendor_qcom_ferrum_256/commits/256_dev">Commits
</a></li><li class=""><a href="/KaiOS/platform_vendor_qcom_ferrum_256/network/256_dev">Network
</a></li><li class=""><a href="/KaiOS/platform_vendor_qcom_ferrum_256/compare?from=quoin-LF.BR.1.2.8.db&amp;to=256_dev">Compare
</a></li><li class=""><a href="/KaiOS/platform_vendor_qcom_ferrum_256/branches">Branches
</a></li><li class=""><a href="/KaiOS/platform_vendor_qcom_ferrum_256/tags">Tags
</a></li></ul>
</div>
</div>



<div class="flash-container flash-container-page">
</div>


<div class=" ">
<div class="content" id="content-body">

<div class="container-fluid container-limited">

<div class="tree-holder" id="tree-holder">
<div class="nav-block">
<div class="tree-ref-holder">
<form class="project-refs-form" action="/KaiOS/platform_vendor_qcom_ferrum_256/refs/switch" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="destination" id="destination" value="blob" />
<input type="hidden" name="path" id="path" value="default-prefs/proc-prefs.js" />
<div class="dropdown">
<button class="dropdown-menu-toggle js-project-refs-dropdown" type="button" data-toggle="dropdown" data-selected="256_dev" data-ref="256_dev" data-refs-url="/KaiOS/platform_vendor_qcom_ferrum_256/refs" data-field-name="ref" data-submit-form-on-click="true"><span class="dropdown-toggle-text ">256_dev</span><i class="fa fa-caret-down"></i></button>
<div class="dropdown-menu dropdown-menu-selectable">
<div class="dropdown-title"><span>Switch branch/tag</span><button class="dropdown-title-button dropdown-menu-close" aria-label="Close" type="button"><i class="fa fa-times dropdown-menu-close-icon"></i></button></div>
<div class="dropdown-input"><input type="search" id="" class="dropdown-input-field" placeholder="Search branches and tags" autocomplete="off" /><i class="fa fa-search dropdown-input-search"></i><i role="button" class="fa fa-times dropdown-input-clear js-dropdown-input-clear"></i></div>
<div class="dropdown-content"></div>
<div class="dropdown-loading"><i class="fa fa-spinner fa-spin"></i></div>
</div>
</div>
</form>
</div>
<ul class="breadcrumb repo-breadcrumb">
<li>
<a href="/KaiOS/platform_vendor_qcom_ferrum_256/tree/256_dev">platform_vendor_qcom_ferrum_256
</a></li>
<li>
<a href="/KaiOS/platform_vendor_qcom_ferrum_256/tree/256_dev/default-prefs">default-prefs</a>
</li>
<li>
<a href="/KaiOS/platform_vendor_qcom_ferrum_256/blob/256_dev/default-prefs/proc-prefs.js"><strong>
proc-prefs.js
</strong>
</a></li>
</ul>
</div>
<ul class="blob-commit-info hidden-xs">
<li class="commit js-toggle-container" id="commit-81a7f3b0">
<a href="/danny"><img class="avatar has-tooltip s36 hidden-xs" alt="Danny Liang&#39;s avatar" title="Danny Liang" data-container="body" src="https://secure.gravatar.com/avatar/01b7038ce3efcc2648a2a8da9b5b712d?s=72&amp;d=identicon" /></a>
<div class="commit-info-block">
<div class="commit-row-title">
<span class="item-title">
<a class="commit-row-message" href="/KaiOS/platform_vendor_qcom_ferrum_256/commit/81a7f3b03a637f49af91ab49a565d4ee1a9e37cb">Bug 25073 - Remove 256MB related preferences from proc-prefs.js. r=seinlin</a>
<span class="commit-row-message visible-xs-inline">
&middot;
81a7f3b0
</span>
</span>
<div class="commit-actions hidden-xs">
<button class="btn btn-clipboard btn-transparent" data-toggle="tooltip" data-placement="bottom" data-container="body" data-clipboard-text="81a7f3b03a637f49af91ab49a565d4ee1a9e37cb" type="button" title="Copy to Clipboard"><i class="fa fa-clipboard"></i></button>
<a class="commit-short-id btn btn-transparent" href="/KaiOS/platform_vendor_qcom_ferrum_256/commit/81a7f3b03a637f49af91ab49a565d4ee1a9e37cb">81a7f3b0</a>
<a class="btn btn-default" href="/KaiOS/platform_vendor_qcom_ferrum_256/tree/81a7f3b03a637f49af91ab49a565d4ee1a9e37cb">Browse Files</a>
</div>
</div>
<a class="commit-author-link has-tooltip" title="danny.liang@kaiostech.com" href="/danny">Danny Liang</a>
authored
<time class="js-timeago" title="Oct 24, 2017 10:32am" datetime="2017-10-24T10:32:05Z" data-toggle="tooltip" data-placement="top" data-container="body">2017-10-24 18:32:05 +0800</time>
</div>
</li>

</ul>
<div class="blob-content-holder" id="blob-content-holder">
<article class="file-holder">
<div class="file-title">
<i class="fa fa-file-text-o fa-fw"></i>
<strong>
proc-prefs.js
</strong>
<small>
1.89 KB
</small>
<div class="file-actions hidden-xs">
<div class="btn-group tree-btn-group">
<a class="btn btn-sm" target="_blank" href="/KaiOS/platform_vendor_qcom_ferrum_256/raw/256_dev/default-prefs/proc-prefs.js">Raw</a>
<a class="btn btn-sm" href="/KaiOS/platform_vendor_qcom_ferrum_256/blame/256_dev/default-prefs/proc-prefs.js">Blame</a>
<a class="btn btn-sm" href="/KaiOS/platform_vendor_qcom_ferrum_256/commits/256_dev/default-prefs/proc-prefs.js">History</a>
<a class="btn btn-sm" href="/KaiOS/platform_vendor_qcom_ferrum_256/blob/87bcaaaf3f7f8f6f26dd0660380cf6ba6ec105c3/default-prefs/proc-prefs.js">Permalink</a>
</div>
<div class="btn-group" role="group">
<a class="btn btn-file-option" rel="nofollow" data-method="post" href="/KaiOS/platform_vendor_qcom_ferrum_256/forks?continue%5Bnotice%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+has+been+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bnotice_now%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+is+being+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bto%5D=%2FKaiOS%2Fplatform_vendor_qcom_ferrum_256%2Fedit%2F256_dev%2Fdefault-prefs%2Fproc-prefs.js&amp;namespace_key=47">Edit</a>
<a class="btn btn-default" rel="nofollow" data-method="post" href="/KaiOS/platform_vendor_qcom_ferrum_256/forks?continue%5Bnotice%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+has+been+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.+Try+to+replace+this+file+again.&amp;continue%5Bnotice_now%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+is+being+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bto%5D=%2FKaiOS%2Fplatform_vendor_qcom_ferrum_256%2Fblob%2F256_dev%2Fdefault-prefs%2Fproc-prefs.js&amp;namespace_key=47">Replace</a>
<a class="btn btn-remove" rel="nofollow" data-method="post" href="/KaiOS/platform_vendor_qcom_ferrum_256/forks?continue%5Bnotice%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+has+been+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.+Try+to+delete+this+file+again.&amp;continue%5Bnotice_now%5D=You%27re+not+allowed+to+make+changes+to+this+project+directly.+A+fork+of+this+project+is+being+created+that+you+can+make+changes+in%2C+so+you+can+submit+a+merge+request.&amp;continue%5Bto%5D=%2FKaiOS%2Fplatform_vendor_qcom_ferrum_256%2Fblob%2F256_dev%2Fdefault-prefs%2Fproc-prefs.js&amp;namespace_key=47">Delete</a>
</div>

</div>
</div>
<div class="file-content code js-syntax-highlight">
<div class="line-numbers">
<a class="diff-line-num" data-line-number="1" href="#L1" id="L1">
<i class="fa fa-link"></i>
1
</a>
<a class="diff-line-num" data-line-number="2" href="#L2" id="L2">
<i class="fa fa-link"></i>
2
</a>
<a class="diff-line-num" data-line-number="3" href="#L3" id="L3">
<i class="fa fa-link"></i>
3
</a>
<a class="diff-line-num" data-line-number="4" href="#L4" id="L4">
<i class="fa fa-link"></i>
4
</a>
<a class="diff-line-num" data-line-number="5" href="#L5" id="L5">
<i class="fa fa-link"></i>
5
</a>
<a class="diff-line-num" data-line-number="6" href="#L6" id="L6">
<i class="fa fa-link"></i>
6
</a>
<a class="diff-line-num" data-line-number="7" href="#L7" id="L7">
<i class="fa fa-link"></i>
7
</a>
<a class="diff-line-num" data-line-number="8" href="#L8" id="L8">
<i class="fa fa-link"></i>
8
</a>
<a class="diff-line-num" data-line-number="9" href="#L9" id="L9">
<i class="fa fa-link"></i>
9
</a>
<a class="diff-line-num" data-line-number="10" href="#L10" id="L10">
<i class="fa fa-link"></i>
10
</a>
<a class="diff-line-num" data-line-number="11" href="#L11" id="L11">
<i class="fa fa-link"></i>
11
</a>
<a class="diff-line-num" data-line-number="12" href="#L12" id="L12">
<i class="fa fa-link"></i>
12
</a>
<a class="diff-line-num" data-line-number="13" href="#L13" id="L13">
<i class="fa fa-link"></i>
13
</a>
<a class="diff-line-num" data-line-number="14" href="#L14" id="L14">
<i class="fa fa-link"></i>
14
</a>
<a class="diff-line-num" data-line-number="15" href="#L15" id="L15">
<i class="fa fa-link"></i>
15
</a>
<a class="diff-line-num" data-line-number="16" href="#L16" id="L16">
<i class="fa fa-link"></i>
16
</a>
<a class="diff-line-num" data-line-number="17" href="#L17" id="L17">
<i class="fa fa-link"></i>
17
</a>
<a class="diff-line-num" data-line-number="18" href="#L18" id="L18">
<i class="fa fa-link"></i>
18
</a>
<a class="diff-line-num" data-line-number="19" href="#L19" id="L19">
<i class="fa fa-link"></i>
19
</a>
<a class="diff-line-num" data-line-number="20" href="#L20" id="L20">
<i class="fa fa-link"></i>
20
</a>
<a class="diff-line-num" data-line-number="21" href="#L21" id="L21">
<i class="fa fa-link"></i>
21
</a>
<a class="diff-line-num" data-line-number="22" href="#L22" id="L22">
<i class="fa fa-link"></i>
22
</a>
<a class="diff-line-num" data-line-number="23" href="#L23" id="L23">
<i class="fa fa-link"></i>
23
</a>
<a class="diff-line-num" data-line-number="24" href="#L24" id="L24">
<i class="fa fa-link"></i>
24
</a>
<a class="diff-line-num" data-line-number="25" href="#L25" id="L25">
<i class="fa fa-link"></i>
25
</a>
<a class="diff-line-num" data-line-number="26" href="#L26" id="L26">
<i class="fa fa-link"></i>
26
</a>
<a class="diff-line-num" data-line-number="27" href="#L27" id="L27">
<i class="fa fa-link"></i>
27
</a>
<a class="diff-line-num" data-line-number="28" href="#L28" id="L28">
<i class="fa fa-link"></i>
28
</a>
<a class="diff-line-num" data-line-number="29" href="#L29" id="L29">
<i class="fa fa-link"></i>
29
</a>
<a class="diff-line-num" data-line-number="30" href="#L30" id="L30">
<i class="fa fa-link"></i>
30
</a>
<a class="diff-line-num" data-line-number="31" href="#L31" id="L31">
<i class="fa fa-link"></i>
31
</a>
<a class="diff-line-num" data-line-number="32" href="#L32" id="L32">
<i class="fa fa-link"></i>
32
</a>
<a class="diff-line-num" data-line-number="33" href="#L33" id="L33">
<i class="fa fa-link"></i>
33
</a>
<a class="diff-line-num" data-line-number="34" href="#L34" id="L34">
<i class="fa fa-link"></i>
34
</a>
<a class="diff-line-num" data-line-number="35" href="#L35" id="L35">
<i class="fa fa-link"></i>
35
</a>
<a class="diff-line-num" data-line-number="36" href="#L36" id="L36">
<i class="fa fa-link"></i>
36
</a>
<a class="diff-line-num" data-line-number="37" href="#L37" id="L37">
<i class="fa fa-link"></i>
37
</a>
<a class="diff-line-num" data-line-number="38" href="#L38" id="L38">
<i class="fa fa-link"></i>
38
</a>
<a class="diff-line-num" data-line-number="39" href="#L39" id="L39">
<i class="fa fa-link"></i>
39
</a>
<a class="diff-line-num" data-line-number="40" href="#L40" id="L40">
<i class="fa fa-link"></i>
40
</a>
<a class="diff-line-num" data-line-number="41" href="#L41" id="L41">
<i class="fa fa-link"></i>
41
</a>
<a class="diff-line-num" data-line-number="42" href="#L42" id="L42">
<i class="fa fa-link"></i>
42
</a>
<a class="diff-line-num" data-line-number="43" href="#L43" id="L43">
<i class="fa fa-link"></i>
43
</a>
<a class="diff-line-num" data-line-number="44" href="#L44" id="L44">
<i class="fa fa-link"></i>
44
</a>
<a class="diff-line-num" data-line-number="45" href="#L45" id="L45">
<i class="fa fa-link"></i>
45
</a>
<a class="diff-line-num" data-line-number="46" href="#L46" id="L46">
<i class="fa fa-link"></i>
46
</a>
</div>
<div class="blob-content" data-blob-id="86cca03d8538fbf994a045ed115951740a9b986b">
<pre class="code highlight"><code><span id="LC1" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"layers.composer2d.enabled"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC2" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"layers.compositor-lru-size"</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></span>
<span id="LC3" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"dom.ipc.reuse_parent_app"</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></span>
<span id="LC4" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"ui.touch.radius.enabled"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC5" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"ui.mouse.radius.enabled"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC6" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"dom.tv.enabled"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC7" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"dom.vr.cardboard.enabled"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC8" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"dom.gamepad.enabled"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC9" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"browser.chrome.image_icons.max_size"</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></span>
<span id="LC10" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"toolkit.scrollbox.smoothScroll"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC11" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"nglayout.enable_drag_images"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC12" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"middlemouse.openNewWindow"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC13" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"gestures.enable_single_finger_input"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC14" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"ui.mouse.radius.inputSource.touchOnly"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC15" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"dom.w3c_touch_events.enabled"</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></span>
<span id="LC16" class="line"></span>
<span id="LC17" class="line"><span class="c1">// disable debug of mozSettings</span></span>
<span id="LC18" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"dom.mozSettings.SettingsDB.debug.enabled"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC19" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"dom.mozSettings.SettingsManager.debug.enabled"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC20" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"dom.mozSettings.SettingsRequestManager.debug.enabled"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC21" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"dom.mozSettings.SettingsService.debug.enabled"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC22" class="line"></span>
<span id="LC23" class="line"><span class="c1">// Disable mozPay</span></span>
<span id="LC24" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"dom.mozPay.enabled"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC25" class="line"></span>
<span id="LC26" class="line"><span class="c1">// Disable b2g orientation</span></span>
<span id="LC27" class="line"><span class="nx">pref</span><span class="p">(</span><span class="s2">"b2g.orientation.animate"</span><span class="p">,</span> <span class="kc">false</span><span class="p">);</span></span>
<span id="LC28" class="line"></span>
<span id="LC29" class="line"><span class="cm">/* The following preferences have been adjusted for 256MB device, the default</span></span>
<span id="LC30" class="line"><span class="cm"> * values are in b2g/app/b2g.js, you can configure them by modify following</span></span>
<span id="LC31" class="line"><span class="cm"> * preferences and it will overwrite the default values in b2g.js */</span></span>
<span id="LC32" class="line"></span>
<span id="LC33" class="line"><span class="c1">// pref("browser.cache.memory.capacity", 512); //kilobytes</span></span>
<span id="LC34" class="line"><span class="c1">// pref("image.cache.size", 524288); //bytes</span></span>
<span id="LC35" class="line"><span class="c1">// pref("media.cache_size", 2048);  //2MB media cache</span></span>
<span id="LC36" class="line"></span>
<span id="LC37" class="line"><span class="c1">// set maximum video buffer size to 20MB(20*1024*1024)</span></span>
<span id="LC38" class="line"><span class="c1">// pref("media.mediasource.eviction_threshold.video", 20971520); //byte</span></span>
<span id="LC39" class="line"><span class="c1">// set maximum Audio buffer size to 10MB(10*1024*1024)</span></span>
<span id="LC40" class="line"><span class="c1">// pref("media.mediasource.eviction_threshold.audio", 10485760); //byte</span></span>
<span id="LC41" class="line"></span>
<span id="LC42" class="line"><span class="c1">// pref("image.mem.surfacecache.max_size_kb", 8192);  // 8MB</span></span>
<span id="LC43" class="line"><span class="c1">// pref("image.mem.surfacecache.size_factor", 32);  // 1/32 of main memory</span></span>
<span id="LC44" class="line"></span>
<span id="LC45" class="line"><span class="c1">// pref("gonk.notifyHardLowMemUnderKB", 7168); //kilobytes</span></span>
<span id="LC46" class="line"><span class="c1">// pref("gonk.notifySoftLowMemUnderKB", 14336); //kilobytes</span></span></code></pre>
</div>
</div>


</article>
</div>

</div>
</div>

</div>
</div>
</div>
</div>



</body>
</html>

