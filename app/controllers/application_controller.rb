class ApplicationController < ActionController::API
 before_action :authenticate_user
 before_filter :set_access

 def authenticate_user
   render json: {error: "unauthorized user!!!"} unless signed_in?
 end

 def signed_in?
   !!current_user
 end

 def current_user
   User.find(Auth.decode(request.env["HTTP_AUTHORIZATION"])["user_id"]) if request.env["HTTP_AUTHORIZATION"].present?
 end

  def set_access
    @response.headers["Access-Control-Allow-Origin"] = "*"
  end

end
