class UsersController < ApplicationController

    def create
          if !User.exists?(email: params[:email])
            user = User.create(user_params)
            session[:user] = user.email
            render json: user, status: :ok
          else
            render json: "User already exists", status: :unprocessable_entity
          end
      end

    def show
        if current_user
          render json: current_user, status: :ok
        else
          render json: "No current session stored", status: :unauthorized
        end
      end

private

    def user_params
        params.permit(:id, :username, :email, :first_name, :last_name, :image)
    end
end
