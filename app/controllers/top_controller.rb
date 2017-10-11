class TopController < ApplicationController

 def index
 end

def new
end

def create
  Top.create(top_params)
end

def top_params
  params.permit(:lon, :lat)
end

end
