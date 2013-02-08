SaralindaCom::Application.routes.draw do
  match ':action(.:format)', controller: 'pages'
  root to: 'pages#wedding'
end
