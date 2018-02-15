LawrencewhitesideCom::Application.configure do
  # Settings specified here will take precedence over those in config/application.rb

  # In the development environment your application's code is reloaded on
  # every request. This slows down response time but is perfect for development
  # since you don't have to restart the web server when you make code changes.
  config.cache_classes = false

  # Log error messages when you accidentally call methods on nil.
  config.whiny_nils = true

  # Show full error reports and disable caching
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  # Don't care if the mailer can't send
#  config.action_mailer.raise_delivery_errors = false

  # Print deprecation notices to the Rails logger
  config.active_support.deprecation = :log

  # Only use best-standards-support built into browsers
  config.action_dispatch.best_standards_support = :builtin

  # Raise exception on mass assignment protection for Active Record models
#  config.active_record.mass_assignment_sanitizer = :strict

  # Log the query plan for queries taking more than this (works
  # with SQLite, MySQL, and PostgreSQL)
#  config.active_record.auto_explain_threshold_in_seconds = 0.5

  # Do not compress assets
  config.assets.compress = false

  # Expands the lines which load the assets
  config.assets.debug = true

  class DisableAssetsLogger
    def initialize(app)
      @app = app
    is_windows = RUBY_PLATFORM =~ /mswin|mingw/
    Rails.application.assets.logger = Logger.new(is_windows ? 'NUL:' : '/dev/null')
    end

    def call(env)
      previous_level = Rails.logger.level
      Rails.logger.level = Logger::ERROR if env['PATH_INFO'].index("/assets/") == 0
      @app.call(env)
    ensure
      Rails.logger.level = previous_level
    end
  end

  Rails.logger = Logger.new(STDOUT)

  Rails.application.config.middleware.insert_before Rails::Rack::Logger, DisableAssetsLogger if Rails.env.development?

end
