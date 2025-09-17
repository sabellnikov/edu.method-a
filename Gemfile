source "https://rubygems.org"

# Основной пакет, который подтянет Jekyll и все нужные версии плагинов
gem "github-pages", group: :jekyll_plugins

# Дополнительные плагины (можно включать по мере необходимости)
group :jekyll_plugins do
  gem "jekyll-feed"       # RSS
  gem "jekyll-sitemap"    # sitemap.xml
end

# Windows-специфичные зависимости
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# WDM ломается на Ruby 3.4, поэтому убираем
# gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# JRuby-специфичный фикс (оставляем для совместимости, не мешает)
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
