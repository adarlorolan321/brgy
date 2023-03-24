<?php

return [
    'article' => [
        'title' => 'Articles',
        'title_singular' => 'Article',
        'fields' => [
            'id' => 'id',

            'title' => 'Title',
            'title_required' => 'Title*',
            'title_placeholder' => 'Enter Title',

            'slug' => 'Slug',
            'slug_required' => 'Slug*',
            'slug_placeholder' => 'Enter Slug',

            'short_description' => 'Description',
            'short_description_required' => 'Description*',
            'short_description_placeholder' => 'Enter Description',

            'content' => 'Content Name',
            'content_required' => 'Content Name*',
            'content_placeholder' => 'Enter Content Name',

            'featured_image' => 'Featured Image',
            'featured_image_required' => 'Featured Image*',
            'featured_image_placeholder' => 'Enter Featured Image',

            'tags' => 'Tags',
            'tags_required' => 'Tags*',
            'tags_placeholder' => 'Select Tags',

            'premium' => 'Premium',
            'premium_required' => 'Premium*',
            'premium_placeholder' => 'Premium',

            'featured' => 'Featured',
            'featured_required' => 'Featured*',
            'featured_placeholder' => 'Featured',

            'new' => 'New',
            'new_required' => 'New*',
            'new_placeholder' => 'New',

            'status' => 'Status',
            'status_required' => 'Status*',
            'status_placeholder' => 'Select Status',

            'search_placeholder' => "Search Article",
            'create_placeholder' => "Add New Article",
            'edit_placeholder' => "Edit Article",

        ],
        'columns' => [
            // 'name' => ucwords('name'),
            // 'title' => ucwords('title'),
            // 'email' => ucwords('email'),
        ],
    ],
    'podcast' => [
        'title' => 'Podcasts',
        'title_singular' => 'Podcast',
        'fields' => [
            'id' => 'id',

            'title' => 'Title',
            'title_required' => 'Title*',
            'title_placeholder' => 'Enter Title',

            'slug' => 'Slug',
            'slug_required' => 'Slug*',
            'slug_placeholder' => 'Enter Slug',

            'short_description' => 'Description',
            'short_description_required' => 'Description*',
            'short_description_placeholder' => 'Enter Description',

            'content' => 'Content Name',
            'content_required' => 'Content Name*',
            'content_placeholder' => 'Enter Content Name',

            'featured_image' => 'Featured Image',
            'featured_image_required' => 'Featured Image*',
            'featured_image_placeholder' => 'Enter Featured Image',

            'media_file' => 'Media File',
            'media_file_required' => 'Media File*',
            'media_file_placeholder' => 'Enter Media File',

            'tags' => 'Tags',
            'tags_required' => 'Tags*',
            'tags_placeholder' => 'Select Tags',

            'premium' => 'Premium',
            'premium_required' => 'Premium*',
            'premium_placeholder' => 'Premium',

            'featured' => 'Featured',
            'featured_required' => 'Featured*',
            'featured_placeholder' => 'Featured',

            'new' => 'New',
            'new_required' => 'New*',
            'new_placeholder' => 'New',

            'status' => 'Status',
            'status_required' => 'Status*',
            'status_placeholder' => 'Select Status',

            'search_placeholder' => "Search Article",
            'create_placeholder' => "Add New Article",
            'edit_placeholder' => "Edit Article",

        ],
        'columns' => [
            // 'name' => ucwords('name'),
            // 'title' => ucwords('title'),
            // 'email' => ucwords('email'),
        ],
    ],
    'author' => [
        'title' => 'Authors',
        'title_singular' => 'Author',
        'fields' => [
            'id' => 'id',

            'first_name' => 'First Name',
            'first_name_required' => 'First Name*',
            'first_name_placeholder' => 'Enter First Name',

            'last_name' => 'Last Name',
            'last_name_required' => 'Last Name*',
            'last_name_placeholder' => 'Enter Last Name',

            'title' => 'Title',
            'title_required' => 'Title*',
            'title_placeholder' => 'Enter Title',

            'company_name' => 'Company Name',
            'company_name_required' => 'Company Name*',
            'company_name_placeholder' => 'Enter Company Name',

            'email' => 'Email',
            'email_required' => 'Email*',
            'email_placeholder' => 'Enter Email',

            'website' => 'Website',
            'website_required' => 'Website*',
            'website_placeholder' => 'URL',

            'linkedin' => 'LinkedIn',
            'linkedin_required' => 'LinkedIn*',
            'linkedin_placeholder' => 'URL',

            'twitter' => 'Twitter',
            'twitter_required' => 'Twitter*',
            'twitter_placeholder' => 'URL',

            'instagram' => 'Instagram',
            'instagram_required' => 'Instagram*',
            'instagram_placeholder' => 'URL',

            'bio' => 'Bio',
            'bio_required' => 'Bio*',
            'bio_placeholder' => 'Enter Bio',

            'search_placeholder' => "Search Author",
            'create_placeholder' => "Add New Author",
            'edit_placeholder' => "Edit Author",

        ],
        'columns' => [
            'name' => ucwords('name'),
            'title' => ucwords('title'),
            'email' => ucwords('email'),
        ],
    ],
    'areas_of_work' => [
        'title' => 'Areas of Work',
        'title_singular' => 'Area of Work',
        'fields' => [
            'id' => 'id',

            'title' => 'Title',
            'title_required' => 'Title*',
            'title_placeholder' => 'Enter Title',

            'overview' => 'Overview',
            'overview_required' => 'Overview*',
            'overview_placeholder' => 'Enter Overview',

            'video_url' => 'Video',
            'video_url_required' => 'Video Url*',
            'video_url_placeholder' => 'Enter Video Url',

            'image' => 'Image',
            'image_required' => 'Image*',
            'image_placeholder' => 'Upload Image',

            'info_sheet' => 'Info Sheet',
            'info_sheet_required' => 'Info Sheet*',
            'info_sheet_placeholder' => 'Upload Info Sheet',

            'active' => 'Active',
            'active_required' => 'Active*',
            'active_placeholder' => 'Select Status',

            'jobs' => 'No. of Jobs Available',
            'jobs_required' => 'No. of Jobs Available*',
            'jobs_placeholder' => 'Enter No. of Jobs Available',

            'satisfaction' => '% of Happy Employees',
            'satisfaction_required' => '% of Happy Employees*',
            'satisfaction_placeholder' => 'Enter % of Happy Employees',

            'average_time' => 'Average Time Employed',
            'average_time_required' => 'Average Time Employed*',
            'average_time_placeholder' => 'Enter Average Time Employed',

            'average_age' => 'Average Age',
            'average_age_required' => 'Average Age*',
            'average_age_placeholder' => 'Enter Average Age',

            'percent_jobs' => '% of All Jobs',
            'percent_jobs_required' => '% of All Jobs*',
            'percent_jobs_placeholder' => 'Enter % of All Jobs',

            'average_salary' => 'Average Salary Before Tax',
            'average_salary_required' => 'Average Salary Before Tax*',
            'average_salary_placeholder' => 'Enter Average Salary Before Tax',

            'annual_growth' => 'Expected Annual Growth',
            'annual_growth_required' => 'Expected Annual Growth*',
            'annual_growth_placeholder' => 'Enter Expected Annual Growth',

            'icon' => 'Icon',
            'icon_required' => 'Icon*',
            'icon_placeholder' => 'Upload Icon',

            'search_placeholder' => "Search Areas of Work",
            'create_placeholder' => "Add New Areas of Work",
            'edit_placeholder' => "Edit Areas of Work",

        ],
        'columns' => [
            'name' => ucwords('name'),
            'title' => ucwords('title'),
            'email' => ucwords('email'),
        ],
    ],
    'job_type' => [
        'title' => 'Job Types',
        'title_singular' => 'Job Type',
        'fields' => [
            'id' => 'id',

            'title' => 'Title',
            'title_required' => 'Title*',
            'title_placeholder' => 'Enter Title',

            'overview' => 'Overview',
            'overview_required' => 'Overview*',
            'overview_placeholder' => 'Enter Overview',

            'video_url' => 'Video',
            'video_url_required' => 'Video Url*',
            'video_url_placeholder' => 'Enter Video Url',

            'image' => 'Image',
            'image_required' => 'Image*',
            'image_placeholder' => 'Upload Image',

            'info_sheet' => 'Info Sheet',
            'info_sheet_required' => 'Info Sheet*',
            'info_sheet_placeholder' => 'Upload Info Sheet',

            'active' => 'Active',
            'active_required' => 'Active*',
            'active_placeholder' => 'Select Status',

            'jobs' => 'No. of Jobs Available',
            'jobs_required' => 'No. of Jobs Available*',
            'jobs_placeholder' => 'Enter No. of Jobs Available',

            'satisfaction' => '% of Happy Employees',
            'satisfaction_required' => '% of Happy Employees*',
            'satisfaction_placeholder' => 'Enter % of Happy Employees',

            'average_time' => 'Average Time Employed',
            'average_time_required' => 'Average Time Employed*',
            'average_time_placeholder' => 'Enter Average Time Employed',

            'average_age' => 'Average Age',
            'average_age_required' => 'Average Age*',
            'average_age_placeholder' => 'Enter Average Age',

            'percent_jobs' => '% of All Jobs',
            'percent_jobs_required' => '% of All Jobs*',
            'percent_jobs_placeholder' => 'Enter % of All Jobs',

            'average_salary' => 'Average Salary Before Tax',
            'average_salary_required' => 'Average Salary Before Tax*',
            'average_salary_placeholder' => 'Enter Average Salary Before Tax',

            'annual_growth' => 'Expected Annual Growth',
            'annual_growth_required' => 'Expected Annual Growth*',
            'annual_growth_placeholder' => 'Enter Expected Annual Growth',

            'areas_of_work_ids' => 'Area of Work',
            'areas_of_work_ids_required' => 'Area of Work*',
            'areas_of_work_ids_placeholder' => 'Select Area of Work',

            'icon' => 'Icon',
            'icon_required' => 'Icon*',
            'icon_placeholder' => 'Upload Icon',

            'search_placeholder' => "Search Job Type",
            'create_placeholder' => "Add New Job Type",
            'edit_placeholder' => "Edit Job Type",

        ],
        'columns' => [
            'title' => ucwords('title'),
        ],
    ],
    'job_role' => [
        'title' => 'Job Types',
        'title_singular' => 'Job Type',
        'fields' => [
            'id' => 'id',

            'title' => 'Title',
            'title_required' => 'Title*',
            'title_placeholder' => 'Enter Title',

            'overview' => 'Overview',
            'overview_required' => 'Overview*',
            'overview_placeholder' => 'Enter Overview',

            'image' => 'Image',
            'image_required' => 'Image*',
            'image_placeholder' => 'Upload Image',

            'active' => 'Active',
            'active_required' => 'Active*',
            'active_placeholder' => 'Select Status',

            'icon' => 'Icon',
            'icon_required' => 'Icon*',
            'icon_placeholder' => 'Upload Icon',

            'job_type_ids' => 'Job Type',
            'job_type_ids_required' => 'Job Type*',
            'job_type_ids_placeholder' => 'Select Job Type',

            'search_placeholder' => "Search Job Role",
            'create_placeholder' => "Add New Job Role",
            'edit_placeholder' => "Edit Job Role",

        ],
        'columns' => [
            'title' => ucwords('title'),
        ],
    ],
];
