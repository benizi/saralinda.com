SaralindaCom::Application.routes.draw do
  match ':action(.:format)', controller: 'pages'
  root to: 'pages#wedding'
  redirect 'olympics', to: 'http://olympics.benizi.com/'
end
