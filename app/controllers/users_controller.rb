class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :show]
    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: user.errors.full_message, status: :unprocessable_entity
        end
    end

        def show
            user = User.find_by(id: session[:user_id])
            if user
                render json: user, status: :ok
            else
                render json: {errors: ["No Current Session Stored"]}, status: :unauthorized
            end
        end

        def destroy 
            user = User.find_by(id: session[:user_id])
            if user 
                user.destroy
                head :no_content 
            else  
                render json: {errors: ["User does not exist"]}, status: :not_found 
            end
        end

        private 

        def user_params
            params.permit(:username, :email, :password, :password_confirmation, :first_name, :last_name, :company_code)
        end
end
