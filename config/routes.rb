Rails.application.routes.draw do
 root to: "top#index"
 get   'new'  =>  'top#new'
 post  'top'      =>  'top#create'
end
