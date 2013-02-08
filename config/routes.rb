SaralindaCom::Application.routes.draw do
  match ':action(.:format)', controller: 'pages'
end
