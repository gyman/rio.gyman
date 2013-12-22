set :application, "timesheet"
set :domain,      "uirapu.ru"
set :deploy_to,   "/var/www/bjj"
set :app_path,    "app"

set :repository,  "https://github.com/uirapuru/bjjTimesheet.git"
set :scm,         :git
set :branch,      "master"

set :model_manager, "doctrine"

role :web,        domain                         # Your HTTP server, Apache/etc
role :app,        domain, :primary => true       # This may be the same as your `Web` server

set  :use_sudo,      false
set  :keep_releases,  3

set :shared_files,      ["app/config/parameters.yml"]
set :shared_children,     [app_path + "/logs", web_path + "/uploads"]
set :use_composer, true
set :update_vendors, true

set :writable_dirs,       ["app/cache", "app/logs"]
set :user,                "uirapuru"
set :webserver_user,      "www-data"
set :permission_method,   :acl
set :use_set_permissions, true
set :symfony_env_prod,    "dev"


# Be more verbose by uncommenting the following line
# logger.level = Logger::MAX_LEVEL
