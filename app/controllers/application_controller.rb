class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticate_user

    def find_user
        @user = User.find_by(id: params[:id])
    end

    def authenticate_user
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end
end
