SaralindaCom::Application.routes.draw do
  match 'olympics', to: redirect('http://olympics.benizi.com/')
  match ':action(.:format)', controller: 'pages'
  root to: 'pages#wedding'
end
